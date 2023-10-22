import { Todos } from "@/app/model/todos";
import { NextResponse } from "next/server";



export async function GET(req, {params}) {
    const response= await Todos.findOne({_id: params.id})

    return NextResponse.json(response)
}

export async function PUT(req, {params}) {
    const todo = await req.json();

    if (todo.color) {
        await Todos.findOneAndUpdate({_id: params.id}, {color:todo.color})
        const res= await Todos.findOne({_id: params.id})
        return NextResponse.json(res)

    } else {
        await Todos.findOneAndUpdate({_id: params.id}, {completed:todo?.completed})
        const res= await Todos.findOne({_id: params.id})

        return NextResponse.json(res)

    }

}

export async function DELETE(req, {params}) {
    const response= await Todos.findByIdAndRemove({_id: params.id})

    return NextResponse.json(response)
}