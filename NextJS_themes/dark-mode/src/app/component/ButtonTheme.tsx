"use client"
import React, { useRef, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { IconDeviceImacX, IconMoonStars, IconSettings2, IconSunHigh } from '@tabler/icons-react'


const ButtonTheme = () => {
    const { setTheme } = useTheme()
    const styleClass = 'w-full flex gap-2 px-4 py-3 hover:bg-slate-800 rounded dark:hover:text-white'
    const [isButtonShow, setsetIsButtonShow] = useState(false)
    const buttonRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutSide = (event: MouseEvent) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                setsetIsButtonShow(false)
            }
        }
        document.addEventListener('click', handleClickOutSide)
        return () => {
            document.removeEventListener('click', handleClickOutSide)
        }

    }, [])

    const handleThemeChange = (theme: string) => {
        setTheme(theme)
    }

    const isButtonSelected = () => {
        setsetIsButtonShow(!isButtonShow)
    }


    return (
        <div ref={buttonRef}>
            <button onClick={() => isButtonSelected()} className='w-fit px-6 py-3 rounded bg-black dark:bg-white dark:text-black text-white'>
                <IconSettings2 />
            </button>
            <div className={`flex-col p-2 rounded absolute mt-4 right-4 xl:right-20 bg-black text-white dark:bg-white dark:text-black ${!isButtonShow ? 'hidden' : ''}`}>
                <button className={styleClass} onClick={() => { handleThemeChange('system'); isButtonSelected(); }}><IconDeviceImacX /> System</button>
                <button className={styleClass} onClick={() => { handleThemeChange('dark'); isButtonSelected(); }}><IconSunHigh /> Dark</button>
                <button className={styleClass} onClick={() => { handleThemeChange('light'); isButtonSelected(); }}><IconMoonStars />Light</button>
            </div >
        </div>
    )
}

export default ButtonTheme
