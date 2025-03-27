# Security, Compliance, and Governance
## IAM - Identity & Access Management
 - Root user - the first account, owner of the account and the only one who can destroy the account.
   - should be imediately secured with MFA as soon as account is created
 - Manage identities
 - IAM policies can be attached to users, user groups, and roles.
 - Long lasting passwords and keys are a liability, if possible use IAM roles and rotating keys
 - Define granular permissions
   - uisers should be granted the fewest permissions that allow them to do their tasks, this is the principle of least privilege
#### Principle of Least Privilege
This basically says that actors (entities which take actions, users or automated systems) should onmly be given the permissions to do what they need to do, and nothing else. This way, if their account is comprimised or they decide to act badly the risk is as minimized as possible.

## Secrets Manager - KEYWORDS: ROTATING KEY
 - Alternative to using the Systemns Manager Parameter store
 - Allows for rotating secrets, unlike the parameter store

## AWS Network Firewall
 - lets you define complex rules for and inspect traffic entering a VPC

## WAF - Web Application Firewall
 - protects web applications against common exploits
   - SQL Injection

## AWS Shield
 - DDoS protection

## Firewall Manager
Manages Network Firewall, WAF, and Shield across your orginization

## Security Hub
Receives findings from other security services. Prioritizes and gives actionable advice on how to address findings. Supports and combines security findings from other security services:
 - Firewall Manager (and thus Network Firewall, WAF, and Shield) - alerts you about DDoS attacks and unporotected resources
 - Guard Duty - Tracks activity logs and watches for malicious behavior
 - Inspector - inspects workloads for vultrabilities and network access
 - Macie - searches S3 for sensitive information
 - Systems Manager - detects noncompliant resources
 - Config - uses detective guardrails to detect noncompliant resources
 - IAM Access Analyzer - detects externally accessible resources and identifies unused access
 - AWS Health - reports service outages relevant to you

## AWS Trusted Advisor
Gives advice and best practice suggestions.

## Guard Duty - KEYWORDS: INTELLIGENT DETECTION, ACTIVE THREATS
Collects logs from around AWS and uses machine learning to detect threats
Detects active threats

## Amazon Detective
Helps investigate and analyze security events that have already occurred

## Amazon Inspector
Continuously scans your workloads for vulnerabilities and network exposures

## AWS Orginizations - KEYWORDS: MULTIPLE ACCOUNTS
Designed to help administer multi-account environments. 
 - Share resources across accounts
 - get bulk discounts across accounts
 - organize and limit access across multiple accounts
 - Can apply Config rules, and service control rules across multiple accounts

## Control Tower
Automate multi-account management.

## AWS Artifact - KEYWORDS: COMPLIANCE DOCUMENTS
Lets you download security and compliance documents to share with regulators
