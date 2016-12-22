---
keywords: Drupal
date: 15 May 2016
client: Casa Del Lector / National Library of Israel
tags:
  - Museum Exhibit
  - JavaScript
  - Mobile Applications
layout: case
title: Making Memory Come Alive
subtitle: Building a Museum Exhibit with Rich Collections Continents Apart
abstract: It’s not every day that the launch of one of our web products is accompanied by a high-profile international event and written up in El Pais (the highest-circulation daily newspaper in Spain). But we agree, that the project is noteworthy both in terms of the beautiful presentation that it delivered to museum goers for the “Depósito de Memoria” live and online exhibit for the Casa del Lector in Madrid, but also in the technology that drives it, which makes a pretty complex task fairly simple.
header_url: /assets/images/cases/casa-del-lector/header.jpg
facts:
  - Created a clean, fluid, and highly-responsive  navigation through a large set of visual artifacts.
  - Developed a continuous integration process which allowed site admins to import large amounts of content while continuously regenerating static pages.
  - The solution leveraged existing hosting solutions that delivered a fast cost-efficient product.
techs:
  - Data-Driven Document (D3)
  - JavaScript
  - Jekyll
---

{% include setup %}


##The Challenge
In partnership with the [National Library of Israel](http://web.nli.org.il/sites/nli/english/Pages/default.aspx), [Casa del Lector](http://casalector.fundaciongsr.com/) wanted to produce an exhibit that traced several streams of Jewish memory and its interaction and influence within European culture. To do so, they wanted to draw on the immense collection at the National Library of Israel, but to do it in the context of the museum in Madrid.
 
Museum educators had charted a complex path that they wanted museum goers to experience that involved interaction with documents and images of primary sources. To achieve this path, they would need to present viewers with artifacts from the collection at the Casa del Lector, the National Library of Israel, as well as a variety of institutions throughout Europe.

{% include thumbnail.html image_path="assets/images/cases/casa-del-lector/image1.jpg" caption="Opening night Event at Casa Del Lector - exhibit goers use a tablet to navigate the complementary material to the exhibit."%}
 
##The Vision
Casa del Lector sought a tablet-optimized app that would supplement the somewhat minimal exhibit in the museum itself with the archival material from elsewhere. With a “touch-enhanced” experience, exhibit viewers could interact with the objects in front of them, as well as a rich collection of outside artifacts and contextualization that made the objects come alive.

Additionally, a web application could do what a physical exhibit could not - draw explicit links between streams of thought, with immediate delivery of the content that drives that connection. All of this takes place in the viewer’s hands in a self-directed fashion.

{% include thumbnail.html image_path="assets/images/cases/casa-del-lector/image3.jpg" caption="Clean presentation of material from the National Library of Israel to complement the exhibit at Casa Del Lector."%}

##Gizra’s Solution
From a technological perspective, the obstacle to implementation was chiefly in how to assemble all of the media in an efficient manner and present it to viewers in a way that reflected the museum educators’ vision. In addition, the application needed to use best-practice “touch” features and have a fluid and fast interface for viewers so that the online experience could be as visually smooth as the in-person experience.
 
For the front-end, Gizra proposed to use the [Data-Driven Document (D3) project](https://d3js.org/), a JS framework that focuses on document transformations and transitions and helped achieve much of the look and feel that the museum had envisioned. Because it only modifies the attributes that actually change, D3 is able to reduce overhead and allow graphical complexity with a more fluid visualization.

{% include thumbnail.html image_path="assets/images/cases/casa-del-lector/image2.gif" caption="Smooth transitions and navigation using D3."%}

To serve the application, our priority was to deliver a fast and smooth operating experience. To do so, we wanted to be able to serve static pages (to decrease the overhead), but accommodate dynamically changing content. To realize that, we used the Jekyll static site generator combined with GitHub’s web serving feature.  There’s no server-side as such: the data is entered via a 3rd party desktop app and exported into XML, based on which [our code](https://github.com/Gizra/CDL/) creates Jekyll files to be served from Github Pages.
 
##Conclusion
Faced with a unique set of expectations, Gizra used available resources - assembled in a unique way - to deliver a powerful end-user experience for visitors to the Casa Del Lector. Ido Ivri, Head of Business Development and Innovation and the National Library of Israel commented on Gizra’s work on the project:

<blockquote>“Gizra translated our wishes to technical specifications and to a working product and did so in a timely manner and within budget... and captured the needs arising from the different partners.”</blockquote>

Although the live exhibit closed, the project lives on through the web application in both [English](http://gizra.github.io/CDL/) and [Spanish](http://gizra.github.io/CDL-ES/) versions.
