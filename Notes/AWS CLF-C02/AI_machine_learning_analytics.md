# AI, MAchine Learning, Analytics Technology and Services
## Redshift - KEYWORDS: DATA WAREHOUSE, OLAP, ONLINE ANALYTICAL PROCESSING
Data warehousing solution - designed for business intelligence workloads and is able to store and query petabytes worth of data.
 - Combine multiple sources of data into one place.
 - MPP - MAssively Parallel Processing
 - Automated data management -backup, replicate, and scale without downtime
 - designed for OLAP - Online Analytical Processing

## Redshift Serverless
 - serverless redshift - no infrastructure

## Kinesis Family
Family of services to collect, process, and analyze streaming data in real time. Allows us to build custom applications based on business needs.
 - deals with data in motion - streaming data instead of stored data
 - streaming data is created continuously by many sources silmultaneously, such as:
   - Financial transactions
   - Stock prices
   - Game data
   - Social media feeds
   - IoT sensors
   - clickstream data
   - logs

### Kinesis Streams
Stream data and video
 - Kinesis streams retain data for 24 hours by default, up to a max of 365 days.
 - Data stored in "shards", a sequence of data records. Streams are made up of one or more shards
 - consumers of the streams include EC2, and lambda
 - final destinations for stream data includes DynamoDB, S3, EMR, and Redshift
#### Kinesis Data Streams
 - Process streaming data in real-time
#### Kinesis Vdieo Streams
 - Stream video into AWS storage and processing
#### Kinesis Firehose - AKA Kinesis Data Firehose
 - Capture, transform, and load data streams continuously into AWS data stores
 - scales automatically
 - real-time processing and transformations
 - integrated monitoring

## Amazon Athena
Interactive query service to run SQL queries on data in S3 buckets.
 - Standard SQL syntax
 - Serverless
 - Works directly with S3
 - use cases:
   - qury log files
   - analyze AWS cost and usage reports
   - generate reposts from data in S3
   - query click-stream data
  
## AWS Glue - KEYWORDS: ETL - EXTRACT TRANSFORM LOAD
Serverless data preperatino and integration service. "Glues" together data from multiple sources.
 - Extract, transform, and store data
 - Glue will use a crawler to scan your data and datasources
 - prepares data for analytics and machine learning

NEXT VIDEO... Exploring AWS Data Exchange. So far completed about 75% of the deployment, migration, and AI course.
