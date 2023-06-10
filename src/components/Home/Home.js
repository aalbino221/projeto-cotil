import Card from './Card';
import cardValues from '../../mock/cardValues';

export default function Home() {
  return (
    <div className="grid">
      {cardValues.map((card) => (
        <Card
          adInfo={card}
          key={card.nameAuthor + card.img}
          id={card.nameAuthor + card.img}
        />
      ))}
    </div>
  );
}
