"use client"

import { useState, useEffect } from "react"
import QuoteGenerator from "@/components/quote-generator"
import ImageGallery from "@/components/image-gallery"
import SearchBar from "@/components/search-bar"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [images, setImages] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)

  // Updated fetchImages function to use our server-side API route
  const fetchImages = async (query = "", page = 1, isLoadMore = false) => {
    setLoading(true)
    try {
      // Call our server-side API route instead of Unsplash directly
      const url = `/api/images?query=${encodeURIComponent(query)}&page=${page}`

      console.log(`Fetching images from: ${url}`)

      const response = await fetch(url)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to fetch images")
      }

      const data = await response.json()

      // If loading more, append to existing images, otherwise replace
      if (isLoadMore) {
        setImages((prevImages) => [...prevImages, ...(query ? data.results : data)])
      } else {
        setImages(query ? data.results : data)
      }

      setError(null)
    } catch (err) {
      console.error("Error fetching images:", err)
      setError(`Failed to load images: ${err.message}. Please try again later.`)
    } finally {
      setLoading(false)
    }
  }

  // Ensure images are loaded when the component mounts
  useEffect(() => {
    console.log("Component mounted, fetching initial images")
    fetchImages("", 1, false)
    // Empty dependency array ensures this only runs once on mount
  }, [])

  // Function to load more images
  const loadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
    fetchImages(searchQuery, nextPage, true)
  }

  // Update the handleSearch function to reset page when searching
  const handleSearch = (query) => {
    setSearchQuery(query)
    setPage(1)
    fetchImages(query, 1, false)
  }

  // Add a retry button in case of errors
  const handleRetry = () => {
    fetchImages(searchQuery, page, false)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Random Quote & Image Gallery</h1>

      <div className="mb-10">
        <QuoteGenerator />
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Image Gallery</h2>
        <SearchBar onSearch={handleSearch} />
      </div>

      {error ? (
        <div className="text-red-500 text-center p-4 space-y-4">
          <p>{error}</p>
          <Button onClick={handleRetry}>Retry</Button>
        </div>
      ) : (
        <ImageGallery images={images} loading={loading} onLoadMore={loadMore} />
      )}
    </main>
  )
}

