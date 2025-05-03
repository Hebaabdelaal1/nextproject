import { posts } from "./data";

export async function  GET()
{
    //return data exist
    return Response.json(posts)
}

export async function POST(req) {
    const body = await req.json();
    const newUser = {
      id: posts.length + 1,
      username: body.username,
      age: body.age,
    };
    posts.push(newUser);
    return Response.json(newUser);
  }

  export async function DELETE(req) {
    const body = await req.json();
  
    const index = posts.findIndex((post) => post.id === body.id);
    posts.splice(index, 1);
  
    return new Response(JSON.stringify({ message: 'User deleted' }), {
      status: 200,
    });
  }
  