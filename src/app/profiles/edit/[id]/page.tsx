"use client";
import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, Select, message } from "antd";
import { Authenticated, useNavigation } from "@refinedev/core";

export default function ProfileEdit() {
  const { formProps, saveButtonProps } = useForm({
    resource: "profiles",
    redirect: false,
    onMutationSuccess: () => {
      message.success("کاربر با موفقیت ویرایش شد");
    },
  });

  const { list } = useNavigation();

  return (
    <Authenticated key="profile-edit">
      <Edit 
        title="ویرایش کاربر"
        saveButtonProps={saveButtonProps}
        goBack={() => list("profiles")}
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
