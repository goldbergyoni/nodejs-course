## 3 patterns
- Zero - high throughput
- io - many IO
- io+ - no change!
- cpu - low throughput
- some-cpu - lower throughput


## Maybe cluster
- Remember that we pay more!
- Zero - no ROI
- cpu - no real improve
- some-cpu - latency problem!
- io - on ROI
- Conclusions - not helpful

## Maybe fork
- Remember that we pay more!
- cpu - not possible
- some-cpu - better latency!
- Conclusions - helpful but pricey per request

## Maybe thread
- Remember that we pay more!
- cpu - no real improve
- some-cpu - latency problem!
- Conclusions - helpful, can't solve CPU problems

## Maybe setImmediate
- How they work
- some-cpu - better for the majority
- Conclusions - helpful, can't solve CPU problems