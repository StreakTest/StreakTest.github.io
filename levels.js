/*
  EDIT THIS FILE ONLY.

  To add another level, copy one complete block from "{" to "},"
  (including the comma) and paste it underneath the last level.

  Fields:
    rank        -> the number shown as #250, #351, etc.
    verified    -> true = green check / false = red check
    id          -> Geometry Dash level ID
    difficulty  -> normally "Extreme Demon"
    name        -> level name
    creator     -> creator / verifier / author name
    description -> level description
*/

const levels = [
  {
    rank: 250,
    verified: true,
    id: "12345678",
    difficulty: "Extreme Demon",
    name: "Example Horizon",
    creator: "ExampleCreator",
    description: "Example description. Replace this text with your level information."
  },
  {
    rank: 251,
    verified: false,
    id: "87654321",
    difficulty: "Extreme Demon",
    name: "Example Abyss",
    creator: "AnotherCreator",
    description: "This is another example entry. Copy this whole block to add another level."
  },
  {
    rank: 252,
    verified: true,
    id: "24681357",
    difficulty: "Extreme Demon",
    name: "Example Inferno",
    creator: "GDBuilder",
    description: "A third sample level to show how the vertical list looks."
  }
];
