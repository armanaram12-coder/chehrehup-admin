"use client";

import { List, useTable } from "@refinedev/antd";
import { Table, Space, Edit, Delete, Show } from "antd";
import { useDelete, useNavigation } from "@refinedev/core";

export default function UsersList() {
  const { tableProps } = useTable({
    resource: "users",
  });

  const { edit, show } = useNavigation();
  const { mutate: deleteMutation } = useDelete();

  const handleDelete = (id: string) => {
    deleteMutation({
      resource: "users",
      id,
    });
  };

  return (
    <List title="مدیریت کاربران">
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="email" title="ایمیل" />
        <Table.Column dataIndex="role" title="نقش" />
        <Table.Column
          title="عملیات"
          render={(_, record: any) => (
            <Space>
              <Edit
                size="small"
                onClick={() => edit("users", record.id)}
              />
              <Show
                size="small"
                onClick={() => show("users", record.id)}
              />
              <Delete
                size="small"
                onClick={() => handleDelete(record.id)}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
