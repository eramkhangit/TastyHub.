import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './searchCSS.css'

function CategoryPage() {
    const [categoryData, setCategoryData] = useState([])

    const categoryInfo = useSelector(state => state.rootReducer.category.categoryData)

    useEffect(() => {
        if (categoryInfo.length > 0) {
            setCategoryData(categoryInfo)
        }
    }, [categoryInfo])

    return (
        <div className='mt-16 mb-10'>

            {
                Array.isArray(categoryData) &&
                <div>

                    {
                        categoryData[0]
                            ?
                            <p className='text-center py-6 text-xl font-semibold'>Category : {categoryData[0].category} </p>
                            :
                            <p className='text-red-600 font-semibold text-lg text-center py-6'>Select Category First !!</p>
                    }

                    <div className='flex flex-row flex-wrap justify-center items-center gap-4 pt-4'>

                        {
                            categoryData.map(item => (
                                <div key={item._id} className='mx-2 md:mx-0 md:max-w-[40%] w-full md:w-[35%] flex flex-col md:flex-row min-h-[28vh] bg-color rounded'>

                                    <div className='max-w-full md:max-w-[55%] '>
                                        <img src={item.strMealThumb} alt="" className='md:rounded-tl rounded-bl' />
                                    </div>

                                    <div className='flex flex-col justify-between pt-4 px-4 w-full'>

                                        <div>
                                            <p className='text-[12px] '>{item.category}</p>
                                            <p>{item.strMeal}</p>
                                            <p className='text-red-600'>Price : <span>{item.price} Rs/-</span></p>
                                        </div>

                                        <div className='flex flex-col pb-3 gap-3 mx-auto w-[60%]'>
                                            <button className='buttons py-1 px-2'>Add To Cart</button>
                                            <button className='buy-btn py-1 px-2'>Buy Now</button>
                                        </div>

                                    </div>

                                </div>
                            ))
                        }
                    </div>

                </div>
            }

        </div>
    )
}

export default CategoryPage