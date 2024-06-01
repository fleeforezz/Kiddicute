import localFont from 'next/font/local'
import './globals.css'

const quicksan = localFont({
  src: [
    {
      path: './fonts/QuickSand/Quicksand-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/QuickSand/Quicksand-Medium.woff',
      weight: '500',
      style: 'medium',
    },
    {
      path: './fonts/QuickSand/Quicksand-SemiBold.woff',
      weight: '600',
      style: 'semibold',
    },
    {
      path: './fonts/QuickSand/Quicksand-Bold.woff',
      weight: '700',
      style: 'bold',
    },
  ],
})

export const metadata = {
  title: 'Kiddicute',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Icon.png" sizes="any" />
      </head>
      <body className={quicksan.className}>
        {children}
      </body>
    </html>
  )
}
