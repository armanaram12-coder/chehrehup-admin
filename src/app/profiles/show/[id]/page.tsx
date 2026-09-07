"use client";
import { Show, useShow } from "@refinedev/antd";
import { Typography, Tag } from "antd";
import { Authenticated } from "@refinedev/core";

const { Title, Text } = Typography;

export default function ProfileShow() {
  const { queryResult } = useShow({
    resource: "profiles",
  });
  const { data, isLoading } = queryResult;
  const record = data?.data;

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">در حال بارگذاری...</div>;
  }

  return (
    <Authenticated key="profile-show">
      <Show title="جزئیات کاربر">
        <div className="space-y-4">
          <div>
            <Text strong>ID:</Text>
            <Text className="mr-2">{record?.id}</Text>
          </div>
          <div>
            <Text strong>نام کاربری:</Text>
            <Text className="mr-2">{record?.username}</Text>
          </div>
          <div>
            <Text strong>تلفن:</Text>
            <Text className="mr-2">{record?.phone || "-"}</Text>
          </div>
          <div>
            <Text strong>آدرس:</Text>
            <Text className="mr-2">{record?.address || "-"}</Text>
          </div>
          <div>
            <Text strong>نقش:</Text>
            <Tag color={record?.role === "admin" ? "red" : "blue"} className="mr-2">
              {record?.role || "user"}
            </Tag>
          </div>
          <div>
            <Text strong>تاریخ ثبت‌نام:</Text>
            <Text className="mr-2">
              {record?.created_at ? new Date(record.created_at).toLocaleDateString("fa-IR") : "-"}
            </Text>
          </div>
        </div>
      </Show>
    </Authenticated>
  );
}
