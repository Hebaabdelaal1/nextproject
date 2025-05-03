'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// export const  metadata ={
//   title:'Users',
//   describtion:'hello from users '
// }

function AllUsers() {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setData(users))
      .catch((err) => console.log( err));
  }, []);

  const goToDetails = (userId) => {
    router.push(`/home/${userId}`);
  };

  return (
    <>
<h1 className=''>All users</h1> 

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 ">
      {data.map((user) => (
        <div
          key={user.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="p-5">

            <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{user.name}</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">Username: {user.username}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">Email: {user.email}</p>

            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={() => goToDetails(user.id)}
            >
              Details
            </button>
          </div>
        </div>
      ))}
    </div>

   </> 
  );
}

export default AllUsers;
