"use client";

import { Edit, useForm } from "@refinedev/antd";
import { Input, InputNumber, Select } from "antd";

export default function ProductsEdit() {
  const { formProps, saveButtonProps } = useForm({
    resource: "products",
  });

  return (
    <Edit saveButtonProps={saveButtonProps} title="ویرایش محصول">
      <form {...formProps}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label>نام محصول:</label>
            <Input name="name" {...formProps.form?.getFieldProps("name")} />
          </div>
          
          <div>
            <label>قیمت (تومان):</label>
            <InputNumber 
              name="price_toman" 
              {...formProps.form?.getFieldProps("price_toman")}
              style={{ width: "100%" }}
            />
          </div>

          <div>
            <label>برند:</label>
            <Input name="brand" {...formProps.form?.getFieldProps("brand")} />
          </div>

          <div>
            <label>موجودی:</label>
            <InputNumber 
              name="stock" 
              {...formProps.form?.getFieldProps("stock")}
              style={{ width: "100%" }}
            />
          </div>

          <div>
            <label>تصویر (URL):</label>
            <Input name="image" {...formProps.form?.getFieldProps("image")} />
          </div>

          <div>
            <label>دسته‌بندی:</label>
            <Input name="category" {...formProps.form?.getFieldProps("category")} />
          </div>

          <div>
            <label>توضیحات:</label>
            <Input.TextArea 
              name="description" 
              {...formProps.form?.getFieldProps("description")}
              rows={4}
            />
          </div>
        </div>
      </form>
    </Edit>
  );
}
