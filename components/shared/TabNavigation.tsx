'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { id: 'crypto-to-cash', label: 'Crypto to cash', href: '/crypto-to-cash' },
  { id: 'cash-to-crypto', label: 'Cash to crypto', href: '/cash-to-crypto' },
  { id: 'crypto-to-fiat-loan', label: 'Crypto to fiat loan', href: '/crypto-to-fiat-loan' },
]

export default function TabNavigation({ activeTab }: { activeTab: string }) {
  const pathname = usePathname()

  return (
    <div className="flex w-full max-w-[392px] bg-zinc-100 rounded-[30px] h-[34px] p-0">

      {tabs.map((tab) => {
        const isActive = pathname.startsWith(tab.href)
        
        return (
          <Link
            key={tab.id}
            href={tab.href}
            className={`flex-1 flex items-center justify-center h-[34px] rounded-[30px] px-3 py-2 text-xs font-normal leading-[14.4px] whitespace-nowrap transition-all ${
              isActive
                ? 'bg-[#013941] text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </Link>
        )
      })}
    </div>
  )
}