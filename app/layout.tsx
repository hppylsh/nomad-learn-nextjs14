import { Metadata } from "next"
import Navigation from "./components/navigation"

export const metadata:Metadata = {
  title : {
    template: "%s : Next Movies",
    default : `Loading...`
  },
  description: 'the best movie on the best framework',
}
/* page나 layout에서만 metadata 설정가능
컴포넌트에서 설정 불가능 */

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      
      <body>
        <Navigation/>
        {children}
        </body>
    </html>
  )
}
