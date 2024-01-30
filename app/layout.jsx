import "../styles/globals.css"

export const metadata = {
    title :'Prompts',
    description :'Prompts',
};


const RootLayout = () => {
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