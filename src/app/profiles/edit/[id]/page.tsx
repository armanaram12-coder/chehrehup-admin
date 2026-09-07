"use client";
import { Edit } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { Authenticated } from "@refinedev/core";

export default function ProfileEdit() {
  return (
    <Authenticated key="profile-edit">
      <Edit title="ویرایش کاربر">
        <Form layout="vertical">
          <Form.Item label="نام کاربری" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="تلفن" name="phone">
            <Input />
          </Form.Item>
          <Form.Item label="آدرس" name="address">
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item label="نقش" name="role">
            <Select>
              <Select.Option value="user">user</Select.Option>
              <Select.Option value="admin">admin</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Edit>
    </Authenticated>
  );
}
