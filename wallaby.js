module.exports = () => {
    return {
      files: [
        '**/examples/testing/test-basics/helpers/final-result/orderService.js',
        '!libraries/**/node_modules/**',
        '!**/node_modules/',
      ],
      tests: [
        '**/examples/testing/test-basics/helpers/final-result/test.orderService.unit.js',
      ],  
      debug: true,
      setup: function (w) {
        let mocha = w.testFramework;
        mocha.grep('cold');
      },
      env: {
        type: 'node',
        params: {
          env: 'NODE_ENV=development'
        }
      },
      workers: {
        recycle: false
      },
      testFramework: 'mocha'
    };
  };