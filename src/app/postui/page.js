"use client";
import React, { useState } from "react";
// export const  metadata ={
//   title:'About',
//   describtion:'hello from about '
// }

function Postui() {
  const [post, setPost] = useState([]);
  const [nameinput, setNameinput] = useState('');
  const [ageinput, setAgeinput] = useState(''); 

  async function getpost() {
    const res = await fetch("/posts");
    const data = await res.json();
    setPost(data);
  }

  async function AddUser() {
    await fetch("/posts", {
      method: 'POST',
      body: JSON.stringify({
        username: nameinput,
        age: ageinput,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setNameinput('');
    setAgeinput('');
    getpost();
  }

  async function deleteUser(id) {
    await fetch("/posts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    getpost(); 
  }
  
  

  return (
    <div className="flex flex-wrap  mb-10 mt-20 px-4">
  
    <div className="w-full md:w-1/2 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
        Add New User
      </h2>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          AddUser();
        }}
      >
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
            Username
          </label>
          <input
            value={nameinput}
            type="text"
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            placeholder="Enter username"
            onChange={(e) => setNameinput(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
            Age
          </label>
          <input
            value={ageinput}
            type="number"
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            placeholder="Enter age"
            onChange={(e) => setAgeinput(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg"
        >
          + Add User
        </button>
      </form>
    </div>
  

    <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <button
        type="button"
        onClick={getpost}
        className="mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Get All Users
      </button>
  
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Username</th>
              <th className="px-6 py-3">Age</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {post.map((posts) => (
              <tr key={posts.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {posts.username}
                </td>
                <td className="px-6 py-4">{posts.age}</td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={() => deleteUser(posts.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  
  );
}

export default Postui;
