import { Metadata } from "next";
import { cookies } from "next/headers";
import React, { Suspense } from "react";
import { Refine } from "@refinedev/core";
import { DevtoolsProvider } from "@/providers/devtools";
import { useNotificationProvider, ThemedLayoutV2 } from "@refinedev/antd";
import routerProvider from "@refinedev/nextjs-router";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@refinedev/antd/dist/reset.css";
import { authProviderClient } from "@/providers/auth-provider/auth-provider.client";
import { dataProvider } from "@/providers/data-provider";
import { ColorModeContextProvider } from "@/contexts/color-mode";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { ProductOutlined, ShoppingCartOutlined, MessageOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";

export const metadata: Metadata = { title: "پنل مدیریت چهره آپ", description: "پنل مدیریت فروشگاه چهره آپ" };

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  const defaultMode = theme?.value === "dark" ? "dark" : "light";

  return (
    <html lang="fa" dir="rtl">
      <body>
        <ColorModeContextProvider defaultMode={defaultMode}>
          <AntdRegistry>
            <RefineKbarProvider>
              <Suspense>
                <DevtoolsProvider>
                  <Refine
                    routerProvider={routerProvider}
                    dataProvider={dataProvider}
                    authProvider={authProviderClient}
                    notificationProvider={useNotificationProvider}
                    resources={[
                      { name: "products", list: "/products", create: "/products/create", edit: "/products/edit/:id", meta: { label: "محصولات", icon: <ProductOutlined /> } },
                      { name: "orders", list: "/orders", edit: "/orders/edit/:id", meta: { label: "سفارشات", icon: <ShoppingCartOutlined /> } },
                      { name: "support_messages", list: "/support_messages", edit: "/support_messages/edit/:id", meta: { label: "تیکت‌ها", icon: <MessageOutlined /> } },
                      { name: "newsletter_subscribers", list: "/newsletter", meta: { label: "خبرنامه", icon: <MailOutlined /> } },
                      { name: "user_profiles", list: "/user_profiles", meta: { label: "کاربران", icon: <UserOutlined /> } },
                    ]}
                    options={{ syncWithLocation: true, warnWhenUnsavedChanges: true }}
                  >
                    <RefineKbar />
                    <ThemedLayoutV2>
                      {children}
                    </ThemedLayoutV2>
                  </Refine>
                </DevtoolsProvider>
              </Suspense>
            </RefineKbarProvider>
          </AntdRegistry>
        </ColorModeContextProvider>
      </body>
    </html>
  );
}
