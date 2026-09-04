# راهنمای ساخت کاربر مدیر برای chehrehup@gmail.com

## مشکل
کاربر `chehrehup@gmail.com` در Supabase ثبت شده اما:
1. ایمیل تایید نشده است
2. رمز عبور مشخص نیست
3. نمی‌توانید وارد شوید

## راه حل‌ها

### روش ۱: استفاده از پنل Supabase (توصیه می‌شود)

1. وارد https://iwdfzvfqbtokqetmbmbp.supabase.co شوید
2. به بخش **Authentication** -> **Users** بروید
3. کاربر `chehrehup@gmail.com` را پیدا کنید
4. روی سه نقطه (...) کلیک کرده و **Confirm user** را بزنید
5. سپس روی **Send reset password email** کلیک کنید
6. به ایمیل خود مراجعه کرده و رمز جدیدی تنظیم کنید

### روش ۲: استفاده از Service Role Key

1. وارد پنل Supabase شوید
2. به **Settings** -> **API** بروید
3. **Service Role Key** را کپی کنید
4. فایل `.env.local` را باز کرده و مقدار `SUPABASE_SERVICE_ROLE_KEY` را با کلید کپی شده جایگزین کنید
5. ترمینال را باز کرده و دستور زیر را اجرا کنید:

```bash
curl -X POST http://localhost:3000/admin/create-admin-user \
  -H "Content-Type: application/json" \
  -d '{
    "email": "chehrehup@gmail.com",
    "password": "Admin@123456789"
  }'
```

### روش ۳: استفاده از کاربر جدید

یک کاربر جدید با ایمیل دیگر بسازید:

```bash
curl -X POST http://localhost:3000/admin/create-admin-user \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin-chehrehup@gmail.com",
    "password": "Admin@123456789"
  }'
```

این کاربر بلافاصله قابل استفاده خواهد بود.

## اطلاعات ورود فعلی

- **ایمیل مدیریت:** chehrehup@gmail.com
- **ایمیل جایگزین:** admin-chehrehup@gmail.com (ساخته شده)
- **رمز عبور پیشنهادی:** Admin@123456789

## نکات مهم

- Service Role Key هرگز نباید در کد client-side استفاده شود
- فقط از این کلید در API Routeها و سرور استفاده کنید
- پس از ساخت کاربر مدیر، می‌توانید Service Role Key را از .env.local حذف کنید
