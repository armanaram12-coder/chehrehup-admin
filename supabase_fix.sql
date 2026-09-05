-- اضافه کردن ستون‌های missing به جدول products
ALTER TABLE public.products 
ADD COLUMN IF NOT EXISTS description TEXT,
ADD COLUMN IF NOT EXISTS brand TEXT,
ADD COLUMN IF NOT EXISTS category TEXT,
ADD COLUMN IF NOT EXISTS stock INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS image TEXT,
ADD COLUMN IF NOT EXISTS price_toman NUMERIC;

-- فعال‌سازی RLS برای همه جدول‌ها
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.support_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- Policies برای products
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON public.products;
CREATE POLICY "Enable all access for authenticated users"
ON public.products FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Policies برای orders
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON public.orders;
CREATE POLICY "Enable all access for authenticated users"
ON public.orders FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Policies برای support_messages
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON public.support_messages;
CREATE POLICY "Enable all access for authenticated users"
ON public.support_messages FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Policies برای newsletter_subscribers
DROP POLICY IF EXISTS "Enable read for authenticated users" ON public.newsletter_subscribers;
CREATE POLICY "Enable read for authenticated users"
ON public.newsletter_subscribers FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "Enable delete for authenticated users" ON public.newsletter_subscribers;
CREATE POLICY "Enable delete for authenticated users"
ON public.newsletter_subscribers FOR DELETE
TO authenticated
USING (true);

-- Policies برای user_profiles
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON public.user_profiles;
CREATE POLICY "Enable all access for authenticated users"
ON public.user_profiles FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);
