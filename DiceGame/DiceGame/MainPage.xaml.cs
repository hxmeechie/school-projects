using System.Collections.ObjectModel;

namespace DiceGame
{
    public partial class MainPage : ContentPage
    {
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
            int diceCount = 5;

            List<int> currentRollResults = [];

            for (int i = 0; i < diceCount; i++)
            {
                int diceResult = Rand.Next(1, 7);

                RollResults.Add(diceResult);

                currentRollResults.Add(diceResult);
            }

            int currentRollPoints = CalculatePoints(currentRollResults);

            int totalPoints = CalculatePoints(RollResults);

            DiceContainer.Children.Clear();

            foreach (var result in currentRollResults)
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

            RollResult.Text = $"Wynik tego losowania: {string.Join(", ", currentRollResults)}, co daje wynik: {currentRollPoints} punktów.";

            GameScore.Text = $"Wynik gry: {totalPoints} punktów.";

        }

        private static int CalculatePoints(List<int> rollResults)
        {
            int totalPoints = 0;

            var groups = rollResults.GroupBy((x) => x);

            foreach(var group in groups)
            {
                int groupCount = group.Count();

                if (groupCount >= 2)
                {
                    totalPoints += group.Key * groupCount;
                }
            }

            return totalPoints;
        }

        private void ResetGame(object sender, EventArgs e)
        {
            RollResult.Text = "Wynik tego losowania: ";
            GameScore.Text = "Wynik gry: 0";

            int totalGamePoints = CalculatePoints(RollResults);

            GameResult gameResult = new() { Score = totalGamePoints };

            GameHistory.Add(gameResult);

            RollResults.Clear();

            DiceContainer.Children.Clear();
        }
    }
}

public class GameResult
{
    public int Score { get; set; }
}