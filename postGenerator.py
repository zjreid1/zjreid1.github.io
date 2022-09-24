# -*- coding: utf-8 -*-
"""
Created on Thu Sep 22 23:18:27 2022

@author: MediaPC
---
layout: post
title:  "Welcome to Jekyll!"
date:   2022-09-22 02:38:20 -0700
categories: jekyll update
---

"""

# Creating a Jekyll post template in Python

from datetime import datetime
import os

#Creating the time variable to reference in the post
t = datetime.now()
timestamp = t.strftime("%Y-%m-%d-%H-%M-%S")

#requesting user input for filename
posttitle = input("Please input a filename: ")

#Creating new file with neccessary standards
newFile = open(timestamp + posttitle + ".md", "a")
newFile.write("---\n")
newFile.write("layout: post\n")
newFile.write("title: " + posttitle + " \n")
newFile.write("date: " + timestamp + "\n")
newFile.write("categories: [Uncategorized]\n")
newFile.write("---\n")

newFile.close()
osCommandString = "notepad.exe" + " " + timestamp + posttitle + ".md"
os.system(osCommandString)