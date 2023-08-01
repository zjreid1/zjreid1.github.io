---
layout: post
title: Linux on a Chromebook Failed 
date: 2023-07-31-19-33-04
categories: [Uncategorized]
---
Over the weekend I got a used Chromebook from a friend and wanted to turn it into a reasonably lightweight linux box.  The thing I didn't count on was UEFI and how much of a pain in the ass it would be.  To start out with I did a decent amount of research and had a plan in place and switched over from the ChromeOS bootloader over to the Mr. Chromebox one, opting to fully flash the BIOS and not dual boot (this was my mistake).  Initially I threw Kali Linux on a USB drive and tried to install it but got the dreaded " Kali Linux failed; verify it has UEFI 64-Bit OS" (this would be a recurring theme over the next couple of days).  So over the weekend I tried a number of different solutions from using Rufus, to different OS's (Ubuntu, Mint, Elementary, Parrot, etc...), to trying rEFInd, and trying to mount from the live distro, and even trying to swap the GRUB/efi bootloader.  Ultimately nothing worked, I'll probably try and flash it back to ChromeOS and dual boot it, but for right now it's a rabbit hole and I'll work on something else in the meantime.

