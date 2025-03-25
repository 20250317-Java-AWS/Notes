EC2 families:
General purpose
Compute Optimized
Memory Optimized
Accelerated Computing
Storage Optimized
High Performance Computing Optimized


EC2 Pricing:
On-demand 
no upfront payment
for uninterruptable workflows
workloads that won't last longer than a year
Capacity Reservations - hold capacity whether or not we un an instance, good for high availabiliuty, disaster recovery, and capacity assurance

Spot instances - CHEAPEST OPTION - utilize unused EC2 compute power
Not concerned with start or stop timews
Can interrupt the workload
very low prices
Pay the price in effect at the beginning of the hour and save up to 90% off on-demand prices

Dedicated hosts - physical machines dedicated to running your instances
regulatory or compliance requirements may need to not share virtual resources with others
licensing may require hardware, or be prices on hardware like per-socket
up to 70% off on-demand prices
dedicated server is hardware, dedicated instance runs on dedicated host

Reserved instances
use when you can commit to steady usage over the long term
you can pay all or partially up front, best discounts when paying more up front.
Reserve capacity for any duration

Savings Plans - commit to compute usage plan for 1-3 years measured per hour
Lowers your bill across many services
No capacity Reservations

Load balancing
Classic - TCP, SSL/TLS, HTTP, HTTPS
best used for EC2-classic network
Not the commonly used
gateway - IP
Limited in usage, so not very common
application load balancers - HTTP, HTTPS
network - TCP, UDP, TLS
extreme performance

Scaling - up/vertical vs out/horizontal

Compute optimizer - helps optimize compute services by rightsizing, recommendations, identifying over/under-provisioned resources


How to access EC2s:
Management Console
Instance Connect
SSH(Linux) and RDP(Windows) - requires SSH key pair
AWS Systems Manager - Session manager


Containers
Benefits
portability
operational consistency
efficiency
application development
less overhead
Use cases:
"lift and shifts" - ???
refactoring applications
microservices
CICD deployments
repetitive/background/batch jobs

How do containers work on AWS?
ECR - Elastic Container Registry - image repository
ECS -Elastic Container Service - orchestrate and scale containers
EKS - Elastic Kubernetes Service - orchestrate and scale containers

EKS vs ECS
EKS uses kubernetes, ECS uses fargate
ECS supports docker and docker compose, EKS supports Kubernetes



What is serverless?
Cloud native development model, not actually serverless. You can't access them directly, so we pretend it's serverless. 
Lambda - serverless compute service. Write lambda functions in many popular languages
use cases: real time file processing, send email notification, backend business logic
Fargate - pay as you go auto scaling compute engine
build/select container, define resources, run and manage containers
fargate tasks are isolated by design - does not share any kernels, cpus, or memory, or elastic network interfaces with any other tasks
use cases: message driven workloads

Tip: lambda vs fargate: lambda good for short and redundant tasks ( < 15 min ), fargate good for event driven and scheduled workloads ( > 15 mins )

Serverless pricing and features
Lambda supports programming languages like Java, Go, C#, Python, Ruby and more
Use various dev environments
Lambda executes code in response to events
up to 15 minute time-out, default 3 seconds
Charged based on number of request and durations.
pay for compute time used, rounded up to closest milisecond

Fargate pricing
no upfront costs
no free tier
pay for resources used: cpu/mem/storage


Outposts
run cloud services in your own data center. Amazon expands their AWS system into your data center.
Good for low latency, or data security, data residency/soverignty regulations
Outposts come in two flavors: 
outpost rack
outpost server

Lightsail - quick deployment of simple workloads that can scale as they evolve
allows you to quickly launch all services needed for small projects, like preconfigured web pages or small test environments. H
Very simple UI
plan bundles all necessary services together
monitoring, storage, DNS, RDP/SSH, Static IP
low cost
Lightsail for research allows more powerful computers for complex simulations


Batch - allows processing larger workloads into smaller chunks or "batches"
typically used for longer running jobs
capable of running many man smaller batch processing jobs
automatically provisions and scales instances based on workload
Example use case: sending out mass emails, batch breaks up the many thousands of emails into smaller chunks

Wavelength - ultra low latency to devices and users on the mobile network
Like an edge location or local zone for the 5g network



