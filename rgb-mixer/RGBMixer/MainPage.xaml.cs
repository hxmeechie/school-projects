using Microsoft.Maui.Graphics;

namespace RGBMixer
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }

        private void OnSliderValueChanged(object sender, ValueChangedEventArgs e)
        {
            int red = (int)RedSlider.Value;
            int green = (int)GreenSlider.Value;
            int blue = (int)BlueSlider.Value;

            ColorSquare.BackgroundColor = Color.FromRgb(red, green, blue);
        }

        private void OnResetClicked(object sender, EventArgs e)
        {
            RedSlider.Value = 0;
            GreenSlider.Value = 0;
            BlueSlider.Value = 0;

            ColorSquare.BackgroundColor = Color.FromRgb(0, 0, 0);
        }

        private async void OnEasterEggClicked(object sender, EventArgs e)
        {

            // Otwórz przeglądarkę z określonym linkiem
            string url = "https://www.youtube.com/DJDAROO";
            await Launcher.OpenAsync(url);
        }
    }
}