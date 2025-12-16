import { Currency, ExchangeRate } from '@/types/currency'

export const CRYPTO_CURRENCIES: Currency[] = [
  { code: 'ETH', name: 'Ethereum', symbol: '⟠', type: 'crypto' },
  { code: 'BTC', name: 'Bitcoin', symbol: '₿', type: 'crypto' },
  { code: 'USDT', name: 'Tether', symbol: '₮', type: 'crypto' },
  { code: 'USDC', name: 'USD Coin', symbol: '$', type: 'crypto' },
]

export const FIAT_CURRENCIES: Currency[] = [
  { code: 'NGN', name: 'Naira', symbol: '🇳🇬', flag: '🇳🇬', type: 'fiat' },
  { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸', type: 'fiat' },
  { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧', type: 'fiat' },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺', type: 'fiat' },
]

export const STABLECOINS = [
  { code: 'USDT-CELO', name: 'USDT - CELO', icon: '🟡' },
  { code: 'USDT-TON', name: 'USDT - TON', icon: '💎' },
  { code: 'USDT-BNB', name: 'USDT - BNB', icon: '🟡' },
]

export const WALLETS = [
  { id: 'metamask', name: 'Metamask', icon: '🦊' },
  { id: 'rainbow', name: 'Rainbow', icon: '🌈' },
  { id: 'walletconnect', name: 'WalletConnect', icon: '🔗' },
  { id: 'other', name: 'Other Crypto Wallets (Binance, Coinbase, Bybit etc)', icon: '💼' },
]

export const PAYTO = [
    { id: 'bank', name: 'Bank',  },
    
  ]

  export const BANKS = [
    { id: 'gtb', name: 'Guarantee trust bank',  },
    { id: 'union', name: 'Union bank',  },
    { id: 'zenith', name: 'Zenith bank',  },
    { id: 'uba', name: 'United bank for africa', },
    
  ]

export const MOCK_EXCHANGE_RATES: ExchangeRate[] = [
  { from: 'ETH', to: 'NGN', rate: 5200000 },
  { from: 'ETH', to: 'USD', rate: 3500 },
  { from: 'ETH', to: 'GBP', rate: 2800 },
  { from: 'ETH', to: 'EUR', rate: 3200 },
  { from: 'BTC', to: 'NGN', rate: 85000000 },
  { from: 'BTC', to: 'USD', rate: 58000 },
  { from: 'USDT', to: 'NGN', rate: 1485 },
  { from: 'USDT', to: 'USD', rate: 1 },
  { from: 'USDC', to: 'NGN', rate: 1485 },
  { from: 'USDC', to: 'USD', rate: 1 },
]

export function getExchangeRate(from: string, to: string): number {
  const rate = MOCK_EXCHANGE_RATES.find(
    (r) => r.from === from && r.to === to
  )
  return rate?.rate || 0
}