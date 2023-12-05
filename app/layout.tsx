import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import localFont from "next/font/local"
import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'
import Player from "@/components/Player";
import getPlaylistsByUserId from '@/actions/getPlaylistsByUserId copy'

// const font = Figtree({ subsets: ['latin'] })

const font = localFont({
  src: [
    {
      path: '../fonts/Benzin-ExtraBold.ttf',
      weight: '800',
    },
    {
      path: '../fonts/Benzin-Bold.ttf',
      weight: '700',
    },
    {
      path: '../fonts/Benzin-Medium.ttf',
      weight: '600',
    },
    {
      path: '../fonts/Benzin-Regular.ttf',
      weight: '500',
    },
  ],
});

export const metadata: Metadata = {
  icons: "./songsphere.png",
  title: 'SongSphere',
  description: 'Listen to music!',
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId();
  const userPlaylists = await getPlaylistsByUserId();


  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
            <Sidebar songs={userSongs} playlists = {userPlaylists}>
              {children}
            </Sidebar>
            {/* <Player /> */}
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
