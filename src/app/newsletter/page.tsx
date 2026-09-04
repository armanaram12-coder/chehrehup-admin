"use client";

import { List, useTable } from "@refinedev/antd";
import { Table, Tag } from "antd";
import { Authenticated } from "@refinedev/core";

export default function NewsletterList() {
  const { tableProps } = useTable({
    resource: "newsletter_subscribers",
  });

  return (
    <Authenticated
      fallback={
        <div>
          <p>در حال انتقال به صفحه ورود...</p>
        </div>
      }
    >
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
        </Table>
      </List>
    </Authenticated>
  );
}
