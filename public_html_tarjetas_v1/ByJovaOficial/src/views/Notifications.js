/*!

=========================================================
* ByJova1.1.0
=========================================================

*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table
} from "reactstrap";

class Notifications extends React.Component {
  notify = place => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Black Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };
  render() {
    return (
      <>

<div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Clientes registrados</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Folio</th>
                        <th>Nombre</th>
                        <th>Fecha Inicio</th>
                        <th>Fecha Fin</th>
                        <th>Días de prueba</th>
              
                        {/* <th className="text-center">Salary</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>000000001</td>
                        <td>Sandra Cervantes</td>
                        <td>2020-10-02</td>
                        <td>2020-12-28</td>
                        <td>0</td>
                        {/* <td className="text-center">$36,738</td> */}
                      </tr>
                      <tr>
                        <td>000000002</td>
                        <td>Oscar Guzman</td>
                        <td>2020-10-02</td>
                        <td>2020-12-28</td>
                        <td>0</td>
                        {/* <td className="text-center">$23,789</td> */}
                      </tr>
                      <tr>
                        <td>000000003</td>
                        <td>Luz Valencia</td>
                        <td>2020-10-02</td>
                        <td>2021-01-02</td>
                        <td>02</td>
                        {/* <td className="text-center">$56,142</td> */}
                      </tr>
                      <tr>
                        
                        <td>000000004</td>
                        <td>Alicia García</td>
                        <td>2020-06-02</td>
                        <td>2021-01-10</td>
                        <td>0</td>
                        {/* <td className="text-center">$38,735</td> */}
                      </tr>
                      <tr>
                        <td>000000005</td>
                        <td>Laura Orozco</td>
                        <td>2020-06-02</td>
                        <td>2021-01-10</td>
                        <td>0</td>
                        {/* <td className="text-center">$63,542</td> */}
                      </tr>
                    
                     
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
  
          </Row>
     
          <div className="react-notification-alert-container">
            <NotificationAlert ref="notificationAlert" />
          </div>
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Notifications Style</CardTitle>
                </CardHeader>
                <CardBody>
                  <Alert color="info">
                    <span>This is a plain notification</span>
                  </Alert>
                  <UncontrolledAlert color="info">
                    <span>This is a notification with close button.</span>
                  </UncontrolledAlert>
                  <UncontrolledAlert className="alert-with-icon" color="info">
                    <span
                      className="tim-icons icon-bell-55"
                      data-notify="icon"
                    />
                    <span data-notify="message">
                      This is a notification with close button and icon.
                    </span>
                  </UncontrolledAlert>
                  <UncontrolledAlert className="alert-with-icon" color="info">
                    <span
                      className="tim-icons icon-bell-55"
                      data-notify="icon"
                    />
                    <span data-notify="message">
                      This is a notification with close button and icon and have
                      many lines. You can see that the icon and the close button
                      are always vertically aligned. This is a beautiful
                      notification. So you don't have to worry about the style.
                    </span>
                  </UncontrolledAlert>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Notification states</CardTitle>
                </CardHeader>
                <CardBody>
                  <UncontrolledAlert color="primary">
                    <span>
                      <b>Primary - </b>
                      This is a regular notification made with ".alert-primary"
                    </span>
                  </UncontrolledAlert>
                  <UncontrolledAlert color="info">
                    <span>
                      <b>Info - </b>
                      This is a regular notification made with ".alert-info"
                    </span>
                  </UncontrolledAlert>
                  <UncontrolledAlert color="success">
                    <span>
                      <b>Success - </b>
                      This is a regular notification made with ".alert-success"
                    </span>
                  </UncontrolledAlert>
                  <UncontrolledAlert color="warning">
                    <span>
                      <b>Warning - </b>
                      This is a regular notification made with ".alert-warning"
                    </span>
                  </UncontrolledAlert>
                  <UncontrolledAlert color="danger">
                    <span>
                      <b>Danger - </b>
                      This is a regular notification made with ".alert-danger"
                    </span>
                  </UncontrolledAlert>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col className="ml-auto mr-auto text-center" md="6">
                        <CardTitle tag="h4">
                          Notifications Places<p className="category">
                            Click to view notifications
                          </p>
                        </CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-auto mr-auto" lg="8">
                        <Row>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick={() => this.notify("tl")}
                            >
                              Top Left
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick={() => this.notify("tc")}
                            >
                              Top Center
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick={() => this.notify("tr")}
                            >
                              Top Right
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-auto mr-auto" lg="8">
                        <Row>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick={() => this.notify("bl")}
                            >
                              Bottom Left
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick={() => this.notify("bc")}
                            >
                              Bottom Center
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick={() => this.notify("br")}
                            >
                              Bottom Right
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Notifications;
