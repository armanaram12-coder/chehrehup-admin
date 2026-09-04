"use client";

import { Edit, useForm } from "@refinedev/antd";
import { Input, Select } from "antd";

export default function SupportMessagesEdit() {
  const { formProps, saveButtonProps } = useForm({
    resource: "support_messages",
  });

  return (
    <Edit saveButtonProps={saveButtonProps} title="پاسخ به تیکت">
      <form {...formProps}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label>موضوع:</label>
            <Input name="subject" {...formProps.form?.getFieldProps("subject")} disabled />
          </div>

          <div>
            <label>پیام کاربر:</label>
            <Input.TextArea 
              name="message" 
              {...formProps.form?.getFieldProps("message")}
              disabled
              rows={4}
            />
          </div>

          <div>
            <label>وضعیت:</label>
            <Select
              {...formProps.form?.getFieldProps("status")}
              style={{ width: "100%" }}
              options={[
                { value: "open", label: "باز" },
                { value: "in_progress", label: "در حال بررسی" },
                { value: "closed", label: "بسته شده" },
              ]}
            />
          </div>

          <div>
            <label>پاسخ ادمین:</label>
            <Input.TextArea 
              name="admin_reply" 
              {...formProps.form?.getFieldProps("admin_reply")}
              rows={5}
              placeholder="پاسخ خود را اینجا بنویسید..."
            />
          </div>
        </div>
      </form>
    </Edit>
  );
}
