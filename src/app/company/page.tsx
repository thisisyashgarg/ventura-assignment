"use client"

import { IPOS } from "@/lib/constants"
import Image from "next/image"
import { useRouter } from "next/navigation"
import dayjs from "dayjs"
import { convertDate } from "@/lib/utils"

export default function Home() {
  const { push } = useRouter()

  return (
    <>
      {/* For desktop */}

      <div className="m-10">
        <table className="w-full border-2 rounded-t-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-sm text-gray-500 font-light">
                Company / Issue Date{" "}
              </th>
              <th className="p-3 text-sm text-gray-500 font-light">
                Issue Size
              </th>
              <th className="p-3 text-sm text-gray-500 font-light">
                Price Range
              </th>
              <th className="p-3 text-sm text-gray-500 font-light">
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
                    <h2 className="font-semibold text-blue-900 uppercase">
                      {ipo.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {convertDate(ipo.issueDateRange.from)} -{" "}
                      {convertDate(ipo.issueDateRange.to)}
                    </p>
                  </div>
                </td>
                <td className="p-3 text-center font-semibold text-blue-900">
                  ₹{ipo.issueSizeRangeInCrores.to} Crores
                </td>
                <td className="p-3 text-center font-semibold text-blue-900">
                  ₹{ipo.priceRange.from} - ₹{ipo.priceRange.to}
                </td>
                <td className="p-3 text-center font-semibold text-blue-900">
                  <h2>₹{ipo.minimumInvestmentInRupees}</h2>
                  <p className="text-sm text-gray-500 font-light">
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
