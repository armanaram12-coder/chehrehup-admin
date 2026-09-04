"use client";

import { Edit, useForm } from "@refinedev/antd";
import { Input, Select } from "antd";

export default function OrdersEdit() {
  const { formProps, saveButtonProps } = useForm({
    resource: "orders",
  });

  return (
    <Edit saveButtonProps={saveButtonProps} title="ویرایش سفارش">
      <form {...formProps}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label>ایمیل مشتری:</label>
            <Input name="user_email" {...formProps.form?.getFieldProps("user_email")} disabled />
          </div>

          <div>
            <label>وضعیت:</label>
            <Select
              {...formProps.form?.getFieldProps("status")}
              style={{ width: "100%" }}
              options={[
                { value: "pending", label: "در انتظار پرداخت" },
                { value: "processing", label: "در حال پردازش" },
                { value: "shipped", label: "ارسال شده" },
                { value: "delivered", label: "تحویل داده شده" },
                { value: "cancelled", label: "لغو شده" },
              ]}
            />
          </div>

          <div>
            <label>آدرس ارسال:</label>
            <Input.TextArea 
              name="shipping_address" 
              {...formProps.form?.getFieldProps("shipping_address")}
              rows={3}
            />
          </div>

          <div>
            <label>توضیحات:</label>
            <Input.TextArea 
              name="notes" 
              {...formProps.form?.getFieldProps("notes")}
              rows={3}
            />
          </div>
        </div>
      </form>
    </Edit>
  );
}
