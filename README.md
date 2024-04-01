# Gatsby React Boilerplate

![Gatsby React Boilerplate](https://img.shields.io/badge/version-1.0.0-blue.svg)
![MIT License](https://img.shields.io/badge/license-MIT-green.svg)

This repository provides a solid starting point for developing React applications using Gatsby, a modern framework for building blazing fast websites and web applications.

## Features
- Basic configuration and folder structure
- Utilizes PostCSS and Sass (with Autoprefixer and Pixrem)
- Integrates Bootstrap 4 grid system
- Data sourced from local JSON files
- Includes Node.js server code for easy, secure, and fast hosting
- SVG sprites: Add icons in components/icon as .icon files and use them

## Requirements
- Node.js: for all the magic
- Gatsby

## How to Proceed
1. Prepare a coffee ☕
2. Run `npm i` to install the dependencies
3. Run `npm run dev` to run Gatsby
4. You should shortly see some text that says "The development server is listening at: http://localhost:8000". Open that address in your browser and start coding!

## How to Build
- Run `npm run build` to build the website into the `/public` folder

## Considerations
- RTL: The usual method of generating different CSS files for RTL pages (as seen in static-html-boilerplate) will not work out of the box here since Gatsby pulls all the CSS together, this means the RTL CSS will override the LTR one.

