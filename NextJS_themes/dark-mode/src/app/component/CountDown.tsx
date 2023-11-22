"use client"
import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
    const countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setCountdown({
                days,
                hours,
                minutes,
                seconds,
            });

            if (distance < 0) {
                clearInterval(interval);
                setCountdown({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    return (
        <div className='w-full h-screen flex flex-col gap-6 justify-center items-center px-4 xl:px-20'>
            <div className="header-content flex justify-center flex-col items-center gap-2">
                <h1 className='text-3xl font-bold text-center'>Countdown Event</h1>
                <p className='text-center w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veniam rem voluptatem fuga non vel recusandae blanditiis? Amet, labore! Earum laudantium quas facilis nulla! Animi repellat delectus nisi dignissimos, ipsam eaque quia?</p>
            </div>
            <div className="grid grid-cols-4 gap-2">
                <div className="max-w-[180px] h-fit p-8 rounded flex justify-center flex-col items-center bg-black text-white">
                    <p className='text-3xl font-bold'>
                        {countdown.days}
                    </p>
                    <p>days</p>
                </div>
                <div className="max-w-[180px] h-fit p-8 rounded flex justify-center flex-col items-center bg-black text-white">
                    <p className='text-3xl font-bold'>
                        {countdown.hours}
                    </p>
                    <p>hours</p>
                </div>
                <div className="max-w-[180px] h-fit p-8 rounded flex justify-center flex-col items-center bg-black text-white">
                    <p className='text-3xl font-bold'>
                        {countdown.minutes}
                    </p>
                    <p>minutes</p>
                </div>
                <div className="max-w-[180px] h-fit p-8 rounded flex justify-center flex-col items-center bg-black text-white">
                    <p className='text-3xl font-bold'>
                        {countdown.seconds}
                    </p>
                    <p>seconds</p>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
