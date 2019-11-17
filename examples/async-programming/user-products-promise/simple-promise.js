method1()
.then(method1Result => method2())
.then(method2Result => method3())
.catch((error) => errorHandler)






function getUserOrders(username) {
    return new Promise((resolve, reject) => {
        logIn("username", "password")
            .then(user => getOrders(user.name))
            .then(orders => {
                resolve(orders);
            });
    })
}

