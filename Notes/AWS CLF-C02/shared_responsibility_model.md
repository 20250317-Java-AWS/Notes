# Shared Responsibility Model
When we use amazon resources we must take responsibility for some portion of security and management. What is our responsibility and what is amazon's?
 - You are responsible for security "in" the cloud
 - Amazon is responsibile for security "of" the cloud.
Amazon will make sure their accounts, systems, hardware, and infrastructure are safe and secure. We need to make sure our data, and accounts are secure, and that we adhere to best practices.
Amazon is in charge of the hardware, infrastructure, and underlying software. We are responsible for configuring our services to be safe and secure.
![image](https://github.com/user-attachments/assets/23cd7acc-6f26-4fe2-b295-75c2b8ba80c8)

## Managed Services
The more "fully managed" the AWS service is, the more of our responsibilities are being offloaded onto amazon.  
 - If it's SaaS, you are responsible for the way the software is used, AWS is responsible for the platform and infrastructure.  
 - If we're talking PaaS, you are responsible for how the platform is configured and how the software is used. AWS is responsible for the platform and infrastructure.
 - If we're talking IaaS, you are responsible for any platform running on the infrastructure, and software running on the platform, as well as how that infrastructure is configured. AWS is responsible for the infrastructure.  
Basically whatever amazon is offering, we are responsible for everything "above" that. Amazon is responsible for anything necessary for them to offer us that thing. Once we begin configuring and using the service, evberything else is our responsibility. Amazon supports their offerings, we have to use it correctly. For services that are fully managed, we don't have to worry about configuration, provisioning, or orchestration. We're still responsible for role & resource based authorization.  
A good example: RDS vs. hosting a database on EC2. EC2 is PaaS, while RDS is SaaS. If we are running our own SQL server instance on an EC2 we would be in charge of OS and security patches. But, if we were using RDS, we don't have to worry about OS and security patches, that's the responsibility of AWS, who provides us with software.


## Amazon is responsible for:
 - Anything required for AWS to sell you the service
 - underlying software, not directly interfaced with by users
 - infrastructure
 - regions, AZs, edge locations

## We are responsible for:
 - How we use the AWS services and how we allow our users to use the services
 - Customer data - we're the stewards of the data we place in the cloud
 - Identity & Access management - we are in charge of who uses our stuff built in the cloud, and how they use it
 - We're in charge of configuring and managing software that users interact with, and software that controls the above items:
   - ex: Operating systems, networks, firewalls
 - securing connections between services we use
 - encrypting data in transit and at rest

## Shared Responsibilities
Sometimes some responsibilities are shared, such as with security and comppliance
