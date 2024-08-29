import styled from 'styled-components';

const Card = ({ key, img, title, text, onLink, link }) => {
  return (
    <StyledWrapper key={key}>
      <div className="flip-card md:w-[200px] w-[150px] md:h-[260px] h-[220px]">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={`${import.meta.env.BASE_URL}/card/${img}`}
              alt="logo"
              className="w-full h-full object-cover"
            />
            <h1>
              <span className="title">{title}</span>
            </h1>
          </div>
          <div className="flip-card-back">
            <p className="text">{text}</p>
            {onLink && (
              <a
                href={link}
                target="_blank"
                className="mt-10 border border-[#f2f2f2] px-4 py-2 rounded-lg hover:bg-[#f2f2f2] hover:text-black transition-all duration-300"
              >
                Veja mais
              </a>
            )}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .flip-card {
    background-color: transparent;

    perspective: 1000px;
    font-family: 'Roboto', sans-serif;
  }

  .title {
    font-size: 1.2em;
    font-weight: 700;
    text-align: center;
    margin: 0;
    letter-spacing: 1.5px;
  }

  .text {
    font-size: 1em;
    margin: 0;
    letter-spacing: 1.5px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s ease-in-out;
    transform-style: preserve-3d;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 1rem;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    overflow: hidden;
  }

  .flip-card-front {
    background: linear-gradient(130deg, #5b3119 20%, #564533 80%);
    color: #fff;
  }

  .flip-card-back {
    background: linear-gradient(135deg, #5b3119 20%, #5b3119 80%);
    color: #fff;
    transform: rotateY(180deg);
    padding: 10px;
  }

  .flip-card:hover .flip-card-front,
  .flip-card:hover .flip-card-back {
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
  }
`;

export default Card;
