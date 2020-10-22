import { Button, Card, Col, Divider, Row, Spin, Tag, Typography } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import dataStore from "../../Store/data";

const PlayJokes = (props: any) => {
  const router = useHistory();
  const [delivery, setDelivery] = useState(false);
  const allData: any = dataStore.state().data;
  const data: any = Object.values(allData).filter(
    (item: any) => item._id == props.match.params.id
  )[0];

  const timer = () => {
    setTimeout(() => setDelivery(true), 3000);
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto", textAlign: "center" }}>
      <div className="padding-3" />
      <Typography.Title level={4}>Playing jokes</Typography.Title>
      <Divider />
      <Card className="padding-2">
        <Divider>
          <Typography.Text>{data?.category}</Typography.Text>
        </Divider>
        <br />
        {data?.flags?.map((item: string) => (
          <Tag key={item}>{item}</Tag>
        ))}
        <Divider />
        <Typography.Title level={2}>{data?.joke}</Typography.Title>
        {data?.delivery && timer()}
        {data?.delivery && !delivery && <Spin />}
        {data?.delivery && delivery && (
          <Typography.Title level={1}>{data?.delivery}!</Typography.Title>
        )}
      </Card>
      <Divider />
      <Row gutter={24}>
        <Col>
          <Button onClick={() => router.push("/")}>Go back to all jokes</Button>
        </Col>
        <Col>
          <Button
            onClick={() =>
              router.push(
                `/${Math.round(
                  Math.random() * (Object.values(allData)?.length - 1) + 1
                )}/play-jokes`
              )
            }
            type="primary"
          >
            Next Joke
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default PlayJokes;
