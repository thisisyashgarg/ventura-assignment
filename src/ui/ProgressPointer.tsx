import { IPOStatus, IPOTimeline } from "@/lib/types"
import clsx from "clsx"
import Image from "next/image"

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

const ProgessPointer = ({ timeline }: { timeline: IPOTimeline }) => {
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
        <h2>{timeline.title}</h2>
        <p>{timeline.date}</p>
      </div>
    </div>
  )
}

export default ProgessPointer
