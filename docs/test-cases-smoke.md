# Smoke Test Cases (Cypress)

This document describes the **smoke** test cases implemented in this repository under:
`cypress/e2e/smoke/`

## Conventions

- **ID format**: `SMK-XXX`
- **Target site**: `BASE_URL` (default: `https://www.storis.com`)
- **Region mode**: `EXPECTED_REGION`
  - `allowed` = user should reach the normal homepage
  - `blocked` = user should receive a block/Cloudflare-style response

## Common Preconditions

1. Tests run with a network path that matches the intended scenario:
   - For `allowed`, use a US VPN/proxy (so STORIS geoblocking should allow access).
   - For `blocked`, use a non-allowed geo (or a setup that produces the block page).
2. In your local environment, set:
   - `EXPECTED_REGION=allowed` or `EXPECTED_REGION=blocked`
3. When running Cypress, keep an eye on the Cypress logs/messages:
   - `info: valid region was received`

---

## SMK-001 — Regional access: allowed region

**Automation**: `cypress/e2e/smoke/storis-region-access.cy.js`  
**Mode**: `EXPECTED_REGION=allowed`

### Steps

1. Open `BASE_URL` (homepage).
2. Perform a homepage request and validate the HTTP status is one of:
   - `200`, `301`, `302`
3. Validate the UI loads the main homepage content.

### Expected Result

- HTTP status is in `[200, 301, 302]`.
- Homepage UI is loaded (main page assertion passes).
- Cypress logs include: `info: valid region was received`.

---

## SMK-002 — Regional access: blocked region

**Automation**: `cypress/e2e/smoke/storis-region-access.cy.js`  
**Mode**: `EXPECTED_REGION=blocked`

### Steps

1. Open `BASE_URL` (homepage).
2. Perform a homepage request and validate the HTTP status is one of:
   - `403`, `503`
3. Validate the UI shows a block/Cloudflare-style page.

### Expected Result

- HTTP status is in `[403, 503]`.
- Block page assertion passes.
- When this test fails due to geoblocking mismatch, Cypress error should explain region mismatch.
- When this test passes, Cypress logs include: `info: valid region was received`.

---

## SMK-003 — Industry expert form: invalid email input + submit

**Automation**: `cypress/e2e/smoke/industry-expert-forms.cy.js`

### Steps

1. Navigate to the homepage (`BASE_URL`).
2. Scroll to the “Talk to an Industry Expert” form email field.
3. Type `wrongEmail899798` into the element with id:
   - `#input_1335103461_3`
4. Click the submit button with id:
   - `#gform_submit_button_1335103461`

### Expected Result

- The email input accepts the typed value (`wrongEmail899798`).
- The submit button click triggers the form submission flow.
- (Recommended for future improvement) After submit, the page should show a validation message indicating the email format is invalid.

