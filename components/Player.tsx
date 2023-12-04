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
        <Box className="object-right">
            <div className="relative right-7 bottom-15 bg-zinc-800 w-1/3 py-2 h-[500px] px-4">
                <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
            </div>
        </Box>
    )
}

export default Player;