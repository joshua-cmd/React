import React, { Component } from "react";
import { Accordion, Nav, Button, Tab } from "react-bootstrap";
import { Row, Col, Container } from "reactstrap";

class Test extends Component {
  render() {
    return (
      <div>
        <Container className="themed-container" fluid={true}>
          <Tab.Container id="displaycontent" defaultActiveKey="testing">
            <Row className="row content">
              <Col className="sidenav mySidenav" xs="6" md="2">
                <Accordion defaultActiveKey="1">
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="1"
                    className="accordionbtn"
                  >
                    Main tab#1
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="testing">Active</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="tes">sub2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Accordion.Collapse>
                </Accordion>
              </Col>
              <Col className="main">
                <Tab.Content>
                  <Tab.Pane eventKey="testing">testing</Tab.Pane>
                  <Tab.Pane eventKey="tes">testing1</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}

export default Test;