"use client";

import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export default function OrdersEdit() {
  const { formProps, saveButtonProps } = useForm({
    resource: "orders",
  });

  return (
    <Edit saveButtonProps={saveButtonProps} title="ویرایش سفارش">
      <Form {...formProps} layout="vertical">
        <Form.Item label="ایمیل مشتری:" name="user_email">
          <Input disabled />
        </Form.Item>

        <Form.Item label="وضعیت:" name="status">
          <Select
            options={[
              { value: "pending", label: "در انتظار پرداخت" },
              { value: "processing", label: "در حال پردازش" },
              { value: "shipped", label: "ارسال شده" },
              { value: "delivered", label: "تحویل داده شده" },
              { value: "cancelled", label: "لغو شده" },
            ]}
          />
        </Form.Item>

        <Form.Item label="آدرس ارسال:" name="shipping_address">
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item label="توضیحات:" name="notes">
          <Input.TextArea rows={3} />
        </Form.Item>
      </Form>
    </Edit>
  );
}
