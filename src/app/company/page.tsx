"use client"

import { IPOS } from "@/lib/constants"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Home() {
  const { push } = useRouter()

  return (
    <>
      {/* For desktop */}

      <div className="m-10">
        <table className="w-full ">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3" scope="col">
                Company / Issue Date{" "}
              </th>
              <th className="p-3" scope="col">
                Issue Size
              </th>
              <th className="p-3" scope="col">
                Price Range
              </th>
              <th className="p-3" scope="col">
                Minimum Invest/Qty
              </th>
            </tr>
          </thead>
          <tbody>
            {IPOS.map((ipo) => (
              <tr
                className="border cursor-pointer"
                onClick={() => push(`/company/${ipo.id} `)}
                key={ipo.id}
              >
                <td className="flex p-3 gap-3">
                  <Image
                    className="rounded-full border"
                    src={ipo.logo}
                    width={50}
                    height={50}
                    alt={""}
                  />
                  <div>
                    <h2>{ipo.name}</h2>
                    <p>
                      {ipo.issueDateRange.from} - {ipo.issueDateRange.to}
                    </p>
                  </div>
                </td>
                <td className="p-3 text-center">
                  ₹{ipo.issueSizeRangeInCrores.to} Crores
                </td>
                <td className="p-3 text-center">
                  ₹{ipo.priceRange.from} - ₹{ipo.priceRange.to}
                </td>
                <td className="p-3 text-center">
                  <h2>₹{ipo.minimumInvestmentInRupees}</h2>
                  <p>
                    {ipo.noOfShares} shares/{ipo.lotSize} lots
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* For mobile */}
      <div className="h-screen md:hidden flex items-center justify-center">
        Switch to desktop view to see the IPO Listings
      </div>
    </>
  )
}
