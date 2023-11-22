import React from 'react'

interface BottonProps {
    children: React.ReactNode
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void
    className?: string
    variant?: 'primary' | 'border' | 'link' | "icon"
}

const ButtonBase: React.FC<BottonProps> = ({ children, type, onClick, className, variant }) => {
    const buttonStyle = {
        primary: 'px-8 py-3 bg-black dark:bg-white dark:text-black rounded font-semibold text-white border-2 border-black',
        border: 'px-8 py-3 bg-black dark:bg-white dark:text-black rounded font-semibold text-white border-2 border-black',
        link: 'font-semibold text-black',
        icon: 'font-semibold bg-black p-4 rounded text-white'
    }
    const style = buttonStyle[variant || 'primary']
    return (
        <div>
            <button className={`${style} ${className}`} type={type} onClick={onClick}>{children}</button>
        </div>
    )
}

export default ButtonBase
