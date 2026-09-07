"use client";
import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, Select, message } from "antd";
import { Authenticated } from "@refinedev/core";

export default function ProfileEdit() {
  const { formProps, saveButtonProps } = useForm({
    resource: "profiles",
    redirect: "list",
    onMutationSuccess: () => {
      message.success("کاربر با موفقیت ویرایش شد");
    },
  });

  return (
    <Authenticated key="profile-edit">
      <Edit 
        title="ویرایش کاربر"
        saveButtonProps={saveButtonProps}
      >
        <Form {...formProps} layout="vertical">
          <Form.Item 
            label="نام کاربری" 
            name="username"
            rules={[{ required: true, message: "لطفاً نام کاربری را وارد کنید" }]}
          >
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
