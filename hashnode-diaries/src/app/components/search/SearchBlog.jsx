"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TypeAnimation } from "react-type-animation";

const SearchBlog = () => {
  const [publication, setPublication] = useState(null);
  const router = useRouter();

  const searchPublication = (event) => {
    event.preventDefault();
    if (publication) {
      router.push(`/publication/${publication}`);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <div>
          <h2 className="text-center text-2xl font-bold uppercase">
            Try Hashnode Dairies 🚀📔
          </h2>
          <div className="flex text-base my-2 font-[500]">
            <TypeAnimation
              sequence={[
                "A playground for the hashnode-client package", // Types 'One'
                2000, // Waits 1s
                "Get any Hahshnode blog data", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Open Source from CreoWis Technologies", // Types 'Three' without deleting 'Two'
                2000,
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
              className="text-center w-full"
            />
          </div>
        </div>
        <div>
          <input
            type="text"
            name="publication"
            id="publication"
            placeholder="Enter a publication url"
            onChange={(e) =>
              setPublication(e.target.value?.replace(/^https:\/\//, ""))
            }
            className="w-full md:w-96 lg:w-96 p-4 border-[1px] border-black outline-black"
            autoFocus
          />
        </div>
        <button
          onClick={searchPublication}
          className="bg-black hover:bg-black p-2 text-white text-lg"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBlog;
