var dragAndDrop = require('html-dnd').codeForSelectors;

module.exports = {
    'Should create a new todo item': function(browser) {
        browser
            .url(browser.launch_url)
            .waitForElementVisible('body', 500)
            .setValue('input.new-todo', ['new todo', browser.Keys.ENTER])
            .pause(500)
            .assert.containsText('.view', 'new todo');
    },

    'Should click the new todo and mark it as finished': function(browser) {
        browser
            .click('.view .toggle')
            .pause(500)
            .assert.cssClassPresent('li[data-id]', 'completed')
            .click('.view .toggle')
            .pause(500)
            .assert.cssClassNotPresent('li[data-id]', 'completed');
    },

    'Should remove the todo item': function(browser) {
        browser
            .assert.elementPresent('.todo-list li')
            .click('.todo-list li:first-child .destroy')
            .pause(500)
            .assert.elementNotPresent('.todo-list li');
    },

    'Should show current todo count': function(browser) {
        browser
            .setValue('input.new-todo', ['new todo', browser.Keys.ENTER])
            .pause(500)
            .assert.containsText('footer .todo-count', '1');
    }
}
