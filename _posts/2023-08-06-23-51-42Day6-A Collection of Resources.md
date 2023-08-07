---
layout: post
title: Day6-A Collection of Resources 
date: 2023-08-06-23-51-42
categories: [Uncategorized]
---


For day 6 I opted to read the ICS Cyber Kill Chain (Assante, Lee, 2021, SANS) to get an opinion on how ICS attacks are carried out.  While I agree with most of it in aggregate, I feel like only separating it out into two stages is too high level.  Even though the authors go in depth with various phases it feels like there could be more specificty or nuance with the stages presented.  Overall though, the paper presents a well thought out argument for how ICS attacks are carried out, and presents useful case studies. 


- The Cyber Kill Chain was introduced in 2011 by Lockheed Martin analysts to provide a model for IT/Enterprise network defenders
- The ICS Cyber Kill Chain has two main parts: Planning/Prep and Attack Development/Validation

- ICS cyber attacks are different from traditional cyber attacks in that the ICS components are shaped by underlying engineering and processes and therefore require the attacker to have extensive knowledge in order to impact them in a meaningful way

### Stage 1

- Largely resembles an intel/espionage operation for gaining information about the ICS
- Planning/Reconnaissance to gain information through observation or other detection methods.  
	- This can be done via open source intel such as Google or Shodan, or publicly available data via announcements or social media
	- Attackers can use a wide range of information to support their attack campaign
- Preparation can include weaponization or targeting from using an otherwise innocuous file to enable next steps, or by picking/choosing tools or methods to infiltrate the victim
- Intrusion includes an attempt (successful or not) to gain access to the defender's network, assuming there's success there will also be delivery (a way to interact w/ the defender's network) and exploit (performing malicious actions)
	- Exploitation can include installing capabilities or modifying existing capabilities 
- Management/Enablement means establishing some kind of command and control infrastructure, usually w/ multiple paths and redundancies built in and often masquerading as normal traffic
- Action phase can include everything from lateral movement, installation of more capabilities, transmitting data
	- Remediating here is key because it can deny intelligence capabilities that might be key in phase 2


### Stage 2 

- Stage 2 is meant to develop the knowledge gained in stage 1 to develop and test capabilities that can attack the ICS network, adversaries have to be careful in stage 1 that they don't unintentionally tip their hand and accidentally cause an outage (e.g. through network/host discovery overwhelming an ICS network card)
- Attack development/tuning in which attackers will use exfiltrated data to check various attack vectors and methods
- Validation means attackers test their capabilities on similar (if not identical) systems
- Attack means delivering and executing the attack which may be multifaceted or cause conditions to be triggered that manipulate the process 



---- 

- The complexity of launching an attack depends on several factors including the security of the system, the process being monitored/controlled, the safety design, and the intended impact (i.e. a DOS might be easier than surreptitiously manipulating the process )
- Attacks generally fall into 3 categories in an ICS environment: Loss, denial, and manipulation
	- Loss: Loss of view, loss of control
	- Denial: Denial of view, denial of control, denial of safety
	- Manipulation: Manipulation of view, manipulation of control, manipulation of sensors, manipulation of safety
- While high impact attacks such as power grid or dam failures are often discussed, degradation of manufacturing over time resulting in loss of financial stability is often not discussed

--- 

### ICS Case Studies


##### Havex

- Malware campaign against ICS to gather data and network architectures from thousands of sites globally that evolved via new code/modules into a specific ICS toolset
	- Intrusion methods included spearfishing, watering hole attacks via ICS vendors, trojaning ICS installers
	- Multiple versions required a LOT of time, effort, and recon in order to get all these methods to be effective in different contexts 
	- To date, there has been NO follow on action from Havex beyond recon, so no Stage 2 has taken place, but it can be considered a VERY successful Stage 1 attack

##### Stuxnet

- Earliest estimates place Stuxnet happening around the 2006 or 2007 time frame, but the attack was mostly observed in 2010
- Reconnaissance would have been using vendors and removable media, w/ the weaponization being using the zero day exploits
- There was also regularly updating versions of the Stuxnet malware, w/ old versions of Stuxnet being updated as new versions were introduced that crawled the network