import Card from '../Home/Card';
import cardValues from '../../mock/cardValues';

export default function Favorites() {
  return (
    <div>
      <Card adInfo={cardValues[0]} />
    </div>
  );
}
