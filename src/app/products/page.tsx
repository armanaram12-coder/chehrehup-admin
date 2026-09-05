"use client";
import { List, useTable, EditButton, ShowButton, DeleteButton } from "@refinedev/antd";
import { Table, Space, Image, Input } from "antd";
import { Authenticated } from "@refinedev/core";
import { useRouter } from "next/navigation";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function ProductsList() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const { tableProps, setFilters } = useTable({
    resource: "products",
    filters: {
      initial: [{ field: "name", value: "", operator: "contains" }],
    },
  });
  
  return (
    <Authenticated
      key="products-list"
      fallback={<div className="flex items-center justify-center min-h-screen">لطفاً وارد شوید...</div>}
    >
      <List title="مدیریت محصولات">
        <Input
          placeholder="جستجوی محصول..."
          prefix={<SearchOutlined />}
          style={{ marginBottom: 16, maxWidth: 300 }}
          value={searchValue}
          onChange={(e) => {
            const value = e.target.value;
            setSearchValue(value);
            if (value) {
              setFilters([{ field: "name", value, operator: "contains" }]);
            } else {
              setFilters([]);
            }
            const pagination = tableProps.pagination;
            if (pagination && typeof pagination === 'object' && pagination.current && pagination.current !== 1) {
              tableProps.onChange?.({ current: 1, pageSize: pagination.pageSize }, {}, {}, {});
            }
          }}
        />
        <Table {...tableProps} rowKey="id" scroll={{ x: 800 }}>
          <Table.Column dataIndex="id" title="ID" width={60} />
          <Table.Column dataIndex="image" title="تصویر" width={100} render={(value: string) => <Image width={60} height={60} src={value} alt="product" style={{ objectFit: "cover" }} />} />
          <Table.Column dataIndex="name" title="نام محصول" />
          <Table.Column dataIndex="price_toman" title="قیمت (تومان)" render={(value: number) => value?.toLocaleString("fa-IR")} />
          <Table.Column dataIndex="brand" title="برند" />
          <Table.Column dataIndex="stock" title="موجودی" />
          <Table.Column title="عملیات" fixed="right" render={(_, record: any) => (
            <Space>
              <EditButton size="small" recordItemId={record.id} />
              <ShowButton size="small" recordItemId={record.id} />
              <DeleteButton size="small" recordItemId={record.id} />
            </Space>
          )} />
        </Table>
      </List>
    </Authenticated>
  );
}
