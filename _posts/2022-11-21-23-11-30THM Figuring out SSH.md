---
layout: post
title: THM Figuring out SSH 
date: 2022-11-21-23-11-30
categories: [Uncategorized]
---

The other day I was doing a [Try Hack Me Room](https://tryhackme.com/room/networkservices#) for understanding common network services.  I came across a part that I didn't fully understand where we pull down an `id_rsa` ssh key, change the permissions on it, and log in with the username using SSH.  

The reason why this confused me is because I didn't know why we had to pull down `id_rsa`, what the permissions were doing, and why it had to change to the SSH folder.

The reason why is because when running `ssh-keygen` it creates a PUBLIC and a PRIVATE key file.  The keyfile that we're grabbing is the private one, while leaving the public one (the `rsa_id.pub`) on the server.[1]

For the permissions part of it, we only want ourselves/the file owner to be able to modify the file and so we give it `chmod-600`, if we were to give it `chmod-777` we would get an error message saying that too many people have rights to the file. [2]

In regards to why the key needs to be in the correct/hidden folder on Linux, that's because SSH looks for keys there, and the private key is generated with the same filename as the public key that's on the server (minus the `.pub` extension for the one that's stored on the server). [3] 

1: https://www.ibm.com/docs/sr/ahts/3.9.6?topic=a-creating-ssh-keys-4

2: https://stackoverflow.com/questions/9270734/ssh-permissions-are-too-open

3: https://kb.iu.edu/d/aews