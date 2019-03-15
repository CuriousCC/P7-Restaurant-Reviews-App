# Restaurant Reviews App 

### Restaurant Review App - Stage 1

This is project #7 for the Udacity Front End Nanodegree course. 

[See live project](https://curiouscc.github.io/P7-Restaurant-Reviews-App/)

### Project Overview

For the Restaurant Reviews projects, students are asked to incrementally convert a static webpage to a mobile-ready web application. 
For **Stage One** the initial code provided is of a static design has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. 
The goal of this project is to update the code to resolve these issues while still maintaining the included functionality. 

This inclides:
* To convert the given static design to be responsive on different sized displays and accessible for screen reader use. 
* To convert it to a Progressive Web Application by caching assets for offline use i.e. to add a service worker to begin the process of creating a seamless offline experience for your users.

### Project Requirements

* **Make the provided site fully responsive.** All of the page elements should be usable and visible in any viewport, including desktop, tablet, and mobile displays. Images shouldn't overlap, and page elements should wrap when the viewport is too small to display them side by side.

* **Make the site accessible.** Using what you've learned about web accessibility, ensure that alt attributes are present and descriptive for images. Add screen-reader-only attributes when appropriate to add useful supplementary text. Use semantic markup where possible, and aria attributes when semantic markup is not feasible.

* **Cache the static site for offline use.** Using Cache API and a ServiceWorker, cache the data for the website so that any page (including images) that has been visited is accessible offline.


### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.

### Leaflet.js and Mapbox:

This repository uses leafletjs with Mapbox. Student needs to replace <your MAPBOX API KEY HERE> with a token from Mapbox. Mapbox is free to use, and does not require any payment information.
   
### Starter Project

You can clone/fork the starter repository [here](https://github.com/udacity/mws-restaurant-stage-1).

### How to Run Application

Possible choices:

1. Open live project [here](https://curiouscc.github.io/P7-Restaurant-Reviews-App/).

2. Or run it on your local machine:

* download or clone the repository
* next follow these instructions

   #### Instructions

   **Running application on local machine**

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 
   In a terminal, check the version of Python you have: `python -V`. If you have `Python 2.x`, spin up the server with `python -m  SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For `Python 3.x`, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's website to download and install the software.

2. With your server running, visit the site: http://localhost:8000.

### About the project

**Graphics and design resources**

Application redesigned by the Author, changed UI/UX of original design. Some assets like photos are delivered with starter project.
External libraries Used

* Normalize.css
* [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/)

### Contributing

This repository is the starter code for all Udacity students. Therefore, we most likely will not accept pull requests.

