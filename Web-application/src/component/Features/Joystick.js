import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Grid, Container, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../../styles.css";
class Joystick extends Component {
  state = {};

  static propTypes = {};

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Joysticks</h2>
        <Container>
          <Button color="blue">Joystick module</Button>
        </Container>
        <div style={{ margin: "10px auto" }}>
          {/* grid pattern  */}
          <Grid style={{ padding: "0px -10px" }} columns={3}>
            <Grid.Row>
              <Grid.Column />
              <Grid.Column>
                <Icon
                  className="iconStyle"
                  name="arrow alternate circle up"
                  size="huge"
                  onClick={() => {
                    console.log("up arraw");
                  }}
                />
              </Grid.Column>
              <Grid.Column />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Icon
                  className="iconStyle"
                  name="arrow alternate circle left"
                  size="huge"
                  onClick={() => {
                    console.log("left arraw");
                  }}
                />
              </Grid.Column>

              <Grid.Column>
                <Icon
                  className="iconStyle"
                  name="stop circle"
                  size="huge"
                  color="red"
                  onClick={() => {
                    alert("stop");
                  }}
                />
              </Grid.Column>

              <Grid.Column>
                <Icon
                  className="iconStyle"
                  name="arrow alternate circle right"
                  size="huge"
                  onClick={() => {
                    console.log("right arraw");
                  }}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column />
              <Grid.Column>
                <Icon
                  className="iconStyle"
                  name="arrow alternate circle down"
                  size="huge"
                  onClick={() => {
                    console.log("down arraw");
                  }}
                />
              </Grid.Column>
              <Grid.Column />
            </Grid.Row>
          </Grid>
          {/* end of grid */}
        </div>
      </div>
    );
  }
}

export default Joystick;
