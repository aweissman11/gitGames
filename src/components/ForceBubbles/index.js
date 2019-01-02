import React, {
  Component
} from 'react';
import * as d3 from 'd3';

import './ForceBubbles.css';

class ForceBubbles extends Component {
  componentDidMount() {
		const width = 960
    const height = this.props.customHeight
    const nodes = d3.range(400).map(function() { return {r: Math.random() * 12 + 4, s:"hello"}; }),
        root = nodes[0];
    
    const sequentialScale = d3.scaleSequential()
      .domain([0, 100])
      .interpolator(d3.interpolatePlasma);

    root.radius = 0;
    root.fixed = true;

    const forceX = d3.forceX(width / 2).strength(0.015)
    const forceY = d3.forceY(height / 2).strength(0.015)

    const force = d3.forceSimulation()
    .velocityDecay(0.2)
    .force("x", forceX)
    .force("y", forceY)
    .force("collide", d3.forceCollide().radius(function(d){
      if(d === root){
        return Math.random() * 50 +100;
      }
      return d.r + 0.5;
    }).iterations(5)) 
    .nodes(nodes).on("tick", ticked);

    const svg = d3.select(".force-bubbles")
    .attr("width", width)
    .attr("height", height);

    svg.selectAll("circle")
        .data(nodes.slice(1))
        .enter().append("circle")
        .attr("r", function(d) { return d.r; }) 
        .style("fill", function(d, i) { return sequentialScale(i % 100); }); 

    function ticked(e) {
        svg.selectAll("circle")
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
    };

    svg.on("mousemove", function() {
        var p1 = d3.mouse(this);
        root.fx = p1[0];
        root.fy = p1[1];
        force.alphaTarget(0.5).restart();
    });
}

  render() {
    return (
      <div className="force-container">
        <div className="force-box">
          <svg className="force-bubbles" />
        </div>
      </div>
    );
  }
}

export default ForceBubbles;