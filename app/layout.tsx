import '@/app/ui/global.css'
import {inter} from '@/app/ui/font'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //adding the inter class to the body in layout applies the font to the whole project. Antialised smoothens out the font 
  return (
    <html lang="en">
       
      <body className={`${inter.className} antialised`}>{children}</body>
    </html>
  );
}
//children are the files 
//Server component by default. 
//nested routes that can be inherited by other layouts eg, dashboard. 
//root segement-segment-leaf segment. This transalates to the URL segments.
