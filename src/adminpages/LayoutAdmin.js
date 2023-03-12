import React from "react";
import {
  Container,
  Header,
  Sidebar,
  Sidenav,
  Content,
  Navbar,
  Nav,
} from "rsuite";
import CogIcon from "@rsuite/icons/legacy/Cog";
import AngleLeftIcon from "@rsuite/icons/legacy/AngleLeft";
import AngleRightIcon from "@rsuite/icons/legacy/AngleRight";
import DashboardIcon from "@rsuite/icons/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";

import { Row, Col } from "rsuite";

import { Table, Pagination } from "rsuite";
import { mockUsers } from "../pages/mock";
import CountingRegister from "../pages/componant/CountingRegister";

const { Column, HeaderCell, Cell } = Table;
const defaultData = mockUsers(20);

const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: "#34c3ff",
  color: " #fff",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Nav>
        <Nav.Menu
          noCaret
          placement="topStart"
          trigger="click"
          title={<CogIcon style={{ width: 20, height: 20 }} size="sm" />}
        >
          <Nav.Item>Help</Nav.Item>
          <Nav.Item>Settings</Nav.Item>
          <Nav.Item>Sign out</Nav.Item>
        </Nav.Menu>
      </Nav>

      <Nav pullRight>
        <Nav.Item onClick={onChange} style={{ width: 56, textAlign: "center" }}>
          {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

function LayoutAdmin() {
  const [expand, setExpand] = React.useState(true);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const handleChangeLimit = (dataKey) => {
    setPage(1);
    setLimit(dataKey);
  };

  const data = defaultData.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });
  return (
    <div className="show-fake-browser sidebar-page">
      <Container>
        <Sidebar
          style={{ display: "flex", flexDirection: "column" }}
          width={expand ? 260 : 56}
          collapsible
        >
          <Sidenav.Header>
            <div style={headerStyles}>
              <span style={{ marginLeft: 12 }}> BRAND</span>
            </div>
          </Sidenav.Header>
          <Sidenav
            expanded={expand}
            defaultOpenKeys={["3"]}
            appearance="subtle"
          >
            <Sidenav.Body>
              <Nav>
                <Nav.Item eventKey="1" active icon={<GroupIcon />}>
                ผู้ลงทะเบียนเข้าชมงาน
                </Nav.Item>
                
                {/* <Nav.Menu
                    eventKey="3"
                    trigger="hover"
                    title="Advanced"
                    icon={<MagicIcon />}
                    placement="rightStart"
                  >
                    <Nav.Item eventKey="3-1">Geo</Nav.Item>
                    <Nav.Item eventKey="3-2">Devices</Nav.Item>
                    <Nav.Item eventKey="3-3">Brand</Nav.Item>
                    <Nav.Item eventKey="3-4">Loyalty</Nav.Item>
                    <Nav.Item eventKey="3-5">Visit Depth</Nav.Item>
                  </Nav.Menu>
                  <Nav.Menu
                    eventKey="4"
                    trigger="hover"
                    title="Settings"
                    icon={<GearCircleIcon />}
                    placement="rightStart"
                  >
                    <Nav.Item eventKey="4-1">Applications</Nav.Item>
                    <Nav.Item eventKey="4-2">Websites</Nav.Item>
                    <Nav.Item eventKey="4-3">Channels</Nav.Item>
                    <Nav.Item eventKey="4-4">Tags</Nav.Item>
                    <Nav.Item eventKey="4-5">Versions</Nav.Item>
                  </Nav.Menu> */}
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        </Sidebar>

        <Container>
          <Content>
            <div className="container mx-auto">
              <Row className="my-20">
                <Col lg={24} sm={24} xs={24}>
                  <CountingRegister />
                </Col>
              </Row>
              <Row>
                <Col lg={24} sm={24} xs={24}>
                  <div>
                    <Table height={420} data={data}>
                      <Column width={50} align="center" fixed>
                        <HeaderCell>Id</HeaderCell>
                        <Cell dataKey="id" />
                      </Column>

                      <Column width={200} fixed>
                        <HeaderCell>First Name</HeaderCell>
                        <Cell dataKey="firstName" />
                      </Column>

                      <Column width={200}>
                        <HeaderCell>Last Name</HeaderCell>
                        <Cell dataKey="lastName" />
                      </Column>

                      <Column width={400}>
                        <HeaderCell>Phone</HeaderCell>
                        <Cell dataKey="phone" />
                      </Column>
                    </Table>
                    <div style={{ padding: 20 }}>
                      <Pagination
                        prev
                        next
                        first
                        last
                        ellipsis
                        boundaryLinks
                        maxButtons={5}
                        size="xs"
                        layout={["total", "-", "limit", "|", "pager", "skip"]}
                        total={defaultData.length}
                        limitOptions={[10, 30, 50]}
                        limit={limit}
                        activePage={page}
                        onChangePage={setPage}
                        onChangeLimit={handleChangeLimit}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Content>
        </Container>
      </Container>
    </div>
  );
}

export default LayoutAdmin;
