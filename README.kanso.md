# Kanso D3

This is a kanso package of the [D3](http://mbostock.github.com/d3/)
visualisation library.

## Install

Add to your project's kanso.json dependencies setting:

    "dependencies": {
        "d3": null
    }

Run kanso install to install in your packages directory:

    kanso install

## Using

The core D3 library, d3.js, creates a variable `d3` in the global namespace.
When sub-modules are imported, these are added to the d3 global variable.

So to import d3:

    require('d3');

And to import a sub-module:

    require('d3.layout');

---

The original D3 README.md is provided below.

