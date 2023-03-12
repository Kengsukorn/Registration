import React from "react";
import {
  Button,
  Panel,
  FlexboxGrid,
} from "rsuite";
import { Row, Col } from "rsuite";

import { Link } from "react-router-dom";
import Unicorn from '../images/giphy.gif';

const BoxHome = {
  width:"min(100%, 500px)"
};

function Home() {
  return (
    <>
      <Row>
        <Col lg={24} sm={24} xs={24} className="my-20">
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={12} style={BoxHome}>
              <img src={Unicorn} style={{width:"50%",display:"block",margin:"auto"}}/>
              <Panel style={{textAlign:"center",padding:"80px 0"}} header={<h3>งานเปิดตัวยูนิคอร์น</h3>} bordered >
                <div className="button-center">
                  <Button appearance="primary"><Link to="/register" style={{textDecoration:"none",color:"white"}}>ลงทะเบียนเข้าชมงาน</Link></Button>
                </div>
              </Panel>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Col>
      </Row>
    </>
  );
}

export default Home;
