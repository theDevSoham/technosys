// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Construct URLSearchParams payload for WP AJAX
    const payload = new URLSearchParams({
      action: "uagb_process_forms",
      nonce: "352b8eaff9", // ⚠️ ideally fetched dynamically from WP
      form_data: JSON.stringify({
        id: "11e9fae6",
        "First Name": data.first_name || "",
        "Last Name": data.last_name || "",
        Email: data.email || "",
        Message: data.message || "",
      }),
      sendAfterSubmitEmail: "true",
      captcha_version: "v2",
      captcha_response: "",
      post_id: "1411",
      block_id: "11e9fae6",
    });

    // Forward the request to WordPress
    const response = await fetch(
      "https://technosysonline.com/wp-admin/admin-ajax.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "*/*",
          Origin: "https://technosysonline.com",
          Referer: "https://technosysonline.com/contact/",
        },
        body: payload,
      }
    );

    const text = await response.text();

    if (!response.ok || text.trim() === "0") {
      throw new Error("Form submission failed (invalid nonce or data).");
    }

    return NextResponse.json({ success: true, message: text });
  } catch (error: any) {
    console.error("❌ Server Error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
