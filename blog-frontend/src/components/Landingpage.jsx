import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Landingpage.css';

export default class Landingpage extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to Life of a Noob</h2>
          <p>This Website is build with React and React Bootstrap</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="http://fillmurray.com/600/600"
              circle
              className="profile-pic"
            />
            <h3>Frank</h3>
            <p>
              Reprehenderit commodo enim ipsum excepteur proident. Et et ex
              consequat id ad. Quis consectetur quis do incididunt amet aliquip
              et minim irure excepteur.
            </p>
          </Col>

          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="http://fillmurray.com/600/600"
              circle
              className="profile-pic"
            />
            <h3>Frank</h3>
            <p>
              Reprehenderit commodo enim ipsum excepteur proident. Et et ex
              consequat id ad. Quis consectetur quis do incididunt amet aliquip
              et minim irure excepteur.
            </p>
          </Col>

          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="http://fillmurray.com/600/600"
              circle
              className="profile-pic"
            />
            <h3>Frank</h3>
            <p>
              Reprehenderit commodo enim ipsum excepteur proident. Et et ex
              consequat id ad. Quis consectetur quis do incididunt amet aliquip
              et minim irure excepteur.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
