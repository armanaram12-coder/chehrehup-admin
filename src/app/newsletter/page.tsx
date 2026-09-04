"use client";

import { List, useTable, Delete } from "@refinedev/antd";
import { Table, Space, Tag } from "antd";

export default function NewsletterList() {
  const { tableProps } = useTable({
    resource: "newsletter_subscribers",
  });

  return (
    <List title="مشترکین خبرنامه">
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="شماره" width={80} />
        <Table.Column dataIndex="email" title="ایمیل" />
        <Table.Column
          dataIndex="is_active"
          title="وضعیت"
          render={(value: boolean) => (
            <Tag color={value ? "green" : "red"}>
              {value ? "فعال" : "غیرفعال"}
            </Tag>
          )}
        />
        <Table.Column
          dataIndex="subscribed_at"
          title="تاریخ عضویت"
          render={(value: string) => new Date(value).toLocaleDateString("fa-IR")}
        />
        <Table.Column
          title="عملیات"
          render={(_, record: any) => (
            <Space>
              <Delete size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
