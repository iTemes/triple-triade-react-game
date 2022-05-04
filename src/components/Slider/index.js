import cn from 'classnames';
import Button from '../Button';
import Heading from '../Heading';

import s from './Slider.module.scss';

const Slider = () => {
  return (
    <section className={s.section}>
      <div className={s.slider}>
        <div className={cn(s.container, s.sliderContent)}>
          <Heading level={1} className={s.header} underline>
            Wow
          </Heading>
          <Heading level={2} className={s.subheader}>
            Wow.Wow.Wow
          </Heading>

          <div className={s.call}>
            <Button light>Wow</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
