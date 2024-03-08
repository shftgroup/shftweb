---
layout: post.liquid
title: ""
permalink: "/about.html"
static: true
---

<a name="purpose"></a>

# Purpose

The Software History Futures and Technologies (SHFT) Group was founded by Dr. Eric Kaltman in 2019 at California State University Channel Islands as a unified configuration for his research work and those of his students. The group moved to the University of Alberta in 2024 and frequently collaborates across institutional and disciplinary boundaries.

<a name="contact"></a>

# Contact

## Mailing Address
Office: Old Arts Rm 406 C<br/>
Lab: Old Arts Rm 104<br/>

Media and Technology Studies<br/>
University of Alberta<br/>
Edmonton, AB, Canada T6G 1C9<br/>

<!--
## Email Address
shft AT ualberta.ca 
-->

<a name="design"></a>

# Design and Implementation Of This Site

This website is a complete rewrite of a fork of D. Allan Drummond's [Drummond Lab], which is itself a fork of Trevor Bedford's [Bedford Lab] site. I used this fork as the base for a full revision of the site.

The site uses [Sass] for stylesheets, [Eleventy] for site generation, and [Bootstrap] for reactive design features. 
The main motivation for using Eleventy is that the website itself is a set of static HTML pages, which are easier to maintain and align with the philosophy of minimal computing. The goal is to spare excessive CPU cycles and unnecessary I/O operations as the site is easily cached and easy to preserve.

In the spirit of my website progenitors, please feel free to make use of [this site's source] to construct your lab's site.

[Bedford Lab]: http://bedford.io
[Drummond Lab]: http://drummondlab.org/about.html
[Eleventy]: https://www.11ty.dev/
[GitHub]: http://github.com/ekaltman/shftgroup
[Sass]: http://sass-lang.com/
[Bootstrap]: https://getbootstrap.com/
[this site's source]: https://github.com/shftgroup/shftweb
