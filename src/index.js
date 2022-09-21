import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        @import url(https://fonts.googleapis.com/css?family=Source+Code+Pro:200,300,regular,500,600,700,800,900,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);
        @import url(https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: Source Code Pro;
          background-color: black;
          color: white;
        }
        h1 {
          font-weight: 500;
          line-height: 120px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 105px;
          font-family: Barlow Semi Condensed;
          margin-bottom: 5px;
          margin-right: 100px;
          margin-top: 40px;
        }

        main {
          margin-left: 200px;
          margin-right: 180px;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);
