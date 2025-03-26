# Development, Messaging, and Deployment Technology and Services
## What is CI/CD?
 - Automate everything to do with building, testing, and deploying
 - made for rapid release schedules - many small updates which depend on automation
 - automated: fast, repeatable, scalable.  As opposed to manual operations which are slow, and error prone
 - When devs commit to the remote repo, we merge, build, test, and deploy

## AWS Development Tools
Tools to allow us to quickly implement CI/CD processes

### CodeCommit
 - like GitHub, is a remote repository host - central code repository
 - store source, binaries, libraries, and assets
 - tracks code changes, maintains version history, allows collaboration.

### CodeBuild
 - Builds and tests, this is the CI
 - integrated with CodeCommit repos

### CodeDeploy
 - automated deployment service
 - can deploy to EC2, On-prem servers, and AWS lambda

### CodePipeline
 - Automated CI/CD pipeline.
 - Triggered every time there is a change to the code (a commit)
 - CodePipeline puts together the three services above:
   - CodeCommit gets the changes, triggers the pipeline
   - codebuild builds and tests the project
   - codedeploy takes the built "artifacts" and sends them where needed
  
CICD Workflow:
merge       >     prepare    >    deploy
CodeCommit  >    CodeBuild   >   CodeDeploy

CodePipeline puts those phases together and passes artifacts between the services.


## Understanding CodeArtifact
CodeArtifact is an artifact repository, like maven, node NPM, or python PIP
CodeArtifact supports open-source libraries, and in-house software packages
"Artifacts" are basically any files produced or consumed or supplied by automated software systems
packages in AWS CodeArtifact are "approved", that is they're vetted and tested for quality and safety

## Decoupling Application Components
Tight coupling means components in the application depend on eachother to a great degree. In general looser coupling is better.
Monolithic (traditional) architectures are often more tightly coupled. More modern "distributed architectures", "service oriented architecture", or "microservices" are more losely coupled.
application components can operate independantly and asynchronously
AWS Services supporting distributed architectures:
 - SQS - simple queue service - a messaging service connecting decoupled components asynchronously - If you see the word "decouple" in the test, it's likely talking about SQS
 - SNS - Simple Notification Service
 - EventBridge

## Introducing SNS - Simple Notification Service
SNS allows us to automate sending communications via SMS text or email.
Pub/sub model - like observer pattern - we publish messages to some "channel" or "topic", and subscribers are either notified, or the message is delivered to them
Applications or monitoring tools can inform services like CloudWatch about problems, which in turn will use SNS to push that communication out to subscribers, like the IT staff who need to address the problem


## Introducing SQS - Simple Queue Service - KEYWORDS: DECOUPLE, DECOUPLING
A queue is a temporary repository of messages. Publishers publish messages into the queue, and other software components will read from the queue
Unlike SNS, SQS is "pull based", meaning it is up to subscribers to consume the messages in the queue
multiple publishers and subscribers can be adding and consuming messages all at once
messages are processed asynchronously, helping decouple the systems communicating from eachother
messages in standard SQS queues are guranteed to be consumed at least once
this kind of decoupling is great for distributed architectures, and horizontal scaling

### Standard vs FIFO SQS queues
standard is the default, and gurantees a message is "delivered" or "consumed" at least once. It won;t exit the queue until something consumes it. "Best effort ordering" generally messages are delivered in the same order as sent, but not really guranteed. Due to asynchronousness, messages might get delivered out of order, or sometimes one message could be delivered more than once
FIFO - first in first out - the ordering is "strictly preserved". Messages will never be delivered out of order, and will only be delivered exactly once each. No duplicates. - great for financial transactions

### Short Polling vs Long Polling
Short polling retuirns a response immediately even if the queue is empty, can result in many empty responses (whcih are not free)
Long polling will wait for a message before responding, or eventually time out. Fewer empty responses, saving money. 
Long polling is generally more cost effective.

## Simple Email Service
Automatically sends richly formatted (HTML) emails.
Send bulk emails, track open and click-through rates.
Good for marketing campaigns.
Don't confuse this with SNS, which also can automate emails. SNS emails are for information, SES emails are generally for marketing.

## Amazon EventBridge - KEYWORDS: EVENT-DRIVEN ARCHITECTURE
Service that allows us to configure event-driven systems, or schedule events.
All about event-driven architecture, if the exam mentions this it's likely talking about EventBridge
Events are changes in state. State changes could be generated by AWS services like EC2, CloudWatch, or CloudTrail. 
Rules configure where these events should target, like EC2, Lambda, or SNS. Targets will respond to this event by taking some action.
We can even schedule events originating from EventBridge, for instance an event that occurs every hour, or on a specific date/time.

## Understanding Step Functions
Step functions manage the logic of distributed workflows. 
Build and run serverless applications as a series of steps whcih execute in order as we define.
Output from one step can be input to the next, this is like a pipeline of behaviors.
Step functions can help visualize out workflow

## Deploying with CloudFormation
IaC - Infrastructure as Code - files containing configurations which are kept with source files and tell an automated system how to behave
CloudFormation is the AWS IaC provisioning service
CloudFormation templates (IaC files) can be defined as YAML or JSON, then CloudFormation reads the template and acts accordingly making API calls to create and provision resources as defined in the template.
These resources built from the tempalte is called a "CloudFormation Stack"
CloudFormation has many of the same benefits as CICD pipelines, consistency, speed, and fewer errors.
Cloudformation is free, we pay for the resources it provisions, not for the provisioning itself.

## What is Elastic Beanstalk?
Deploys and scales our web applications, provisioning the AWS resources needed like EC2, RDS, S3, Elastic Load Balancers, Auto Scaling, etc.
It does this based on an "environment" that we define.
Supports programming languages like Java, .NET, PHP, Node, Python, Ruby, and Go.
Supports technologies like Tomcat, IIS, Nginx, and Docker
Also handles updates, monitoring, and health checking
