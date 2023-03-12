import React from "react";
import { Row, Col } from "rsuite";

import { Table, Pagination } from "rsuite";
import { mockUsers } from "./mock";
import CountingRegister from "./componant/CountingRegister";

const { Column, HeaderCell, Cell } = Table;
const defaultData = mockUsers(20);

function AllVisitors() {
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
    <>
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
    </>
  );
}

export default AllVisitors;
