export default function ItemCategories({ title }) {
  return (
    <div className="w-[180px]">
      <p className="rounded-[100%]  bg-slate-700 w-[150px] h-[150px]" />
      <div className="bg-white mt-[-20px]">
        <p className="text-center text-[18px] font-semibold">{title}</p>
      </div>
    </div>
  );
}
