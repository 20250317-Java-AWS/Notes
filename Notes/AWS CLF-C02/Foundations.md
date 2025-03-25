
What is the cloud?
Network addressable server computers. Someone else's compute
These powerful servers are split into virtual machines (VMs)
VMs allow users to split these resources
Users can make use of this hardware, managed by amazon, located in amazon data centers

Capital Expenditures (CapEx) - upfront purchases of fixed assets
Opaerating expenses - day to day expenses, continue to accrue over time

advantages of cloud computing
go global in minutes
No data center
Economies of scale
Speed and agility
capacity is elastic
no capital expenditure

Benefits of cloud computing
High availability
Elatticity
Agility
Durability

Cloud computing models
IaaS - Infrustructure as a Service - example: monthly subscription with web hosting service
SaaS - software as a service - full software - example: gmail
PaaS - platform as a service - develop software using web based tools without worrying about infrastructure - ex: tools provided to build a storefront on another company's server

Cloud deployment models:
private cloud - on premises, in your own data center or local env - no cloud advantages, but is more secure as data doesn't have to leave your network, and resources aren't shared with other virtual tenants.
Public cloud - AWS, Azure, GCP, etc.  - All advantages of cloud
Hybrid - a mix of both. Best of both worlds. Private data kept secure locally. Create secure private connections into the public cloud with VPN or Direct Connect - see network tech and services section

Regions and Availability Zones
Regions
Region is a physical location, is a geographic area. For instance, US-East, US-West. South America
Regions are isolated from eachother
resource and service specific, resources are not automatically replicated across

Availability Zones
A region consists of one or more AZ, an AZ consists of one or more data centers
Official definition: "One or more discrete data centers with redundant power, networking, and connectivity in an AWS region."
While data centers may be separate, they are connected with low latency links.
Fault tolerant - outage in one AZ should not impact others
high availability

Edge locations & Local zones
Latency - the amount of time it takes between user request and server response - low latency is good, low delay
Local zones put AWS services closer to end-users, extensions of AWS Regions, provide high bandwidth secure connections back to the region.

Edge locations are a low latency caching solution, not used for launching resources. They are aprt of AWS' backbone network and there are many more than there are regions.


Introducing the frameworks

Perspectives and foundational capabilities




Security
Business
Platform
Operations
Governance
People

cloud adoption
4 Domains
Technology
Process
Organization
Product

Cloud Transformation Journey Phases
Envision
Align
Launch
Scale

This is an AWS Sales pitch... jesus christ.




well architected
"Check your resources for the well architected deep dive course that covers each pillar in depth." 
6 pillars:
security
cost optimization
performance efficiency
operational excellence
reliability
sustainability

General design principles 
Stop guessing capacity needs
Test systems are scale
consider evolutionary architectures
automate with architectural experimentation in mine
drive architectures using data
improve through game days


AWS Management Console - accessible through browser, web based GUI - the main AWS web site once you log in
Root user - the primary user of an AWS account, the only user that can completely delete the account and all resources.
Shouldn't be used for day-to-day tasks. That should be IAM users, set up by the root user.
Should get protected right away with 2FA

AWS CLI - command line interface - can do just about everything as the management console. Sometimes features are available in CLI first
