# Search Github Repos

## Design
Design philosophy and components leverage [Material UI](https://mui.com/)

## Getting Started
- Clone repository locally
- `yarn install` to install all dependencies
- Create `.env` file locally at root and add personal GitHub token
  - View [sample.env](sample.env) as an example for the variable `VITE_GITHUB_TOKEN`
- `yarn run dev` to start the development server (vite)

## Testing
Tests are leveraging [Cypress](https://docs.cypress.io/guides/overview/why-cypress) for Component level testing
- Running component tests locally (headless)
  ```bash
  $ yarn run test-component
  ```
- View tests in Browser (select Component)
  ```bash
  $ yarn cypress open
  ```
  
## Disclaimer
Current application does not utilize a proper backend server to handle external data fetching with
authentication. For Production usage a dedicated backend should be leveraged.