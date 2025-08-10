# Alert Button Toolbar

A simple React application that demonstrates **props**, **children**, and **event handling** in React by creating a reusable `AlertButton` component and a `Toolbar` that renders multiple unique alert buttons.

---

## Features
- **Reusable Component**: `AlertButton` accepts `message` and `children` props.
- **Dynamic Behavior**: Each button in the `Toolbar` displays a different alert message when clicked.
- **Props + Event Handling**: Demonstrates how to pass data into components and respond to user actions.
- **Unit Tests**: Includes normal and edge case tests using **Jest** and **React Testing Library**.

---

## Project Structure

src/
|– AlertButton.js # Reusable button component
|– Toolbar.js # Renders multiple AlertButton components
|– App.js # Root application component
|– App.test.js # Test cases for AlertButton & Toolbar
|– index.js # Entry point


## Getting Started

### 1. Clone the repository
```bash
git clone <url-repo>
cd alert-button-toolbar

2. Install dependencies

npm install

3. Start the development server

npm start

This will run the app at http://localhost:3000.

 Running Tests

To run all tests:

npm test

Example Usage

Toolbar.js

<AlertButton message="Hello from Button 1!">Greet</AlertButton>
<AlertButton message="Warning! This is Button 2.">Warn</AlertButton>
<AlertButton message="Goodbye from Button 3!">Farewell</AlertButton>

Behavior:

    Clicking Greet -> Alert: "Hello from Button 1!"

    Clicking Warn -> Alert: "Warning! This is Button 2."

    Clicking Farewell –> Alert: "Goodbye from Button 3!"

Tech Stack

    React (via Create React App)

    JavaScript (ES6)

    Jest & React Testing Library for testing