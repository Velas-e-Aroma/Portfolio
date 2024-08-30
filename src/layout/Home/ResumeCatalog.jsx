import Card from '../../components/Card';
import dataCard from '../../context/dataCard';

export default function ResumeCatalog({ setPage }) {
  return (
    <div className="w-full px-4 flex flex-wrap justify-around gap-4 mt-[-40px]">
      {dataCard.map((item) => (
        <Card
          key={item.id}
          img={item.img}
          title={item.title}
          text={item.text}
          onLink={item.onLink}
          link={item.link}
          setPage={setPage}
        />
      ))}
    </div>
  );
}
