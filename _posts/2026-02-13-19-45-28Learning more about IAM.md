---
layout: post
title: Learning more about IAM 
date: 2026-02-13-19-45-28
categories: [Uncategorized]
---


In a [Google Cloud Podcast](https://cloud.withgoogle.com/cloudsecurity/podcast/ep218-iam-in-the-cloud-ai-era-navigating-evolution-challenges-and-the-rise-of-itdrispm/) from April of 2025, Henrique Teixeira, a Senior VP at Saviynt discussed where IAM started and where it's going.

Some of the key things that I learned in this podcast were that the modern conception of computer passwords started in 1961 at MIT for the shared computer time system, and as a result the first password breach occurred in 1962 at MIT because a student wanted more computer time, so they printed out all of the passwords.

In learning about passwords, it was also interesting learning about the major changes in computers and how IAM/security has changed with it, namely from mainframes, to decentralized systems, to the cloud, to AI, and the challenges that come with them.

The old challenges still remain of having to manage everything, especially with the rise of AI systems/agent based AI.  It's also not surprising that the vast majority of attacks are identity based and not so much around cool 0 days, because why should I create a door, when someone already has a key for me that I can steal as the though process goes according to Teixeira.  

Seeing the move away from passwords was also nice to learn in this episode as more and more are adopting passwordless solutions since passwords have been a common pain point.

One of the other fun things to hear discussed was the issue around machine identities and how different companies manage machine access/identity.  For Teixeira, he recommended associating a person with a machine so that the owner can take responsibility and maintain any issues that happen with access or anything else.

I know even in my own job we've had machines that try to access resources and end up locking out service accounts or valid human interactions, so that pain is very real.  In my case, the machine kept repeatedly trying a password that had been updated, but the machine didn't have the new one loaded, so the system it was trying to access saw it as a brute force attack after so many attempts and locked the account it was trying to use out.  Unfortunately, the account was a service account that not only the machine used, but also real people.

Some parting advice that Teixeira was to not go in with any assumptions when trying to solve an issue, because so many analysts want to reinforce their assumptions as opposed to actually working the problem.

As we move more into the AI era, it will be interesting to see how IAM adapts (and the endless stream of acronyms the IAM discipline comes up with as a result)






















