"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Button from "@/components/shared/Button"
import Dropdown from "@/components/shared/Dropdown"
import { BANKS } from "@/lib/mockData"
import Input from "@/components/shared/Input"
import InputDisabled from "@/components/shared/InputDisabled"

export default function RecipientDetailsPage() {
  const router = useRouter()
  const [bank, setBank] = useState("")

  const handleNext = () => {
    sessionStorage.setItem(
      "conversionData",
      JSON.stringify({ bank })
    )
    router.push("/crypto-to-cash/confirmation")
  }

  return (
    <div className="min-h-screen p-4 sm:p-8 flex justify-center items-start">
      <div className="w-full max-w-[640px] bg-white rounded-[30px] py-[30px] flex flex-col items-center gap-8">

        {/* Header row */}
       {/* Header */}
<div className="w-full max-w-[512px] px-4 sm:px-0">
  <div className="relative flex items-center h-[32px]">
    
    {/* Back button (left aligned) */}
    <button
      onClick={() => router.back()}
      className="absolute left-0 text-gray-600 hover:text-gray-900"
    >
      ←
    </button>

    {/* Centered title */}
    <h2 className="mx-auto text-[20px] font-[500] text-[#013941]">
      Recipient details
    </h2>

  </div>
</div>


        {/* Form */}
        <div className="w-full max-w-[512px] px-4 sm:px-0 space-y-6">
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
          />

<InputDisabled
  label="Recipient name"
  placeholder="ODUTUGA GBEKE"
/>


          <Button
            onClick={handleNext}
            className="w-full"
            disabled={!bank}
          >
            Next
          </Button>
        </div>

      </div>
    </div>
  )
}
