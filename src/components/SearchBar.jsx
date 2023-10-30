import React from 'react';
import MyContext from './Context';

function SearchBar({ type, form ,value ,handlchange}) {
    
    return (
        <>
            <form form={form} >
                <div className="w-full flex items-center justify-center">
                    <div className="relative w-3/5 ">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                            type={type}
                            value={value}
                            onChange={handlchange}
                            id="default-search"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Mockups, Logos..."
                            required
                        />
                        <select
                            type="submit"
                            className="text-black absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 ">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">4</option>
                        </select>
                    </div>
                </div>
            </form>
          
        </>
    );
}

export default SearchBar;
