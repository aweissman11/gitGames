import React, {
  Component
} from 'react';
import * as d3 from 'd3';

import './ForceBubbles.css';


class ForceBubbles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    // This block is heavily commented with the purpose of helping people learning D3 to understand each aspect of the code. There are probably more elegant ways to lay out the code but here goes.
  //----------------------------------------------------------------------
  
    //setting variables width and height to the browser window inner Width
    // this is a DOM object- innerWidth is the width of browser window, window.width is the width of the device screen
		var width = 960
    var height = 600

    //d3.range(200) creates an array of 200 numbers 0-199 and uses it as an iterator
    //.map iterates over the range and creates a new array with the math.random calculation
    // then returns json object 
    //.map doesn't mutuate the array, it iterates through the array to create a new array, which is then stored in "nodes"
    // this is setting up the radius of the circles to be random, for this specific block this is
    // the data input, it will create 200 circles with random radii between 4(0*12+4) and 16 (1*12+4)

    var nodes = d3.range(200).map(function() { return {r: Math.random() * 12 + 4, s:"hello"}; }),
        root = nodes[0];

// this section will set the colors of the circles. schemeCategory20 is a set color palette (this may be obsolete in V5?)
// scaleOrdinal will take a discrete input, this code gives the scale a range of the 
// schemeCategory10. Later on in the code color is passed 3 discrete numbers which are then assigned colors from
// the schemeCategory10 palette 
    var color = d3.scaleOrdinal().range(d3.schemePuOr[4]);

//root is the first node, makes an invisible fixed point in the center of the group
    root.radius = 0;
    root.fixed = true;

// this creates two functions that will effect the data on each circle 
// the strength number increases or decreases the proximity of the circles to each other 
// in each axis. Width/2 and height/2 forces the circles to search for the center.
// Putting a negative value in the strength causes the circles to expand forever
// Could apply the forces unevenly (according to some category). Would do that here by
// putting a function where width(height)/2 is

    const forceX = d3.forceX(width / 2).strength(0.015)
    const forceY = d3.forceY(height / 2).strength(0.015)

//forceSimulation is a d3 method that is well described here: https://d3indepth.com/force-layout/
    
    var force = d3.forceSimulation()
    //this controls how fast the circles move. A larger number causes lethargy, 
    //a smaller number causes mania.
    .velocityDecay(0.2)
    //these functions try to force the circles into the center of the graph
    .force("x", forceX)
    .force("y", forceY)
    // this is a function that sets the repelling force of each
    // circle so that they don't overlap
    .force("collide", d3.forceCollide().radius(function(d){
        // this if loop creates the empty circle in the center, by giving the first node (root),
        // which is invisible because it has a radius of 0 from above,
        // a huge repulsion force. Try removing the 100 and making the 50, 500. The empty circle
        // will change sizes on each refresh.
      if(d === root){
        return Math.random() * 50 +100;
      }
      // setting this to just 0.5 causes the circles to overlap
      return d.r + 0.5;
    }).iterations(5)) //without this line the circles will bounce as they are pulled 
                        // together and then repelled continuously. This line limits that process to 5 times.
    .nodes(nodes).on("tick", ticked); //listens for the "tick" event ?

    // select the body and creating a new element of the SVG, and setting the height
    // and width attributes 
    console.log('d3 selection:', d3.select('.force-bubbles'));
    var svg = d3.select(".force-bubbles")
    .attr("width", width)
    .attr("height", height);

    // this is where the circles are created
    svg.selectAll("circle")
        //this applies the nodes array for the data but cuts the root out (takes out the first
        // node). creates a copy of the array and creates a new one with 199 elements
        .data(nodes.slice(1))
        .enter().append("circle")
        //iterates through nodes and sets the radius of each circle 
        .attr("r", function(d) { return d.r; }) 
        //this sets the color as i mod 3, i increments from 0-199
        .style("fill", function(d, i) { return color(i % 3); }); 

// this is a custom function to reset the x and y on each refresh
// could set a boundary here around which the circles can't escape 
    function ticked(e) {
        svg.selectAll("circle")
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
    };

//this section controls what happens when the mouse moves over the graphic
    svg.on("mousemove", function() {
        //p1 is an array that contains the x and y coordinates of the mouse
        var p1 = d3.mouse(this);
        // these set the first node (root) to the x and y coordinates of the mouse
        // which causes the empty circle in the center to follow the mouse
        root.fx = p1[0];
        root.fy = p1[1];
        //this sets how quickly the graphic resets upon each move the mouse
        force.alphaTarget(0.5).restart();//reheat the simulation
    });
}


  render() {
    const { data } = this.state

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