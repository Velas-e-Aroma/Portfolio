const images = [
  'https://via.placeholder.com/300x200?text=Produto+1',
  'https://via.placeholder.com/300x200?text=Produto+2',
  'https://via.placeholder.com/300x200?text=Produto+3',
  'https://via.placeholder.com/300x200?text=Produto+4',
];

export default function FeedCatalog({ setWallpaper }) {
  return (
    <div className="w-full bg-white mt-4 px-4 flex flex-wrap justify-around gap-4 mb-[20px]">
      {images.map((image, index) => (
        <div
          key={index}
          className="md:w-[200px] w-[150px] h-[200px] bg-cover bg-center rounded-2xl cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
          style={{ backgroundImage: `url(${image})`}}
          onClick={() => setWallpaper(image)}
        />
      ))}
    </div>
  );
}
