# Dynamic Alert Button Toolbar

A React application demonstrating **props**, **children**, and **event handling** by creating a reusable `AlertButton` component and dynamically rendering multiple alert buttons from an array of configuration objects.

## Features
- **Reusable Component**: `AlertButton` accepts `message` and `children` props.
- **Dynamic Rendering**: `Toolbar` maps over an array of button properties to create multiple alert buttons.
- **Custom Messages**: Each button displays its own unique alert message when clicked.
- **Versatile Button Labels**: Button text is set via the `children` prop.
- **Unit Tests**: Includes normal and edge case tests using **Jest** and **React Testing Library**.


## Project Structure


## Project Structure

src/
|– AlertButton.js # Reusable button component
|– Toolbar.js # Renders multiple AlertButton components from an array
|– App.js # Root application component
|– Toolbar.test.js # Test cases for Toolbar & AlertButton
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

Example Usage Array

const buttons = [
  { message: 'Downloading!', children: 'Download File' },
  { message: 'Sharing!', children: 'Share Document' },
  { message: 'Uploading!', children: 'Upload File' }
];


Behavior:

    Clicking Downloading File -> Alert: "Downloading!"

    Clicking Share Document -> Alert: "Sharing!"

    Clicking Uploading File –> Alert: "Uploading!"

Tech Stack

    React (via Create React App)

    JavaScript (ES6)

    Jest & React Testing Library for testing