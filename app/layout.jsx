export const metadata = {
  title: "Random Quote & Image Gallery",
  description: "A gallery of random images with search functionality and inspirational quotes",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}



import './globals.css'