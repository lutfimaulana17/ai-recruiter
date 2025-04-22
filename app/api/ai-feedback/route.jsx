import { NextResponse } from "next/server";
import { FEEDBACK_PROMPT } from "@/constants";
import OpenAI from "openai";

export async function POST(req) {
    const { conversation } = await req.json();
    const FINAL_PROMPT = FEEDBACK_PROMPT.replace('{{conversation}}', conversation)
    try {
        const openai = new OpenAI({
            baseURL: "https://openrouter.ai/api/v1",
            apiKey: process.env.OPENROUTER_API_KEY,
        })
        const completion = await openai.chat.completions.create({
            model: "google/gemini-2.0-flash-exp:free",
            messages: [
                { role: "user", content: FINAL_PROMPT }
            ],

        })
        return NextResponse.json(completion.choices[0].message)
    } catch (e) {
        return NextResponse.json(e)
    }

}