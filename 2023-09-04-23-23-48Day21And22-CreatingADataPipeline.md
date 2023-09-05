---
layout: post
title: Day21And22-CreatingADataPipeline 
date: 2023-09-04-23-23-48
categories: [Uncategorized]
---
One of the things I've been curious about is application data/loading and seeing the process end to end, so for part of a weekend project I created an ETL pipeline.  I started by using the NOAA/American Weather Service API since it's free and by most accounts fairly stable.  After figuring out the API calls I needed, I started consuming it (extract), and then worked to get MySQL up and running and model the data I got from the API into an acceptable format (transform) while accounting for potential issues, and then finally loading that into the database(load).  This project let me see a few things:

1.  Different pitfalls where a heavily data dependent application can fail
2.  Different pitfalls when it comes to mapping and modeling the data (such as modeling incorrectly or not accounting for errors)
3.  Getting a better grasp on how the steps of an ETL/Data pipeline interact and feed into an application
4.  Understanding how/where each of the overlapping steps can be vulnerable to different attacks

