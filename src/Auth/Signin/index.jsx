import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const Signin = () => {
  return (
    <div className='flex items-center justify-center mt-20'>
      <SignIn />
    </div>
  )
}

export default Signin
