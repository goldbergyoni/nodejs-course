class ProductsService {

  async functionThatReturnPromise() {
    return new Promise((resolve, reject) => {
      //throw new Error("error from promise");
      reject("foo");
    });
  }

  async getUserProducts(userName) {
    if (!userName) {
      throw "something bad"
    }

    return [{
      name: 'iphone'
    }, {
      name: 'Android'
    }];
  }
}

module.exports = ProductsService;