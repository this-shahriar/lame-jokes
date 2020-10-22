import { Button, Card, Col, Row, Table, Tag, Typography } from "antd";
import React, { useLayoutEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Nav } from "../../Components/Nav";
import { Data, jokeInterface } from "../../Intefaces";
import dataStore from "../../Store/data";

const Jokes = () => {
  const router = useHistory();
  const [data, setData] = useState<Data>(dataStore.initialState);

  //table header configuration as per ant design guidelines
  const cols = [
    {
      title: "Joke",
      render: (value: jokeInterface) => {
        return (
          <div>
            <Typography.Text style={{ fontSize: "0.7rem" }}>
              {value?.category}
            </Typography.Text>
            <br />
            <Typography.Text strong>{value?.joke}</Typography.Text>
            <br />
            {value?.delivery && (
              <Typography.Text>{value?.delivery}</Typography.Text>
            )}
          </div>
        );
      },
      key: "joke",
    },
    {
      title: "Flags",
      key: "flags",
      render: (value: jokeInterface) => {
        return value?.flags?.map((item: string) => (
          <Tag key={item}>{item}</Tag>
        ));
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (value: jokeInterface) => (
        <Row gutter={24}>
          <Col>
            <Button onClick={() => router.push(`/${value._id}/edit`)}>
              Edit
            </Button>
          </Col>
          <Col>
            <Button
              type="primary"
              onClick={() => router.push(`/${value._id}/play-jokes`)}
            >
              Play
            </Button>
          </Col>
        </Row>
      ),
    },
  ];

  useLayoutEffect(() => {
    const subs = dataStore.subscribe(setData);
    dataStore.init();
    return () => subs.unsubscribe();
  }, []);

  return (
    <div>
      <Nav />
      <Card>
        <Table
          pagination={{ pageSize: 5 }}
          columns={cols}
          dataSource={data?.data ? Object.values(data?.data).reverse() : []}
        />
      </Card>
    </div>
  );
};

export default Jokes;
