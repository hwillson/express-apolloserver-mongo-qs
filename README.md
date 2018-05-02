# express-apolloserver-mongo-qs

Quickstart project using Express, Apollo Server, GraphQL, and Mongo.

## Database Setup

1. Install Mongo >= 3.6. For example, on MacOS download and install an
appropriate binary from the
[Mongo download page](https://www.mongodb.com/download-center#production), or
use a local package manager like [Homebrew](https://brew.sh)
(`brew install mongo`).

2. Create a new directory to house the db and start `mongod` with the
`--dbpath` option pointing to that new directory:

```bash
mkdir widgets-db
mongod --dbpath ./widgets-db
```
