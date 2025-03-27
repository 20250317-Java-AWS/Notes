# Auditing, Monitoring, Logging, Technology and Services
## CloudWatch
About VISIBILITY
 - Tracks metrics in dashboards
 - Stores logs from many sources
 - Can trigger events with alarms
 - This is a tool for monitoring applications and services


## CloudTrail
About ACCOUNTABILITY
 - Centralized logs in an S3 bucket
 - Tracks API activity in your AWS account
 - This is a tool for auditing and tracking actions taken within your account

## Systems Manager
 - Group and manage resources on AWS, on-prem, and other cloud services
 - Take automated actions on resource groups
 - view aggregated operational data from resource groups
 - Systems Manager Parameter Store is for storing sensitive data, like passwords, API keys, and licenses
   - This one is likely to appear on the exam! It's a "secrets store"
  
## AWS Health Dashboard
Gives you a view of the health of services. Will display information about outages. Will inform you about the status of regions and availability zones.
 - has an API to interface with when building your own dashboards

## TrustedAdvisor - KEYWORDS: BEST PRACTICES
Auditing tool which will provide you with best practices on:
 - performance
 - cost optimization
 - fault tolerance
 - service limits
 - security
Trustedadvisor continuously scans your AWS account looking for bad practices. This is similar to a code quality analysis tool, such as sonarlint. Checks for common mistakes such as:
 - Public database and EBS snapshots
 - Open S3 buckets

## AWS Config
This is the service that underpins TrustedAdvisor and other quality analysis tools in AWS. Has sets of pre-defined recommendations, and can take custom rules as well. 
 - Does not take action or enforce standards, but audits adherence

## Well-Architected Tool
Quality analysis tool that will analyze your architecture and adherence to the "Well-Architected Framework". It's SonarLint for the Well-Architected Framework.

## Amazon Connect
Creates a cloud call center. "Cloud based contact center"

## Amazon WorkSpaces
Provides virtual desktops.

## Amazon AppStream
Provides virtual apps. Converts apps to SaaS available in the browser.
