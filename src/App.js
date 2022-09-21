/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import hero from './images/illustration-hero-main.svg';
import logo from './images/logo-lemon@2x.png';
import matchButton from './images/MatchButton.png';

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 0 20px;
  margin-top: 28px;
  margin-left: 150px;
`;
const logoStyle = css`
  margin-left: 40px;
  height: 50px;
`;
const navStyles = css`
  a {
    color: white;
    text-decoration: none;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    padding: 0 20px;
    position: relative;
    text-align: left;

    &:hover {
      color: #d1ff52;
    }

    &:last-child {
      margin-right: 190px;
    }
  }
`;
const titleStyle = css`
  display: block;

  margin-top: 60px;
  font-family: Barlow Semi Condensed;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 50px;
`;
const pTitleStyle = css`
  margin-top: 0;
  margin-bottom: 30px;
  letter-spacing: 4px;
  font-weight: 500;
`;

const textTitleStyle = css`
  margin-right: 550px;
  margin-top: 0;
  margin-bottom: 50px;
  display: block;
  font-size: 18px;
  font-weight: lighter;
  line-height: 30px;
`;
const matchButtonStyle = css`
  width: 300px;
`;

const heroBox = css`
  display: flex;
  margin-left: 300px;
  margin-top: 0;
  float: right;
`;

const heroImg = css`
  width: 320px;
  float: right;
`;

export default function App() {
  return (
    <div>
      <header css={headerStyles}>
        <a href="#abc">
          <img css={logoStyle} src={logo} alt="logo" />{' '}
        </a>
        <nav css={navStyles}>
          <a href="#abc">blog</a>
          <a href="#abc">for developers</a>
          <a href="#abc">about us</a>
          <a href="#abc">faq</a>
          <a href="#abc">resources</a>
          <a href="#abc">login</a>
        </nav>
      </header>
      <main>
        <div css={titleStyle}>
          <h1>Behold! The almighty devs</h1>
          <p css={pTitleStyle}>you 've been searching for</p>
        </div>
        <div>
          <p css={textTitleStyle}>
            {'//'} Why squander time and money on developers who aren’t perfect
            for your startup? Let Lemon match you with engineers that can
            transform your vision into reality — diabolically fast
          </p>
        </div>
        <a href="#abc">
          <img css={matchButtonStyle} src={matchButton} alt="Match_button" />
          {''}
        </a>
        <div css={heroBox}>
          <img css={heroImg} src={hero} alt="man_sitting" />
        </div>
      </main>
    </div>
  );
}
