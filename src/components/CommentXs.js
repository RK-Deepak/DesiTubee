import { FaPen, FaUser } from "react-icons/fa";

const CommentXs=(props)=>
{
          const {name,commentsinfo}=props.data;
          return (
                    <div className="my-1">
                              <div>

                              <p className="text-xs sm:text-sm font-bold flex gap-1 items-center px-2 py-1 bg-slate-500 text-white w-fit rounded-md"><FaUser/><span className="font-semibold">{name}</span></p>
                              </div>
                              <p className="text-xs sm:text-sm font-bold flex gap-1 items-center"><FaPen/><span className="font-semibold">{commentsinfo}</span></p>


                    </div>
          )
}
export default CommentXs;