"use client";

import { List, useTable, EditButton, ShowButton, DeleteButton } from "@refinedev/antd";
import { Table, Space, Image } from "antd";
import { Authenticated } from "@refinedev/core";
import { useRouter } from "next/navigation";

export default function ProductsList() {
  const { tableProps } = useTable({ resource: "products" });
  const router = useRouter();

  return (
    <Authenticated
      key="products-list"
      fallback={() => {
        router.push("/login");
        return <div>در حال انتقال به صفحه ورود...</div>;
      }}
    >
      <List title="مدیریت محصولات">
        <Table {...tableProps} rowKey="id" scroll={{ x: 800 }}>
          <Table.Column dataIndex="id" title="ID" width={60} />
          <Table.Column
            dataIndex="image"
            title="تصویر"
            width={100}
            render={(value: string) => (
              <Image width={60} height={60} src={value} style={{ objectFit: "cover" }} />
            )}
          />
          <Table.Column dataIndex="name" title="نام محصول" />
          <Table.Column
            dataIndex="price_toman"
            title="قیمت (تومان)"
            render={(value: number) => value?.toLocaleString("fa-IR")}
          />
          <Table.Column dataIndex="brand" title="برند" />
          <Table.Column dataIndex="stock" title="موجودی" />
          <Table.Column
            dataIndex="category"
            title="دسته‌بندی"
          />
          <Table.Column
            title="عملیات"
            fixed="right"
            render={(_, record: any) => (
              <Space>
                <EditButton size="small" recordItemId={record.id} />
                <ShowButton size="small" recordItemId={record.id} />
                <DeleteButton size="small" recordItemId={record.id} />
              </Space>
            )}
          />
        </Table>
      </List>
    </Authenticated>
  );
}
