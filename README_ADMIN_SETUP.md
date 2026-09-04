# راهنمای کامل ساخت کاربر مدیر برای chehrehup@gmail.com

## وضعیت فعلی

کاربر `chehrehup@gmail.com` در Supabase ثبت شده اما:
- ✗ ایمیل تایید نشده است
- ✗ رمز عبور مشخص نیست
- ✗ امکان ورود وجود ندارد

## راه حل‌های موجود

### روش ۱: استفاده از پنل Supabase (سریع‌ترین روش)

1. وارد پنل Supabase شوید:
   ```
   https://iwdfzvfqbtokqetmbmbp.supabase.co
   ```

2. به بخش **Authentication** → **Users** بروید

3. کاربر `chehrehup@gmail.com` را پیدا کنید

4. روی سه نقطه (...) کنار کاربر کلیک کرده و **Confirm user** را انتخاب کنید

5. دوباره روی سه نقطه کلیک کرده و **Send reset password email** را بزنید

6. به صندوق ایمیل خود مراجعه کرده و روی لینک بازیابی کلیک کنید

7. رمز عبور جدیدی تنظیم کنید (پیشنهاد: `Admin@123456789`)

8. حالا می‌توانید با ایمیل و رمز جدید وارد شوید

---

### روش ۲: استفاده از Service Role Key و API

1. وارد پنل Supabase شوید

2. به **Settings** → **API** بروید

3. در بخش **Project API keys**، مقدار **service_role key** را کپی کنید
   (این کلید با `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6...` شروع می‌شود)

4. فایل `.env.local` را در پروژه باز کنید و خط زیر را جایگزین کنید:
   ```env
   SUPABASE_SERVICE_ROLE_KEY=کلید_کپی_شده_را_اینجا_بگذارید
   ```

5. سرور توسعه را ریستارت کنید:
   ```bash
   npm run dev
   ```

6. به آدرس زیر بروید:
   ```
   http://localhost:3000/admin/create-admin-user
   ```

7. ایمیل `chehrehup@gmail.com` و رمز عبور دلخواه را وارد کرده و کاربر را بسازید

---

### روش ۳: استفاده از curl (برای کاربران حرفه‌ای)

بعد از تنظیم `SUPABASE_SERVICE_ROLE_KEY` در `.env.local`:

```bash
curl -X POST http://localhost:3000/admin/create-admin-user \
  -H "Content-Type: application/json" \
  -d '{
    "email": "chehrehup@gmail.com",
    "password": "Admin@123456789"
  }'
```

---

## فایل‌های ایجاد شده

| فایل | توضیح |
|------|-------|
| `/admin/create-admin-user/page.tsx` | صفحه UI برای ساخت کاربر مدیر |
| `/admin/create-admin-user/route.ts` | API Route برای ساخت کاربر |
| `.env.local` | فایل تنظیمات محیطی |
| `RUNBOOK.md` | مستندات کامل |
| `SETUP_ADMIN_USER.sh` | اسکریپت راهنما |

---

## اطلاعات مهم

- **ایمیل مدیریت:** `chehrehup@gmail.com`
- **ایمیل جایگزین (ساخته شده):** `admin-chehrehup@gmail.com`
- **رمز عبور پیشنهادی:** `Admin@123456789`

---

## نکات امنیتی

⚠️ **Service Role Key** هرگز نباید:
- در کد client-side استفاده شود
- در repository commit شود
- با کسی به اشتراک گذاشته شود

✅ فقط در API Routeها و سرور استفاده شود

---

## پشتیبانی

اگر همچنان مشکل دارید:
1. مطمئن شوید ایمیل `chehrehup@gmail.com` را درست وارد می‌کنید
2. بررسی کنید که کاربر در Supabase وجود دارد
3. از صحت Service Role Key اطمینان حاصل کنید
4. لاگ‌های کنسول را بررسی کنید
