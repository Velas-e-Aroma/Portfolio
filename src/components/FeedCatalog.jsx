const images = [
  'perfumes/perfume.jpg',
  'perfumes/perfume.jpg',
  'perfumes/perfume.jpg',
  'perfumes/perfume.jpg',
];

export default function FeedCatalog({ setWallpaper }) {
  return (
    <div className="w-full bg-white mt-2 px-4 flex flex-wrap justify-around gap-4 mb-[20px]">
      {images.map((image, index) => (
        <div
          key={index}
          className="md:w-[200px] w-[150px] h-[200px] bg-cover bg-center rounded-2xl cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
          style={{ backgroundImage: `url(${image})` }}
          onClick={() => setWallpaper(image)}
        />
      ))}
    </div>
  );
}
