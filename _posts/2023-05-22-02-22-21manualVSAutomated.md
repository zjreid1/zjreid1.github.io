---
layout: post
title: manualVSAutomated 
date: 2023-05-22-02-22-21
categories: [Uncategorized]
---

While studying for the OSCP two terms kept confusing the hell out of me "Methodology" and "Enumeration" specifically "Manual Enumeration".  There wasn't really a good glossary or definition on what those terms were or what they meant so I kind of floundered along studying various material.  Strangely enough though while studying for the Sec+ I came across a definition for intrusive and non-intrusive scans that answered the "Manual" enumeration part for me.  


```
Non-intrusive scans simply identify a vulnerability and report on it so you can fix it. Intrusive scans attempt to exploit a vulnerability when it is found.

Source: https://www.beyondtrust.com/resources/glossary/vulnerability-scanning
```

Manual enumeration will have you input the commands for scanning for various ports and how the scan is to be conducted in addition to getting back information on the OS, version, etc... Automatic enumeration will have you input a command but the program will take over from there if it finds something it can exploit or if there's something that matches in its DB.  

For Methodology, that's more about "how do you approach things and execute them?" Do you only scan the first 1000 ports?  Do you go loud and fast to start with or slow and quiet?  Do you get as much detail as possible, or just a quick scan?  What's your order of operations?  What directory list do you use for Dirbuster?  Having an answer to questions like that when you go into an unknown environment or box is the method/approach/choices you make.  It's answering the question(s) WHAT are you doing, WHY are you doing it, and what VALUE is there in the scan/tool/command you're using (AKA: What do you hope to get out of it)?

A methodology might be something like:

Step 1: Run a quick scan on the first 100 ports

Step 2: While the scan is running, check and see if there are available services that you can connect to (web server, telnet, etc...)

Step 3: 

3A: If the scan comes back and there's nothing interesting on the first 100 ports, do a quick scan of the NEXT 100 ports (repeat as needed)

3B: IF the scan comes back and there IS something interesting, THEN prioritize the services/ports that will likely have the most value or be the easiest exploited and try and work on them for ~45 minutes.  If after 45 minutes you get nowhere, move on to the next service/port.