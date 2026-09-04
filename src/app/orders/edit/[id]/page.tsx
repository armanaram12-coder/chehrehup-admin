"use client";

import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { Authenticated } from "@refinedev/core";
import { useRouter } from "next/navigation";

export default function OrdersEdit() {
  const { formProps, saveButtonProps } = useForm({
    resource: "orders",
  });
  const router = useRouter();

  return (
    <Authenticated
      key="orders-edit"
      fallback={() => {
        router.push("/login");
        return <div>در حال انتقال به صفحه ورود...</div>;
      }}
    >
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
    </Authenticated>
  );
}
