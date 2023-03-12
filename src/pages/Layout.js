import { Outlet, Link } from "react-router-dom";
import { Container, Header, Content, Footer } from "rsuite";

import { Navbar, Nav } from "rsuite";

const contentHeight = {
    minHeight: "80vh"
};


export default function Layout() {
  return (
    <div className="show-container">
      <Container>
        <Header>
          <Navbar>
            <div className="container mx-auto">
            <Navbar.Brand href="/">KAY</Navbar.Brand>
            <Nav>
              <Nav.Item><Link to="/register">ลงทะเบียน</Link></Nav.Item>
              <Nav.Item><Link to="/visitors">ผู้เข้าชมงาน</Link></Nav.Item>
              <Nav.Item><Link to="/admin">แอดมินเข้าสู่ระบบ</Link></Nav.Item>
              
              {/* <Nav.Menu title="About">
                <Nav.Item>Company</Nav.Item>
                <Nav.Item>Team</Nav.Item>
                <Nav.Menu title="Contact">
                  <Nav.Item>Via email</Nav.Item>
                  <Nav.Item>Via telephone</Nav.Item>
                </Nav.Menu>
              </Nav.Menu> */}
            </Nav>
            </div>
          </Navbar>
        </Header>
        <Container>
          <Content style={contentHeight}>
            <Outlet />
          </Content>
        </Container>
        <Footer></Footer>
      </Container>
    </div>
  );
}
