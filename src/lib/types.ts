export enum IPOStatus {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
}

export type IPO = {
  id: number
  name: string
  registeredName: string
  description: string
  logo: string
  issueDateRange: {
    from: string
    to: string
  }
  issueSizeRangeInCrores: {
    from: number
    to: number
  }
  priceRange: {
    from: number
    to: number
  }
  minimumInvestmentInRupees: number
  noOfShares: number
  lotSize: number
  listingDate: string
  listingPrice: number
  listingGainsInRupees: number
  timelineDetails: IPOTimeline[]
}

export type IPOTimeline = {
  title: string
  date: string
  status: keyof typeof IPOStatus
}
