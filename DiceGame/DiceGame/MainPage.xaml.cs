using System.Collections.ObjectModel;

namespace DiceGame
{
    public partial class MainPage : ContentPage
    {
        private const int DiceCount = 5;
        private readonly Random Rand = new();
        private readonly List<int> RollResults = [];
        public ObservableCollection<GameResult> GameHistory { get; set; }

        private readonly Dictionary<int, string> DiceImages = new()
        {
            { 1, "dice_1.png" },
            { 2, "dice_2.png" },
            { 3, "dice_3.png" },
            { 4, "dice_4.png" },
            { 5, "dice_5.png" },
            { 6, "dice_6.png" }
        };

        public MainPage()
        {
            InitializeComponent();
            GameHistory = [];
            BindingContext = this;
        }

        private void RollDice(object sender, EventArgs e)
        {
            var currentRollResults = RollDiceAndUpdateResults();

            var currentRollPoints = CalculatePoints(currentRollResults);
            var totalPoints = CalculatePoints(RollResults);

            UpdateDiceDisplay(currentRollResults);
            UpdateUI(currentRollResults, currentRollPoints, totalPoints);
        }

        private List<int> RollDiceAndUpdateResults()
        {
            var currentRollResults = new List<int>();

            for (int i = 0; i < DiceCount; i++)
            {
                int diceResult = Rand.Next(1, 7);

                RollResults.Add(diceResult);

                currentRollResults.Add(diceResult);
            }

            return currentRollResults;
        }

        private void UpdateDiceDisplay(List<int> rollResults)
        {
            DiceContainer.Children.Clear();

            foreach (int result in rollResults)
            {

                string imagePath = DiceImages[result];

                var diceImage = new Image
                {
                    Source = ImageSource.FromFile(imagePath),
                    WidthRequest = 50,
                    HeightRequest = 50
                };

                DiceContainer.Children.Add(diceImage);
            }
        }

        private void UpdateUI(List<int> currentRollResults, int currentRollPoints, int totalPoints)
        {
            RolledDices.Text = $"Wylosowane kości: {string.Join(", ", currentRollResults)}";
            CurrentRollResult.Text = $"Wynik tego losowania: {currentRollPoints} punktów";
            GameScore.Text = $"Całkowity wynik gry: {totalPoints} punktów";
        }

        private static int CalculatePoints(IEnumerable<int> rollResults)
        {
            return rollResults
                .GroupBy((x) => x)
                .Where((group) => group.Count() >= 2)
                .Sum((group) => group.Key * group.Count());
        }

        private void ResetGame(object sender, EventArgs e)
        {
            AddGameResultToHistory();
            ClearGameState();
            ResetUI();
        }

        private void AddGameResultToHistory()
        {
            int totalGamePoints = CalculatePoints(RollResults);

            var gameResult = new GameResult { Score = totalGamePoints, DiceRollAmount = RollResults.Count };

            GameHistory.Add(gameResult);
        }

        private void ClearGameState()
        {
            RollResults.Clear();
            DiceContainer.Children.Clear();
        }

        private void ResetUI()
        {
            RolledDices.Text = "Wylosowane kości:";
            CurrentRollResult.Text = "Wynik tego losowania: ";
            GameScore.Text = "Wynik gry: 0";
        }
    }

    public class GameResult
    {
        public int Score { get; set; }

        public int DiceRollAmount { get; set; }
    }
}