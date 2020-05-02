import React from "react";
import rd3 from 'react-d3-library'

var div = document.createElement('div')

const DiffusionScript = () => {
var width = 960,
height = 500;

var nodes = [];

var svg = d3.select("div").append("svg")
.attr("width", width)
.attr("height", height);

var force = d3.layout.force()
.charge(-20)
.size([width, height])
.nodes(nodes)
.on("tick", tick)
.start();

function tick() {
svg.selectAll("circle")
    .attr("cx", function (d) { return d.x; })
    .attr("cy", function (d) { return d.y; });
}

var interval = setInterval(function () {
var d = {
    x: width / 2 + 2 * Math.random() - 1,
    y: height / 2 + 2 * Math.random() - 1
};

svg.append("circle")
    .data([d])
    .attr("r", 1e-6)
    .transition()
    .ease(Math.sqrt)
    .attr("r", 4.5);

if (nodes.push(d) > 300) clearInterval(interval);
force.start();
}, 30);

 return (
   <div id="diffusion"></div>
   );
};


export default props => <DiffusionScript {...props} />;