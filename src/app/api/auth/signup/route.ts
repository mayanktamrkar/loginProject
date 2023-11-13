import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: any) {
    const reqBody = await req.json()
    const {email,password,name}=reqBody
    console.log('✌️reqBody --->', reqBody);

    // const client = await clientPromise
    // const db = client.db("schoolDatabase");
    // const user = await  db.collection('register').findOne({email})

    //     if(user){
    //         return NextResponse.json({error: "User already exists"}, {status: 400})
    //     } else {

    //         const res = await db.collection('register').insertOne({ email, name, password })
    //         console.log('✌️res --->', res);
    //         return NextResponse.json({message: "User  "}, {status: 201})

    //     }

}
