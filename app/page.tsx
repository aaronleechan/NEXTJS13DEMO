'use client';

import Link from "next/link";
import { routeData } from './routeData';

// This file maps to the index route (/)
function Page() {
    return (
        <div>
            <h1>This is Learn By Doing List for React Three Fiber + NextJS</h1>
            {
                routeData.map(({name, path}) => {
                    return(
                        <>
                             <Link style={{
                                textDecoration: 'underline',
                                textUnderlineOffset: '0.5em'
                            }}  href={`${path}`} key={path} passHref>
                                <h1>{name}</h1>
                            </Link>
                            <hr/>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Page;