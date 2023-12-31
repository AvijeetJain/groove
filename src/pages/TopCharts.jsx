import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { useGetChartsQuery } from "../redux/services/shazamCore";
import { useGetCharts2Query } from "../redux/services/shazamCore";

const TopCharts = () => {
    const { activeSong, isPlaying } = useSelector((state) => state.player);  
    const { data, isFetching, error } = useGetChartsQuery();
    const { data: data2, isFetching: isFetchingMore, error: errorMore } = useGetCharts2Query();

    if(isFetching || isFetchingMore) return <Loader title="Loading Songs ... "/>;
    if(error && errorMore) return <Error title="Something went wrong" />;
    
    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row mt-4 mb-10"> 
                <h2 className="text-3xl font-bold text-white text left">
                    Discover Top Charts
                </h2>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {
                    data?.tracks?.map((song, i) => (
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
                {
                    data2?.tracks?.map((song, i) => (
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
