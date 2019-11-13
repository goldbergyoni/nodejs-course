function trySomething() {
    try {
        console.log('starting');
        setTimeout(() => {
            throw new Error('ooppss')
        }, 100);
    } catch (error) {
        console.log('error');
    }
    console.log('done');
}

