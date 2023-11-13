import clientPromise from "../../../../dbConfig/page";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// run()

import type { NextApiRequest, NextApiResponse } from "next";
import type { Readable } from "node:stream";

// EXPORT config to tell Next.js NOT to parse the body

// Get raw body as string
async function getRawBody(readable: Readable): Promise<Buffer> {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export async function GET() {
  const client = await clientPromise;
  const db = client.db("schoolDatabase");
  //   const db = client.db("sample_airbnb");

  const data = await db.collection("school").find({}).toArray();
  // const res = await data.json()
  console.log("✌️res --->", data);
  // const data= await db.findOne({name:'mayank'})
  // console.log('✌️db --->', db);

  // const user = await User.findOne()
  // console.log(user,'lldfdfdfd');

  // const data = await sss.json()
  // console.log('✌️data --->', data);
  // const res= await data.json()
  // console.log(data,'res');

  // res.json(data);
  return NextResponse.json({
    body: {
      message: data,
      status: 200,
    },
  });
}

export async function POST(req: NextRequest, res: any) {
  const reqBody = await req.json();
  const { email, password } = reqBody;
  console.log("✌️reqBody --->", reqBody);

  const client = await clientPromise;
  const db = client.db("schoolDatabase");
  // let bodyObject = { name: request.body }
  const data = await db.collection("register").findOne({ email });
  console.log("✌️data --->", data);
  if (data) {
    const dataPassword = data.password;
    if (password === dataPassword) {
      const token = jwt.sign(
        { email: data.email, password: data.password },
        process.env.TOKEN_SECRET!,
        { expiresIn: "1h" }
      );
      console.log("✌️token --->", token);

      const response = NextResponse.json({
        message: "Login successful",
        token,
        success: true,
      });
      response.cookies.set("token", token, {
        httpOnly: true,
      });
      return response;
    }
  } else {
    return NextResponse.json({ error: "User does not exist" }, { status: 400 });
  }
}
