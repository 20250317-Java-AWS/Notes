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

## AWS Data Exchange
Subscription based 3rd party data data catalog. Designed to be a central location for exchanging data.
 - Data formats include .csv, parquet, and images
 - 3500+ products available, many for free.
 - Subscriptions last 1-36 months
 - Subscribe to data products through the marketplace to get data
   - financial services, healthcare, wetaher, manufactorung, telecommunications
 - create and publish your own data products
 - follows the pub/sub model

## EMR - Elastic Map Reduce 
Fully-manmaged big data platform, made for petabyte scale analysis
 - supports struictured, unstructured, and semi-structured data
   - examples: financial transaction data, app logs and click-stream data, text and documentation respectively
 - extract data from sources including: S3, SynamoDB, RedShift, Kinesis
 - supports open-source frameworks such as Spark, Hive, Presto, and Hadoop
 - particularly good at finding patterns in genomic data, click-streams, and logs


## OpenSearch
Fully managed ElasticSearch-based distributed search & analytics tool. Compatible with open-source APIs like Logstash and Kibana.
 - consume data from AWS services like CloudWatch, S3, and DynamoDB
 - good for log analytics, application monitoring, security analytics, and business data analytics

 ## MFK - Managed Streaming for Kafka
 Apache Kafka is an open source distributed event streaming platform. Kafka is often used in microservices as an event/message queue. Kafka can be difficult to implement or configure, MFK is a fully managed Kafka cluster.
  - MFK handles provisioning, managing, monitoring, scaling, and orchestrating a kafka cluster
  - Very similar to Kinesis, for clients who want to use Kafka instead
  - Example use case: track and analyze real-time stock market data

 ## QuickSight
 Business analytics service to assist in business decision making.
  - connects to AWS data as well as on-prem data sources
  - build dashboards to visualize data
  - use case examples:
   - analyze sales performance and trends
   - application usage
   - traffic monitoring
   - marketing analyitics

## SageMaker
Fully managed machine learning service degisned to let you build, train, and deploy your model
 - Fully managed machine learning service
 - import and prepare data from services like S3, Athena, RedShift, EMR
 - spot errors and data quality issues

## Kendra - KEYWORDS: NATURAL LANGUAGE, SEARCH
Intelligent search service using natural language (not programming or scripting language)
 - Data sources include: S3, FSx, RDS, web crawling, google drives, dropboxes, github repos, etc.
 - Supports structured, unstructured, and semi-strcutured data
 - Indexes data from sources, and can query that data with kendra using natural language
 - It's an LLM AI overtop a data warehouse

## Lex - KEYWORDS: NATURAL LANGUAGE, CHAT
Conversational interfaces using natural language models. LLM AI Chatbots.
 - Builds natural language chatbots

## Polly
LLM AI Text-to-speech

## Amazon Comprehend
Natural language text processing and analysis, also offers intelligent search. Read and understand text data.

## Text Processing and Generation with Textract, Transcribe, and Translate
A group of similar sounding services that use machine learning to process text
### Textract
Extracts data from documents. Can OCR non-digital text. Reads docs, images, PDFs, Tables, and forms. 
### Transcribe
Speech-to-text transcription
### Translate
Language translation designed to be accurate and natural sounding

## Rekognition
LLM AI based image and video analysis. Can look at images and video to identify people, objects, text, or harmful content.

