import "@styles/globals.css"
import Home from "./page";

export const metadata = {
    title :'Prompts',
    description :'Prompts',
};


const RootLayout = ({children}) => {
  return (
  <html lang="en">
    <body>
        <div className="main">
            <div className="gradient"/>
        </div>
        <main>
          {children}
        </main>
    </body>
  </html>
  )
}

export default RootLayout