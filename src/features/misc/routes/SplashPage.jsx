import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import people1 from '@/assets/img/peo1.png';
import people2 from '@/assets/img/peo2.png';
import people3 from '@/assets/img/peo3.png';
import people4 from '@/assets/img/peo4.png';
import people5 from '@/assets/img/peo5.png';

import * as S from './SplashPage.styled';

export default function SplashPage() {
  const navigate = useNavigate();
  const peopleImg = [people1, people2, people3, people4, people5];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const ImgChangeTimer = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % peopleImg.length);
    }, 250);

    return () => {
      clearInterval(ImgChangeTimer);
    };
  }, []);

  useEffect(() => {
    setTimeout(function () {
      navigate('/intro');
    }, 2000);
  }, []);

  return (
    <>
      <S.SplashDiv>
        <S.IntroLogoBox />
        <S.CarouselBox
          style={{ backgroundImage: `url(${peopleImg[currentImgIndex]})` }}
        />
      </S.SplashDiv>
    </>
  );
}
