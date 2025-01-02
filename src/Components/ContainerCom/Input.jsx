import React, { useId } from 'react'

const input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    placeholder,
    ...props
}, ref) {
    const id = useId()
    return (
        <div>
            {
                label &&
                <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>
            }
            <input
                className={`${className} px-3 py-2 w-full  rounded-lg bg-white text-black outline-none focus:bg-gray-200 `}
                type={type}
                ref={ref}
                id={id}
                placeholder={placeholder}
                {...props}
            />
        </div>
    )
})

export default Input