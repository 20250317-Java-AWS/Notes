# Exam Tips
"Exam Tips" given at the end of each video, these seem to be pointing out the most important study topics

## Day 1

Exam Tips:
Lean the categories of services
Read the AWS services whitepaper - 
six advantages of cloud
cloud benefiots
terminology
three computiong models IaaS, SaaS, PaaS
deployment models private public and hybrid
Hybrid deployments are supported by direct connect
Regions are global geographic regions made upo of multiple AZs
AZs are made up of multiple data centers
deployment across multiple AZs offer high availability and fault tolerance

Edge location ensures low latency by placing the content closer to users - caching solution on the backbone network, the edge of amazon's network
Local zone is an extension of a region closer to users, bring the region closer to your locale.




Understand the cloud adoption framework as a whole, and know the 4 phases, know the benefits of using the framework, and what is included in each perspective.
4 phases, 4 domains, 6 perspectives

Understand the "Well-Architected" framework pillars, design principles, and how they apply in the real world
Root user should be protected, has power that other users don't have. Shouldn't be regularly used for tasks, should be the owner of account.

Know EC2 pricing options
on demand, spot, reserves, dedicated hosts, and savings plans
understand the real-world use of EC2

Horizontal and vertical scaling
Auto Scaling
Types of load balancers - classic, application, gateway, network - know the "layers" from OSI and the associates protocols.

Know how to connect to an EC2 instance from the console
Know the ways to connect to a linux instance: instance connect, SSH, and systems manager

Know Elastic Container Service and Elastic Kubernetes Service, and the difference
understand: "lift and shift", Microservices, CI/CD and refactoring


know your responsibility when using serverless services like lambda - you are ersponsible for your code, AWS manages everything else including language support 
Fargate is serverless and used to manage containers.


Lambda has an always free tier that includes 1 million requests/month
Know that fargate has no upfront costs, and only pay for whaty you use in terms of CPU/MEM/storage


understand Lambda can be triggered by events
know that lambda is used for short tasks, not long ones, and has a timeout of 15 mins max

Outposts support hybrid deployment models
Lightsail is a compute service used to quickly launch small projects
Batch ius a compute service that processes large workloads in smaller batches
WAvelength allows users to reach application servers without leaving the 5g network


## Day 2
EBS, EFS, Instance store - know these and their differences
only EBS and EFS are durable, instance stores are ephemeral/volatile
EBS and EFS cost extra, instance store is included in the instance costs.
All 3 are high performance, but EBS is known for "provisioned IOPS", it's extra fast.
EBS is persistent block level storage for EC2, comes in SSD and HDD flavors
SSD - high IOPS
HDD - High Throughput

EBS snapshots are effecient (only changes since last snapshot are saved)
snapshots are good for disaster recovery

S3 is object storage, files + metadata + unique identifier
S3 is very durable, with 11 9's uptime.
It is scalable, durable, secure, and VERSATILE

Remember pricing and retrieval times of different storage classes
remember that most all of these are multi-AZ, except for "S3 one zone infrequent access"
Recognize good use cases for the different storage classes

Bucket names are unique globally, no two buckets can be named the same across accounts worldwide
Buckets are not permissive by default, they deny all until told otherwise
permissions controlled by IAM and bucket policies
files are automatically encrypted by default
files are version controlled
understand the lifecycle policies, and how to use these to optimize costs by automating moving files to different storage classes
FSx is for windows workloads
Elastic disaster recovery is about quickly recovering from disasters with little interruiption, is cost effective

Understand storage gateway is for hybrid storage, a bridge between your data center and AWS
Know the differences between the 4 gateways - s3, fsx, volume, tape
know that storage gateway is cost effective, secure, and offers seamless integration. Good for backups, disaster recovery and data processing

AWS Backup is automated and centralized, integrates with AWS services to offer backups for disaster recovery
AWS backup is secure and complies with data regulations

Know what a CDN is, especially AWS CloudFront
Know what an edge location is
know that cloud front integrates with other AWS services, and is well suited for streaming and e-commerce

