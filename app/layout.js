
import './styles/globals.css'


export const metadata = {
  title: 'Trackeria',
  description: 'Your All-In-One Digital Security App',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
