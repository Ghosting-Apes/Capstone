"use client"
import { SegmentedControl } from '@mantine/core';
import classes from './styles/GradientSegmentedControl.module.css';
import { usePathname, useRouter } from 'next/navigation';


export default function NavBar() {
    const router = useRouter();
    const pathName = usePathname();

    const routes = {"Home": "/", "World Map": "/map", "People" : "/people", "References" : "/bibliography", "Timeline" : "/timeline", "Contact": "/contact" };
    
    const handleRouteChange = (e: string) => {
        return router.push(routes[e as keyof typeof routes]);
    }

    return (
        <div className='pb-10'>
            <SegmentedControl
                radius="xl"
                size="md"
                data={['Timeline', 'World Map', 'Home', 'People', 'References', 'Contact']}
                defaultValue={Object.keys(routes).find(key => routes[key as keyof typeof routes] === pathName)}
                onChange={(e) => handleRouteChange(e)}
                classNames={classes}
            />
        </div>
    );
}