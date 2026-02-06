# Page Object Model (POM) — Example

This folder contains a minimal Page Object Model scaffold and one example test that uses an in-memory login form so the example runs offline and deterministically.

Hierarchy

src/pages/
- BasePage.js         # common helpers for all page objects
- LoginPage.js        # example page object for a simple login form

tests/pom/
- login.spec.js      # example test that uses `LoginPage`

ASCII diagram

  tests/pom/login.spec.js
            |
            v
      src/pages/LoginPage.js  <- uses
            |
            v
       src/pages/BasePage.js

Quick start

- Run the POM example tests:

```bash
npx playwright test tests/pom --workers=1
```

Design notes

- The example uses `page.setContent()` to avoid network dependencies. Replace with `page.goto(url)` in real projects.
- Keep page objects focused on interactions and assertions in tests.
