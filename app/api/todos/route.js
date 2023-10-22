const { NextResponse } = require("next/server");
import { Todos } from "@/app/model/todos";
import connect from "@/app/database/config";

export async function GET(req, res) {
        connect()
        const todos = await Todos.find({})
        return NextResponse.json(todos)
}

export async function POST(req, res) {
    const todo = await req.json();
    const response= new Todos(todo)
    response.save()
    return NextResponse.json(response)
}

