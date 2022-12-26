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
                <h1>Basic Geometry</h1>
            </Link>

            <hr/>

            <div>
                <a target="_blank" href="https://www.youtube.com/watch?v=SV0W_B8iOzc&list=PLvfQp12V0hS3EbCBw7kDNOJ1l412tzcrM">Reference Youtube</a>
                <Link style={{
                textDecoration: 'underline',
                textUnderlineOffset: '0.5em'
                }} href={`/hashlips`} key={"hashlips"} passHref>
                    <h1>MetaVerse-HashLips From Youtube</h1>
                </Link>
            </div>

            <hr/>

            <div>
                <a target="_blank" href="https://www.udemy.com/course/threejs-using-react/">Reference Udemy</a>
                <Link style={{
                textDecoration: 'underline',
                textUnderlineOffset: '0.5em'
                }} href={`/showRoom`} key={"showRoom"} passHref>
                    <h1>Car Show Room</h1>
                </Link>
            </div>

        </div>
    )
}

export default Page