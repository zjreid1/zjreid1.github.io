---
layout: post
title: Working with Okta and SAML integration 
date: 2026-03-01-01-41-02
categories: [Uncategorized]
---

To get the slideshow/presentation that goes with this post, check [here](/assets/saml.pdf)

### Why

This writeup covers how I went through and set up a Salesforce integration using a developer Okta and Salesforce account.

One of the things that I've wanted to delve into more with IAM is actually setting up useful IAM integrations across apps, users, and functionality.  Reading through various reddit accounts, posts, and comments, I realized that I could set up an Okta developer account and try out various features and integrations (such as Salesforce).  Although I've touched on why I wanted to carry out this project I think it also showcases a number of things that blue teams touch on when setting things up from configurations, to documentation, and working through various requirements (either from the business, GRC, or the client).

### Some Background

In order to get this set up I spent about $10 for an organizational email (AKA: an email that's not outlook, gmail, yahoo, etc...) and created a Salesforce and Okta dev account for both of them.  It's also helpful here to delve into SAML vs OIDC vs OAUTH 2.0. The short version is that Security Assertion Markup Language (SAML) is a standard for exchanging AuthN and AuthZ information between and IDp and a service provider that is XML based to enable SSO [read the SAML standard here](https://www.oasis-open.org/standard/saml/).

OAUTH 2.0 is a more modern standard [RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749) that's better able to interact with modern web frameworks, APIs, etc... being more lightweight and with more granular control.  The shortcoming of OAUTH 2.0 is that it's an AuthZ standard and OpenID Connect [standard](https://openid.net/specs/openid-connect-core-1_0.html) is built on top of OAUTH2.0 to allow for easy identification.  

### Why Work With an Older Standard?

SAML is still widely used in a number of integrations and being able to understand the SAML integration and AuthN/AuthZ workflow more helps understand pitfalls and potential trouble spots as well as still being useful for IAM overall.

### Setup

Having gone through and set up Okta and Salesforce dev accounts, the first general thing we need is users that we're going to have access the systems/applications in question.  Luckily Okta makes this pretty easy in being able to add people or groups and specify various characteristics including name, email, username, activation, etc...

From the central Okta dashboard we can also start setting account management policies and rules and getting into the details if we want.  While going through the details is useful to know where things can get messy and complicated, for this writeup we'll continue on with getting Salesforce set up and connected.

With Okta, the integration is fairly straightforward with app integrations and SSO options and luckily Salesforce makes it easy on their side as well with identity and SSO settings.   

<img width="823" height="604" alt="image" src="https://github.com/user-attachments/assets/54c180e3-e676-4df2-be88-7da5107d2677" />

<img width="764" height="602" alt="image" src="https://github.com/user-attachments/assets/dfdd53ca-c3f2-4796-ab94-f7762f69c8ef" />

<img width="883" height="598" alt="image" src="https://github.com/user-attachments/assets/78eb970f-4a41-4710-a262-8107abf4d067" />



### Troubleshooting

One of the issues that I ran into was that despite the fact that I had everything set up correctly on the Okta side, I did have to re-check my settings on the Salesforce side as when I tried to login to one of the users I set up previously I ran into an SSO error.

The way I went about troubleshooting was my usual methodology of "Read, Search, Ask" which can be further refined into "Narrow down the problem, Identify a potential solution, Try something (and hope it works), Repeat as needed".

The initial Salesforce error message wasn't very useful so I opted to dive into the logs, and I noticed that the login was hitting the Okta side of things but not the Salesforce side, so I dug a bit further into the Salesforce side and noticed that I had copied/pasted an incorrect link leading to the SSO error.

After fixing the issue the example user was able to login and I could verify it from both the Okta and Salseforce logs.

<img width="791" height="529" alt="image" src="https://github.com/user-attachments/assets/0d413bf9-f452-46ac-bb55-7cb48731f4b8" />

<img width="1067" height="455" alt="image" src="https://github.com/user-attachments/assets/e47a85d0-dbf5-44c8-87f3-10098e647425" />

### Lessons

1.  Have good documentation. It makes everything infinitely easier and helps not only you, but anyone who may come after you.

2.  It's easy to get lost in configuration details.  While there is no cutting, the addage of "check config twice, implement once" fits nicely here as I likely would have avoided my issue had I double checked the configs.

3.  Analyze an issue from all sides.

<img width="593" height="442" alt="image" src="https://github.com/user-attachments/assets/314bb34f-9b27-4c68-9691-a1b6b83660a1" />



### Conclusion and Future Expansions

Overall this was a fun project and a fun dive into implementing practical IAM/SAML.  I know that I want to build on this with future integrations and concepts such as JML, SCIM, and connecting it to AD if I can.
