---
layout: post
title: day1-A Collection of Resources 
date: 2023-08-01-23-22-23
categories: [Uncategorized]
---

Summary of day 1 learning 


The basics:

- ICS touches a lot of different areas and processes
- ICS uses a lot of different categories of devices to control/monitor/regulate the processes that happen
- IT and OT can overlap but also have different priorities
- The Purdue Model (Office IT -> Plant OT -> SCADA/RTU/Field Devices) is still relevant today
- Introducing cybersecurity requires a balance of different factors, but a lot of OT is still vulnerable


Source: Robert Lee's A Collection of Resources for Getting Started in ICS/SCADA Cybersecurity

Source: CISA/DHS - ICS Basics Recorded Webinar

**Industrial Control System:** 
```
Any system that gathers information on an industrial process, and modifies, regulates, or manages the process to achieve a desired result.

```

**Varieties/"flavors" of ICS:**

- SCADA (Supervisor Control/Data Acquisition)
- DCS (Distributed Control System)
- PCS (Process Control System)
- EMS (Energy Management System)
- AS (Automation System)
- SIS (Safety Instrumented System)


**IT vs OT**

- IT: Computing Technology (servers, desktop, etc...)
- OT: Systems/devices that monitor events/processes and systems/devices that make adjustments to industrial operations
- Note there is overlap as IT can be part of OT


**SCADA:**

- Interface w/ DCS, PCS, and EMS
- Used in multiple orgs
- Interfaces w/ multiple controllers
- SCADA covers a wide area

**Distributed Control System**

- Vendors provide HW/SW/Support
- Very large and expensive
- HMI is tightly integrated

**PCS:**

- Consists of computers, process control equipment and comms networks and algorithms for maintaining the output of a specific function/process w/in a desired range.
- DCS/SCADA Hybrid (Similar to SCADA architecture, but performs DCS type functions)
- Comms w/ field controllers using plant networks


**EMS:**

- Uses data from field/SCADA systems to increase energy performance and efficiency
- i.e. load forecasting, economic generation, distribution management, etc...

**AS**

- Automation systems are used in warehouses, inventory control, robots, smart homes, HVAC, hot/cold water, lighting, etc...
- Think of all the automated parts that go into the shipping/transport of an item in an Amazon warehouse, that's an example of an automated system.


**SIS**

- Designed to protect people/equipment/environment by reducing/preventing the likelihood of an impact of an emergency event.
- Often used in refineries, nuclear, chem plants, etc...


**ICS Architecture**

- E.g. the Purdue Model
 - Servers include: Historians, App server, DB server/Processing Servers
 - Engineering Workstations
 - HMI - provides a graphical view into the process
 - Field controller (coordinate field devices based on HMI input (often a controller will be an RTU, PLC, PAC, Intel Electronic Devices))
 - Field devices (control the process via valves, sensors, and actuators)




**Common ICS Cyber Vluns**

- Plain-text traffic/open protocols
- DoS
- Buffer overflows
- Weak/known passwords
- Absence of embedded countermeasures
- Dependent on underlying OS
- More features = increased attack surface
- Current IT measures may not be best mitigation fit

**ICS Tradition Isolation**

- There USED to be an airgap between IT and OT, but IT wanted more visibility/metrics from OT so therefore connections started to be made often w/ security as an afterthought

**ICS Cyber Vuln Root Causes**

- Legacy Control Systems
- Network/Platform vulns as migration takes place w/ more IT
- Connectivity to network architecture
- Infosec culture shift