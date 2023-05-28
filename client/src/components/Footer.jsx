import React from 'react'

const Footer = () => {
  return (
    <>
    <hr class="mt-20 mb-8 border-gray-700" />
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-gray-300 font-semibold py-1 mb-8">
          Copyright © <span id="get-current-year">2023</span><span class="text-gray-300"> GLP community by GECG GLP
          </span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer