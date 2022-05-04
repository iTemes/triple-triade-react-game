import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import avatar from './assets/avatar.jpg';

import s from './Contacts.module.scss';

const Contacts = () => {
  return (
    <Container className={s.root}>
      <Heading>Контакты</Heading>
      <section className={s.info}>
        <img className={s.avatar} src={avatar} width="355" height="472" alt="" />
        <div className={s.wrapper}>
          <Heading level={2}>Темес Импрувед</Heading>
          <Text>Frontend-разработчик, 30 лет</Text>
          <Heading level={3}>Опыт:</Heading>
          <Text>
            Общий опыт промышленной разработки во Frontend - 3 года. Продуктовые сайты, административные панели,
            конфигураторы, интеграции со сторонними системами. PhoneGap кроссплатформенное приложение с переходом на
            React Native.
          </Text>
          <Text>Весь рабочий опыт в IT(около 10 лет): администрирование, C#, Frontend. </Text>

          <Heading level={3}>О себе:</Heading>
          <Text>
            В 2016 году полюбил верстку, начал учиться в HTML Academy. Брал небольшие заказы, параллельно изучая JS.
            Устроился в продуктовую компанию верстальщиком, в дальнейшем дойдя до позиции Frontend-разработчика. В
            данный момент времени получаю удовольствие, находясь в данной профессии, с непокидающим желанием учиться и
            развиваться дальше.
          </Text>

          <Heading level={3}>Скилы:</Heading>
          <ul className={s.skills}>
            <li>Vue.js</li>
            <li>React Native</li>
            <li>React</li>
            <li>JS ES6+</li>
            <li>PhoneGap</li>
            <li>Jest</li>
            <li>Django</li>
            <li>Git</li>
            <li>Webpack</li>
            <li>Gulp</li>
          </ul>
        </div>
      </section>
    </Container>
  );
};

export default Contacts;
