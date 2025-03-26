# Migration and Transfer Technology and Services
## The AWS Snow Family
Physical devices designed to securely and effeciently transfer large amounts of data or AWS. Use this when there is too much data for networks to handle. Install a device like a "snowball" in your data center, move data onto the device, and ship the device to AWS.
 - Snowball - Great for moving at least 10TB of data. Looks like a small safe.
 - Snowball Edge - like snowball, but offers onboard compute resources so you can process data. It's a snowball with a compter inside.
 - Snowmobile - Great for 10+ PB. It's a truck sized snowball.
 - Snowcone - Small, portable, millitary grade storage. 8TB HDD, or 14TB SSD. Fits in a backpack.

## Database Migration Tools
### DMS - data migration service
 - Used to migrate databases and analytics workloads to AWS
 - Workloads may be on-prem, on EC2, or in RDS

### SCT - Schema Conversion Tool - KEYWORDS: CONVERT DATABASE
 - used to migrate from one type of database to another, like Oracle to T-SQL
 - can also do NoSQL schemas, like converting mongoDB to DocumentDB

## The AWS Transfer Family - KEYWORDS: SFTP, AS2, FTPS, FTP
File transfer solutions. Business-to-business file transfer.
 - Files are transfered into AWS storage, and back out.
 - Can use existing tools like WinSCP, FileZila, CyberDuck, lftp, and OpenSSH
 - Supports common protocols like SFTP, AS2, FTPS, and/or FTP.
   - FTP is unencrypted, and not recommended
  
## AWS DataSync
Automated system to securely transfer large amounts of data to AWS.
 - Data can originate on-prem, in another cloud service, or AWS
 - Target destinations include S3, EFS, FSx
 - Supports NFS, SMB, and object storage

## Application Discovery Service
A discovery toold scans your systems to learn about your setup. Application Discovery Service transfers this data encrypted to AWS Migration Hub. This helps us adopt AWS services to migrate on-prem resources to the AWS Cloud.
Collects:
 - Server Inventory
 - Configurations
 - Operating System Info
 - Capacity Utilization
 - In/Out network connections
This helps us learn about how complex and/or distributed systems interdepend. We install the ADS agent software on our devices, and those agents scan, collect, and combine the data.
Integrates with VMWWare, so we can do the scanning without installing agents on servers. The "Agentless collector" can do this by interacting with the hypervisor.

## Application Migration Service  KEYWORDS: LIFT-AND-SHIFT
A service that assists in migrating systems into AWS cloud. 
 - Can migrate physical and/or virtual servers.
 - Can migrate from on-prem, other cloud providers, or other AWS regions.
 - Nothing is altered, redesigned, or refactored. Your system is reproduced as exactly as possible. "Lift-and-shift"
 - "No performance impact" (not actually possible, may be more accurate to say "minimal performance impact")
 - Seamless replication, no interruption, just run the system and when you're ready cut over.
 - AWS Replication agent software installed on source servers, replicates everything to AWS

## AWS Migration Hub
Central location to gather application and server inventory info so you can track, assess, and plan migration to AWS. Can help to logically group servers together for migration. 
 - Integrates with the other migration services:
   - Application Discovery Service
   - Application Migration Service
   - Database Migration Service
 - Can make recommendations about modernizing applications
 - assists in modernizing, replatforming some applications into containers
 - helps with cost estimation

