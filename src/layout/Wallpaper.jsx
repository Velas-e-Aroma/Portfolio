export default function Wallpaper({
  image,
  existText,
  text,
  existFilter = false,
}) {
  return (
    <div className="w-full m-0 p-0 h-screen overflow-hidden relative max-w-[1440px]">
      <img
        src={`${import.meta.env.BASE_URL}/${image}`}
        className="w-full object-cover object-center h-screen"
      />
      {existFilter && (
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      )}

      {existText && text}
    </div>
  );
}
