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
import subprocess
import shutil

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

# Open notepad and title the resulting file
print('notepad opened: ' + str(datetime.now()))
osCommandString = "notepad.exe" + " " + timestamp + posttitle + ".md"
subprocess.call(osCommandString)
print('notepad closed: ' + str(datetime.now()))

# Upon user closure of notepad, copy the file to "posts_"
dataString = timestamp + posttitle + ".md"
originPath = os.getcwd()
targetPath = originPath + r"\_posts"
shutil.copy(originPath + '\\' + dataString, targetPath + '\\' + dataString)



# Git Commit
subprocess.run(['git', 'add', '.'])
print("git add completed")
subprocess.run(['git', 'commit', '-m', 'adding blog post'])
print("git commit with commit message completed")
print("ready for git push origin main")

"""
# Git Commit
subprocess.Popen("git add .")
print("git add completed")
subprocess.Popen('git commit -m' " adding blog post")
print("git commit with commit message completed")

"""