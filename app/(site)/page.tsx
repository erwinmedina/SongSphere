import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import getSongs from "@/actions/getSongs";
import PageContent from "./components/PageContent";

export const revalidate = 0;

export default async function Home() {

  const songs = await getSongs();

  return (
    <div 
    className="
      bg-zinc-800
      rounded-lg
      h-full
      w-full
      overflow-hidden
      overflow-y-auto
    "> 

      <div className="mt-2 mb-7 px-6" >
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold ">
            Recently Added
          </h1>
        </div>
        <PageContent songs={songs} />

      </div>
    </div>
  )
}
