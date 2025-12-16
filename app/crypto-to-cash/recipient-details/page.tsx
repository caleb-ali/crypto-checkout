"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/shared/Button";
import Dropdown from "@/components/shared/Dropdown";
import { BANKS } from "@/lib/mockData";
import Input from "@/components/shared/Input";
import InputDisabled from "@/components/shared/InputDisabled";
import Image from "next/image";

export default function RecipientDetailsPage() {
  const router = useRouter();
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const isFormValid = bank && /^\d{10}$/.test(accountNumber);

  const handleNext = () => {
    if (!isFormValid) return;
    sessionStorage.setItem(
      "conversionData",
      JSON.stringify({ bank, accountNumber })
    );
    router.push("/crypto-to-cash/confirmation");
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 flex justify-center items-start">
      <div className="w-full max-w-[640px] bg-white rounded-[30px] py-[30px] flex flex-col items-center gap-8">
        <div className="w-full max-w-[512px] px-4 sm:px-0">
          <div className="relative flex items-center h-[32px]">
            <button
              onClick={() => router.back()}
              className="absolute left-0 hover:opacity-70 transition-opacity"
            >
              <Image
                src="/icons/ArrowLeft.svg"
                alt="Back"
                width={24}
                height={24}
              />
            </button>

            <h2 className="mx-auto text-[20px] font-[500] text-[#013941]">
              Recipient details
            </h2>
          </div>
        </div>

        <div className="w-full max-w-[512px] px-4 sm:px-0 space-y-6">
          <div className="mb-[100px]">
          <Dropdown
            label="Bank"
            options={BANKS}
            value={bank}
            onChange={setBank}
            placeholder="Select an option"
          />

          <Input
            label="Account number"
            placeholder="Enter your account number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />

          <InputDisabled
            label="Recipient name"
            value={accountNumber.length === 10 ? "ODUTUGA GBEKE" : ""}
          />
          </div>

          <Button
            onClick={handleNext}
            className="w-full"
            disabled={!isFormValid}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
