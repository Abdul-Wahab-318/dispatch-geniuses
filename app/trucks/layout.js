"use client"
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function Layout({children}) {
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    // Now it's safe to access the router
    console.log('Current pathname:', pathname);

    if(pathname === '/trucks')
        return children
    else
    return (
        <>
        <h1 className="text-8xl">BALLSSSSSSS Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quisquam nesciunt accusantium officiis! Quam vero quos voluptatibus in iusto labore repudiandae modi perferendis quod eaque quibusdam, impedit ullam eveniet voluptate?</h1>
        {children}
        </>
    );
}
