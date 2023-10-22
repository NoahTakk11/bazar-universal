import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useItems } from "../zustand/items-store";

export default function SearchBox() {
  const { search } = useParams();
  const [searchQuery, setSearchQuery] = useState(search || "");
  const { setCategory } = useItems();

  const history = useNavigate();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueInput = (event.target as HTMLInputElement).value;
    setSearchQuery(valueInput);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setCategory(searchQuery);
    history(`/items?search=${searchQuery}`);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full ml-4 mb-4 md:w-1/2">
      <div className="flex flex-row w-full items-center justify-center">
        <form
          className="flex flex-col  w-full items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                onChange={handleInput}
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 border-[#c94539] bg-[#c94539] hover:bg-[#f0c5a8] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
