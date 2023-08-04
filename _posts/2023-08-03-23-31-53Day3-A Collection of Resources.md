---
layout: post
title: Day3-A Collection of Resources 
date: 2023-08-03-23-31-53
categories: [Uncategorized]
---


Sooooo today I started coming up with some project ideas, but also started reading a book that was on Rob's resources list called "Industrial Control Systems Hacking Exposed" (McGraw Hill-2017, Bodungen, Singer, Shbeeb, Hilt, Wilholt) and got some fun stuff out of it.  

Here are my notes so far from the Intro and Chapter 1:

## Section 1: ICS Pentesting in Context

INTRO:

- ICS/SCADA/OT are used broadly to describe industrial systems, for a more buzzword approach we would call it the "Industrial Internet of Things" (IIoT)
- Pentesting offers an effective and efficient way to implement a cybersecurity budget to better model risk and asses threats.
- Attempting to pentest ICS can often impact uptime/production/safety at risk.  The book aims to try and show methods that won't impact production and how to employ risk mitigation w/o active testing
- The book is NOT an inclusive guide to ICS risk mitiation/management and does NOT provide compliance guidance to all industries/ICS standards

### Ch1: Intro to ICS Insecurity

- Before PLCs were hand wired timers, relays, and switches.  The MODICON/PLC was made to replace it w/ ladder logic (If/then/else trees) 
- More PLCs coming about led to more logic based systems such as SCADA, DCS, in all manner of industries.
- Initially ICS was separate from the business network, but businesses wanted more visibility into production and thus IT and OT began to merge 

The general purpose of various ICS's is one (or more) of: View, Monitor, Control

```
View: Watch a given process and its state in order to make decisions (usually human interaction is needed here).  This is mostly passive until a human needs to make a decision

Monitor: Monitors the state of a process and is differntiated from "view" b/c the monitor also includes alarm/event conditions and often d/n require human intervention.

Control: Activates valves, motors, and other components to make changes in the physical state of machinery/a process.  Control may be either operator driven or automatic via PLC logic
```

Purdue Model: Describes major internetworking btwn all major components in a substantial ICS

Level 5: Enterprise
- Overall management often across multiple sites/an enterprise and looks at overall supply/demand to manage production and work orders.  ICS's may or may not be connected to this level, but it's possible

Level 4: Site Planning and Logistics
- Usually represents the IT systems at each site/plant that oversees operation at that place.  Monitors performance of lower levels to understand operations, production, and potential problems

---
ICS-DMZ
- A more modern concept but is a layer for sharing info between IT and OT, usually you'll find patch mgmt servers, replication servers, change mgmt systems, etc... here.  Meant to provide secure exchange of IT info w/o exposing critical components in lower layers directly to an attack
---

Level 3: Site mfg and ops control
- Lvels 3 and below define/comprise the OT network.  Level 3 usually has SCADA supervisory aspects, and is the monitoring function for the rest of the ICS.  Usually operator interaction happens here.

Level 2: Area Supervisory Control
- Functions much the same as level 3, but this is where line-level functions exist for local control over individual areas of a process.  PLCs, actuators, drives, etc... start to appear here w/ HMIs

Level 1: Basic Control
- This is the Basic Process Control System (BCPS) where you'll find the sensors, relays, and other components that measure/report values to PLCs/SCADA upstream

Level 0: The Process
- This is where the physical equipment that is being controlled by level 1 is located.  This is where you'll find most drives, actuators, and motors.

---
Safety Layer
- When there's a h/w fault or other adverse condition this is where s/w interlocks or h/w lockouts will come into play to prevent things from breaking or preventing potentially placing people/things in danger.