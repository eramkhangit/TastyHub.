import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './searchCSS.css'

function SearchPage() {

  const [data, setData] = useState(null)

  const searchedData = useLocation().state

  useEffect(() => {
    if (searchedData) {
      setData(searchedData)
    }
  }, [searchedData])

  return (
    <div className='mt-[80px] md:mt-16'>
      <div className='pt-[80px] md:pt-5 flex flex-wrap justify-center items-center gap-4 rounded'>
        {
          data && data.map((d) =>
          (
            <div key={d._id} className="relative h-[50vh] w-full px-4 md:px-0 md:max-w-[40%]">
              <img
                src={d.strMealThumb}
                alt="No Image"
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded">
                <div className='flex px-2 w-full justify-between'>

                  <div className='text-[15px] font-semibold'>
                    <span className='text-[12px]'>{d.category}</span>
                    <p >{d.strMeal}</p>
                    <p >Price :{d.price} Rs/-</p>
                  </div>

                  <div className='my-5'>
                    <button className=' px-4 py-1 buttons'>Add</button>
                  </div>

                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SearchPage