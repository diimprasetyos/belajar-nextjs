import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import "@/app/globals.css";



export default function Main() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://657d5ab9853beeefdb9a99d2.mockapi.io/blog-post')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-10">
      <div className="container w-full md:max-w-3xl mx-auto">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
              {data.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img src={item.img} alt="Blog Post" className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                    <p className="text-sm text-gray-600 mb-2">Posted on {new Date(item.createdAt * 1000).toLocaleDateString()}</p>
                    <p className="text-gray-800">{item.desc}</p>
                    <Link href={`/pages/Details/${item.id}`} className='text-blue-500 hover:underline'>
                      Read more
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
