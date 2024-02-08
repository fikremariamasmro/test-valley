'use client'

import React, { useState, useEffect } from 'react';


interface SearchInputProps {
    onSearch: (searchText: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
    const [searchText, setSearchText] = useState<string>('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    useEffect(() => onSearch(searchText), [searchText, onSearch]);

    return (
        <div className="w-2/4">
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                    <svg
                        className="w-4 h-4 text-gray-800"
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
                    type="text" value={searchText} onChange={handleSearchChange}
                    id="default-search"
                    className="block p-3 ps-10 text-sm border w-2/3 placeholder:text-gray-300 placeholder:text-sm  border-gray-200 rounded-md focus:ring-brand-primary focus:border-brand-primary focus:outline-none focus:ring-0"
                    placeholder="살까말까 고민된다면 검색해보세요!"
                    required
                />
            </div>
        </div>
    );
};

export default SearchInput;
