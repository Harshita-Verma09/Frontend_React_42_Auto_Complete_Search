# AutoComplete Search Component

This React component provides a simple autocomplete search functionality. As the user types in the input field, it displays a list of suggestions based on the provided data.

## Features

- **Live Search:** Suggestions appear as the user types.
- **Filtering:** Suggestions are filtered based on whether they include the entered text (case-insensitive).
- **Clear Suggestions:** The suggestion list disappears when the input field is empty.
- **Selectable Suggestions:** Clicking on a suggestion populates the input field with the selected value.
- **Basic Styling:** Includes basic styling for dark and light modes.

## Technologies Used

- React
- useState hook

## Installation

1. Make sure you have Node.js and npm (or yarn) installed on your system.
2. Create a new React project (if you haven't already):

   ```bash
   npx create-react-app autocomplete-search
   cd autocomplete-search

   const data = [
  "React",
  "Redux",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "GraphQL",
  "TypeScript",
  "Tailwind CSS",
  "Chakra UI",
];
