export default function Wallpaper({ image, existText, text }) {
  return (
    <div className="w-full m-0 p-0 h-screen overflow-hidden relative max-w-[1440px]">
      <img
        src={`${import.meta.env.BASE_URL}/${image}`}
        className="w-full object-cover object-center h-screen"
      />
      {existText && text}
    </div>
  );
}
