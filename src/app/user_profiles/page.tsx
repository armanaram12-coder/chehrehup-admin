"use client";

import { List, useTable } from "@refinedev/antd";
import { Table, Tag } from "antd";
import { Authenticated } from "@refinedev/core";
import { useRouter } from "next/navigation";

export default function UserProfilesList() {
  const { tableProps } = useTable({
    resource: "user_profiles",
  });
  const router = useRouter();

  return (
    <Authenticated
      key="user-profiles-list"
      fallback={() => {
        router.push("/login");
        return <div>در حال انتقال به صفحه ورود...</div>;
      }}
    >
      <List title="پروفایل کاربران">
        <Table {...tableProps} rowKey="id">
          <Table.Column dataIndex="id" title="شناسه" width={80} />
          <Table.Column dataIndex="user_id" title="شناسه کاربر" />
          <Table.Column 
            dataIndex="role" 
            title="نقش" 
            render={(value: string) => (
              <Tag color={value === "admin" ? "red" : "blue"}>
                {value === "admin" ? "مدیر" : "مشتری"}
              </Tag>
            )} 
          />
          <Table.Column dataIndex="phone" title="تلفن" />
          <Table.Column dataIndex="address" title="آدرس" />
          <Table.Column
            dataIndex="created_at"
            title="تاریخ ثبت‌نام"
            render={(value: string) => new Date(value).toLocaleDateString("fa-IR")}
          />
        </Table>
      </List>
    </Authenticated>
  );
}
