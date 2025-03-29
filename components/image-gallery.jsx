"use client"

import { Loader } from "lucide-react"
import ImageCard from "./image-card"
import { Button } from "@/components/ui/button"

export default function ImageGallery({ images, loading, onLoadMore }) {
  if (loading && images.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (images.length === 0 && !loading) {
    return (
      <div className="text-center p-8">
        <p>No images found. Try a different search term.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <ImageCard key={`${image.id}-${index}`} image={image} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button onClick={onLoadMore} disabled={loading} className="px-6">
          {loading ? (
            <>
              <Loader className="h-4 w-4 mr-2 animate-spin" />
              Loading...
            </>
          ) : (
            "Load More Images"
          )}
        </Button>
      </div>
    </div>
  )
}

