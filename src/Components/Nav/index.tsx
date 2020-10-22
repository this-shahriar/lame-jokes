import { Button, Col, Divider, Row } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

export const Nav = () => {
  const router = useHistory();
  return (
    <div>
      <Row style={{ float: "right" }} gutter={24}>
        <Col>
          <Button onClick={() => router?.push("/add")}>+ Add new Joke</Button>
        </Col>
        <Col>
          <Button onClick={() => router.push(`/1/play-jokes`)} type="primary">
            Play jokes
          </Button>
        </Col>
      </Row>
      <br />
      <Divider />
    </div>
  );
};
