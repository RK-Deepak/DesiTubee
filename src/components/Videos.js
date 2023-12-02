import useGetPopular from "../hooks/useGetPopular";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";

const Videos=()=>
{
     const {popularvideos}=useGetPopular();

     if(popularvideos.length===0)
     {
          return <Shimmer/>
     }

     return (
          <div className="flex flex-wrap justify-evenly my-2 gap-3 p-2">
               {
                    popularvideos.map((video)=><VideoCard video={video} key={video?.id}/>)
               }
          </div>
     )

}
export default Videos;