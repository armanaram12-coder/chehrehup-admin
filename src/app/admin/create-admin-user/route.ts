import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// This API route allows creating an admin user directly
// It should only be called once during initial setup

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "ایمیل و رمز عبور الزامی است" },
        { status: 400 }
      );
    }

    // Create Supabase client with service role key
    // You MUST add SUPABASE_SERVICE_ROLE_KEY to your environment variables
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://iwdfzvfqbtokqetmbmbp.supabase.co";
    
    if (!serviceRoleKey) {
      return NextResponse.json(
        { 
          error: "SUPABASE_SERVICE_ROLE_KEY not configured",
          message: "لطفاً Service Role Key را از پنل Supabase کپی کرده و در فایل .env.local قرار دهید"
        },
        { status: 500 }
      );
    }

    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);

    // Create the user with admin role
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Bypass email confirmation
      user_metadata: {
        is_admin: true,
        role: "admin"
      }
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "کاربر مدیر با موفقیت ساخته شد",
      user: {
        id: data.user?.id,
        email: data.user?.email
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "خطای ناشناخته" },
      { status: 500 }
    );
  }
}
