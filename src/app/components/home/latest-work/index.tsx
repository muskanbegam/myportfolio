"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const categories = [
  { label: "Web Sites", value: "websites" },
  { label: "Automation with Python", value: "automation" },
  { label: "AI Applications", value: "ai" },
];

const LatestWork = () => {
  const [workData, setWorkData] = useState<any[]>([]);
  const [active, setActive] = useState("websites");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const filtered = workData.filter((w) => w.category === active);

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32">
            {/* HEADER */}
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-6">
              <h2>Latest Works</h2>
              <p className="text-xl text-orange-500">( 04 )</p>
            </div>

            {/* CATEGORY BUTTONS */}
            <div className="flex gap-6 mb-10 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActive(cat.value)}
                  className={`text-sm transition-all duration-300 pb-1 border-b-2 whitespace-nowrap ${
                    active === cat.value
                      ? "border-black"
                      : "border-transparent opacity-60"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* PROJECT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12 transition-all duration-500 ease-in-out">
              {filtered.map((value: any, index: any) => (
                <Link
                  href={value.slug}
                  key={index}
                  target={value.slug.startsWith("http") ? "_blank" : "_self"}
                  className="group flex flex-col gap-3 xl:gap-6 cursor-pointer"
                >
                  <div className="relative w-full">
                    <Image
                      src={getImgPath(value?.image)}
                      alt={value?.title || "image"}
                      width={570}
                      height={414}
                      className="rounded-lg w-full h-full object-cover"
                    />

                    {/* Overlay always visible on mobile, hover on desktop */}
                    <div className="absolute top-0 left-0 w-full h-full rounded-lg backdrop-blur-xs bg-primary/15 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 md:opacity-0">
                      <span className="p-5">
                        <svg
                          width="65"
                          height="64"
                          viewBox="0 0 65 64"
                          fill="none"
                        >
                          <rect width="64" height="64" rx="32" fill="#FE4300"/>
                          <path
                            d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                            stroke="#FFFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-0 xl:gap-2">
                    <div className="flex items-center justify-between">
                      <h5>{value?.title}</h5>
                      {/* Arrow wrapped in Link */}
                      <Image
                        src={getImgPath("/images/icon/right-arrow-icon.svg")}
                        alt="right-arrow-icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    <p>Client: {value?.client}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;