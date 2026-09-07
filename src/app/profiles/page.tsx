"use client";
import { List, useTable, EditButton, ShowButton, DeleteButton } from "@refinedev/antd";
import { Table, Space, Tag } from "antd";
import { Authenticated } from "@refinedev/core";

export default function ProfilesList() {
  const { tableProps } = useTable({
    resource: "profiles",
    syncWithLocation: true,
  });

  return (
    <Authenticated
      key="profiles-list"
      fallback={<div className="flex items-center justify-center min-h-screen">لطفاً وارد شوید...</div>}
    >
      <List title="مدیریت کاربران">
        <Table {...tableProps} rowKey="id" scroll={{ x: 800 }} pagination={{ pageSize: 10 }}>
          <Table.Column dataIndex="id" title="ID" width={200} ellipsis />
          <Table.Column dataIndex="username" title="نام کاربری" />
          <Table.Column dataIndex="phone" title="تلفن" />
          <Table.Column dataIndex="address" title="آدرس" ellipsis />
          <Table.Column dataIndex="role" title="نقش" render={(value: string) => (
            <Tag color={value === "admin" ? "red" : "blue"}>{value || "user"}</Tag>
          )} />
          <Table.Column dataIndex="created_at" title="تاریخ ثبت‌نام" render={(value: string) => 
            value ? new Date(value).toLocaleDateString("fa-IR") : "-"
          } />
          <Table.Column 
            title="عملیات" 
            fixed="right" 
            width={200}
            render={(_, record: any) => (
              <Space>
                <EditButton size="small" recordItemId={record.id} />
                <ShowButton size="small" recordItemId={record.id} />
                <DeleteButton 
                  size="small" 
                  recordItemId={record.id}
                  onSuccess={() => {
                    window.location.reload();
                  }}
                />
              </Space>
            )} 
          />
        </Table>
      </List>
    </Authenticated>
  );
}
