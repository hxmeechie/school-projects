namespace Notepad
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }
        private void OnEditorTextChanged(object sender, TextChangedEventArgs e)
        {
            string currentText = e.NewTextValue ?? string.Empty;

            int characterCount = currentText.Length;
            CharCountLabel.Text = characterCount.ToString();

            string[] words = currentText.Split([' ', '\n'], StringSplitOptions.RemoveEmptyEntries);
            int wordCount = words.Length;
            WordCountLabel.Text = wordCount.ToString();
        }
    }
}