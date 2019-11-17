function doSomething(){
    const promiseResult = iReturnPromise();
    promiseResult.then((returnValue) =>{
        console.log(returnValue);//return value is 'foo'
    })
    console.log(typeof promiseResult);
    console.log("End");
} output: //object, End, foo

function iReturnPromise() {
    // return promise with "foo"
}


doSomething()