Java Selenium example
=====================

This folder contains a minimal Maven project with a sample Selenium test written for TestNG.

Run tests locally:

```bash
cd java-selenium
mvn -B test
```

Notes:
- Tests use WebDriverManager to download a chromedriver binary at runtime.
- The tests run headless by default; adjust `ChromeOptions` in the test classes if you need headed runs.
