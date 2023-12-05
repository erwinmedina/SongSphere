"use client";

import usePlayer from "@/hooks/usePlayer";
import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from '../hooks/useLoadSongUrl';
import PlayerContent from "./PlayerContent";
import Box from "./Box";

const Player = () => {
    const player = usePlayer();
    const { song } = useGetSongById(player.activeId);

    const songUrl = useLoadSongUrl(song!);

    if (!song || !songUrl || !player.activeId) {
        return null;
    }

    return (
            <div className="relative  bottom-15 bg-zinc-800 py-2 h-[500px] px-4 w-full">
                <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
            </div>
    )
}

export default Player;