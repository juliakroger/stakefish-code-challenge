# Stakefish Frontend Developer Assignment

This project is a frontend application for listing of cryptocurrency exchanges. It fetches data from the Coingecko public API to display a list of exchanges along with their details.

## Tech Stack

- React
- TypeScript
- Vite (for development)
- Jest (for testing)

## Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

## Usage

To start the development server, run:

```bash
npm run dev
```

This will launch the application on http://localhost:3000.

To build the project for production, use:

```bash
npm run build
```

The production-ready files will be available in the dist directory.

## Unit Testing

Run the following command to execute the unit tests:

```bash
npm run test
```

## E2E Testing

To run the E2E tests, you have two options:

Option 1: Open Cypress Test Runner (Interactive Mode)

```bash
npm run cy:open
```

This will open the Cypress Test Runner where you can interactively select and run tests.

Option 2: Run Tests in Headless Mode

```bash
npm run cy:run
```

This will execute the tests in headless mode and output the results.

### Testing Locally

If you wish to run the tests locally against your development server, follow these steps:

1. Start your development server:

```bash
npm run dev
```

2. Open cypress.json and update the baseUrl:

```bash
{
  "baseUrl": "http://localhost:3000",
  ...
}
```

3. Run the E2E tests.
