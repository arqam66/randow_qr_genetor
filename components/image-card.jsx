"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ImageCard({ image }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleDownload = async () => {
    try {
      const response = await fetch(image.urls.full)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.style.display = "none"
      a.href = url
      a.download = `unsplash-${image.id}.jpg`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error("Error downloading image:", error)
    }
  }

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={image.urls.regular || "/placeholder.svg"}
          alt={image.alt_description || "Unsplash image"}
          className="w-full aspect-square object-cover"
        />

        {isHovered && (
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-between p-4 transition-opacity duration-300">
            <div className="text-white">
              <p className="font-medium truncate">{image.user.name}</p>
            </div>

            <Button variant="secondary" size="sm" className="self-end flex items-center gap-2" onClick={handleDownload}>
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>
        )}
      </div>

      <CardContent className="p-3">
        <p className="text-sm truncate">{image.description || image.alt_description || "Unsplash image"}</p>
      </CardContent>
    </Card>
  )
}

