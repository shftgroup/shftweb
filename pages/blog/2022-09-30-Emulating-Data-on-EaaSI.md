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

During my Summer Undergraduate Research Fellowship at CSUCI in 2022, I worked on emulating historical projects from Carnegie Mellon’s Entertain and Technology Center and California State University of Channel Islands’ Library. Part of our goal was to create historically accurate emulated environments of these projects so the library could view these projects in their original context. I first worked on imaging an optical disc called “BV_Booklet” which contained many files that are inaccessible on modern computers. This disc had content about an art installation from Ventura County called Grandma Prisbrey’s Bottle Village. First, I loaded the disk into a CD/DVD drive and connected the apparatus to the PC. I then used WinCDEmu to make a .iso image of the disk so I could load it into an emulation system.

I knew this disc needed an early version of Mac OS to run it because when I tried to access the disk on a Windows computer I was warned it was not formatted for this computer. With some research into which years the disc was created, I found out the creator likely used Mac OS 9. To run this OS locally I used Sheepshaver which is an emulator specifically for Mac OS 9. Sheepshaver also required you to input an image of a ROM file to run the emulator, so I used a Power Mac 7200&7500 ROM. Once the OS was configured and installed, I mounted the disc to view the files inside the .iso and locate the necessary software I needed to run it. I discovered that the file contents required QuarkXPress 4 and Adobe Photoshop 5.5. Unfortunately, I could not locate these programs online; however, I did find instances of QuarkXPress 5 and Adobe Photoshop 5 that were able to read the files. I packed these programs into .iso files, mounted them on my Sheepshaver virtual machine, and successfully installed both pieces of software.

<div style="text-align: center">
<img src="/assets/images/blog/QuarkXPress5_and_Photoshop5.png" alt="QuarkXPress 5 and Adobe Photoshop 5.0 Installed" style="text-align: center; height: 333.33px; width:432.06px;"/>
</div>

I could view the image files on the disc through Adobe Photoshop 5.0, just as the original author edited them.

<div style="text-align: center">
<img src="/assets/images/blog/BV_Booklet_Running.png" alt="BV_Booklet Running" style="text-align: center; height: 333.33px; width:432.06px;"/>
</div>

The QuarkXPress 5.0 files also rendered correctly so I could scroll through the booklet as the original author had put it together.

<div style="text-align: center">
<img src="/assets/images/blog/BV_Booklet_Running2.png" alt="BV_Booklet Running Page 2" style="text-align: center; height: 333.33px; width:430.07px;"/>
</div>

Next, I wanted to use EaaSI (Emulation-as-a-Service-Infrastructure) to get a browser version of this emulated environment running to share with the CSUCI library faculty. I downloaded the Mac OS 9 operating system to our local node and uploaded the .iso files I had used to install software locally. I could only load one .iso file into the EaaSI instance at a time, so I linked the .iso file, launched the emulator, installed the software, and saved the environment as a new environment. The length of the saving process depended on how large the software installation was, so I logged out of my account to ensure I got a fresh session each time. After QuarkXPress 5.0 and Adobe Photoshop 5.0 were installed, I uploaded the .iso of the BV_Booklet content and loaded the content to the proper instance. I tested the environment to check the upload worked and then saved the environment. Now this environment with the BV_Booklet content can be accessed from any web browser using my credentials.

<div style="text-align: center">
<img src="/assets/images/blog/BV_Booklet_EaaSI.png" alt="BV_Booklet Running on EaaSI" style="height: 300px; width:615.53px;"/>
</div>

I hope that this emulated environment will be useful to library staff at CSUCI to preserve digital content around Grandma Prisbrey’s Bottle Village that was sadly damaged in the 1994 Northridge Earthquake. Our hope is that this kind of work to preserve and give new life to historical software will be useful to historians.
