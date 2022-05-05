import { useNavigate } from 'react-router-dom';

import Heading from '../../components/Heading';
import Button from '../../components/Button';

import s from './NotFound.module.scss';

const NotFound = () => {
  const navigate = useNavigate();
  const handleBackClick = () => navigate(-1);
  return (
    <div className={s.root}>
      <Heading level={2}>Ops! Has someone snapped the infinity gauntlet?</Heading>
      <Button onClick={handleBackClick} className={s.button}>
        Go back
      </Button>
    </div>
  );
};

export default NotFound;
