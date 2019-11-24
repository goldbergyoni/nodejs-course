# 1. Context

- Services vs libraries
- npm init
- The src folder

# 2. Folders

- entry - practically access from 2 sources, the serverless example
- domain - the unique code, change only here, more testable
- data-access - isolate the reusable
- Where would you put calls to 3rd party?

# 3. Build API

- 3.1: API file, import stuff, create routes
- 3.3: API, add post request
- 3.5: index.js with log
- 3.8: Middlewares - create one inline, move to lib

# 5. Build Service

- 5.2: Facade, orchestrator or just simple service
- 5.4: Multiple syntax
- 5.8: Anti-pattern: singleton class
- 5.9: some logic
- 5.10: why we need entity, dynamic json return anti-pattern
- 

# 7. Build Entity

- 7.2: Responsibilities are clear definition, validation and factory
- 7.4: Object vs class
- 7.5: Simple class definition
- 7.8: Simple validation, don't use "!"
- 7.11: json schema
- 7.14: Custom validator vs json-schema
- 7.17: avoid active record

# 10. Repository
- 10.3: ORM or not
- 10.5 The repository interface
- 10.7: Models
- 10.10 centralized connection
- 10.13: avoid sync, show migrations
- 10.17: lean queries

# 13. Calls to 3rd parties
- 13.3: Which layer?
