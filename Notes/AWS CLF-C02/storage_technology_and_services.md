# Storage Technology & Services
## EC2 Storage
 - EBS - elastic block storage
    - Single attach - only accessible from one device at a time
    - Well suited for EC2
    - Highly available - decoupled from instance - data is safe even if instance crashes
    - data is replicated within AZ
    - Scalable - expands on the fly without downtime
    - Snapshots - can take backup snapshots, or to create new volumes
    - Use cases: hosting databases, data warehousing, big data
    - encrypted - at rest and in transit
  - EFS - Elastic File System
    - multi attach, accessible from multiple devices at once.
    - Fully managed - remove complexity of deployment and maintenance
    - scaleable - expands on the fly without downtime
    - concurrent access - accessed from multiple services at once
    - Use cases: web servers, data analytics, testing environments thanks to scalability and shared nature
  - Instance stores
    - High I/O performance - very fast
    - Temporary - data is "ephemeral", will be lost if instance terminates
    - No extra cost, included in instance cost.
    - Use cases: Temp storage, caches, buffers, write and discard large amounts of data

## More on EBS
 - Two types of EBS volume:
   - SSD - solid state drive - more expensive but faster - high IOPS - two types
     - General Purpose SSD - GP3, GP2 - low latency, 16,000 MAX IOPS - no multi-attach (can't be shared among instances)
     - Provisioned IOPS SSD - higher IOPS, extreme low latency - multi-attach supported (can be shared between instances within an AZ)
       - io1, io2 - 64,000 IOPS
       - io2 Block Express - 256,000 IOPS
   - HDD - hard disk drive - slower and cheaper - high THROUGHPUT - two types
     - Throughput optimized HDD volumes - st1 - good for big data, data warehousing, data processing - 500 Max IOPS, 500 MiB/s max throughput
     - Cold HDD Volumes - sc1 - low storage cost, 250 max IOPS, 250 MiB/s max throughput
   - IOPS vs. Throughput - IOPS is read/write operations per second, throughput is bits per second. Once HDDs (spinning platter drives) get going they have good throughput, but aren't great for random access
 - Snapshots - a perfect copy of data on volume, like taking a picture of the 1's and 0's at a moment in time
   - Incremental - each snapshot only saves changes since the previous snapshot
   - use snapshots to quickly restore a volume, or quickly launch a new instance with a copy of the data
   - Snapshots can be shared or sold to other accounts
   - cost-effective (okay AWS basically claims everything is cost-effective, this is a blanket term for anything that's not the most expensive solution)
   - good for disaster recovery, and can replicate across AWS regions

## S3 
 - S3 - Simple Storage Solution
   - S3 is global storage, it's not tied to a region or AZ.
   - S3 is organized into "buckets", globally uniquely named containers for storage - no two buckets anywhere in the world will be named the same
   - S3 stores "Objects", not just files. They have metadata & unique identifiers
   - S3 is 11 9's, 99.999999999% highly available
   - S3 buckets are scalable, virtually unlimited in size (the bucket is a logical abstraction over file systems, and can grow basically infinitely)
   - Buckets can be made secure and security can be controlled via "bucket policy" and access control lists.
   - S3 is extremely versatile, use cases: backups, web hosting, content distribution, data lakes, etc.
- S3 Storage Classes - different places to store data, different parameters and costs. https://aws.amazon.com/s3/storage-classes/
  - Standard - high throughput, low latency, baseline default
  - Intelligent Tiering - automatically moves data betyween two storage strategies - designed for savings without performance impact
    - What are the two tiers, the two strategies?
  - Standard Infrequent Access - designed for data that is infrequently accessed, but must still be rapidly accessible
    - there is a fee for retreival, long term storage is low cost, only pay when you access the file
  - One Zone Infrequent Access - special version of the stnadard IA above, but is only stored in one AZ, not global.
    - good for data that doesn't need to be durable, secondary backups, lower cost
  - Glacier Instant Retrival - designed for instant access to archive storage. Despite the name, still rapid access
  - Glacier Flexible Retrieval - designed for archive access that is not immediate, data accessed a couple times a year. Not instant retrieval. Long term storage with no retrieval cost
  - Glacier Deep Archive - the most cost effective for long term archival. Keep infrequently accessed archival data for years without accessing, if ever. Good for regulatory compliance, like in healthcare


## Additional Sotrage Services
  - FSx - File Server
    - Specialty storage, designed to be a fully managed windows file system built on Windows Server OS
    - Supports windows workloads, workloads requiring native windows features
  - Elastic Disaster Recovery
    - minimize downtime and data loss, ensuring quick recovery, low cost.
    - Pay only for the servers getting backed up - COST EFFECTIVE
    - Maintain "business continuity" (no inturruption, no data loss)

## AWS Storage Gateway
Connects on-site data storage with AWS, ensures data is securely and effectiently transmitted to AWS
It's cost effective (like everything) as it lets you offload data storage onto the cloud
secure - data is encrypted for transfer and storage
seamless integration
use cases: 
 - data backup & recovery- it's an offsite backup
 - data processing - transmit your data to AWS for processing, before returning it to your data center
types:
 - S3 File Gateway - store files directly on S3
 - Volume gateway - block storage (instead of object store)
   - stored volumes for data storage
   - cached volumes for frequently accessed data
 - Tape gateway - for archiving data, presumably on tape drives
 - FSx file gateway - extend on-prem file systems to FSX (basically windows network drive)

## AWS Backup
Backup solution for AWS data. Stores backups for services:
 - ECC instances
 - EBS volumes
 - RDS databases
 - DynamoDB tables
 - EFS
 - FSx
 - Storage Gateway

features include:
 - Centralized backup management - simplifies managing backups and recovery
 - automated backups
 - encryption
 - cross-region backups enhance disaster recovery
Use cases:
 - Cloud native backup
 - hybrid data protection backup hybrid environments, backup both cloud and on-prem data
 - data protection compliance & regulation
