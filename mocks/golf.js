const players = [
  {
    id: 1,
    name: "Collin Morikawa",
    points: 2171,
    events: 20,
    wins: 2,
    rank: 1
  },
  {
    id: 2,
    name: "Jordan Spieth",
    points: 2139,
    events: 22,
    wins: 1,
    rank: 2
  }
]

const tournaments = [
  {
    name: "The Northen Trust",
    purse: 9500000,
    location: "Jersey City, New Jersey",
    course: "Liberty National Golf Course",
    date: "Aug 19 - Aug 22, 2021"
  },
  {
    name: "BMW Championship",
    purse: 9500000,
    location: "Owings Mills, Maryland",
    course: "Caves Valley Golf Club",
    date: "Aug 26 - Aug 29, 2021"
  }
]

const courses = [
  {
    name: "Liberty National Golf Course",
    location: "Jersey City, New Jersey",
    rating: 69.6,
    slope: 120,
    par: 72,
    tee: "Regular",
    yards: 5748
  },
  {
    name: "Caves Valley Golf Club",
    location: "Owings Mills, Maryland",
    rating: 71.0,
    slope: 131,
    par: 71,
    tee: "White",
    yards: 6228
  }
]

module.exports = { players, tournaments, courses }