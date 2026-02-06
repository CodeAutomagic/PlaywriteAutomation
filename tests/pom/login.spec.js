const { test, expect } = require('@playwright/test');
const LoginPage = require('../../src/pages/LoginPage');

test('POM login example (local setContent)', async ({ page }) => {
  // Render a tiny login form in-memory so the example is fully offline/reliable.
  await page.setContent(`
    <form id="login">
      <input name="username" />
      <input name="password" type="password" />
      <button type="submit">Sign in</button>
    </form>
    <div id="welcome" style="display:none">Welcome, <span id="user"></span></div>
    <script>
      document.querySelector('form').addEventListener('submit', function(e){
        e.preventDefault();
        const user = document.querySelector('input[name=username]').value || 'guest';
        document.getElementById('user').textContent = user;
        document.getElementById('login').style.display = 'none';
        document.getElementById('welcome').style.display = 'block';
      });
    </script>
  `);

  const login = new LoginPage(page);
  await login.login('alice', 'password');
  const welcome = await login.getWelcome();
  expect(welcome).toContain('Welcome, alice');
});
