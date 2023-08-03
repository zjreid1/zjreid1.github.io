---
layout: post
title: Day2-A Collection of Resources 
date: 2023-08-02-23-50-41
categories: [Uncategorized]
---

### SCADA Utility 101 - Rusty Williams

**General Electrical Layout:** 
Generation -> lines/power substation -> distribution system -> end point

**Ways of Monitoring**
Legacy: Wait and see what breaks (squeaky wheel), Active monitoring via personnel
Modern: Use various data points across the network (basically the Purdue model)


**Key Terms**
SCADA (Supervisory Control and Data Acquisition): Generic term referring to a computer system that monitors, influences, controls, or regulates a process. 

RTU: Computer that reads data from a given point and may take an action (a thermostat is an example of an RTU)

**Different Ways SCADA is used:**

- Water infrastructure
- Building/HVAC systems
- Manufacturing
- Transit Systems


**What SCADA does:**

- Detects problems
- Gathers quantitative data
- Monitors for balancing/efficiency

**SCADA components:**

- Data Acquisition: Sensors and control relays that interface w/ the system being managed
- Data Collectors: RTUs serve as local collection points for gathering reports from sensors and delivering commands to the control relays
- Data Comms: Network that connects the SCADA primary unit to the RTUs in the field
- Data Presentation/Control: Larger computer consoles that serve as the central processor for the SCADA system.  These provide an HMI to the system and automatically regulate the managed system in response to sensor inputs