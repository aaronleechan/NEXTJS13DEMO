'use client';

import Link from "next/link";

// This file maps to the index route (/)
function Page() {
    return (
        <div>
            <h1>This is Learn By Doing List for React Three Fiber + NextJS</h1>
            <Link style={{
                textDecoration: 'underline',
                textUnderlineOffset: '0.5em'
            }} href={`/threeJS`} key={"basic"} passHref>
                <h1>Geometry From Docs </h1>
            </Link>
            <hr/>
            <Link style={{
                textDecoration: 'underline',
                textUnderlineOffset: '0.5em'
            }} href={`/hashlips`} key={"hashlips"} passHref>
                <h1>MetaVerse-HashLips From Youtube</h1>
            </Link>
            <hr/>
            <Link style={{
                textDecoration: 'underline',
                textUnderlineOffset: '0.5em'
            }} href={`/showRoom`} key={"showRoom"} passHref>
                <h1>Car Show Room From Udemy</h1>
            </Link>
        </div>
    )
}

export default Page