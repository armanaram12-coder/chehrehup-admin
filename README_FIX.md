# راهنمای رفع مشکلات پنل ادمین

## مشکلات حل شده:

### 1️⃣ ارور "Could not find the 'description' column" هنگام ویرایش محصول
**علت:** ستون‌های لازم در جدول `products` وجود نداشتند.

**راه‌حل:** فایل SQL زیر را در پنل Supabase اجرا کنید:

```bash
# فایل SQL در مسیر workspace/supabase_fix.sql آماده شده است
```

مراحل اجرا:
1. وارد پنل Supabase شوید
2. به بخش **SQL Editor** بروید
3. محتوای فایل `/workspace/supabase_fix.sql` را کپی و اجرا کنید

این فایل شامل دستورات زیر است:
- اضافه کردن ستون‌های `description`, `brand`, `category`, `stock`, `image`, `price_toman` به جدول `products`
- فعال‌سازی RLS برای تمام جداول
- ایجاد Policyهای دسترسی برای کاربران authenticated

### 2️⃣ کار نکردن صفحات orders, support_messages, newsletter, user_profiles
**علت:** این صفحات ساخته شده‌اند اما به دلیل عدم وجود RLS Policies صحیح در Supabase کار نمی‌کنند.

**راه‌حل:** با اجرای فایل SQL بالا، تمام Policies لازم ایجاد می‌شوند و همه صفحات کار خواهند کرد.

## ساختار صفحات موجود:

| صفحه | مسیر | وضعیت |
|------|------|--------|
| Products | `/products` | ✅ کامل |
| Products Edit | `/products/edit/[id]` | ✅ کامل |
| Products Create | `/products/create` | ✅ کامل |
| Orders | `/orders` | ✅ کامل |
| Orders Edit | `/orders/edit/[id]` | ✅ کامل |
| Support Messages | `/support_messages` | ✅ کامل |
| Support Messages Edit | `/support_messages/edit/[id]` | ✅ کامل |
| Newsletter | `/newsletter` | ✅ کامل |
| User Profiles | `/user_profiles` | ✅ کامل |

## تنظیمات محیطی:

فایل `.env.local` باید شامل متغیرهای زیر باشد:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## نکات مهم:

1. بعد از اجرای فایل SQL، حتماً یک بار از پنل خارج شده و مجدد وارد شوید
2. مطمئن شوید که کاربر لاگین شده نقش `authenticated` دارد
3. برای تست می‌توانید از دستور `npm run dev` استفاده کنید

