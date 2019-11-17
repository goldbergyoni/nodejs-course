async function getUserOrders(username) {
    try {
        const user = await logIn("username");
        const orders = await getOrders(user.id);

        return orders;
    } catch (error) {
        //handle
    }
}



async function logIn() {
    return Promise.resolve({
        id: 1
    });
}

async function getOrders(id) {
    return Promise.resolve({
        id: 1
    });
}

getUserOrders();