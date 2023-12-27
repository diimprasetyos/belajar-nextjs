import React, { useEffect, useState } from "react";
import "@/app/globals.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Details() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const id = router.query;
  let findData = null;

  useEffect(() => {
    fetch("https://657d5ab9853beeefdb9a99d2.mockapi.io/blog-post")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  if (data) {
    findData = data.find((item) => item.id);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-10">
      <div className="container w-full md:max-w-3xl mx-auto">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          <div className="font-sans">
            <Link onClick={router.back()}>Return</Link>
            <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
              {findData.title}
            </h1>
            <p className="text-sm md:text-base font-normal text-gray-600 pb-6">
              {findData.createdAt}
            </p>
            <div className="py-6">
              <img
                className="images"
                src={findData.img}
              />
            </div>
            <p className="py-6 text-wrap">{findData.desc}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
