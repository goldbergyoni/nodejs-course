# 1. Sanity

- Goals slide
- Optimal flow

# 3. Let’s kill that sanity

- What we have here, API, services
- Throw string, all crashed

## 3.3. Throwing problems

- Bad throwing - service catch error but no stack X2
- Good throwing - tag with type

## 3.5. Catching problems

- 3.5.2 Promises syntax is weired, use async/await
- 3.5.5 SetTimeOut are not caught

- 3.5.7 Express doesn't catch by default, show DDOS
- 3.5.8 show middleware caught sync
- 3.5.9 Express doesn't catch async, put try-catch
- 3.5.11 Uncaught exceptions, event emitter

# 3.7 Introducing the handler challenges

- 3.7.1 Show over express handler
- 3.7.6 Log, prettified
- 3.7.9 Should we exit? dev vs operational
- 3.7.13 Local handling is limited

# 5. Let's build an handler

- 5.3 Our own error #1
- 5.5 Common errors with Boom
- 5.7 Easy setup
- 5.9 Patch vs Catch vs handle
- 5.13 The exit dilemma #1
- 5.15 Let's add isOperational and debug
- 5.25 Final best practices slides
- 5.9 Your own Error
- 5.9 Wrap Express routes
- 5.9 Global handler
