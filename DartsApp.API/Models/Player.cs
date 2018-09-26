using System;
using System.Collections.Generic;

namespace DartsApp.API.Models
{
  public class Player
  {
    public int Id { get; set; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public DateTime EnrollmentDate { get; set; }

    public List<DayResult> Results { get; set; }
    }
}
