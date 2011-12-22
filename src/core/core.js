var root = this;

var d3 = {version: "2.7.0"}; // semver

// CommonJS export if available, otherwise add to top level namespace
if (typeof module !== "undefined" && module.exports) {
    module.exports = d3;
} else {
    root.d3 = d3;
}
