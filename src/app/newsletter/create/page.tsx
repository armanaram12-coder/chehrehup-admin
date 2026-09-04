"use client";

import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Switch } from "antd";
import { Authenticated } from "@refinedev/core";
import { useRouter } from "next/navigation";

export default function NewsletterCreate() {
  const { formProps, saveButtonProps } = useForm({
    resource: "newsletter_subscribers",
  });
  const router = useRouter();

  return (
    <Authenticated
      key="newsletter-create"
      fallback={() => {
        router.push("/login");
        return <div>در حال انتقال به صفحه ورود...</div>;
      }}
    >
      <Create saveButtonProps={saveButtonProps} title="افزودن مشترک جدید">
        <Form {...formProps} layout="vertical">
          <Form.Item label="ایمیل:" name="email" rules={[{ required: true, type: "email" }]}>
            <Input />
          </Form.Item>

          <Form.Item label="وضعیت فعال:" name="is_active" valuePropName="checked" initialValue={true}>
            <Switch checkedChildren="فعال" unCheckedChildren="غیرفعال" />
          </Form.Item>
        </Form>
      </Create>
    </Authenticated>
  );
}
