import Feed from '../../components/Feed';

export default function CommentsFromPurchased() {
  return (
    <div className="w-full m-0 p-0 relative max-w-[1440px] reveal pb-10">
      <h2 className="text-[#564533] text-3xl font-bold text-center mt-10">
        Comentarios de quem ja comprou
      </h2>
      <div className="w-full m-0 p-0 reveal">
        <Feed />
      </div>
    </div>
  );
}
