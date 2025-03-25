# Content Delivery, Networking Technology & Services
## CDN
Content DElivery Network - A global service that delivers content to users quickly by caching it nearby at edge locations
Key Benefits:
 - Speed - reduce distance to content and thus latency
 - Reliability (redundancy) - if one node goes down, traffic routes to the next nearest node
 - gloabl - CDNs make content globally accessible at quick speeds

## CloudFront
AWS CDN service, caches and delivers content securely and swiftly anywhere in the world.
 - Content cached at edge locations
 - Charge for data transfer, not storage
 - Data secured with AWS Shield and Web Application Firewall, helping keep your data secure
 - optimized to work with AWS services like S3, EC2, and Route53
 - detailed analytics - gain insights into user behaviors like what content is popular and where users are accessing it from
 - use cases:
   - streaming content
   - secure transactions
   - traffic spikes

## Global Accelerator
networking service that routes your traffic through AWS global infrastructure, bypass regular traffic. Uses edge locations and the AWS backbone network to find optimal paths to the nearest regional endpoint
Benefits include:
 - improved performance - increases throughput by up to 60%
 - simplified traffic management - provides static IPs, simplifying how traffic is managhed across regions
 - No need for DNS
 - DDoS protection
 - automatic traffic rerouting
 - consistent global experience - anywhere in the world the app works the same

Use cases:
 - Global userbase - reach the whole world
 - high traffic spikes
 - multi-region apps - simplify complicated traffic management
 - low-latency - use AWS' high throughput network

## Networking & VPC
VPC - virtual private cloud - an isolated and secure network. Within the AWS cloud this separates our "cloud" from the rest of the cloud.

Subnets: 
 - public subnets - internet facing - resources here can be accessed from the internet
 - private subnets - isolated - not directly accessible from the internet

Internet Gateway - allows traffic in/out of VPC
Route table - keeps a list of what traffic should go to what resources
 - Every subnet needs a route table, which directs traffic in and out
 - public subnets will typically be associated with an internet gateway allowing traffic in/out from the internet
 - private subnets would route traffic within the VPC, or out to other private networks via VPN or DirectConnect

Security Groups
 - operate at the instance level
 - has a set of inbound rules and a set ofg outbound rules
 - acts like a firewall, allowing or disallowing connections based on source, destination, protocol, port, and IP
 - Stateful: outbound traffic opens an inbound tunnel for responses, return traffic is automatically allowed in regardless of inbound rules

Network Access Control Lists
 - operate at the subnet level
 - stateless - does not automatically allow inbound responses
 - acts like a firewall, allowing or disallowing connections based on source, destination, protocol, port, and IP

## DNS
Domain Name System (service?) Translates human readable web addresses into IP addresses. Not an AWS service, most commonly offered by ISPs, but also there are public DNS' from google and cloudflare among others.

Route53 - Amazon DNS service - has additional features above a normal DNS
 - complex traffic routing (traffic load balancing) - routing based on geolocation and latency, as well as implementing weighted round robin routing
 - Health checks - automatically routes traffic away from unhealthy endpoints
 - DNS failover - automatically redirect users if a resource is unavailble
 - scalability
 - integrated with other AWS services
 - global traffic management
 - Domain Name Registration and management
 - private DNS within a VPC
 
## DirectConnect & VPN
DirectConnect - direct private connection from data center to AWS, bypassing the public internet
 - high speed data transfer, quick and consistent
 - reduced bandwidth costs - save money by reducing data transferred over internet
 - reliable and private connection - stable and secure path not associated with internet issues.

AWS VPN - virtual private network
Encrypts data as it travels over the internet. Two types:
 - site-to-site - (network to network) creates a secure connection between two networks, extends your network into the AWS cloud - ideal for connecting networks
 - client VPN - securely access resources or network from any location - ideal for individual remote access

DirectConnect vs. VPN?
 - DirectConnect is best for:
   - large scale data transfer
   - consistent performance
   - low latency
   - sensitive data
  
 - VPN is ideal for:
   - work-from home
   - low cost
   - quick and easy, uses internet infrastructure, so no new infrastructure needs to be built
  
  
