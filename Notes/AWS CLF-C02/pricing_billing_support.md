# Pricing, Billing, and Support
## EC2 Cost Optimization - One of the most common types of question across all practice exam material I've seen
Don't use the cloud like a data center. Don't waste compute power, don't overprovision.

### Auto Scaling
 - Place EC2 instances in auto scaling groups, scale up and down based on need reducing wasted compute power
 - This is about vertical scaling

### Right-Sizing
 - Provision the instances accurately, not wasting compute power.
 - Scale those rightsized instances out horizontally to meet demand
 - Despite the name, this is about horizontal scaling

### Reserved Instnces - KEYWORDS: SAVE 70%, SAVE 72%, 1-3 YEARS
 - Discount compute costs by up to 72% - if you see any mention of reducing costs by ~70%, especially exactly 72%, they're likely talking about reserved instances
 - Reserve compute power for 1-3 years, commit to this usage upfront and save
 - Pay upfront for the max discount
#### Standard REserved Instance
 - Reserve capacity of a particular instance type
#### Convertible Reserved Instances
 - Reserve capacity without comitting to a particular instance type
 - Smaller discount than standard, more flexability
#### Scheduled Reserve Instances
 - Reserve capacity for a specific instance type at specific times

### Spot Instances - KEYWORDS: INTERRUPT WORKLOAD, DELAY WORKLOAD, START AND STOP WORKLOAD
 - capacity deeply discounted but only available when AWS has a large surplus
 - Can be inpredictable, but discounts can be extreme

## Compute Optimizer
Service analyzes CloudWatch logs and recommends right-sizing for EC2 instances 

## AWS Lambda
 - Serverless functional programming
 - No idle cost, no traffic means no cost.

## AWS Fargate
Similar to Lambda but for containerized workloads like those on K8s, ECS

## S3 Storage Classes
### Standard Storage Classes
#### S3 Standard
Made for frequent access. Milisecond retrieval times. Highest durability and avilability?
#### Standard Infrequent Access & One-Zone Infrequent Access
Like glacier instant, fast but you pay for retrieval. Good for infrequent but fast access, cheaper per GB retrieved than glacier IR
#### Express One-Zone
Single-digit millisecond retrieval time. Only exists in one AZ, so less durable but faster if it's local to where the data is needed.
### Archival Storage Classes
#### Glacier Flexible Retrieval & Glacier Deep Archive
Cost effective, but delayed retrieval of hours or even days.
#### Glacier Instant Retrieval
Fast, but you pay a premium per GB for retrieval. Good for when you infrequently need fast retrieval

## S3 Lifecycle Policies
Per-object policies that define transition and expiration actions for data in S3 buckets.

## S3 Intelligent Tiering
Analyzes access patterns and moves objects between storage classes to try and maximize discounts

## S3 Storage Lens
Can examine all storage buckets across multi-account orginizations and make recommendations about storage class changes.


