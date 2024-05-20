"use client"

import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import React from "react"
import { IPOS } from "@/lib/constants"
import { IPOStatus, IPOTimeline } from "@/lib/types"
import { clsx } from "clsx"
import { convertDate } from "@/lib/utils"
import Error from "@/app/error"

const Index = ({}) => {
  const { back, push } = useRouter()
  const {
    id,
  }: {
    id: string
  } = useParams()

  const IPO = IPOS.find((ipo) => ipo.id === Number(id))

  if (!IPO || !id)
    return <Error error={"IPO not found"} reset={() => push("/")} />

  return (
    <div className="m-4 md:m-10 space-y-8">
      <div className="flex items-center gap-2 text-gray-500 font-light">
        <p className="cursor-pointer text-sm " onClick={() => push("/")}>
          Home
        </p>{" "}
        &gt; <p className="text-sm "> {IPO?.name}</p>
      </div>

      <section className="space-y-4">
        <h1 className="font-semibold text-blue-900 text-lg">IPO Details</h1>
        <div className="flex items-center  justify-between">
          <div className="flex gap-3 items-center">
            <div
              onClick={() => push("/")}
              className="flex items-center justify-center w-10"
            >
              <Image
                src="/back.png"
                alt="back"
                className="h-fit cursor-pointer"
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
              <h1 className="font-semibold text-blue-900 text-2xl">
                {IPO?.name}
              </h1>
              <p className="text-sm text-gray-500 font-light">
                {IPO?.registeredName}
              </p>
            </div>
          </div>

          <div className="hidden md:flex md:gap-4">
            <Image
              className="cursor-pointer"
              src="/pdf.png"
              alt="pdf"
              width={60}
              height={60}
            />
            <button className="bg-[#14153D] px-8 rounded-xl text-white">
              Apply now
            </button>
          </div>
        </div>
      </section>

      <section className="md:border-2 space-y-4 p-4 rounded-xl">
        <h1 className="font-semibold text-blue-900 text-lg">IPO Details</h1>
        <div className="border-2 grid p-4 rounded-xl gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div>
            <h2 className="text-sm text-gray-500 font-light">Issue Size</h2>
            <p className="font-semibold text-blue-900">
              ₹{IPO?.issueSizeRangeInCrores.from} - ₹
              {IPO?.issueSizeRangeInCrores.to} crores
            </p>
          </div>

          <div>
            <h2 className="text-sm text-gray-500 font-light">Price Range</h2>
            <p className="font-semibold text-blue-900">
              ₹{IPO?.priceRange.from} - ₹{IPO?.priceRange.to}
            </p>
          </div>

          <div>
            <h2 className="text-sm text-gray-500 font-light">Minimum Amount</h2>
            <p className="font-semibold text-blue-900">
              ₹{IPO?.minimumInvestmentInRupees}
            </p>
          </div>

          <div>
            <h2 className="text-sm text-gray-500 font-light">Lot size</h2>
            <p className="font-semibold text-blue-900">{IPO?.lotSize}</p>
          </div>

          <div>
            <h2 className="text-sm text-gray-500 font-light">
              Minimum Quantity
            </h2>
            <p className="font-semibold text-blue-900">{IPO?.lotSize}</p>
          </div>

          <div>
            <h2 className="text-sm text-gray-500 font-light">Issue Date</h2>
            <p className="font-semibold text-blue-900">
              {convertDate(IPO?.issueDateRange?.from!)} -{" "}
              {convertDate(IPO?.issueDateRange.to!)}
            </p>
          </div>

          <div>
            <h2 className="text-sm text-gray-500 font-light">Listed on</h2>
            <p className="font-semibold text-blue-900">
              {convertDate(IPO?.listingDate!)}
            </p>
          </div>
          <div>
            <h2 className="text-sm text-gray-500 font-light">Listed price</h2>
            <p className="font-semibold text-blue-900">₹{IPO?.listingPrice}</p>
          </div>

          <div>
            <h2 className="text-sm text-gray-500 font-light">Listing gains</h2>
            <p className="font-semibold text-blue-900">
              ₹{IPO?.listingGainsInRupees}
            </p>
          </div>
        </div>
      </section>

      <section className="md:border-2 space-y-4 p-4 rounded-xl">
        <h1 className="font-semibold text-blue-900 text-lg">IPO Timeline</h1>
        <div className="flex flex-col md:grid md:grid-cols-6">
          {IPO?.timelineDetails.map((timeline) => (
            <ProgressPointer key={timeline.title} timeline={timeline} />
          ))}
        </div>
      </section>

      <section className="md:border-2 space-y-4 p-4 rounded-xl">
        <h1 className="font-semibold text-blue-900 text-lg">
          {IPO?.registeredName}
        </h1>
        <p className="text-sm text-gray-500 font-light">{IPO?.description}</p>
      </section>
    </div>
  )
}

const STATE_HANDLER: {
  [key in IPOStatus]: {
    svgBackgroundStyle?: string
    lineBackgroundStyle?: string
  }
} = {
  COMPLETED: {
    lineBackgroundStyle: "bg-gray-800",
    svgBackgroundStyle: "bg-green-500",
  },

  PENDING: {
    lineBackgroundStyle: "bg-gray-200",
    svgBackgroundStyle: "bg-gray-300",
  },
}

const ProgressPointer = ({ timeline }: { timeline: IPOTimeline }) => {
  return (
    <div key={timeline.title} className="flex gap-4 md:flex-col">
      <div className="flex flex-col md:flex-row items-center">
        <div
          className={clsx(
            "w-7 h-7 p-1 aspect-square rounded-full",
            STATE_HANDLER[timeline.status].svgBackgroundStyle
          )}
        >
          {timeline.status === "COMPLETED" && (
            <Image src={"/tick.svg"} alt="calendar" width={28} height={28} />
          )}
        </div>
        <div
          className={clsx(
            "w-[2px] md:h-[2px] md:w-full grow",
            STATE_HANDLER[timeline?.status].lineBackgroundStyle
          )}
        />
      </div>

      <div className="pb-4">
        <h2 className="font-semibold text-blue-900">{timeline.title}</h2>
        <p className="text-sm text-gray-500 font-light">
          {convertDate(timeline.date)}
        </p>
      </div>
    </div>
  )
}

export default Index
