const images = [
  'https://via.placeholder.com/300x200?text=Produto+1',
  'https://via.placeholder.com/300x200?text=Produto+2',
  'https://via.placeholder.com/300x200?text=Produto+3',
  'https://via.placeholder.com/300x200?text=Produto+4',
];

export default function FeedbackPhoto() {
  return (
    <div className="h-[390px] w-full md:mt-[200px] mt-[20px] px-6 overflow-hidden rounded-lg bg-white shadow-md mb-4">
      <span className="text-lg font-bold text-gray-800 block mb-6 mt-2">
        Veja nossos feedbacks
      </span>
      <div className="h-full overflow-y-auto space-y-6 pr-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src={image}
              alt="Imagem de feedback"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}

        <div className="w-full h-[60px]"></div>
      </div>
    </div>
  );
}
