import { QUESTIONS_PROMPT } from "@/constants";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req) {

    const { jobPosition, jobDescription, duration, type } = await req.json();

    const PROMPT_PARAMS = QUESTIONS_PROMPT
        .replace('{{jobTitle}}', jobPosition)
        .replace('{{jobDescription}}', jobDescription)
        .replace('{{duration}}', duration)
        .replace('{{type}}', type);

    try {
        const openai = new OpenAI({
            baseURL: "https://openrouter.ai/api/v1",
            apiKey: process.env.OPENROUTER_API_KEY,
        })
        const completion = await openai.chat.completions.create({
            model: "google/gemini-2.0-flash-exp:free",
            messages: [
                { role: "user", content: PROMPT_PARAMS }
            ],
        })
        return NextResponse.json(completion.choices[0].message)
    }
    catch (e) {
        return NextResponse.json(e)
    }
}