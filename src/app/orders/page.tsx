"use client";

import { List, useTable, EditButton, ShowButton } from "@refinedev/antd";
import { Table, Space, Tag } from "antd";
import { Authenticated } from "@refinedev/core";

export default function OrdersList() {
  const { tableProps } = useTable({ resource: "orders" });
  
  return (
    <Authenticated key="orders-list">
      <List title="مدیریت سفارشات">
        <Table {...tableProps} rowKey="id">
          <Table.Column dataIndex="id" title="شماره سفارش" width={80} />
          <Table.Column dataIndex="user_email" title="ایمیل مشتری" />
          <Table.Column
            dataIndex="total_price"
            title="مبلغ کل (تومان)"
            render={(value: number) => value?.toLocaleString("fa-IR")}
          />
          <Table.Column
            dataIndex="status"
            title="وضعیت"
            render={(value: string) => {
              const colors: any = { pending: "orange", processing: "blue", shipped: "purple", delivered: "green", cancelled: "red" };
              return <Tag color={colors[value] || "default"}>{value}</Tag>;
            }}
          />
          <Table.Column
            dataIndex="created_at"
            title="تاریخ ثبت"
            render={(value: string) => new Date(value).toLocaleDateString("fa-IR")}
          />
          <Table.Column
            title="عملیات"
            render={(_, record: any) => (
              <Space>
                <EditButton size="small" recordItemId={record.id} />
                <ShowButton size="small" recordItemId={record.id} />
              </Space>
            )}
          />
        </Table>
      </List>
    </Authenticated>
  );
}
