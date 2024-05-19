"use client"

import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import React, { ReactNode } from "react"
import { IPOS, IPOStatus } from "../page"
import clsx from "clsx"

const Index = ({}) => {
  const { back } = useRouter()
  const {
    id,
  }: {
    id: string
  } = useParams()

  const IPO = IPOS.find((ipo) => ipo.id === Number(id))

  return (
    <div>
      <h1>IPO Details</h1>

      <div className="flex justify-between">
        <div className="flex">
          <div
            onClick={() => back()}
            className="md:flex hidden p-3 rounded-md border items-center justify-center"
          >
            <Image
              className="h-fit"
              src="/back.png"
              alt="back"
              width={30}
              height={30}
            />
          </div>

          <Image
            className="h-fit"
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

        <div className="hidden md:flex">
          <Image src="/pdf.png" alt="pdf" width={50} height={50} />
          <button>Apply now</button>
        </div>
      </div>

      <section className="md:border">
        <h1>IPO Details</h1>
        <div className="border grid grid-cols-2 md:grid-cols-4">
          <div>
            <h2>Issue Size</h2>
            <p>
              {IPO?.issueSizeRangeInCrores.from} -{" "}
              {IPO?.issueSizeRangeInCrores.to} crores
            </p>
          </div>

          <div>
            <h2>Price Range</h2>
            <p>
              {IPO?.priceRange.from} - {IPO?.priceRange.to}
            </p>
          </div>

          <div>
            <h2>Minimum Amount</h2>
            <p>{IPO?.minimumInvestmentInRupees}</p>
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
        </div>
      </section>

      <section className="md:border">
        <h1>IPO Timeline</h1>
        <div className="flex flex-col md:flex-row">
          {IPO?.timelineDetails.map((timeline) => (
            <div key={timeline.title} className="flex md:flex-col">
              <div className="flex flex-col md:flex-row items-center">
                <div
                  className={clsx(
                    "w-7 h-7 p-1 aspect-square rounded-full",
                    STATE_HANDLER[timeline.status].svgBackgroundStyle
                  )}
                >
                  {timeline.status === "COMPLETED" && (
                    <Image
                      src={"/tick.svg"}
                      alt="calendar"
                      width={28}
                      height={28}
                    />
                  )}
                </div>
                <div
                  className={clsx(
                    "w-[2px] md:h-[2px] md:w-full grow",
                    STATE_HANDLER[timeline?.status].lineBackgroundStyle
                  )}
                />
              </div>

              <div>
                <h2>{timeline.title}</h2>
                <p>{timeline.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="md:border">
        <h1>{IPO?.registeredName}</h1>
        <p>{IPO?.description}</p>
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

export default Index
