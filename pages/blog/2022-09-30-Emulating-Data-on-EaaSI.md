---
layout: post
title: "Emulating Bottle Village Disk on EaaSI"
description: ""
author: "Adam Larson"
author_handle: AdamLars
published: true
date: 2022-09-30
tags: posts
---

During SURF 2022, I worked on imaging a CD called BV_Booklet and then getting the data to run on a historically accurate operating system. We acquired this disc from the CSUCI Library to see if we could access any of the information loaded on it for the library. This disc had content about a news story called Grandma Prisbrey’s Bottle Village that took place in Ventura County. First, I loaded the disk into a CD/DVD drive and connected the apparatus to the PC. I then used WinCDEmu to make a .iso image of the disk so I could load it into an emulation system. 

I knew this disc needed an early version of Mac OS to run it, and with some research into which years the disc was created, I found out the creator likely used Mac OS 9. To run this OS locally I used Sheepshaver with a Power Mac 7200&7500 ROM. Once the OS was configured and installed, I mounted the disc to view the files inside the .iso and locate the necessary software I needed to run it. I discovered that the content required QuarkXPress 4 minimum and Adobe Photoshop 5.5 to access the contents of the files. Unfortunately, I could not locate these programs online; however, I found instances of QuarkXPress 5 and Adobe Photoshop 5 to run. I packed these programs into .iso files, mounted them on my Sheepshaver virtual machine, and successfully installed both pieces of software. 

<img src="/assets/images/blog/QuarkXPress5_and_Photoshop5.png" alt="QuarkXPress 5 and Adobe Photoshop 5.0 Installed" style="height: 333.33px; width:432.06px;"/>

The initial configuration of both programs was taken care of when I gave each program a trial launch, so I tried to open the contents of the disc. I could view the image files on the disc through Adobe Photoshop 5.0, just as the original author edited them.

<img src="/assets/images/blog/BV_Booklet_Running.png" alt="BV_Booklet Running" style="height: 333.33px; width:432.06px;"/>

The QuarkXPress 5.0 files also worked so I could scroll through the booklet as the original author had put it together.

<img src="/assets/images/blog/BV_Booklet_Running2.png" alt="BV_Booklet Running Page 2" style="height: 333.33px; width:430.07px;"/>

Next, I wanted to use EaaSI (Emulation-as-a-Service-Infrastructure) to get a browser version of this emulated environment running to share with the CSUCI library faculty and Dr. Kaltman. I downloaded the Mac OS 9 operating system to our local node and uploaded the .iso files I had used to install software locally. I could only load one .iso file into the EaaSI instance at a time, so I linked the .iso file, launched the emulator, installed the software, and saved the environment as a new environment. The saving process took longer based on how large the software installation was, so I logged out of my account to ensure I got a fresh session each time. After QuarkXPress 5.0 and Adobe Photoshop 5.0 were installed, I uploaded the .iso of the BV_Booklet content and loaded the content to the proper instance. I tested the environment to check the upload worked and then saved the environment. Now this environment with the BV_Booklet content can be accessed from any web browser using my credentials. 

<img src="/assets/images/blog/BV_Booklet_EaaSI.png" alt="BV_Booklet Running on EaaSI" style="height: 300px; width:615.53px;"/>
