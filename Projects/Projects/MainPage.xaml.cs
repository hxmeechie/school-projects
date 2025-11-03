using System.Collections.ObjectModel;

namespace Projects
{
    public partial class MainPage : ContentPage
    {
        public ObservableCollection<Project> Projects { get; set; }

        public MainPage()
        {
            InitializeComponent();

            Projects = new ObservableCollection<Project>
        {
            new Project { Title = "Aplikacja Mobilna", Technology = "MAUI", Status = "W trakcie" },
            new Project { Title = "Strona WWW", Technology = "Blazor", Status = "Zakończony" },
            new Project { Title = "API", Technology = "ASP.NET Core", Status = "W trakcie" }
        };

            BindingContext = this;
        }

        private async void OnSelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            var selectedProject = e.CurrentSelection.First() as Project;

            if (selectedProject == null) return;

            await DisplayAlert("Wybrano Projekt",
                $"Tytuł: {selectedProject.Title}\n\n" +
                $"Technologia: {selectedProject.Technology}\n\n" +
                $"Status: {selectedProject.Status}",
                "OK");

        }

    }
}
