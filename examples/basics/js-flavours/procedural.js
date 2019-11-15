//file: order-service.js
function getValidOrdersId(allOrders) {
    return allOrders
        .filter((anOrder) => anOrder.valid)
        .map((anOrder) => {
            return anOrder.id
        })}
//getValidOrdersId([{id:2 , valid:false} , {id:3, valid:true}])
//output [3]

const a = {b:1};
const b = () => {}
console.log(a.__proto__);

