import TabNavigation from "@/components/shared/TabNavigation"
import ConversionForm from "@/components/crypto-to-cash/ConversionForm"

export default function CryptoToCashPage() {
  return (
    <div className="min-h-screen p-4 sm:p-8 flex justify-center items-start">
      <div className="w-full max-w-[640px] bg-white rounded-[30px] py-[30px] flex flex-col items-center gap-8">
        
       
        <div className="w-full max-w-[392px] px-4 sm:px-0">
          <TabNavigation activeTab="crypto-to-cash" />
        </div>

        <div className="w-full max-w-[512px] px-4 sm:px-0">
          <ConversionForm />
        </div>

      </div>
    </div>
  )
}

