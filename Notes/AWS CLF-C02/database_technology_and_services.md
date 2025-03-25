# Database Technology & Services
## Database types
 - Relational (SQL) - data is stored according to a schema, well regimented, arranged into rows and columns.
 - NoSQL - key/value pairs
 - In-memory - caching solution, data stored in memory, faster but volatile
 - graph databases - excel at storing data with complex relationships


### Amazon Neptune
graph database
Use cases: 
 - fraud detection
 - drug discovery
 - recommendations

### DMS
Database migration service - helps migrate data from databases into AWS services quickly and securely. Can handle many data sources including: Oracle, MySQL, PostGres, MS SQL Server
 - Simple to use - doesn't require driver software  or modifications
 - minimal downtime - continuously replicates data, keeping source database operational
 - Reliability - self-healing & monitoring
 - consolidation - combine multiple data sources into a single database, including different database systems
Use cases:
 - database migrations
 - datasource consolidation
 - data replication - backups and recovery
 - cloud adoption/migration
 - decomissioning physical datacenters

### SCT
AWS Schema Conversion Tool - helps convert schema between different databases


### RDS
Relational Database Service - SQL database running on an EC2, software as a service


### AWS Elasticache
Fully managed in-memory data store and cache


### DynamoDB
autoscaling Key/Value store
features:
 - POerformance at scale - maintains single-digit millisecond response times
 - Fully managed - no need for management or maintenance
 - secure - fully encrypted at rest and in transit

Use cases: 
 - web and mobile applications
 - gaming applications
 - IoT
 - E-commerce
All of the above are listed for basically the same reasons, high variable traffic, low latency, scalability

### Amazon MemoryDB for Redis
Redis is a popular open-source key/value store used for caching, not associated with amazon. It's so popular, that amazon has a special in-memory data service to integrate with Redis.
 - Extreme performance - in-memory databases are the fastest data storage/caching solutions available
 - data durability - data replicated across multiple AZs
Use cases:
 - web application caching
 - rela-time analytics
 - session management
 - geospacial data processing (geo indices are a common problem in many databases)
