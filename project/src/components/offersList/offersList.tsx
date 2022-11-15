import Card from '../card/card';
import Map from '../map/map';
import { useState } from 'react';
import {useAppSelector} from '../../hooks';

function OffersList(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState(0);
  const handleActiveCard = (id: number) => setActiveOffer(id);

  const activeCity = useAppSelector((state) => state.activeCity);
  const offersCity = useAppSelector((state) => state.activeCitiOffers);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in {activeCity}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li
                className="places__option places__option--active"
                tabIndex={0}
              >
                Popular
              </li>
              <li className="places__option" tabIndex={0}>
                Price: low to high
              </li>
              <li className="places__option" tabIndex={0}>
                Price: high to low
              </li>
              <li className="places__option" tabIndex={0}>
                Top rated first
              </li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {offersCity.map((offer) => (
              <Card
                key={offer.id}
                data={offer}
                location='cities'
                onCardhover={handleActiveCard}
              />
            ))}

          </div>

        </section>
        <div className="cities__right-section">
          <section className='cities__map map'>
            <Map data={offersCity} activeOffer={activeOffer} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default OffersList;
