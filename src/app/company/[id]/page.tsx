"use client"

import Image from "next/image"
import { useParams } from "next/navigation"
import React, { ReactNode } from "react"
import { IPOS, IPOStatus } from "../page"
import clsx from "clsx"

const page = ({}) => {
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
          <div className="md:flex hidden p-3 rounded-md border items-center justify-center">
            <Image
              className="h-fit"
              src="/back.png"
              alt="back"
              width={30}
              height={30}
            />
          </div>

          <Image src={IPO?.logo!} alt="Zomato" width={50} height={50} />
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
            <div className="flex md:flex-col">
              <div className="flex flex-col md:flex-row items-center gap-1 px-2">
                <div className="flex h-4 w-4 items-center justify-center pt-0.5">
                  {STATE_HANDLER[timeline?.status].svg}
                </div>
                <div
                  className={clsx(
                    "w-[2px] md:h-[2px] md:w-full grow",
                    STATE_HANDLER[timeline?.status].background_style
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
    svg?: ReactNode
    text_style?: string
    background_style?: string
  }
} = {
  COMPLETED: {
    svg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="20" height="20" rx="10" fill="#42BE42" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.49872 12.5596L15.0273 6.03125L15.9701 6.97408L8.97012 13.9738C8.70978 14.2341 8.28769 14.2341 8.02734 13.9738L4.52734 10.4741L5.47011 9.53124L8.49872 12.5596Z"
          fill="white"
        />
      </svg>
    ),
    text_style: "text-gray-800",
    background_style: "bg-gray-800",
  },
  // CURRENT: {
  //   svg: (
  //     <svg
  //       width="16"
  //       height="16"
  //       viewBox="0 0 16 16"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <g clipPath="url(#clip0_7151_33620)">
  //         <circle cx="8" cy="8" r="8" fill="#1C1C22" />
  //         <circle cx="8" cy="8" r="3" fill="white" />
  //       </g>
  //       <defs>
  //         <clipPath id="clip0_7151_33620">
  //           <rect width="16" height="16" fill="white" />
  //         </clipPath>
  //       </defs>
  //     </svg>
  //   ),
  //   text_style: "text-gray-800",
  //   background_style: "bg-gray-800",
  // },
  // UNFINISHED: {
  //   svg: (
  //     <svg
  //       width="17"
  //       height="17"
  //       viewBox="0 0 8 9"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <g clipPath="url(#clip0_7120_34734)">
  //         <circle cx="4" cy="4.50781" r="4" fill="#E0E1E6" />
  //       </g>
  //       <defs>
  //         <clipPath id="clip0_7120_34734">
  //           <rect
  //             width="8"
  //             height="8"
  //             fill="white"
  //             transform="translate(0 0.507812)"
  //           />
  //         </clipPath>
  //       </defs>
  //     </svg>
  //   ),
  //   text_style: "text-gray-500",
  //   background_style: "bg-gray-200",
  // },
  // REJECTED: {
  //   svg: (
  //     <svg
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <g clipPath="url(#clip0_7151_35815)">
  //         <path
  //           d="M12 2.25781C10.0716 2.25781 8.18657 2.82964 6.58319 3.90098C4.97982 4.97233 3.73013 6.49507 2.99218 8.27665C2.25422 10.0582 2.06114 12.0186 2.43735 13.9099C2.81355 15.8013 3.74215 17.5385 5.10571 18.9021C6.46928 20.2657 8.20656 21.1943 10.0979 21.5705C11.9892 21.9467 13.9496 21.7536 15.7312 21.0156C17.5127 20.2777 19.0355 19.028 20.1068 17.4246C21.1782 15.8212 21.75 13.9362 21.75 12.0078C21.7473 9.42279 20.7192 6.94442 18.8913 5.11654C17.0634 3.28865 14.585 2.26054 12 2.25781ZM15.5306 14.4772C15.6003 14.5469 15.6556 14.6296 15.6933 14.7206C15.731 14.8117 15.7504 14.9093 15.7504 15.0078C15.7504 15.1064 15.731 15.2039 15.6933 15.295C15.6556 15.386 15.6003 15.4688 15.5306 15.5384C15.4609 15.6081 15.3782 15.6634 15.2872 15.7011C15.1961 15.7388 15.0986 15.7582 15 15.7582C14.9015 15.7582 14.8039 15.7388 14.7128 15.7011C14.6218 15.6634 14.5391 15.6081 14.4694 15.5384L12 13.0681L9.53063 15.5384C9.46095 15.6081 9.37822 15.6634 9.28718 15.7011C9.19613 15.7388 9.09855 15.7582 9 15.7582C8.90146 15.7582 8.80388 15.7388 8.71283 15.7011C8.62179 15.6634 8.53906 15.6081 8.46938 15.5384C8.3997 15.4688 8.34442 15.386 8.30671 15.295C8.269 15.2039 8.24959 15.1064 8.24959 15.0078C8.24959 14.9093 8.269 14.8117 8.30671 14.7206C8.34442 14.6296 8.3997 14.5469 8.46938 14.4772L10.9397 12.0078L8.46938 9.53844C8.32865 9.39771 8.24959 9.20684 8.24959 9.00781C8.24959 8.80879 8.32865 8.61792 8.46938 8.47719C8.61011 8.33646 8.80098 8.2574 9 8.2574C9.19903 8.2574 9.3899 8.33646 9.53063 8.47719L12 10.9475L14.4694 8.47719C14.5391 8.4075 14.6218 8.35223 14.7128 8.31452C14.8039 8.27681 14.9015 8.2574 15 8.2574C15.0986 8.2574 15.1961 8.27681 15.2872 8.31452C15.3782 8.35223 15.4609 8.4075 15.5306 8.47719C15.6003 8.54687 15.6556 8.6296 15.6933 8.72064C15.731 8.81169 15.7504 8.90927 15.7504 9.00781C15.7504 9.10636 15.731 9.20394 15.6933 9.29498C15.6556 9.38603 15.6003 9.46876 15.5306 9.53844L13.0603 12.0078L15.5306 14.4772Z"
  //           fill="#E93C3C"
  //         />
  //       </g>
  //       <defs>
  //         <clipPath id="clip0_7151_35815">
  //           <rect
  //             width="24"
  //             height="24"
  //             fill="white"
  //             transform="translate(0 0.0078125)"
  //           />
  //         </clipPath>
  //       </defs>
  //     </svg>
  //   ),
  //   text_style: "text-gray-800",
  //   background_style: "bg-gray-800",
  // },
  PENDING: {
    svg: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 8 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_7120_34734)">
          <circle cx="4" cy="4.50781" r="4" fill="#E0E1E6" />
        </g>
        <defs>
          <clipPath id="clip0_7120_34734">
            <rect
              width="8"
              height="8"
              fill="white"
              transform="translate(0 0.507812)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    text_style: "text-gray-500",
    background_style: "bg-gray-200",
  },
}

export default page
