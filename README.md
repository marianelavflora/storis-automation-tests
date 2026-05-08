# storis-automation-tests

Learning-oriented Cypress (JavaScript) starter suite for live STORIS website validation.

## Achievements
Learned how to install and deploy Cypress
Learned how to create E2E tests with Javascript and Cypress 
Discovered a BUG or improvement in Storis webpage: error message text when email input is wrong isn't easily visible by the user because red gets lost in orange background
<img width="1182" height="220" alt="image" src="https://github.com/user-attachments/assets/3012cdd2-a401-4395-8fdc-fd184f0fad2f" />
Learned how to integrate Github Actions 



## Scope (initial phase)

- Infrastructure health checks for `https://www.storis.com/`
- Regional access smoke validation:
  - `allowed`: US/CA/MX VPN traffic should load homepage
  - `blocked`: non-allowed regions can return Cloudflare/block responses

## Stack

- Cypress E2E (JavaScript)
- API-style checks with `cy.request`
- Page Object Model (POM) starter (`cypress/pages`)

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy environment template:

   ```bash
   copy .env.example .env
   ```

3. Update `.env` values as needed:
   - `BASE_URL=https://www.storis.com`
   - `EXPECTED_REGION=allowed` or `blocked`

## Run

- Open runner:

  ```bash
  npm run cy:open
  ```

- Headless run:

  ```bash
  npm run cy:run
  ```

- Headless run in Chrome:

  ```bash
  npm run cy:run:chrome
  ```
