using SchoolRegister.Resources.Models;
using System.Collections.ObjectModel;

namespace SchoolRegister
{
    public partial class MainPage : ContentPage
    {
        public ObservableCollection<Grade> GradesList { get; set; } = new();

        public MainPage()
        {
            InitializeComponent();
            BindingContext = this;
        }

        private void OnAddGradeClicked(object sender, EventArgs e)
        {
            ErrorLabel.IsVisible = false;
            ErrorLabel.Text = string.Empty;

            if (SubjectPicker.SelectedItem == null)
            {
                ErrorLabel.Text = "Proszę wybrać przedmiot.";
                ErrorLabel.IsVisible = true;
                return;
            }

            if (!int.TryParse(GradeEntry.Text, out int gradeValue) || gradeValue < 1 || gradeValue > 6)
            {
                ErrorLabel.Text = "Ocena musi być liczbą od 1 do 6.";
                ErrorLabel.IsVisible = true;
                return;
            }

            Grade newGrade = new Grade
            {
                Subject = SubjectPicker.SelectedItem.ToString()!,
                Value = gradeValue,
                IsExam = IsExamSwitch.IsToggled
            };

            GradesList.Add(newGrade);

            GradeEntry.Text = string.Empty;
            IsExamSwitch.IsToggled = false;
            SubjectPicker.SelectedItem = null;
        }
    }
} 