"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: string
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h2>IPO not found!</h2>
        <button className="hover:text-gray-500" onClick={() => reset()}>
          Try again
        </button>
      </div>
    </div>
  )
}
