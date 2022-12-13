'use client';

import Link from "next/link";

// This file maps to the index route (/)
function Page() {
    return (
        <div>
            <h1>Hello, Next.js! This is Page</h1>
            <Link href={`/threeJS`} key={"basic"} passHref>
                <h1>Geometry </h1>
            </Link>
            <hr/>
            <Link href={`/hashlips`} key={"hashlips"} passHref>
                <h1>MetaVerse-HashLips</h1>
            </Link>
        </div>
    )
}

export default Page