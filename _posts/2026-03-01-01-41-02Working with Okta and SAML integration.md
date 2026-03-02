---
layout: post
title: Working with Okta and SAML integration 
date: 2026-03-01-01-41-02
categories: [Uncategorized]
---

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
