"use client";

import { List, useTable, Show } from "@refinedev/antd";
import { Table, Space, Tag } from "antd";

export default function UsersList() {
  const { tableProps } = useTable({
    resource: "users",
  });

  return (
    <List title="مدیریت کاربران">
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" width={100} />
        <Table.Column dataIndex="email" title="ایمیل" />
        <Table.Column dataIndex="role" title="نقش" render={(value: string) => (
          <Tag color={value === "admin" ? "red" : "blue"}>{value}</Tag>
        )} />
        <Table.Column
          dataIndex="created_at"
          title="تاریخ ثبت‌نام"
          render={(value: string) => new Date(value).toLocaleDateString("fa-IR")}
        />
        <Table.Column
          title="عملیات"
          render={(_, record: any) => (
            <Space>
              <Show size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
