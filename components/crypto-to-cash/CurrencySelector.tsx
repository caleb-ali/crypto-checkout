"use client";

import { useState } from "react";
import { Currency } from "@/types/currency";

interface CurrencySelectorProps {
  label: string;
  amount: string;
  onAmountChange: (value: string) => void;
  currency: string;
  onCurrencyChange: (code: string) => void;
  currencies: Currency[];
  showSearch?: boolean;
}

export default function CurrencySelector({
  label,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  currencies,
  showSearch = false,
}: CurrencySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedCurrency = currencies.find((c) => c.code === currency);

  const filteredCurrencies = currencies.filter((curr) =>
    curr.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    curr.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-2 ">
      <div className="bg-white border border-gray-200 rounded-[30px] p-[24px]">
        <label className="text-sm text-[#828282] text-[16px] font-medium">
          {label}
        </label>
        <div className="flex items-center justify-between">
          <input
            type="number"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
            className="text-2xl text-[#000E10] font-semibold outline-none w-1/2"
            placeholder="0.00"
          />

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-[4px] px-[12px] py-[8px] bg-[#F7F7F7] rounded-[20px] border border-[#E0E0E0] hover:bg-gray-100 transition-colors"
            >
              <span className="text-xl">
                {selectedCurrency?.flag || selectedCurrency?.symbol}
              </span>
              <span className="font-medium text-[#013941] text-sm">
                {currency}
              </span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="#013941"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-[20px] shadow-lg z-20 overflow-hidden py-[16px] px-[12px]">
                {showSearch && (
                  <div className=" border-gray-200 ">
                    <div className="relative ">
                      <svg
                        className="absolute   left-3 top-5 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search"
                        className="text-[#828282] w-full pl-10 pr-3 py-2 mb-[12px] text-sm border border-gray-200 rounded-[20px] outline-none focus:border-[#013941]"
                      />
                    </div>
                  </div>
                )}

                <div className="max-h-60 overflow-y-auto">
                  {filteredCurrencies.map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => {
                        onCurrencyChange(curr.code);
                        setIsOpen(false);
                        setSearchQuery("");
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-[20px] hover:bg-gray-50 transition-colors text-left"
                    >
                      <span className="text-xl">
                        {curr.flag || curr.symbol}
                      </span>
                      <div className="flex items-center gap-[4px] font-medium text-[#013941] text-sm">
                        <div className="font-medium">{curr.code}</div>
                        <div className="">- {curr.name}</div>
                      </div>
                    </button>
                  ))}
                  {filteredCurrencies.length === 0 && (
                    <div className="px-4 py-8 text-center text-sm text-gray-500">
                      No currencies found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}