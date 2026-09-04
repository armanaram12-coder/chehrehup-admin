"use client";

import { List, useTable, Edit, Show } from "@refinedev/antd";
import { Table, Space, Tag } from "antd";

export default function SupportMessagesList() {
  const { tableProps } = useTable({
    resource: "support_messages",
  });

  return (
    <List title="تیکت‌های پشتیبانی">
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="شماره تیکت" width={80} />
        <Table.Column dataIndex="user_email" title="ایمیل کاربر" />
        <Table.Column dataIndex="subject" title="موضوع" />
        <Table.Column
          dataIndex="status"
          title="وضعیت"
          render={(value: string) => {
            const colors: any = {
              open: "green",
              in_progress: "blue",
              closed: "gray",
            };
            return <Tag color={colors[value] || "default"}>{value}</Tag>;
          }}
        />
        <Table.Column
          dataIndex="created_at"
          title="تاریخ ایجاد"
          render={(value: string) => new Date(value).toLocaleDateString("fa-IR")}
        />
        <Table.Column
          title="عملیات"
          render={(_, record: any) => (
            <Space>
              <Edit size="small" recordItemId={record.id} />
              <Show size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
