export interface Currency {
    code: string
    name: string
    symbol: string
    flag?: string
    type: 'crypto' | 'fiat'
  }
  
  export interface ExchangeRate {
    from: string
    to: string
    rate: number
  }