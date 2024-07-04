import { fetchUsers, saveUser } from "@/utils/actions";
// import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: Request) => {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    console.log(id);
    
    const users = await fetchUsers();
    return Response.json({ users });
};