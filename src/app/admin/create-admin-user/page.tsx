"use client";

import { useState } from "react";
import { Button, Form, Input, Card, Typography, message } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

const { Title } = Typography;

export default function CreateAdminUserPage() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await fetch("/admin/create-admin-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        message.success(`کاربر مدیر با موفقیت ساخته شد: ${data.user.email}`);
        form.resetFields();
      } else {
        message.error(data.error || "خطا در ساخت کاربر");
      }
    } catch (error: any) {
      message.error(error.message || "خطای ناشناخته");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      minHeight: "100vh",
      background: "#f0f2f5"
    }}>
      <Card style={{ width: 400, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <UserAddOutlined style={{ fontSize: 48, color: "#1890ff" }} />
          <Title level={3} style={{ marginTop: 16 }}>ساخت کاربر مدیر</Title>
          <Typography.Text type="secondary">
            برای ساخت کاربر مدیر جدید از این فرم استفاده کنید
          </Typography.Text>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            email: "chehrehup@gmail.com",
          }}
        >
          <Form.Item
            name="email"
            label="ایمیل"
            rules={[
              { required: true, message: "لطفاً ایمیل را وارد کنید" },
              { type: "email", message: "لطفاً ایمیل معتبر وارد کنید" },
            ]}
          >
            <Input placeholder="example@email.com" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            label="رمز عبور"
            rules={[
              { required: true, message: "لطفاً رمز عبور را وارد کنید" },
              { min: 8, message: "رمز عبور باید حداقل ۸ کاراکتر باشد" },
            ]}
          >
            <Input.Password placeholder="********" size="large" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              size="large"
              block
            >
              {loading ? "در حال ساخت..." : "ساخت کاربر مدیر"}
            </Button>
          </Form.Item>
        </Form>

        <div style={{ marginTop: 16, padding: "12px", background: "#e6f7ff", borderRadius: 4 }}>
          <Typography.Text type="secondary" style={{ fontSize: 12 }}>
            ⚠️ نکته: برای استفاده از این قابلیت، باید SUPABASE_SERVICE_ROLE_KEY را در فایل .env.local تنظیم کرده باشید.
          </Typography.Text>
        </div>
      </Card>
    </div>
  );
}
