import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
    const { id: artistId } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery( artistId );

    console.log(artistId);
    console.log(artistData);
    if (isFetchingArtistDetails) return <Loader title={"Loading Artist Details"}/>;
    if (error) return <Error />;

    return (
        <div className="flex flex-col">
            {/* <DetailsHeader artistId={artistId} artistData={artistData?.data} /> */}

            {/* <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">
                    Lyrics:
                </h2>

                <div className="mt-5 ">
                    {songData?.sections[1].type === "LYRICS" ? 
                    songData?.sections[1].text.map((line, i) => (
                        <p className="text-gray-400 text-base my-1"> {line} </p>
                    )):
                    <p className="text-gray-400 text-base my-1"> Sorry, no lyrics found!</p>
                }
                </div>
            </div> */}

            <RelatedSongs 
              data = {artistData.data}
              artistId = {artistId}
              isPlaying = {isPlaying}
              activeSong = {activeSong}
            />
        </div>
    )
};

export default ArtistDetails;
