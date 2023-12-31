import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Error, Loader, SongCard } from "../components";
import { useGetSongsBySearchQuery } from "../redux/services/shazamCore";

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);  
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  const songData = data?.tracks?.hits?.map((song) => song.track);

  if(isFetching) return <Loader title="Loading Songs ... "/>;
  if(error) return <Error title="Something went wrong" />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row mt-4 mb-10"> 
        <h2 className="text-3xl font-bold text-white text left">
          Showing Results for 
          <span className="font-black">
            {searchTerm}
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {
          songData?.map((song, i) => (
            <SongCard 
              key = {song.key}
              song = {song}
              isPlaying = {isPlaying}
              activeSong = {activeSong}
              data = {data.tracks}
              i = {i}
              />
            ))
        }
      </div>  
    </div>
  )
};

export default Search;
