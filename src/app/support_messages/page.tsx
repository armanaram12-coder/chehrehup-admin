"use client";

import { List, useTable, EditButton, ShowButton } from "@refinedev/antd";
import { Table, Space, Tag } from "antd";
import { Authenticated } from "@refinedev/core";
import { useRouter } from "next/navigation";

export default function SupportMessagesList() {
  const { tableProps } = useTable({ resource: "support_messages" });
  const router = useRouter();

  return (
    <Authenticated
      key="support-messages-list"
      fallback={() => {
        router.push("/login");
        return <div>در حال انتقال به صفحه ورود...</div>;
      }}
    >
      <List title="تیکت‌های پشتیبانی">
        <Table {...tableProps} rowKey="id">
          <Table.Column dataIndex="id" title="شماره تیکت" width={80} />
          <Table.Column dataIndex="user_id" title="شناسه کاربر" />
          <Table.Column dataIndex="subject" title="موضوع" />
          <Table.Column
            dataIndex="status"
            title="وضعیت"
            render={(value: string) => {
              const colors: any = { open: "green", in_progress: "blue", closed: "gray" };
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
