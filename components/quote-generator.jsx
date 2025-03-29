"use client"

import { useState, useEffect } from "react"
import { RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
  { text: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
  { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
  {
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
  },
  { text: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
  { text: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead" },
  {
    text: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson",
  },
  {
    text: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    author: "Helen Keller",
  },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "Whoever is happy will make others happy too.", author: "Anne Frank" },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  { text: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou" },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "In this life we cannot do great things. We can only do small things with great love.",
    author: "Mother Teresa",
  },
  {
    text: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    text: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author: "Dr. Seuss",
  },
  { text: "If life were predictable it would cease to be life and be without flavor.", author: "Eleanor Roosevelt" },
  { text: "Life is a succession of lessons which must be lived to be understood.", author: "Ralph Waldo Emerson" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
  {
    text: "I have learned over the years that when one's mind is made up, this diminishes fear.",
    author: "Rosa Parks",
  },
  {
    text: "I alone cannot change the world, but I can cast a stone across the water to create many ripples.",
    author: "Mother Teresa",
  },
  { text: "Nothing is impossible, the word itself says 'I'm possible'!", author: "Audrey Hepburn" },
  { text: "The question isn't who is going to let me; it's who is going to stop me.", author: "Ayn Rand" },
  { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
  { text: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
  { text: "Imagine your life is perfect in every respect; what would it look like?", author: "Brian Tracy" },
  { text: "We generate fears while we sit. We overcome them by action.", author: "Dr. Henry Link" },
  { text: "Security is mostly a superstition. Life is either a daring adventure or nothing.", author: "Helen Keller" },
  { text: "The man who has confidence in himself gains the confidence of others.", author: "Hasidic Proverb" },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
]

export default function QuoteGenerator() {
  const [quote, setQuote] = useState(null)

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[randomIndex])
  }

  useEffect(() => {
    getRandomQuote()
  }, [])

  if (!quote) return <div>Loading quote...</div>

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <blockquote className="text-xl italic mb-4">"{quote.text}"</blockquote>
        <div className="flex justify-between items-center">
          <p className="font-semibold">— {quote.author}</p>
          <Button variant="outline" size="sm" onClick={getRandomQuote} className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            New Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

