export interface Currency {
  code: string
  name: string
  symbol: string
  icon?: string  // Add this for image path
  flag?: string
  type: 'crypto' | 'fiat'
}
  
  export interface ExchangeRate {
    from: string
    to: string
    rate: number
  }