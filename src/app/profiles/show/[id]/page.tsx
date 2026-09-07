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
        <div className="space-y-4 p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Text strong>ID:</Text>
              <div className="text-gray-600 mt-1">{record?.id}</div>
            </div>
            <div>
              <Text strong>نام کاربری:</Text>
              <div className="text-gray-600 mt-1">{record?.username}</div>
            </div>
            <div>
              <Text strong>تلفن:</Text>
              <div className="text-gray-600 mt-1">{record?.phone || "-"}</div>
            </div>
            <div>
              <Text strong>آدرس:</Text>
              <div className="text-gray-600 mt-1">{record?.address || "-"}</div>
            </div>
            <div>
              <Text strong>نقش:</Text>
              <div className="mt-1">
                <Tag color={record?.role === "admin" ? "red" : "blue"}>
                  {record?.role || "user"}
                </Tag>
              </div>
            </div>
            <div>
              <Text strong>تاریخ ثبت‌نام:</Text>
              <div className="text-gray-600 mt-1">
                {record?.created_at ? new Date(record.created_at).toLocaleDateString("fa-IR") : "-"}
              </div>
            </div>
          </div>
        </div>
      </Show>
    </Authenticated>
  );
}
