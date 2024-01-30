import React from 'react'
import { SessionProvider } from 'next-auth/react';

const Provider = ( { session , children }) => {
  return (
    <div>
     <SessionProvider session={session}>
          {children}
     </SessionProvider>
    </div>
  )
}

export default Provider