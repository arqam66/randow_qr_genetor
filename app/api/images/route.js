import { NextResponse } from "next/server"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("query") || ""
  const page = searchParams.get("page") || "1"

  try {
    // Use different endpoints based on whether we're searching or getting random images
    const url = query
      ? `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=30`
      : `https://api.unsplash.com/photos?page=${page}&per_page=30`

    const response = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch images: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching images:", error)
    return NextResponse.json({ error: `Failed to load images: ${error.message}` }, { status: 500 })
  }
}

