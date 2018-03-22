
import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import'./Footer.css';

class FooterPage extends React.Component {
  render(){
    return(
      <Footer color="warning-color-dark" className="font-small pt-0">
        <Container>
          <Row>
            <Col md="12">
              <div className="mb-5 flex-center">
              <a className="arrowIcon"><i className="fa fa-arrow-left mr-md-5 mr-3 fa-2x"></i><span>Go Back</span></a>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center">
          <Container fluid>
            &copy; {(new Date().getFullYear())} Copyright: <a href="#"> LaboratoriaSCL </a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;
