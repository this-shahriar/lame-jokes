import { Divider, Typography } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import FormComponent from "../../Components/Form";
import dataStore from "../../Store/data";

const AddJoke = () => {
  const router = useHistory();
  const create = (values: any) => {
    dataStore.createData(values);
    router.push("/");
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto" }}>
      <Typography.Title level={4}>Create a joke</Typography.Title>
      <Divider />
      <FormComponent submit={create} />
    </div>
  );
};

export default AddJoke;
