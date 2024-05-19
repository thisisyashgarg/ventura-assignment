import { table } from "console"
import Image from "next/image"
import { list } from "postcss"
import { title } from "process"

const IPOS = [
  {
    id: 1,
    name: "Zomato",
    registeredName: "Zomato Limited",
    logo: "/zomato.png",
    issueDateRange: {
      from: "2021-07-14",
      to: "2021-07-16",
    },
    issueSizeRangeInCrores: {
      from: 9375,
      to: 10000,
    },
    priceRange: {
      from: 72,
      to: 76,
    },
    minimumInvestmentInRupees: 19500,
    noOfShares: 195,
    lotSize: 195,

    listingDate: "2021-07-23",
    listingPrice: 115,
    listingGainsInRupees: 51.32,
    timelineDetails: [
      {
        title: "Bidding starts",
        date: "2021-07-14",
        status: "COMPLETED",
      },
      {
        title: "Bidding ends",
        date: "2021-07-16",
        status: "COMPLETED",
      },
      {
        title: "Allotment Finalization",
        date: "2021-07-22",
        status: "COMPLETED",
      },
      {
        title: "Refund initiation",
        date: "2021-07-23",
        status: "PENDING",
      },
      {
        title: "Demat transfer",
        date: "2021-07-23",
        status: "PENDING",
      },
      {
        title: "Listing date",
        date: "2021-07-23",
        status: "PENDING",
      },
    ],
  },
  {
    id: 2,
    name: "Paytm",
    registeredName: "Zomato Limited",
    logo: "/zomato.png",

    issueDateRange: {
      from: "2021-11-08",
      to: "2021-11-10",
    },
    issueSizeRangeInCrores: {
      from: 18300,
      to: 18300,
    },
    priceRange: {
      from: 2080,
      to: 2150,
    },
    minimumInvestmentInRupees: 14280,
    noOfShares: 195,
    lotSize: 6,
    listingDate: "2021-11-18",
    listingPrice: 1564,
    listingGainsInRupees: -486,
    timelineDetails: [
      {
        title: "Bidding starts",
        date: "2021-11-08",
        status: "COMPLETED",
      },
      {
        title: "Bidding ends",
        date: "2021-11-10",
        status: "COMPLETED",
      },
      {
        title: "Allotment Finalization",
        date: "2021-11-15",
        status: "COMPLETED",
      },
      {
        title: "Refund initiation",
        date: "2021-11-16",
        status: "COMPLETED",
      },
      {
        title: "Demat transfer",
        date: "2021-11-17",
        status: "COMPLETED",
      },
      {
        title: "Listing date",
        date: "2021-11-18",
        status: "COMPLETED",
      },
    ],
  },
  {
    id: 3,
    name: "Nykaa",
    registeredName: "Zomato Limited",
    logo: "/zomato.png",

    issueDateRange: {
      from: "2021-10-28",
      to: "2021-11-01",
    },
    issueSizeRangeInCrores: {
      from: 5352,
      to: 5352,
    },
    priceRange: {
      from: 1085,
      to: 1125,
    },
    minimumInvestmentInRupees: 14225,
    noOfShares: 195,
    lotSize: 12,
    listingDate: "2021-11-10",
    listingPrice: 2001,
    listingGainsInRupees: 876,
    timelineDetails: [
      {
        title: "Bidding starts",
        date: "2021-10-28",
        status: "COMPLETED",
      },
      {
        title: "Bidding ends",
        date: "2021-11-01",
        status: "COMPLETED",
      },
      {
        title: "Allotment Finalization",
        date: "2021-11-08",
        status: "COMPLETED",
      },
      {
        title: "Refund initiation",
        date: "2021-11-09",
        status: "COMPLETED",
      },
      {
        title: "Demat transfer",
        date: "2021-11-09",
        status: "COMPLETED",
      },
      {
        title: "Listing date",
        date: "2021-11-10",
        status: "COMPLETED",
      },
    ],
  },
  {
    id: 4,
    name: "SBI Cards",
    registeredName: "Zomato Limited",
    logo: "/zomato.png",

    issueDateRange: {
      from: "2020-03-02",
      to: "2020-03-05",
    },
    issueSizeRangeInCrores: {
      from: 10355,
      to: 10355,
    },
    priceRange: {
      from: 750,
      to: 755,
    },
    minimumInvestmentInRupees: 15100,
    noOfShares: 195,
    lotSize: 19,
    listingDate: "2020-03-16",
    listingPrice: 658,
    listingGainsInRupees: -97,
    timelineDetails: [
      {
        title: "Bidding starts",
        date: "2020-03-02",
        status: "COMPLETED",
      },
      {
        title: "Bidding ends",
        date: "2020-03-05",
        status: "COMPLETED",
      },
      {
        title: "Allotment Finalization",
        date: "2020-03-10",
        status: "COMPLETED",
      },
      {
        title: "Refund initiation",
        date: "2020-03-11",
        status: "COMPLETED",
      },
      {
        title: "Demat transfer",
        date: "2020-03-12",
        status: "COMPLETED",
      },
      {
        title: "Listing date",
        date: "2020-03-16",
        status: "COMPLETED",
      },
    ],
  },
  {
    id: 5,
    name: "LIC",
    registeredName: "Zomato Limited",
    logo: "/zomato.png",

    issueDateRange: {
      from: "2022-05-04",
      to: "2022-05-09",
    },
    issueSizeRangeInCrores: {
      from: 21000,
      to: 21000,
    },
    priceRange: {
      from: 902,
      to: 949,
    },
    minimumInvestmentInRupees: 14235,
    noOfShares: 195,
    lotSize: 15,
    listingDate: "2022-05-17",
    listingPrice: 867,
    listingGainsInRupees: -82,
    timelineDetails: [
      {
        title: "Bidding starts",
        date: "2022-05-04",
        status: "COMPLETED",
      },
      {
        title: "Bidding ends",
        date: "2022-05-09",
        status: "COMPLETED",
      },
      {
        title: "Allotment Finalization",
        date: "2022-05-12",
        status: "COMPLETED",
      },
      {
        title: "Refund initiation",
        date: "2022-05-13",
        status: "COMPLETED",
      },
      {
        title: "Demat transfer",
        date: "2022-05-16",
        status: "COMPLETED",
      },
      {
        title: "Listing date",
        date: "2022-05-17",
        status: "COMPLETED",
      },
    ],
  },
]

export default function Home() {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Company / Issue Date </th>
          <th scope="col">Issue Size</th>
          <th scope="col">Price Range</th>
          <th scope="col">Minimum Invest/Qty</th>
        </tr>
      </thead>
      <tbody>
        {IPOS.map((ipo) => (
          <tr key={ipo.id}>
            <td className="flex">
              <Image src={ipo.logo} width={50} height={50} alt={""} />
              <div>
                <h2>{ipo.name}</h2>
                <p>
                  {ipo.issueDateRange.from} - {ipo.issueDateRange.to}
                </p>
              </div>
            </td>
            <td>{ipo.issueSizeRangeInCrores.to} crores</td>
            <td>
              {ipo.priceRange.from} - {ipo.priceRange.to}
            </td>
            <td>
              <h2>{ipo.minimumInvestmentInRupees}</h2>
              <p>
                {ipo.noOfShares}/{ipo.lotSize}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
