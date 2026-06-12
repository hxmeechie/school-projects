
namespace SchoolRegister.Resources.Models
{
    public class Grade
    {
        public required string Subject { get; set; }
        public int Value { get; set; }
        public bool IsExam { get; set; }

        public FontAttributes FontWeight => IsExam ? FontAttributes.Bold : FontAttributes.None;
    }
}
