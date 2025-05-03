
import { redirect } from 'next/navigation';
import React from 'react'


export async function generateMetadata({params}) {
const p=await params
const res = await fetch(`https://jsonplaceholder.typicode.com/users/${p.userid}`);
const user = await res.json();
return {
  title:user.name
}
}

async function Userid({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`);
  const user = await res.json();

async function Go()
{
  //server action
  "use server"
  redirect('/')
}


  return (
    <div className="grid grid-cols-2 md:grid-cols-2  p-4 m-10">
      
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-10">
          <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{user.name}</h5>
          <p className="text-sm text-gray-700 dark:text-gray-300">Username: {user.username}</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">Email: {user.email}</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">Phone: {user.phone}</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">Website: {user.website}</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">Company: {user.company.name}</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Address: {user.address.street}, {user.address.city}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Geo: {user.address.geo.lat}, {user.address.geo.lng}
          </p>
          <form action={Go}> 
<button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">go back</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Userid;
