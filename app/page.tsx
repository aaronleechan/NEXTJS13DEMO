'use client';

import Link from "next/link";

// This file maps to the index route (/)
function Page() {
    return (
        <div>
            <h1>Hello, Next.js! This is Page</h1>
            <Link href={`/threeJS`} key={"three"} passHref>
                <h1>Geometry</h1>
            </Link>
        </div>
    )
}

export default Page