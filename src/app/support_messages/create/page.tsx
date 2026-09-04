"use client";

import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { Authenticated } from "@refinedev/core";
import { useRouter } from "next/navigation";

export default function SupportMessagesCreate() {
  const { formProps, saveButtonProps } = useForm({
    resource: "support_messages",
  });
  const router = useRouter();

  return (
    <Authenticated
      key="support-messages-create"
      fallback={() => {
        router.push("/login");
        return <div>در حال انتقال به صفحه ورود...</div>;
      }}
    >
      <Create saveButtonProps={saveButtonProps} title="ثبت تیکت پشتیبانی جدید">
        <Form {...formProps} layout="vertical">
          <Form.Item label="شناسه کاربر:" name="user_id" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="موضوع:" name="subject" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="پیام:" name="message" rules={[{ required: true }]}>
            <Input.TextArea rows={5} />
          </Form.Item>

          <Form.Item label="وضعیت:" name="status" initialValue="open">
            <Select
              options={[
                { value: "open", label: "باز" },
                { value: "in_progress", label: "در حال بررسی" },
                { value: "closed", label: "بسته شده" },
              ]}
            />
          </Form.Item>
        </Form>
      </Create>
    </Authenticated>
  );
}
