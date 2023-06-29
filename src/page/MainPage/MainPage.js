import React, { useState, useEffect } from 'react';
import goose from './svg/goose.svg';
import loginIcon from './svg/login-icon.svg';
import User from './image/avatar.jpg';

import Arrow_left from './svg/arrow-left.svg';
import Arrow_right from './svg/arrow-right.svg';

import image1_mb from './image/image1-mb.jpg';
import image2_mb from './image/image2-mb.jpg';
import image3_mb from './image/image3-mb.jpg';

import image1_tb from './image/image1-tb.jpg';
import image2_tb from './image/image2-tb.jpg';
import image3_tb from './image/image3-tb.jpg';

import image1_dt from './image/image1-dt.jpg';
import image2_dt from './image/image2-dt.jpg';
import image3_dt from './image/image3-dt.jpg';

import {
  Auth,
  Title,
  Navigation,
  SignUp,
  LogIn,
  NavElement,
  GooseIcon,
  Description,
  AdvantagesList,
  AdvantagesItem,
  Number,
  Advantages,
  Info,
  AdditionalInfo,
  InfoBlock,
  Reviews,
  ReviewsTitle,
  SliderInfo,
  UserInfo,
  Rating,
  Star,
  Name,
  Container,
  ImportantInfo,
  Nav,
  NavLink,
  Arrow,
} from './MainPageStyle';
import ReviewsSlider from '../../components/Reviews/ReviewsSlider';
// import { AuthSection } from 'components/AuthSection/AuthSection';
// import { DescriptionSection } from 'components/Description/Description';

export default function MainPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let image1;
  let image2;
  let image3;

  if (windowWidth >= 1200) {
    image1 = image1_dt;
    image2 = image2_dt;
    image3 = image3_dt;
  } else if (windowWidth >= 768) {
    image1 = image1_tb;
    image2 = image2_tb;
    image3 = image3_tb;
  } else {
    image1 = image1_mb;
    image2 = image2_mb;
    image3 = image3_mb;
  }
  return (
    <>
      <Auth>
        <GooseIcon src={goose} alt="goose" />
        <Title>GooseTrack</Title>
        <Navigation>
          <NavElement>
            <LogIn to="/login">
              Log in <img src={loginIcon} alt="loginIcon" />
            </LogIn>
          </NavElement>

          <NavElement>
            <SignUp to="register">Sign up</SignUp>
          </NavElement>
        </Navigation>
      </Auth>

      <Description>
        <AdvantagesList>
          <AdvantagesItem>
            <InfoBlock>
              <Number>1.</Number>
              <AdditionalInfo>Calendar</AdditionalInfo>
              <Advantages>view</Advantages>
              <Info>
                GooseTrack's Calendar view provides a comprehensive overview of
                your schedule, displaying all your tasks, events, and
                appointments in a visually appealing and intuitive layout.
              </Info>
            </InfoBlock>
            <img src={image1} alt="image1"></img>
          </AdvantagesItem>

          <AdvantagesItem className="second-item">
            <InfoBlock className="second-infoblock">
              <Number>2.</Number>
              <Advantages>sidebar</Advantages>
              <Info>
                GooseTrack offers easy access to your account settings,
                calendar, and filters. The "My Account" section allows you to
                manage your profile information and preferences, while the
                calendar provides a quick and convenient way to view your
                upcoming events and tasks.
              </Info>
            </InfoBlock>
            <img src={image2} alt="image1"></img>
          </AdvantagesItem>

          <AdvantagesItem>
            <InfoBlock>
              <Number>3.</Number>
              <AdditionalInfo>all in</AdditionalInfo>
              <Advantages>one</Advantages>
              <Info className="infoblock-item">
                GooseTrack is an all-in-one productivity tool that helps you
                stay on top of your tasks, events, and deadlines. Say goodbye to
                scattered to-do lists and hello to streamlined productivity with
                GooseTrack.
              </Info>
            </InfoBlock>
            <img src={image3} alt="image1"></img>
          </AdvantagesItem>
        </AdvantagesList>
      </Description>

      <footer>
        <ReviewsSlider />
      </footer>
    </>
  );
}

// Був конфлікт тому я вирішив закоментувати
// import { AuthSection } from 'components/AuthSection/AuthSection';
// import { DescriptionSection } from 'components/Description/Description';
// export default function MainPage() {
//   return (
//     <>
//       <AuthSection />
//       <DescriptionSection />
// {/* <img src={goose} alt="goose" /> */}
//         <h1>GooseTrack</h1>
//         <nav>
//           <li>
//             <Link to="/register">Sign up</Link>
//           </li>
//           <li>
//             <Link to="/login">Log in</Link>
//           </li>
//         </nav>
