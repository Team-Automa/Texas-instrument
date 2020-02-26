import React, { Component } from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import JoyStick from "./Features/Joystick";
import VideController from "./Features/VideoController";
import { Menu, Grid } from "semantic-ui-react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <div className="left">
                <VideController />
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="right">
                <JoyStick />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Home);
