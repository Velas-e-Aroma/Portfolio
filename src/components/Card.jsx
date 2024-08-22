import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="flip-card md:w-[200px] w-[150px] md:h-[260px] h-[220px]">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title">FLIP CARD</p>
            <p>Hover Me</p>
          </div>
          <div className="flip-card-back">
            <p className="title">BACK</p>
            <p>Leave Me</p>
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
    font-size: 1.7em;
    font-weight: 700;
    text-align: center;
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
    padding: 20px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }

  .flip-card-front {
    background: linear-gradient(135deg, #98bf90 20%, #70b066 80%);
    color: #fff;
  }

  .flip-card-back {
    background: linear-gradient(135deg, #44a442 20%, #289d42 80%);
    color: #fff;
    transform: rotateY(180deg);
  }

  .flip-card:hover .flip-card-front,
  .flip-card:hover .flip-card-back {
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
  }
`;

export default Card;
