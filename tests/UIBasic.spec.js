const { test, expect } = require('@playwright/test');



test('Enter credentials and click login', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.fill('#userEmail', 'codeautomagic@test.com');
  await page.fill('#userPassword', '1234567890@Aa');
  await expect(page.locator('#userEmail')).toHaveValue('codeautomagic@test.com');
  const loginButton = page.getByRole('button', { name: /log ?in|sign ?in/i });
  await loginButton.waitFor({ state: 'visible', timeout: 10000 });
  await loginButton.click();
  await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
});
test('@Child windows hadle', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
 
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
   
 
   const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    //console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());
 
 });
test('Handling Frames', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const framePage = page.frameLocator("#courses-iframe");
   await framePage.locator("a[href*='mentorship']").first().click();
   await framePage.locator('.pricing-title').first().waitFor({ timeout: 10000 });
   const text = await framePage.locator(".pricing-title").allTextContents();
    console.log(text);
 
 });    

test('Handling Mouse Hover', async ({page})=>
 {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const hoverButton = page.locator("#mousehover");
    await hoverButton.scrollIntoViewIfNeeded();
    await hoverButton.hover();
    await page.locator("a[href*='top']").click();
    //await page.waitForTimeout(3000);
 
 }    );        
test('Handling Alerts', async ({page})=>
 {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");        
    page.on('dialog', dialog=>
    {
       console.log(dialog.message());
       dialog.accept();
    });
    await page.locator("#alertbtn").click();
    //await page.waitForTimeout(3000);
 
 }    );

test('Handling Child Tabs', async ({page})=>
 {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");        
    const [newPage] = await Promise.all(
    [
       page.waitForEvent('popup'),
       page.locator("#opentab").click(),//opens new tab
    ]);
    console.log(await newPage.title());
    console.log(await newPage.url());
    //await page.waitForTimeout(3000);
 
 }    );


test('Counting number of links', async ({page})=>
 {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");        
    const totalLinks = await page.locator("a").count();
    console.log("Total links on the page: "+totalLinks);
    const footerSection = page.locator("#gf-BIG");
    const footerLinks = await footerSection.locator("a").count();
    console.log("Total links in footer section: "+footerLinks);
    const firstColumn = footerSection.locator("table tbody tr td").nth(1);
    const firstColumnLinks = await firstColumn.locator("a").count();
    console.log("Total links in first column of footer section: "+firstColumnLinks);
    for(let i=0;i<firstColumnLinks;i++)
    {
       const linkText = await firstColumn.locator("a").nth(i).textContent();
       console.log(linkText);
    }
 
 }    );  


test('Web Table Handling', async ({page})=>
 {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");      
    // wait for the courses table to appear
    await page.waitForSelector("table[name='courses'] tbody tr", { timeout: 15000 });
    const tableRows = await page.locator("table[name='courses'] tbody tr").count();     
    if (tableRows === 0) {
       console.warn('No course rows found; skipping table assertions');
       return;
    }
    for (let i = 0; i < tableRows; i++)
    {
          const firstCell = page.locator("table[name='courses'] tbody tr").nth(i).locator("td").nth(0);
          try {
             await firstCell.waitFor({ timeout: 30000 });
          } catch (e) {
             console.warn('Timeout waiting for table cell, skipping this row');
             continue;
          }
          const courseName = await firstCell.textContent();
       if(courseName.includes("Python"))
       {
          const coursePrice = await page.locator("table[name='courses'] tbody tr").nth(i).locator("td").nth(2).textContent();
          console.log("Course Name: "+courseName+" Price: "+coursePrice); 

       }  
    }
  }    );

test('Handling Checkboxes', async ({page})=>
  {
      await page.goto("https://rahulshettyacademy.com/AutomationPractice/");  
      const checkBox1 = page.locator("#checkBoxOption1");
      await checkBox1.check();
      console.log("Checkbox 1 is checked: "+await checkBox1.isChecked());
      await checkBox1.uncheck();
      console.log("Checkbox 1 is checked: "+await checkBox1.isChecked());
      const allCheckboxes = page.locator("input[type='checkbox']");
      const totalCheckboxes = await allCheckboxes.count();
      console.log("Total checkboxes: "+totalCheckboxes);
      for(let i=0;i<totalCheckboxes;i++)
      {
         await allCheckboxes.nth(i).check();
      }
  }
  );

test('Handling Radio buttons', async ({page})=>
  {
      await page.goto("https://rahulshettyacademy.com/AutomationPractice/");  
      
      const radioButton2 = page.locator("input[value='radio2']");
      await radioButton2.check();
      console.log("Radio button 2 is checked: "+await radioButton2.isChecked());
  }
  );  


test('Handling test 2 Radio buttons', async ({page})=>
  {
      await page.goto("https://rahulshettyacademy.com/AutomationPractice/");  
      
      const radioButton2 = page.locator("input[value='radio2']");
      await radioButton2.check();
      console.log("Radio button 2 is checked: "+await radioButton2.isChecked());
  }
  );  