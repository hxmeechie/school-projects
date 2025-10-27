namespace SignUpApp
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }


        void OnConfirmClicked(object sender, EventArgs e)
        {
            var email = EmailEntry.Text;
            var password = PasswordEntry.Text;
            var confirm = ConfirmPasswordEntry.Text;


            if (email == null || !email.Contains("@"))
            {
                MessageLabel.Text = "Nieprawidłowy adres e-mail";
                return;
            }


            if (password != confirm)
            {
                MessageLabel.Text = "Hasła się różnią";
                return;
            }


            MessageLabel.Text = $"Witaj {email}";
        }
    }
}