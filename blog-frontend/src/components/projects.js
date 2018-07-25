import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from 'react-mdl';

class Projects extends Component {
  constructor(probs) {
    super(probs);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQ1NNAqi988kjkqNSV-Nqv-fIpevLiyw3iJSBtEQ0M4ug8XOf6A)'
              }}
            >
              HTML & CSS Notes
            </CardTitle>
            <CardText>
              Aliqua non ipsum et ipsum mollit. Nostrud pariatur laborum enim
              consequat officia sit Lorem.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQ1NNAqi988kjkqNSV-Nqv-fIpevLiyw3iJSBtEQ0M4ug8XOf6A)'
              }}
            >
              HTML & CSS Notes
            </CardTitle>
            <CardText>
              Aliqua non ipsum et ipsum mollit. Nostrud pariatur laborum enim
              consequat officia sit Lorem.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQ1NNAqi988kjkqNSV-Nqv-fIpevLiyw3iJSBtEQ0M4ug8XOf6A)'
              }}
            >
              HTML & CSS Notes
            </CardTitle>
            <CardText>
              Aliqua non ipsum et ipsum mollit. Nostrud pariatur laborum enim
              consequat officia sit Lorem.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle
            style={{
              color: '#fff',
              height: '176px',
              background:
                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQ1NNAqi988kjkqNSV-Nqv-fIpevLiyw3iJSBtEQ0M4ug8XOf6A)'
            }}
          >
            HTML & CSS Notes
          </CardTitle>
          <CardText>
            Aliqua non ipsum et ipsum mollit. Nostrud pariatur laborum enim
            consequat officia sit Lorem.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle
            style={{
              color: '#fff',
              height: '176px',
              background:
                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQ1NNAqi988kjkqNSV-Nqv-fIpevLiyw3iJSBtEQ0M4ug8XOf6A)'
            }}
          >
            HTML & CSS Notes
          </CardTitle>
          <CardText>
            Aliqua non ipsum et ipsum mollit. Nostrud pariatur laborum enim
            consequat officia sit Lorem.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle
            style={{
              color: '#fff',
              height: '176px',
              background:
                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQ1NNAqi988kjkqNSV-Nqv-fIpevLiyw3iJSBtEQ0M4ug8XOf6A)'
            }}
          >
            HTML & CSS Notes
          </CardTitle>
          <CardText>
            Aliqua non ipsum et ipsum mollit. Nostrud pariatur laborum enim
            consequat officia sit Lorem.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>HTML/CSS Notes</Tab>
          <Tab>JavaScript Notes</Tab>
          <Tab>React Notes</Tab>
          <Tab>Git Notes</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
