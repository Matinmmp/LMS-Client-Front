// app/api/download/[hash]/route.ts
import { NextResponse } from 'next/server';

 

function decodeText(encodedText:string) {
    try {
      return atob(encodedText);
    } catch (error) {
      return "خطا در دیکد کردن: متن ورودی معتبر نیست."; // مدیریت خطا
    }
  }

export async function GET(req: Request, { params }: { params: { hash: string } }) {
    const { hash } = params;
  
    const url = decodeText(hash);

    if (!url) {
        return NextResponse.json({ success: false, message: 'Invalid hash' }, { status: 404 });
    }

    return NextResponse.redirect(url);
}
