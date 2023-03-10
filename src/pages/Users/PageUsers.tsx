import React from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import PageHeader from "../../layouts/PageHeader/PageHeader";
import { ResponsiveUsersTable } from "./ResponsiveUsersTable";

interface PageUsersProps {}

const PageUsers: React.FC<PageUsersProps> = () => {
  return (
    <div>
      <PageHeader titles="Users" active="Users" items={["Home"]} />
      <Row>
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <div className="text-center">
                <small className="text-muted">Total users</small>
                <h2 className="mb-2 mt-0">2,897</h2>
                <CircularProgressbar
                  className="mt-3 mb-3 chart-dropshadow-secondary w-25"
                  value={60}
                  styles={buildStyles({ pathColor: "#05c3fb" })}
                />
                <div className="chart-circle-value-3 text-secondary fs-20 mt-4">
                  <i className="icon icon-user-follow"></i>
                </div>
                <p className="mb-0 text-start">
                  <span className="dot-label bg-secondary me-2"></span>Monthly users{" "}
                  <span className="float-end">60%</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <div className="widget text-center">
                <small className="text-muted">Total Tax</small>
                <h2 className="mb-2 mt-0">$7,543</h2>
                <CircularProgressbar
                  className="mt-3 mb-3 chart-dropshadow-success w-25"
                  value={75}
                  styles={buildStyles({ pathColor: "#09ad95" })}
                />
                <div className="chart-circle-value-3 text-success fs-20">
                  <i className="icon icon-briefcase mt-4"></i>
                </div>
                <p className="mb-0 text-start">
                  <span className="dot-label bg-success me-2"></span>Monthly Income{" "}
                  <span className="float-end">$5,863</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        {/* <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <div className="widget text-center">
                <small className="text-muted">Total Profit</small>
                <h2 className="mb-2 mt-0">$4,468</h2>
                <CircularProgressbar
                  className="mt-3 mb-3 chart-dropshadow-warning w-25"
                  value={85}
                  styles={buildStyles({ pathColor: "#f7b731" })}
                />
                <div className="chart-circle-value-3 text-warning fs-20">
                  <i className="icon icon-chart mt-4"></i>
                </div>
                <p className="mb-0 text-start">
                  <span className="dot-label bg-warning me-2"></span>Monthly Profit{" "}
                  <span className="float-end">$9,234</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col> */}
        {/* <!-- COL END --> */}
        {/* <Col sm={6} md={6} lg={6} xl={3}>
          <Card>
            <Card.Body>
              <div className="widget text-center">
                <small className="text-muted">Total Sales</small>
                <h2 className="mb-2 mt-0">$6,974</h2>
                <CircularProgressbar
                  className="mt-3 mb-3 chart-dropshadow-danger w-25"
                  value={50}
                  styles={buildStyles({ pathColor: "#e82646" })}
                />
                <div className="chart-circle-value-3 text-danger fs-20">
                  <i className="icon icon-basket mt-4"></i>
                </div>
                <p className="mb-0 text-start">
                  <span className="dot-label bg-danger me-2"></span>Monthly Sales{" "}
                  <span className="float-end">$8,097</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col> */}
        {/* <!-- COL END --> */}
      </Row>
      <Row className="row-sm">
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Users</Card.Title>
            </Card.Header>
            <Card.Body>
              <Tab.Container id="left-tabs-example table-bordered" defaultActiveKey="AllProducts">
                <Nav variant="pills" className="product-sale">
                  <Nav.Item>
                    <Nav.Link eventKey="AllProducts" className="text-dark">
                      All Users
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Shipped" className="text-dark">
                      Pending
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="AllProducts">
                    <div className="table-responsive">
                      <ResponsiveUsersTable />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Shipped"></Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PageUsers;
