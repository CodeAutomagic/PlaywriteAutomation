# PlaywriteAutomation

Playwright test examples for launching Chrome and basic UI tests.

Quick start

- Install dependencies:

```bash
npm install
npx playwright install
```

- Run the Chrome launch test (headed):

```bash
npx playwright test tests/UIBasic.spec.js --headed
```

Files
- `tests/UIBasic.spec.js`: launches Chrome and opens example.com
