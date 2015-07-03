[Wirefy](http://getwirefy.com)
=================

# Build intuitive, powerful wireframes for smarter web development

Wirefy was created as a tool to help web designers and developers create fast, manageable wireframes. It helps to speed up the journey between sketches and final deliverables. Like the web, it is in constant iteration. This requires a simple workflow and a well-defined collection of [atomic elements](http://bradfrostweb.com/blog/post/atomic-web-design/) so that new UIs can be quickly pulled together.

It is our belief that we aren't building pages but rather systems of components. This is why Wirefy has been built to be as flexible and comprehensive as it possible can be.  We are giving you the foundation layer to build on. You can style, add or remove components as you see fit. 

Our goal is to help you make smarter UX decisions by focusing on the content first rather than the subjective design decisions. With a bit of base knowledge of HTML and CSS, you can start building flexible wireframes without the headache of working through countless calculations.

Creating static wireframes can be great but sometimes clients just don't understand how they function or change based on various devices. Building functional wireframes will help you communicate with clients better and work as a foundation for your fluid designs without losing sight of the importance of the content.


## Quick Start

Clone the git repo - `git clone git://github.com/cjdsie/wirefy.git` - or [download it](https://github.com/cjdsie/wirefy/zipball/master)


##Getting started

This framework using Node.js, NPM (Node Package Manager), and Grunt.js to manage the code in this repo. Please make sure that you have these installed to begin with. In order to get started with Grunt, you must install the Grunt command line interface (CLI) globally `npm install -g grunt-cli`. This will give you the ability to use the grunt development tasks found in the Gruntfile.js file. To preview code locally, you'll need to install Node and NPM, then run the following commands from a terminal window, in the repo directory: 

``` bash
 // If Grunt is not installed yet
 $ npm install -g grunt-cli

 // If Grunt is installed start here
 $ npm install
 $ grunt
```
Those commands do the following:

- `npm install` will install the necessary node.js packages to develop on this project
- `grunt` will run a series of tasks defined in Gruntfile.js, such as concatenating or minifying CSS and JavaScript.

This is the only bit of the Node language will you will need to know to use Wirefy. Everything else is simple HTML, Sass and Javascript.

You can also include the `wirefy.min.css` file to the head of any project with CDN. 

`<link rel="stylesheet" src="//cdn.getwirefy.com/wirefy.min.css">` 


## Features

* Percentage based grid system
* Responsive menu
* Placeholder images
* Three options for creating a responsive slideshow
* A suite of form elements
* Standard typography and the use of Font Awesome or Icomoon for icon fonts
* Framework includes all base styles in one place

For full documentation, our homepage [here](http://getwirefy.com). 

## Changelog

*	v3.0.5 New Typography mixin for rem's added, latest version of Font Awesome updated, config.rb file included for compass integration.
*	v3.0.4 Updated README file with Grunt CLI install information and fixed button SASS file for global use across various SASS versions.
*   v3.0.3 SASS Partials restructured for easier maintenance and basic JS functions added in.
*   v3.0.2 Icomoon Font added. Better Partials and added CDN support
*   v3.0.1 Added Grunt functionality for automated tasks.
*   v3.0.0 Rebuilt from the ground up.
*   v2.2.0 Reworked the entire grid to be more semantic and changed several other CSS files. More to come. 
*	v2.1.1 Created Base Partial with Modular Scale Typography
*	v2.0.9 Font Awesome Updated to 3.0 release
*	v2.0.6 Reorganized and consolidated JS files into the plugin.js
*   v2.0.5 Several fixes to the Grid and base.css. As well as a new class for Galleries. Added Templates for faster builds. 
*   v2.0.3 Reduced Image sizes for increased compression overall
*	v2.0.2 Added SASS support
*	v2.0.1 Committed v2.0.1 

## Contributing

Anyone and everyone is welcome to [contribute](/cjdsie/wirefy/blob/master/CONTRIBUTING.md). Help make Wirefy the best responsive wireframe tool.


## Project information

* Source: [http://github.com/cjdsie/wirefy](http://github.com/cjdsie/wirefy)
* Web: [http://getwirefy.com](http://getwirefy.com)
* Twitter: [@wirefy](http://twitter.com/wirefy)

If you've been using Wirefy, we want to hear from you. We want to make Wirefy even better as an efficient tool in your process. Please send us along any feedback you have.

## ToDo

* Create new Template files
* Continue to improve grid and typography


