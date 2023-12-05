import CommentXs from "./CommentXs";

const CommentsList = ({ datax }) => {
  console.log(datax);

  return datax && datax.map((cmt, index) => (
    <div key={index} className="flex flex-col gap-2">
      <div>
        <CommentXs data={cmt} />
      </div>
      <div className="mx-5 border-l px-4 border-slate-800 ">
        <CommentsList datax={cmt.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;





