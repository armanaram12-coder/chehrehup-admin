"use client";

import { List, useTable, Edit, Delete, Show } from "@refinedev/antd";
import { Table, Space, Image, Tag } from "antd";

export default function ProductsList() {
  const { tableProps } = useTable({
    resource: "products",
  });

  return (
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
          title="عملیات"
          fixed="right"
          render={(_, record: any) => (
            <Space>
              <Edit size="small" recordItemId={record.id} />
              <Show size="small" recordItemId={record.id} />
              <Delete size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
