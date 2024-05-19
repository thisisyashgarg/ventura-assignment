"use client"

import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import React from "react"
import { IPOS } from "@/lib/constants"
import ProgessPointer from "@/ui/ProgressPointer"

const Index = ({}) => {
  const { back, push } = useRouter()
  const {
    id,
  }: {
    id: string
  } = useParams()

  const IPO = IPOS.find((ipo) => ipo.id === Number(id))

  return (
    <div className="m-4 md:m-10 space-y-8">
      <div className="flex gap-2">
        <p className="cursor-pointer" onClick={() => push("/company")}>
          Home
        </p>{" "}
        &gt; <p> {IPO?.name}</p>
      </div>

      <section className="space-y-4">
        <h1>IPO Details</h1>
        <div className="flex items-center  justify-between">
          <div className="flex gap-2 items-center">
            <div
              onClick={() => push("/company")}
              className="flex items-center justify-center w-10"
            >
              <Image
                src="/back.png"
                alt="back"
                className="h-fit"
                width={20}
                height={20}
                onClick={back}
              />
            </div>

            <Image
              className="h-fit rounded-full"
              src={IPO?.logo!}
              alt="Zomato"
              width={50}
              height={50}
            />
            <div>
              <h1>{IPO?.name}</h1>
              <p>{IPO?.registeredName}</p>
            </div>
          </div>

          <div className="hidden md:flex md:gap-4">
            <Image src="/pdf.png" alt="pdf" width={60} height={60} />
            <button className="bg-[#14153D] px-8 rounded-xl text-white">
              Apply now
            </button>
          </div>
        </div>
      </section>

      <section className="md:border space-y-4 p-4 rounded-xl">
        <h1>IPO Details</h1>
        <div className="border grid p-4 rounded-xl gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div>
            <h2>Issue Size</h2>
            <p>
              ₹{IPO?.issueSizeRangeInCrores.from} - ₹
              {IPO?.issueSizeRangeInCrores.to} crores
            </p>
          </div>

          <div>
            <h2>Price Range</h2>
            <p>
              ₹{IPO?.priceRange.from} - ₹{IPO?.priceRange.to}
            </p>
          </div>

          <div>
            <h2>Minimum Amount</h2>
            <p>₹{IPO?.minimumInvestmentInRupees}</p>
          </div>

          <div>
            <h2>Lot size</h2>
            <p>{IPO?.lotSize}</p>
          </div>

          <div>
            <h2>Minimum Quantity</h2>
            <p>{IPO?.lotSize}</p>
          </div>

          <div>
            <h2>Issue Date</h2>
            <p>
              {IPO?.issueDateRange.from} - {IPO?.issueDateRange.to}
            </p>
          </div>

          <div>
            <h2>Listed on</h2>
            <p>{IPO?.listingDate}</p>
          </div>
          <div>
            <h2>Listed price</h2>
            <p>₹{IPO?.listingPrice}</p>
          </div>

          <div>
            <h2>Listing gains</h2>
            <p>₹{IPO?.listingGainsInRupees}</p>
          </div>
        </div>
      </section>

      <section className="md:border space-y-4 p-4 rounded-xl">
        <h1>IPO Timeline</h1>
        <div className="flex flex-col md:grid md:grid-cols-6">
          {IPO?.timelineDetails.map((timeline) => (
            <ProgessPointer key={timeline.title} timeline={timeline} />
          ))}
        </div>
      </section>

      <section className="md:border space-y-4 p-4 rounded-xl">
        <h1>{IPO?.registeredName}</h1>
        <p>{IPO?.description}</p>
      </section>
    </div>
  )
}

export default Index
