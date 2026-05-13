import { NextRequest, NextResponse } from "next/server";
import { inngest } from "@/inngest/client";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { description } = body;

    await inngest.send({
      name: "code-agent/code.requested",
      data: {
        description,
      },
    });

    return NextResponse.json({
      message: "Event sent",
      success: true,
    });
  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong",
        success: false,
      },
      { status: 500 },
    );
  }
}
