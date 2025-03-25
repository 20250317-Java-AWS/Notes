"Exam Tips" given at the end of each video, these seem to be pointing out the most important study topics

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