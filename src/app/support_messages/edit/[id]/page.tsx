"use client";

import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { Authenticated } from "@refinedev/core";

export default function SupportMessagesEdit() {
  const { formProps, saveButtonProps } = useForm({
    resource: "support_messages",
  });
  
  return (
    <Authenticated key="support-messages-edit">
      <Edit saveButtonProps={saveButtonProps} title="پاسخ به تیکت">
        <Form {...formProps} layout="vertical">
          <Form.Item label="موضوع:" name="subject">
            <Input disabled />
          </Form.Item>

          <Form.Item label="پیام کاربر:" name="message">
            <Input.TextArea disabled rows={4} />
          </Form.Item>

          <Form.Item label="وضعیت:" name="status">
            <Select
              options={[
                { value: "open", label: "باز" },
                { value: "in_progress", label: "در حال بررسی" },
                { value: "closed", label: "بسته شده" },
              ]}
            />
          </Form.Item>

          <Form.Item label="پاسخ ادمین:" name="admin_reply">
            <Input.TextArea rows={5} placeholder="پاسخ خود را اینجا بنویسید..." />
          </Form.Item>
        </Form>
      </Edit>
    </Authenticated>
  );
}
