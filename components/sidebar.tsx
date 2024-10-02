"use client"

import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import { useMemo } from "react";

import Box from "./box";
import SidebarItem from "./sidebar_item";

interface sidebar_properties {
    children: React.ReactNode;
}

const sidebar: React.FC<sidebar_properties> = ({
    children
}) => {
    const path_name = usePathname();

    const routes = useMemo(() => [
        {
            label: 'Home',
            icon: HiHome,
            active: path_name !== '/search',
            href: '/',
        },
        {
            label: 'Search',
            icon: BiSearch,  
            active: path_name === '/search',
            href: '/search',
        }
    ], [path_name]);

    return (
        <div className="flex h-full">
            <div 
                className="
                    hidden
                    flex-col
                    md:flex
                    gap-y-2
                    h-full
                    w-[300px]
                    p-2
                    bg-black
                ">
                    <Box>
                        <div
                            className="
                                flex
                                flex-colgap-y-4
                                py-4
                                px-5
                            "
                        >
                            {routes.map((item) => (
                                <SidebarItem
                                    key={item.label}
                                    {...item}
                                />
                            ))}
                        </div>
                    </Box>
                    <Box className="overflow-y-auto h-full">
                        song library
                    </Box>
            </div>
        </div>
    );
}

export default sidebar;