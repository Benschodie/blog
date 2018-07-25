import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  state = {};
  render() {
    return (
      // inline styling
      <div style={{ width: '100%', margin: 'auto' }}>
        {/* adding a grid */}
        <Grid className="landing-grid">
          <Cell col={12} />
          <h1>Hallo</h1>
        </Grid>
      </div>
    );
  }
}

export default Landing;