Global Accelerator directs traffic through AWS' high speed private network. Great for global reach, traffic spikes, and multi-region applications
Remember it has built in DDoS protection and automatic failover
understand how it integrtes with other AWS services

VPCs allow us to logically isolate a section of the AWS cloud. Creates a virtual network for AWS services.
Understand the roles of subnets, route tables, access control lists, and gateways.
know the difference between public and private subnets
know what security groups are, as well as NACLs and their differences


DNS - translate web addresses to IP addresses - not an amazon service
Route53 is the AWS DNS, and has extra features like geolocation routing, latency based routing, health checking, failover
Route53 can offer a private DNS within VPC
not just a DNS, but a robust global traffic management service


DirectConnect provides a dedicated private connection to AWS, ideal for large data transfers and sensitive data. Prefeable for heavy consistent data transfer requirements.
Two types of VPN: site-to-site for connecting entire networks, client vpn used for individual access. Useful for secure remote connectivity at lower cost

Know the difference between the database types: relational, nosql, in-memory, graph
Know the AWS services for these database types: RDS, dynamodb, memorydb, elasticache, neptune


DMS is for migrating databases
SCT convcerts schemas
Understand when and why we might need to migrate data


DynamoDB is a NoSQL service offering flexible, low-latency, high performance data storage
Scalable, high performance, secure, reliable (like basically everything in the AWS catalog)

understand that memoryDB is fast, and fully compatible with Redis data and APIs
Know that memorydb replicates data across multiple AZs


## Day 3
CICD is about making small frequent changes - once per day or more
CD is about automating the building, testing, and deploying.

CodeCommit - source control - collaborate on code, store source, assets, libraries, etc. (it's AWS github)
CodeBuild - the CI in CICD, builds, tests, integrates.
CodeDeploy - the CD part of CICD, deploys the built artifacts to their destination
codepipeline puts it all together, runs this process and invokes the other services

CloudShell is a browser based shell integrated with the AWS CLI
AWS CLI is a command line tool to manage AWS services

Cloud9 is a browser based IDE (a cloud dev env, or CDE)
Comes with AWS CLI integration and support for popular programming languages

CodeArtifact - artifact repository
can hold third-party or in-house artifacts
artifacts are files like docs, apps, libraries, etc.
devs can find "approved" software packages, tested and vetted.

"Coupling" refers to how interdependent software components are
Tight coupling is generally bad, changes to one part of application cascade to changes elsewhere
loose coupling is the better way, more modern, many benefits, but adds complexity to the system
losely coupled components may be connected, but not dependent upon eachother

SNS - Simple Notification Service - pub/sub service that sends emails and SMS texts
subscribers must subscribe to the topic to receive notifications published to that topic
SNS is push based

SQS is a distributed messaging system - DECOUPLES COMPONENTS so they can operate independently
SQS is pull based, not push.
standard SQS queues are the default, might introduce duplicates or get messages out of order
FIFO queues gurantee no duplicates, and order is preserved. Perfect for financial transactions.
We can poll the queue short or long. short polling responds immediately, even if empty. Long polling will wait for a message before responding, or will time out.
Long polling is generally preferred, as it is more cost effective

SES - Simple Email Service - sends richly formatted emails. Perfect for marketing.

Events are state changes generated by AWS services like EC2, CloudWatch, CloudTrail, or EventBridge itself.
EventBridge matches these events to preconfigured rules that describe where that event message should go, routing them to the correct target
Targets take action in response to the event

Step Functions can help visualize a workflow, can automatically trigger and track each step (steps being serverless functions like lambdas), and can log the state of each step

CloudFormation lets us deploy AWS resources using IaC. Templates (IaC files) are defined in YAML or JSON, and provisions resources quickly, consistently, and with fewer errors.

Elastic Beanstalk deploys and scales our web applications. Supports programming languages like Java, .NET, PHP, Node, Python, Ruby, and Go. Supports technologies like Tomcat, IIS, Nginx, and Docker. Also handles updates, monitoring, and health checking
