import PropTypes from 'prop-types';

import { ReactComponent as LikeIcon } from './assets/icons/heart.svg';
import cn from 'classnames';

import Heading from '../Heading';
import Text from '../Text';

import s from './CharacterCard.module.scss';

const CharacterCard = ({ id, name, description, src, externalLink, humanName, isLike, onLikeClick }) => {
  const handleLikeClick = () => {
    onLikeClick && onLikeClick(id);
  };
  return (
    <div className={s.root}>
      <img src={src} alt={name} className={s.cardImage} />
      <div className={s.cardDetails}>
        <Heading level={2} className={s.cardName}>
          {name}
        </Heading>
        <Heading level={3} className={s.cardHumanName}>
          {humanName}
        </Heading>
        <Text element="p" className={s.cardDescription}>
          {description}
        </Text>

        <div className={s.cardMeta}>
          <div className={cn(s.like, { [s.active]: isLike })}>
            <button onClick={handleLikeClick}>
              <LikeIcon />
            </button>
          </div>
          <div className={s.readBio}>
            <a href={externalLink}>Read bio</a>
          </div>
        </div>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  externalLink: PropTypes.string,
  humanName: PropTypes.string,
  isLike: PropTypes.bool,
  likeClick: PropTypes.func,
};

export default CharacterCard;
