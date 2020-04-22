describe('Todo List', function () {
    let page;
    let newTaskContent;

    before (async function () {
      page = await browser.newPage();
      let random = new Date().getMilliseconds();
      newTaskContent = 'new todo item ' + random;
      await page.goto('http://127.0.0.1:3000/');
    });
  
    after (async function () {
      await page.close();
    });

    it('should have correct title', async function() {
        expect(await page.title()).to.eql('React App');
    });

    describe('add task', function () {
        it('should create new task and add to the end', async function() {
            await page.waitFor('.add-input');
            let originalItemsCount = await page.$$('.item').then(item => item.length);

            await page.click('.add-input');
            await page.type('.add-input', newTaskContent);
            await page.click('.add-button');
            let newTask = await page.waitFor('.items .item:nth-child('+ (originalItemsCount + 1) +')');
            const expectInputContent = await page.evaluate(newTask => newTask.querySelector('textarea').textContent, newTask);
            expect(expectInputContent).to.eql(newTaskContent);
          });
    });


    describe('delete the new task', function () {
        it('should delete the new task in the end of the list', async function() {
            await page.waitFor('.add-input');
            let originalItemsCount = await page.$$('.item').then(item => item.length);

            await page.click('.items .items:last-child .delete-button');
            await page.waitFor(500);

            let itemsCount = await page.$$('.item').then(item => item.length);
            expect(originalItemsCount - itemsCount).to.eql(1);
          });
    });

  });