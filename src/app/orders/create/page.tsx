"use client";

import { Create, useForm } from "@refinedev/antd";
import { Form, Input, InputNumber, Select } from "antd";
import { Authenticated } from "@refinedev/core";
import { useRouter } from "next/navigation";

export default function OrdersCreate() {
  const { formProps, saveButtonProps } = useForm({
    resource: "orders",
  });
  const router = useRouter();

  return (
    <Authenticated
      key="orders-create"
      fallback={() => {
        router.push("/login");
        return <div>در حال انتقال به صفحه ورود...</div>;
      }}
    >
      <Create saveButtonProps={saveButtonProps} title="ثبت سفارش جدید">
        <Form {...formProps} layout="vertical">
          <Form.Item label="ایمیل مشتری:" name="user_email" rules={[{ required: true, type: "email" }]}>
            <Input />
          </Form.Item>

          <Form.Item label="مبلغ کل (تومان):" name="total_price">
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="وضعیت:" name="status" initialValue="pending">
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
      </Create>
    </Authenticated>
  );
}
