import { useState } from 'react';

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import CharacterCard from '../../components/CharacterCard';
import Slider from '../../components/Slider';
import CHARACTERS from '../../constans/characters';
import s from './Main.module.scss';

const Main = () => {
  const [characters, setCharacters] = useState(CHARACTERS);

  const handleLikeClick = (id) => {
    setCharacters((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isLike: !item.isLike,
          };
        }

        return item;
      })
    );
  };

  return (
    <>
      <Slider />
      <section className={s.cardSection}>
        <Container>
          <Text element={'div'} className={s.cardTitle}>
            <Heading underline>Marvel Cards</Heading>
            <Heading level={2}>Collect your best five</Heading>
          </Text>

          <div className={s.cardWrap}>
            {characters.map(({ id, name, description, thumbnail, humanName, isLike, externalLink }) => (
              <CharacterCard
                key={id}
                id={id}
                name={name}
                description={description}
                src={thumbnail.path}
                humanName={humanName}
                isLike={isLike}
                externalLink={externalLink}
                onLikeClick={handleLikeClick}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Main;
