
//routes
router.get("/api/products", async (req, res, next) => {
    console.log("Get products was invoked");
    const result =
        await new TravellingRecommenderService().isTravellingRecommended({
            city: req.query.city,
            date: req.query.date
        });
    res.status(200).json(result);
});

app.use((err, req, res, next) => {
    res.status(500).json({
        error: err.name ? err.name : "Some error"
    });
});