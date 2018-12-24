import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Route, withRouter, Switch } from 'react-router-dom';

import './DataSlider.css';

class DataSlider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gridClass: 1,
      rightClass: '',
      leftClass: 'hide-slide-btn',
      dot1: 'current-graph-dot',
      dot2: 'graph-dot',
      dot3: 'graph-dot',
      dot4: 'graph-dot',
      dot5: 'graph-dot',
    }
  }

  triggerSlideBtn = direction => {
    const { gridClass } = this.state;
    let newClass = gridClass;

    if (gridClass === 2 && direction === 0) {
      newClass--;
      let currentDot = 'dot' + (newClass);
      
      console.log('gridClass:', gridClass);
      console.log('newClass:', newClass);
      console.log('currentDot:', currentDot);
      this.setState({ 
        gridClass: newClass,
        rightClass: '',
        leftClass: 'hide-slide-btn',
        dot1: 'graph-dot',
        dot2: 'graph-dot',
        dot3: 'graph-dot',
        dot4: 'graph-dot',
        dot5: 'graph-dot',
        [currentDot]: 'current-graph-dot' 
      })
    } else if (gridClass < 4 && gridClass >= 1) {
      direction === 0 ? (newClass-=1) : newClass++;
      let currentDot = 'dot' + (newClass);
      
      console.log('gridClass:', gridClass);
      console.log('newClass:', newClass);
      console.log('currentDot:', currentDot);
      this.setState({ 
        gridClass: newClass,
        leftClass: '',
        rightClass: '',
        dot1: 'graph-dot',
        dot2: 'graph-dot',
        dot3: 'graph-dot',
        dot4: 'graph-dot',
        dot5: 'graph-dot',
        [currentDot]: 'current-graph-dot' 
      })
    } else if (gridClass === 4 && direction === 1) {
      newClass++
      let currentDot = 'dot' + (newClass);
      
      console.log('gridClass:', gridClass);
      console.log('newClass:', newClass);
      console.log('currentDot:', currentDot);
      this.setState({ 
        gridClass: newClass,
        rightClass: 'hide-slide-btn',
        leftClass: '',
        dot1: 'graph-dot',
        dot2: 'graph-dot',
        dot3: 'graph-dot',
        dot4: 'graph-dot',
        dot5: 'graph-dot',
        [currentDot]: 'current-graph-dot' 
      })
    } else if (gridClass === 4 && direction === 0) {
      newClass--
      let currentDot = 'dot' + (newClass);
      
      console.log('gridClass:', gridClass);
      console.log('newClass:', newClass);
      console.log('currentDot:', currentDot);
      this.setState({ 
        gridClass: newClass,
        rightClass: '',
        leftClass: '',
        dot1: 'graph-dot',
        dot2: 'graph-dot',
        dot3: 'graph-dot',
        dot4: 'graph-dot',
        dot5: 'graph-dot',
        [currentDot]: 'current-graph-dot' 
      })
    } else if (gridClass === 5) {
      newClass--;
      let currentDot = 'dot' + (newClass);
      
      console.log('gridClass:', gridClass);
      console.log('newClass:', newClass);
      console.log('currentDot:', currentDot);
      this.setState({ 
        gridClass: newClass,
        rightClass: '',
        leftClass: '',
        dot1: 'graph-dot',
        dot2: 'graph-dot',
        dot3: 'graph-dot',
        dot4: 'graph-dot',
        dot5: 'graph-dot',
        [currentDot]: 'current-graph-dot' 
      })
    }
  };

  render() {
    return (
      <div className='data-slider'>
        <div 
          className={`slide-btn-left ${this.state.leftClass}`}
          onClick={() => this.triggerSlideBtn(0)}
          value='left'
        >
          <button className='slide-left'>LEFT</button>
        </div>
        <div 
          className={`slide-btn-right ${this.state.rightClass}`}
          onClick={() => this.triggerSlideBtn(1)}
          value='right'
        >
          <button className='slide-right'>RIGHT</button>
        </div>
        <div className='graph-dots'>
          <div className={`${this.state.dot1}`}></div>
          <div className={`${this.state.dot2}`}></div>
          <div className={`${this.state.dot3}`}></div>
          <div className={`${this.state.dot4}`}></div>
          <div className={`${this.state.dot5}`}></div>
        </div>
        <section className='graphs'>
          <div className={`graph-grid position-${this.state.gridClass}`}>
            <article className='graph'>
              <h1>GRAPH 1</h1>
            </article>
            <article className='graph'>
              <h1>GRAPH 2</h1>
            </article>
            <article className='graph'>
              <h1>GRAPH 3</h1>
            </article>
            <article className='graph'>
              <h1>GRAPH 4</h1>
            </article>
            <article className='graph'>
              <h1>GRAPH 5</h1>
            </article>
          </div>
        </section>
      </div>
    );
  }
}

export default DataSlider;
