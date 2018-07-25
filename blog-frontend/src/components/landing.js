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
          <Cell col={12}>
            <img
              src="https://i.pinimg.com/originals/45/d9/8a/45d98aa922bef6b5213b488dc36a8764.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Junior Web Developer</h1>
              <hr />

              <p>
                HTML/CSS | JavaScript | React | Biotope | Bootstrap | Wordpress
              </p>
              <div className="social-links">
                {/* Instagram */}
                <a
                  href="http://instagram.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="http://github.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Instagram */}
                <a
                  href="http://youtube.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
