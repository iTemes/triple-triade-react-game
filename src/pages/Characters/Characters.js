import { useContext, useMemo } from "react";

import Heading from "../../components/Heading";
import Text from "../../components/Text";
import CharacterCard from "../../components/CharacterCard";

import s from "./Characters.module.scss";

import { CharactersContext } from "../../context/charactersContext";

const Characters = () => {
  const { characters, onLikeClick } = useContext(CharactersContext);

  const likedCharacters = useMemo(
    () => characters.filter((character) => character.isLike),
    [characters]
  );

  const handleLikeClick = (id) => {
    onLikeClick && onLikeClick(id);
  };

  return (
    <section className={s.cardSection}>
      <Text element={"div"} className={s.cardTitle}>
        <Heading underline>Marvel Cards</Heading>
        <Heading level={2}>Collect your best five</Heading>
      </Text>

      <div className={s.cardWrap}>
        {likedCharacters.length ? (
          likedCharacters.map(
            ({ id, name, description, thumbnail, humanName, isLike, externalLink }) => (
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
            )
          )
        ) : (
          <p>Is anybody here?</p>
        )}
      </div>
    </section>
  );
};

export default Characters;
