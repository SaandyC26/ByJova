/*!

=========================================================
* ByJova v1.1.0
=========================================================

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class CreateCard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Información Personal de Cliente</h5>
                </CardHeader>
                <CardBody>
                  <Form>

                  <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Nombre Cliente</label>
                          <Input
                            // defaultValue="Mike"
                            placeholder="Nombre(s)"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Apellidos</label>
                          <Input
                            //slcer defaultValue="Andrew"
                            placeholder="Apellidos"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                    <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Empresa</label>
                          <Input
                            // defaultValue="Mike"
                            placeholder="Nombre de la empresa"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email de contacto
                          </label>
                          <Input placeholder="ventas@byjova.com" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Número de contacto</label>
                          <Input
                          //slcerfalta validar numero telefono
                            // defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            placeholder="Teléfono"
                            type="text"
                            size="12"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Guardar
                  </Button>

                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/emilyz.jpg")}
                      />
                      <h5 className="title">ByJova</h5>
                    </a>
                    <p className="description">Tarjetas digitales</p>
                  </div>
                  <div className="card-description">
                   
                    {/* Do not be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is... */}
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      {/* //slcerfalta agregar icono  */}
                      <i className="fab fa-instagram-square" />
                    </Button>
                    <Button className="btn-icon btn-round" color="whatsapp">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>

                  <div className="card-description">
                  <Button className="btn-icon btn-round" color="whatsapp">
                      <i className="fab fa-google-plus" />
                    </Button>
                   {/* Do not be scared of the truth because we need to restart the
                   human foundation in truth And I love you like Kanye loves
                   Kanye I love Rick Owens’ bed design but the back is... */}
                 </div>

                </CardFooter>
              </Card>
            </Col>
          </Row>



          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Datos de Tarjeta</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Nombre</label>
                          <Input
                            defaultValue=""
                            // disabled
                            placeholder="Nombre"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>(Servicio) Título o Profesión</label>
                          <Input
                            // defaultValue="ByJova Inc."
                            placeholder="Nombre de la empresa"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      
                    </Row>
                    <Row>
                    <Col md="6">
                        <FormGroup>
                          <label>Número de contacto</label>
                          <Input
                          id="phoneClient"
                          //slcerfalta validar numero telefono
                            // defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            placeholder="Teléfono"
                            type="text"
                            size="12"
                          />
                          </FormGroup>

                          {/* <FormGroup check>
                              <label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </label>
                            </FormGroup>
                      <label className="title">Whatsapp</label> */}
                    </Col>
                    <Col className="pl-md-1" md="6">
                    <FormGroup>
                          <label>Mensaje de whatsapp</label>
                          <Input
                            cols="80"
                            disabled
                            placeholder="Me interesa adquirir una tarjeta de presentación digital"
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                      </Row>

                      <Row>
                      <Col md="6">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email
                          </label>
                          <Input placeholder="ventas@byjova.com" type="email" />
                        </FormGroup>
              
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Página web</label>
                          <Input
                            // defaultValue="Andrew"
                            placeholder="byjova.com"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col  className="p1-md-1" md="6">
                        <FormGroup>
                          <label>Twitter</label>
                          <Input
                            // defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            placeholder="Link de Twitter"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    
                      <Col className="p1-md-1" md="6">
                        <FormGroup>
                          <label>Facebook</label>
                          <Input
                            // defaultValue="Mike"
                            placeholder="Link de Facebook"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      </Row>

                      <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Instagram</label>
                          <Input
                            // defaultValue="Andrew"
                            placeholder="Link de Instagram"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Linkedln</label>
                          <Input placeholder="Link de Linkedln" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
        
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Guardar
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          
          </Row>
        </div>
      </>
    );
  }
}

export default CreateCard;
