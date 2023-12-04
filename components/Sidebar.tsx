"use client"; 

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { Song } from "@/types";
import Box from "./Box"
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import usePlayer from "@/hooks/usePlayer";
import { twMerge } from "tailwind-merge";
import Header from "./Header";
import ListItem from "./ListItem";
import PlayerContent from "./PlayerContent";
import Player from "./Player";
import { Form } from "react-hook-form";
import Playlists from "./Playlists";

interface SidebarProps {
    children: React.ReactNode;
    songs: Song[]
}

const Sidebar: React.FC<SidebarProps> = ({children, songs}) => {
    const pathname = usePathname();
    const player = usePlayer();

    const myHTML = `
        <body>
            <div class="container">
            <br>
                <h1> Video Searcher </h1>
                <br>
                <form id="form">
                    <div class="form-group">
                        <input type="text" class="form-control" id="search">
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-danger" value="Search">
                    </div>
                </form>
                <div class="row">
                    <div class="col-md-12">
                        <div id="videos">
                        </div>
                    </div>
                </div>
            </div>
        <body/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script src="script.js"></script>
        `;

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: "/"
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname == '/search',
            href: '/search'
        }
    ], []);
    
    return (
        // MAIN BACKGROUND
        <div className="flex h-full">
            <div
                className="
                    hidden
                    md:flex
                    flex-col
                    gap-y-2
                    bg-zinc-900
                    h-full
                    w-1/6
                    p-2
                "
            >
                <Box>
                    <div 
                        className="
                            flex
                            flex-col
                            gap-y-4
                            px-5
                            py-4
                        "
                    >
                        {routes.map((item) => (
                            <SidebarItem
                                key = {item.label}
                                {...item}
                            />
                        ))}
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    <Library songs={songs} />
                </Box>
                <Box className="overflow-y-auto h-full">
                    <Playlists songs={songs} />
                </Box>
            </div>


                <div className="bg-zinc-900 h-full w-full flex flex-col">
                    <Box className=" w-full bg-zinc-900 pr-2">
                        <Box className="">
                        <Header className=" rounded-lg h-100">
                        <div className="mb-2">
                            <h1
                            className="
                            text-white
                            text-3xl
                            text
                            font-extrabold
                            "

                            >
                            Welcome Back
                            </h1>
                            <div
                            className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            xl:grid-cols-3
                            2xl:grid-cols-4
                            gap-3
                            mt-4
                            "
                            >
                            <ListItem

                            image="/images/liked.png"
                            name="Liked Songs"
                            href="liked"
                            />
                            </div>

                        </div>
                        </Header>
                        </Box>
                    </Box>

                    <Box className="  overflow-y-auto flex flex-row h-full">         
                        <main className="h-full  overflow-y-auto py-2 pr-2 bg-zinc-900 w-full ">
                            {children}         
                        </main>
                        <main className="hidden md:flex bg-zinc-900  w-3/4 overflow-y-auto py-2 pr-2">
                            <Box className="h-full overflow-y-auto py-1 px-4 w-full ">

                            <h1 className="text-white text-2xl font-semibold font-family ">
                                Now Playing
                            </h1>
                            <Player />
                            </Box>

                        </main>
                    </Box> 
                    {/* <Box className="h-full">
                            <div dangerouslySetInnerHTML={{ __html: myHTML }} />
                    </Box> */}
                </div>

        
                </div>
            );
}


export default Sidebar;