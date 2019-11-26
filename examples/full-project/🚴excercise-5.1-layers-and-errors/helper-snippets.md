## Defining Express route

```
router.get("/api/travelling", async (req, res, next) => {
    //code here
}
```

## Express error handling middleware

```
app.use((err, req, res, next) => {
    //error handling here
}
```

## Custom app error class

```
class CustomError extends Error {
  constructor(name = "generic") {
    super();
    Error.captureStackTrace(this, CustomError);
    this.name = name;
    //other properties here
  }
}

```

## HTTP call

```
http://localhost:8080/api/products?city=Bangkok&date=01/01/2020
```
