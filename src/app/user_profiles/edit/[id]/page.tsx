"use client";

import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { Authenticated } from "@refinedev/core";
import { useRouter } from "next/navigation";

export default function UserProfilesEdit() {
  const { formProps, saveButtonProps } = useForm({
    resource: "user_profiles",
  });
  const router = useRouter();

  return (
    <Authenticated
      key="user-profiles-edit"
      fallback={() => {
        router.push("/login");
        return <div>در حال انتقال به صفحه ورود...</div>;
      }}
    >
      <Edit saveButtonProps={saveButtonProps} title="ویرایش پروفایل کاربر">
        <Form {...formProps} layout="vertical">
          <Form.Item label="شناسه کاربر:" name="user_id">
            <Input disabled />
          </Form.Item>

          <Form.Item label="نقش:" name="role">
            <Select
              options={[
                { value: "admin", label: "مدیر" },
                { value: "customer", label: "مشتری" },
              ]}
            />
          </Form.Item>

          <Form.Item label="تلفن:" name="phone">
            <Input />
          </Form.Item>

          <Form.Item label="آدرس:" name="address">
            <Input.TextArea rows={3} />
          </Form.Item>
        </Form>
      </Edit>
    </Authenticated>
  );
}
