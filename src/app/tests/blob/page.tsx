
"use client"

// import SplashCursor from '@/blocks/animations/SplashCursor/SplashCursor'
import BlobCursor from '@/blocks/animations/BlobCursor/BlobCursor'
import SplashCursor from '@/components/tests/splash-cursor'
import Waves from '@/blocks/backgrounds/Waves/Waves'

export default function Page() {
    return (
        <main className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-zinc-500 text-7xl'>Testing Blob Cursor</h1>
            {/* <SplashCursor /> */}
            <Waves />
            <BlobCursor />
        </main>
    )
}