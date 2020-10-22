import { Divider, Typography } from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FormComponent from "../../Components/Form";
import { Data } from "../../Intefaces";
import dataStore from "../../Store/data";

const EditJoke = (props: any) => {
  const router = useHistory();
  const [data] = useState<Data>(dataStore.state());
  const edit = (values: any) => {
    dataStore.editData(values, parseInt(props.match.params.id));
    router.push("/");
  };

  // useEffect(() => {
  //   const subs = dataStore.subscribe(setData);
  //   dataStore.init();
  //   return () => subs.unsubscribe();
  // }, []);

  return (
    <div style={{ maxWidth: "700px", margin: "auto" }}>
      <Typography.Title level={4}>Edit joke</Typography.Title>
      <Divider />
      <FormComponent
        data={Object.values(data?.data).filter(
          (item: any) => item._id == props.match.params.id
        )}
        submit={edit}
      />
    </div>
  );
};

export default EditJoke;
