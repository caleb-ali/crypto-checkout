'use client'

import { useRouter } from 'next/navigation'
import Button from '@/components/shared/Button'

export default function ConfirmationPage() {
  const router = useRouter()

  const handleConfirm = () => {
    // Show success state or redirect
    console.log('Transaction confirmed')
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg p-6">
        <button 
          onClick={() => router.back()}
          className="mb-4 text-gray-600 hover:text-gray-900"
        >
          ← Back
        </button>
        
        <h2 className="text-xl font-semibold mb-6">Send ETH to the address below</h2>
        
        {/* Confirmation details here */}
        
        <Button onClick={handleConfirm} className="w-full mt-6">
          I have sent it
        </Button>
      </div>
    </div>
  )
}