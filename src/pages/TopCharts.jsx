import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { useGetChartsQuery } from "../redux/services/shazamCore";

const TopCharts = () => {
    const { activeSong, isPlaying } = useSelector((state) => state.player);  
    const { data, isFetching, error } = useGetChartsQuery();

    const allSongs = data?.tracks;

    if(isFetching) return <Loader title="Loading Songs ... "/>;
    if(error) return <Error title="Something went wrong" />;

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row mt-4 mb-10"> 
                <h2 className="text-3xl font-bold text-white text left">
                    Discover Top Charts
                </h2>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {
                    allSongs?.map((song, i) => (
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

export default TopCharts;
