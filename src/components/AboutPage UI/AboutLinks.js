import React, { Fragment } from 'react';
import styled from 'styled-components';
import googleLogo from '../../images/google-logo.png';

const AboutLinksDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  overflow: auto;
  a {
    color: var(--main-color-purple);
    font-size: 2rem;
    transition-property: color, transform, animation;
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;
    margin: 0 3rem;
    &:hover {
      transform: scale(1.5, 1.5);
      color: var(--main-color-pink);
      animation: animate1 1.5s infinite alternate;
    }
  }
`;

const AboutLinks = () => {
  return (
    <Fragment>
      <AboutLinksDiv>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/johnoseni1'
        >
          <i class='fab fa-github'></i>
        </a>

        <a
          target='_blank'
          rel='noreferrer'
          style={{ color: '#0e76a8' }}
          href='linkedin.com/in/john-oseni-4b8b001b0/'
        >
          <i class='fab fa-linkedin-in'></i>
        </a>

        <a
          target='_blank'
          rel='noreferrer'
          href='https://mail.google.com/mail/u/1/?view=cm&fs=1&to=johnoseni26@gmail.com&tf=1'
        >
          <span>
            <img
              src={googleLogo}
              alt={<i class='fab fa-google'></i>}
              style={{ width: '2.5rem' }}
            />
          </span>
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://johnoseni.com'
        >
          <i class='fas fa-at'></i>
        </a>
      </AboutLinksDiv>
    </Fragment>
  );
};

export default AboutLinks;
