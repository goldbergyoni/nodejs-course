function getUserOrder(username, callback) {
    getUser(username, (error, user) => {
        if (error) {
            return callback(error, null);
        }
        getOrders(user.username, (error, orders) => {
            if (error) {
                return callback(error, null);
            }
            return callback(null, orders);
        });
    });
}

