import cn from 'classnames';
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
            <button className={s.button}>Wow</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
