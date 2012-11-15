var test;

test = require('../common/basic-test-base').test;

describe("wd", function() {
  return describe("local", function() {
    return describe("basic test", function() {
      describe("using chrome", function() {
        return test({}, {
          browserName: 'chrome'
        });
      });
      return describe("using firefox", function() {
        return test({}, {
          browserName: 'firefox'
        });
      });
    });
  });
});
