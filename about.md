---
layout: post.liquid
title: ""
permalink: "/about.html"
static: true
---

<a name="purpose"></a>

# Purpose

The Software History Futures and Technologies (SHFT) Group was founded by Dr. Eric Kaltman in 2019 as a unified configuration for his research work and those of his students at California State University Channel Islands (CI). The group's work, due to its interdisciplinary nature, is usually conducted with collaborators at CI and other institutions.

<a name="contact"></a>

# Contact

## Mailing Address
Office: Solano Hall Rm 2171<br/>
Lab: Solano Hall Rm 2166<br/>

California State University Channel Islands<br/>
1 University Drive<br/>
Camarillo, CA 93012

On the official CSUCI [map] the group is located in Solano Hall. The lab space is located across the hall from Dr. Kaltman's office.

[map]: http://maps.csuci.edu/?id=502#!m/189857

## Email Address
shft AT csuci.edu

<a name="design"></a>

# Design and Implementation Of This Site

This website is hosted from CI's data center on a dedicated server controlled by the group. It is a complete rewrite of a fork of D. Allan Drummond's [Drummond Lab], which is itself a fork of Trevor Bedford's [Bedford Lab] site. I used this fork as the base for a full revision of the site. While it was designed to be distributed through Github pages, I am using [Github] to host the site source code and then running my site instance in a local Docker container.

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