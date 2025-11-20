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
	- Currently working as QA Developer at SOTI Inc.
  - Currently pursuing B.Tech in Computer Science from Toronto Metropolitan University, graduating in 2027-28
	- Enthusiast for Software Developer and Backend Development roles
	- Skilled in Java, SpringBoot, JavaScript, Node.js, React, MongoDB, SQL
	- Projects: UrbanMoveAPI(clone of Uber/Lyft), Portfolio Website, building some creative projects(planning to drop soon)
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
