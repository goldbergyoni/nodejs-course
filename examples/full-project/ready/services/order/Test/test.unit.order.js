const Order = require('./../order')
const expect = require('chai').expect

//this runs before tests are executed
before(()=>{
    await ourTestingFramework.seed.run('./seedData.json');
})

it('Check valid order, expect get positive result', ()=>{
    const newOrder = new Order(0, 1 , 2 , 'New', new Date());
    const result = newOrder.validate();
    expect(result).to.be.true
})

it('Check order with inalid user, expect negative result', ()=>{
    const newOrder = new Order(0, 'ds' , 2 , 'New', new Date());
    const result = newOrder.validate();
    expect(result).to.be.false
})

test('When adding new product with a valid product name, expect it to be approved ', () => {
    //Arrange
    const productToTestWith = new Product(faker.randomize.productName);
    //faker=randomize true product names, anytime a different name will be used
    const productServiceUnderTest = new productService();

    //Act
    const productAddResult = productServiceUnderTest.add(productToTestWith);

    //Assert
    expect(productAddResult).toBe("approved");
});

test('When adding new product with a valid product name, expect it to be approved', () => {
    //Arrange
    const productToTestWith = new Product("iPhone");
    const productServiceUnderTest = new productService();

    //Act
    const productAddResult = productServiceUnderTest.add(productToTestWith);

    //Assert
    expect(productAddResult).toBe("approved");
});



    















// const orderService = require('./../orderService')
// const Order = require('./../order')
// const expect = require('chai').expect

// describe('Order', ()=>{
//     describe('Add new' , ()=>{
//         it('Add new valid order, expect positive result', ()=>{
//             const newOrder = new Order(1,2,5, 'new', new Date());
//             const result = newOrder.validate(Error);
            
//             expect(result).to.be.true;
//         })
        
//         it('Add order with invalid user, expect error', ()=>{
//             const newOrder = new Order(1,'user as string', 7,'new', new Date());
        
//             const result = newOrder.validate();
            
//             expect(result).to.be.false;            
//         })
//     })
// })


