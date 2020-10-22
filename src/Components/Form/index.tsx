import { Input, Form, Checkbox, Select, Button, Row, Col, Card } from "antd";
import FormItem from "antd/lib/form/FormItem";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const rules = { rules: [{ required: true, message: "Required" }] };

const FormComponent = (props: any) => {
  const [form] = Form.useForm();
  const router = useHistory();
  const [type, setType] = useState<string>();

  useEffect(() => {
    props.data && form.setFieldsValue(props.data[0]);
  }, []);

  return (
    <Card className="padding-2">
      <Form
        initialValues={{ type: "single" }}
        form={form}
        onFinish={props.submit}
        layout="vertical"
      >
        <FormItem name="category" label="Category">
          <Select placeholder="Select category">
            <Select.Option value="Miscellaneous">Miscellaneous</Select.Option>
            <Select.Option value="Pun">Pun</Select.Option>
            <Select.Option value="Programming">Programming</Select.Option>
            <Select.Option value="Dark">Dark</Select.Option>
          </Select>
        </FormItem>
        <FormItem {...rules} name="joke" label="Joke">
          <Input placeholder="Joke content" />
        </FormItem>
        <FormItem {...rules} required name="flags" label="Flags">
          <Checkbox.Group
            options={["NSFW", "Religious", "Political", "Racist"]}
          />
        </FormItem>
        <FormItem {...rules} required name="type" label="Type">
          <Select onChange={(value: string) => setType(value)}>
            <Select.Option value="single">Single</Select.Option>
            <Select.Option value="two_part">Two part</Select.Option>
          </Select>
        </FormItem>
        {type === "two_part" && (
          <FormItem name="delivery" label="Delivery">
            <Input placeholder="Delivery" />
          </FormItem>
        )}
        <FormItem>
          <Row gutter={24} style={{ float: "right" }}>
            <Col>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Col>
            <Col>
              <Button onClick={() => router.push("/")}>Go back to jokes</Button>
            </Col>
          </Row>
        </FormItem>
      </Form>
    </Card>
  );
};

export default FormComponent;
