import React from 'react'

const Button = ({
    text,
    className,
}) => {
    return (
        <button
            className={`
        bg-primary text-primary-foreground
        font-semibold
        rounded-lg transition cursor-pointer
        text-sm px-4 py-2
        sm:text-base sm:px-5 sm:py-2.5
        lg:text-lg lg:px-6 lg:py-3
        hover:bg-(--primary-hover)
        ${className}
      `}
        >
            {text}
        </button>
    )
}

export default Button
