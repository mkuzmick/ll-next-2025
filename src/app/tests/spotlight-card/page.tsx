import { ReactNode } from 'react';
import SpotlightCard from '@/blocks/components/SpotlightCard/SpotlightCard';

interface SCardProps {
    children: ReactNode;
}
const SCard = ({children}: SCardProps) => {
    return (
        <div>

            {children}
            <SpotlightCard>
                <div className='flex items-center justify-center w-full h-full'>
                    <h1 className='text-white text-7xl'>Spotlight Card</h1>
                </div>
            </SpotlightCard>
        </div>
    );
}

export default function Page() {
    return (
        <main>
            <SCard>
                SCard content
            </SCard>
        </main>
    )
}