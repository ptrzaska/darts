using System;

namespace DartsApp.API.Models
{
  public class DayResult
  {
    public int Id { get; set; }

    public int PlayerId { get; set; }

    public DateTime Date { get; set; }

    public bool DoubleOut { get; set; }

    public bool DidNotFinished { get; set; }

    public int BestScore { get; set; }

    public int FinishRound { get; set; }

    public int FinishThrow { get; set; }

    public int TotalThrows { get; set; }
  }
}
