import SplashCursor from '@/blocks/animations/SplashCursor/SplashCursor';
import { ReactNode } from 'react';

interface SplashProps {
    children: ReactNode;
}
const Splash = ({children}: SplashProps) => {
    return (
        <SplashCursor />
    );
}

export default function Page() {
    return (
        <main className='flex flex-col items-center justify-center h-screen'>
            <SplashCursor />
        </main>
    )
}