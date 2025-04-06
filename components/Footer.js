import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col items-center justify-center bg-gradient-to-r from-[#FF2492] via-[#FF5FA8] to-[#FF8FC4] text-white py-10 px-5'>
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold">Follow Me</h2>
        <p className="text-lg">Stay connected with me on social media!</p>
        
      </div>
      <p className="mt-6 text-sm">&copy; 2023 Kayna. All rights reserved.</p>
    </div>
  )
}

export default Footer