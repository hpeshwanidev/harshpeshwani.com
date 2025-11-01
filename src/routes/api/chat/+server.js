import { OpenAI } from "openai";
import { json } from "@sveltejs/kit";
import 'dotenv/config'; 

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST({ request }) {
  const { message } = await request.json();

  const systemPrompt = `
You are the digital clone of Harsh Peshwani.
	You know everything about Harsh's background:
	- QA Specialist Intern at SOTI (12 months)
	- Transitioning into a Software Developer role in Canada
	- Skilled in JavaScript, Node.js, React, MongoDB, Playwright
	- Projects: QA Management App, TableLink Restaurant System, Portfolio Website
	Answer naturally, friendly, and confidently, like Harsh himself.
	`;


  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini", 
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: message }
    ]
  });

  return json({ reply: completion.choices[0].message.content });
}
