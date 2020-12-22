import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid style={{paddingTop:'8%'}}className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <p></p>
              <h1> Alex Simak </h1>
            <hr/>
          <p> 
          Senior at University of Maryland, Baltimore County pursuing a bachelor's degree in Computer Science and minor in Mathematics 
          </p>
        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/alex-simak-920a6b146/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/asimak4/FunProjects" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>


        </div>
        
            </div>

            <img
              src = {require('./monkey.png')}
              alt = ""
              className="avatar-img"
              />

          </Cell>
          
        </Grid>
        
      </div>
    )
  }
}

export default Landing;
