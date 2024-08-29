import Card from './Card';

export default function ResumeCatalog() {
  const dataCard = [
    {
      id: 1,
      img: 'vela1.png',
      title: 'Home',
      text: 'De uma olhada na home e descubra mais sobre a loja',
      onLink: false,
      link: '#',
    },
    {
      id: 2,
      img: 'vela4.png',
      title: 'Crie sua vela',
      text: 'Crie sua vela e compartilhe comigo para ela chegar ate você!',
      onLink: true,
      link: '#',
    },
    {
      id: 3,
      img: 'vela3.png',
      title: 'Saiba mais',
      text: 'Conheça um pouco sobre a historia desta loja',
      onLink: true,
      link: '#',
    },
    {
      id: 4,
      img: 'vela2.png',
      title: 'Catalogo',
      text: 'Venha descobrir nosso catalogo de vela',
      onLink: true,
      link: '#',
    },
  ];
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
        />
      ))}
    </div>
  );
}
