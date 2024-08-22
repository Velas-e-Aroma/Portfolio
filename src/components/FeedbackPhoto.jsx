const images = [
  'https://via.placeholder.com/300x200?text=Produto+1',
  'https://via.placeholder.com/300x200?text=Produto+2',
  'https://via.placeholder.com/300x200?text=Produto+3',
  'https://via.placeholder.com/300x200?text=Produto+4',
];

export default function FeedbackPhoto() {
  return (
    <div className="h-[390px] w-full md:mt-[200px] mt-[20px] px-4 overflow-hidden rounded-md">
      <span className="text-xl font-bold block mb-4">
        Veja nossos feedbacks
      </span>
      <div className="h-full overflow-y-auto space-y-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full rounded-md overflow-hidden shadow-lg"
          >
            <img
              src={image}
              alt="Imagem de feedback"
              className="w-full h-auto"
            />
          </div>
        ))}

        <div className="w-full h-[50px]"></div>
      </div>
    </div>
  );
}
