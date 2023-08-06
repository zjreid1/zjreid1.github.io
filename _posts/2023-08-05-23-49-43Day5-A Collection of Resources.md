---
layout: post
title: Day5-A Collection of Resources 
date: 2023-08-05-23-49-43
categories: [Uncategorized]
---

For day 5 I opted to read a paper from SANS "An Abbreviated History of Automation and Industrial Controls System and Cybersecurity" (Hayden, 2015) that Rob suggested in the reading list.  I found it fascinating how far back control systems and automated sytems go, and I found the 2007 Aurora Generator test even more interesting.


---


- ICS: A term used to encompass the many applications and uses of industrial and facility control and automation systems. ISA-99/IEC 62443 is using Industrial Automation and Control Systems (ISA-62443.01.01) with one proposed definition being ‘a collection of personnel, hardware, and software that can affect or influence the safe, secure, and reliable operation of an industrial process.’ The following table is just a few of the applications and labels we use to describe ICS.

Multiple types of ICS/OT:

- SCADA/EMS (Supervisor Control and Data Acquisition/Emergency Control System)
- DCS (Distribution Control System)
- PCS (Process Control System)
- Building Automation/Management
- Instrumentation and Control (I&C)
- SIS (Safety Instrumented System)

Control Theory: Branch of Engineering/mathematics dealing w/ the behavior of dynamic systems w/ inputs.  The goal of control theory is to calculate solutions for the proper corrective action from the controller that results in system stability

- Classic Control Theory: Single Input and Single Output
- Modern Control Theory: Multiple in and Multiple Output 

Four major functions of control theory:
- Measure
- Compare
- Compute 
- Correct

Elements that make up the four major functions of control theory:
- Sensor
- Transducer
- Transmitter
- Controller
- Final Control Element

Common Automation Types:
- Feedback Control
- Sequence Control

Feedback Control: Continuous process that takes sensor based measurements and makes adjustments based on those measurements via a controller to keep things in a set range. (Think of a water heater, or A/C)

Control loop: All the elements that make up the measurement/control of a single variable

Common Controller Types:
- Open Loop
- Closed Loop

Open Loop Controller: The controller does not have any measurment of the system's output.  These are usually human controlled.  An example is how you control speed in your car.

Closed Loop Controller: A sensor monitors system condition, and feeds the data to a controller which adjusts the output device to achieve the desired result. Think of cruise control in your car


Sequence Control: Either a fixed sequence or a logical one that will perform different actions based on various system states.  Think of an elevator (up, down, open door, close door, other action, etc...)


Control Circuits: A type of circuit that uses control devices to determine when loads are energized or de-energized via current flow.  E.g. a motor w/ a start/stop button which closes the power contact



### History

##### Ancient to Early Industrial Era History:

- Early Greek and Arabic societies had some floating valve regulators for water clocks, oil lamps, wine dispensors, water tanks, etc... 
- One of the earliest known automated controls on record is the ancient water clock of Ktestibios in Alexandria about 250 BCE
- Automata/descriptions of automation go back to 400 BCE from Archytas as simple mechanical devices that could accomplish various movements based on inputs (open control system)
- In 1620 what was effectively the first thermostat was created by Cornelis Drbbel w/ a closed control loop
- The earliest iterations of the governor for steam engines was based off of feedback control mechanisms for windmills patented in 1745
- The above drove creators such as Siemens and Maxwell to create their work around controlling temps, pressures, liquid levels, and speed. 
- Servo-motors came about in 1873 based on Joseph Farcot as a result of steering controls for large ships becoming more complex
- Relay Logic (the on/off status of various controls) came about in the early 1900s for electric utilities, arc lamps, etc...
- At this point control rooms started to become a thing in the early 1920s based around data recorders color-coded light systems

##### Early Industrial Era

- A number of companies/institutions were working on control systems and control theory at this point, including (AT&T, Builders Iron Foundry Company, Foxboro Company, MIT Servomechanisms lab)
- WW1 and WW2 also played a role in bringing together control systems experts to solve multiple problems together from tracking, platform stability, to track prediction, etc...

##### Beginning of Modern Controls and PLCs

- Better understandings of control systems, noise, and measurements began to arise
- Digital control systems came into their own in 1956 and were implemented in 1959 in refineries and plants and were computer controlled
- Ladder logic becomes the standard for PLCs based off of earlier relay systems (relay systems had to be hand wired w/ every update)
- Ladder logic was implemented b/c it was relatively simple, straightforward, and easy to read

##### PLCs come about

- Dick Morely comes up with PLCs in 1968 and was known as a Modicon (MOdular DIgital CONtroller) designed for the machine tool industry. The initial PLCs would last ~50,000 hours
- PLCs started to come along from Schneider, GE, Mitsubishi, Rockwell, etc.. and would only get better w/ time

##### Energy/Utility Automation Systems

- Today utility companies are some of the largest users of ICS and back in the 1930s they started to interconnect for reliability and reduced operating costs.
- With more interconnection came more need for monitoring and automation
- In the 1950s computers were being used to schedule generators for lower cost and reliability based on economic dispatch, automatic generation control.  The beginnings of Energy Management Systems
- Early Supervisory control was expensive and proprietary wiring to each piece of equipment at a remote substation that a remote operator could control.  In the 1960s this morphed into computers and software

##### SCADA

- SCADA has been around since the 1920s with substations next to power plants could be monitored/controlled from the main power room.

##### RTUs

- RTUs were initially developed and deployed during the 60s usually offered by SCADA vendors
- Basic RTUs are/were a communication interface, logic controller, input/output system
- During the 60s/70s RTU comm protocols were vendor proprietary
- Now comms protocols are generally more open and are usually on the order of 9600 baud and can use WAN, Point to Point comms, or POTS


##### Protocols

- Protocols are all over the place w/ up to 30+ process automation protocols, and 6+ power automation protocols
- DNP3 is currently the most common in North America, but you'll also see Modbus and IEC 61850 used


#### Cybersecurity and Control Systems

- In 2007 Idaho National Labs demonstrated a proof of concept of using cyber to make unauthorized changes to ICS components
- In the late 2000s Stuxnet came along to attack ICS/PLCs/Centrifuges
- Using older operating systems (XP for example) is still a major concern


##### Conclusion

- While SCADA/ICS systems have brought benefits to society there are tradeoffs that must be considered including security vulnerabilities, R&D costs, High initial costs, and impact on labor

##### Aurora Generator Test at INL

https://en.wikipedia.org/wiki/Aurora_Generator_Test

https://www.controleng.com/articles/throwback-attack-lessons-from-the-aurora-vulnerability/