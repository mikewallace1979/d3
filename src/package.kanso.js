require("../test/env");
require("../d3");

require("util").puts(JSON.stringify({
  "name": "d3",
  "version": d3.version + '-kanso-a',
  "categories": ["visualization"],
  "maintainers": [
      {
          "name": "Mike Wallace",
          "url": "https://github.com/mikewallace1979"
      }
  ],
  "url": "http://mbostock.github.com/d3/",
  "modules": ["d3.js",
      "d3.chart.js",
      "d3.csv.js",
      "d3.geo.js",
      "d3.geom.js",
      "d3.layout.js",
      "d3.time.js"
  ],
  "modules_attachment": false,
  "dependencies": {
      "modules": ">=0.0.8"
  },
  "description": "A small, free JavaScript library for manipulating documents based on data."
}, null, 2));
