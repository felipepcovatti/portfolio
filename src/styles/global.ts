import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #38895d;
    --secondary: #1e2331;
    --background: #000;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    font: 400 1rem 'JetBrains Mono', monospace;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`



/* ||||||||||||||||||||||||||||||||||||||||||||||||||| */



// @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700'); // variables
// $light-grey: #e9e9e9;
// $bg-gray: #2A2C30;
// $dark: black;
// $dark-alpha: rgba(0, 0, 0, 0.8);
// $landscape: 576px;
// $tablet: 768px;
// $desktop: 992px;
// $widescreen: 1200px;
// $regular: 400;
// $semi-bold: 700;
// $font-normal: 'Open Sans', sans-serif;
// $font-alt: "Courier New", Courier, sans-serif; // mixins
// @mixin landscape() {
//   @media (min-width: $landscape) {
//     @content;
//   }
// }
// @mixin tablet() {
//   @media (min-width: $tablet) {
//     @content;
//   }
// }
// @mixin desktop() {
//   @media (min-width: $desktop) {
//     @content;
//   }
// }
// @mixin widescreen() {
//   @media (min-width: $widescreen) {
//     @content;
//   }
// }
// // home

// body {
//   font-family: $font-normal;
//   font-weight: $regular;
//   background-color: $bg-gray;
//   min-width: 320px;
// }

// .background-div {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: -1;
//   min-height: 700px;
//   filter: grayscale(50%) blur(1px);
//   background-size: cover;
//   background-repeat: no-repeat;
//   opacity: 1;
//   background-image: url("/images/vscode.png");
//   @include tablet() {
//     background-position: center bottom;
//     background-image: url("/images/vscode-large.png");
//   }
// }

// header.abovethefold {
//   font-size: 0.8em;
//   height: 100vh;
//   @include tablet() {
//     font-size: inherit;
//   }
// }

// .jumbotron {
//   background-color: $dark-alpha;
//   color: $light-grey;
//   text-align: center;
//   box-shadow: 1px 1px 1px 1px $dark;
//   margin-bottom: 0;
//   @include landscape() {
//     padding-top: 2rem;
//     padding-bottom: 2rem;
//   }
//   @include tablet() {
//     text-align: left;
//     padding-top: 6rem;
//   }
//   @include desktop() {
//     padding-top: 7rem;
//   }

//   h1 {
//     font-size: 2em;
//     @include desktop() {
//       font-size: 2.5em;
//     }
//   }

//   .lead {
//     font-size: 1.25em;
//   }

//   em {
//     font-style: normal;
//   }
// }

// .header-container {
//   position: relative;
// }

// .profile-pic-box {
//   position: relative;

//   img {
//     display: block;
//     max-width: 130px;
//     width: 100%;
//     margin: 0 auto 15px;
//     @include tablet() {
//       max-width: none;
//       position: absolute;
//     }
//   }
// }

// .bottom-side {
//   position: relative;
//   min-height: 300px;
//   padding-top: 2rem;
// }

// .nav-cta {
//   justify-content: center;
//   @include tablet() {
//     justify-content: flex-start;
//   }

//   li {
//     margin-bottom: 15px;

//     &:not(:last-child) {
//       margin-right: 15px;
//     }

//     a {
//       color: $dark;
//       color: $light-grey;
//       font-size: 1.7em;
//       border-color: rgba(0, 0, 0, 0.6);
//     }
//   }
// }

// .btn {
//   font-family: $font-alt;
// }
// // sections

// section {
//   padding-bottom: 50px;
//   &:first-of-type {
//     background-color: $dark;
//   }
//   > a {
//     display: block;
//     position: absolute;
//     background: inherit;
//     left: 0;
//     right: 0;
//     margin: auto;
//     width: 52px;
//     height: 52px;
//     border-radius: 50%;
//     padding: 19px;
//     transform: translateY(-50%);
//     overflow: visible;
//     svg {
//       fill: currentColor;
//       transform: translateY(-19px);
//     }

//   }

//   > .container {
//     position: relative;
//     background-color: inherit;
//   }
// }

// h2 {
//   padding-top: 1.5em;
//   padding-bottom: 0.75em;
//   @include desktop() {
//     padding-top: 2em;
//     padding-bottom: 1em;
//   }
//   font-family: $font-alt;
// }

// .card {
//   background-color: $bg-gray;
//   color: $light-grey;
//   border: none;
//   transition: transform 0.4s;
//   cursor: pointer;

//   &.effect-class,
//   &:hover {
//     .card-img-overlay {
//       background: $dark-alpha;
//       top: 0;

//       &:before {
//         opacity: 0;
//       }
//     }

//     .card-description {
//       overflow-y: auto;
//     }
//   }
// }

// h3 {
//   font-weight: $semi-bold;
//   font-size: 1.2em;
// }

// .card-img-box {
//   overflow-y: hidden;
//   height: 415px;
// }

// .card-img-top {
//   transition: filter 0.5s;
// }

// .card-img-overlay {
//   background: transparentize($dark, .3);
//   transition: top 0.4s ease, background 0.4s;
//   overflow: hidden;
//   top: 265px;
//   @include desktop() {
//     top: 285px;
//   }

//   &:before {
//     content: "";
//     padding: 15px;
//     text-align: right;
//     position: absolute;
//     bottom: 0;
//     right: 0;
//     width: 100%;
//     height: 3em;
//     background: linear-gradient(to top, transparentize($dark,0), transparentize($dark, 1));
//     transition: opacity 0.4s;
//   }
// }

// .card-description {
//   height: 284px;
//   margin-bottom: 15px;
//   overflow-y: hidden;
//   @include landscape() {
//     height: 280px;
//   }
//   @include desktop() {
//     height: 284px;
//   }
//   @include widescreen() {
//     height: 280px;
//   }

//   p {
//     margin-bottom: 0.3rem;
//   }

//   .card:hover & {
//     overflow-y: auto;
//   }
// }

// .badge-html {
//   background-color: #E34C26;
// }

// .badge-css {
//   background-color: #264DE4;
// }

// .badge-js {
//   background-color: #F7E018;
//   color: $dark;
// }

// .btn-group {
//   width: 100%;

//   .btn {
//     font-size: 1.1em;
//     padding: 0.375rem 0.75rem;
//     @include landscape() {
//       padding: 0.5rem 1rem;
//     }
//     @include desktop() {
//       padding: 0.375rem 0.75rem;
//     }
//     @include widescreen() {
//       padding: 0.5rem 1rem;
//     }

//     svg {
//       position: absolute;
//       width: 15px;
//       margin-left: 10px;
//       fill: currentColor;
//       margin-top: auto;
//       margin-bottom: auto;
//       top: 0;
//       bottom: 0;
//     }
//   }

//   .btn:first-child {
//     width: 55%;
//     @include landscape() {
//       width: 50%;
//     }
//     @include desktop() {
//       width: 55%;
//     }
//     @include widescreen() {
//       width: 50%;
//     }
//   }

//   .btn:last-child {
//     width: 45%;
//     @include landscape() {
//       width: 50%;
//     }
//     @include desktop() {
//       width: 45%;
//     }
//     @include widescreen() {
//       width: 50%;
//     }

//     span {
//       margin-left: -15px;
//     }
//   }
// }

// .about {
//   background-color: $bg-gray;
//   color: $light-grey;
// }

// .emailaddress {
//   font-size: 1.3em;
//   display: block;
//   @include desktop() {
//     font-size: 2em;
//   }
//   svg {
//     fill: currentColor;
//     height: 1em;
//     display: inline;
//     &:first-child {
//       margin-right: .15em;
//       max-width: 129px;
//       @include desktop() {
//         max-width: 198px;
//       }
//     }
//     &:last-child {
//       max-width: 116px;
//       @include desktop() {
//         max-width: 178px;
//       }
//     }
//   }
// }

// .about_more {
//   a {
//     display: inline-block;
//     margin-bottom: 33px;
//     color: inherit;
//     cursor: pointer;
//     width: auto;
//     transition: color 0.15s;

//     &::after,
//     &::before {
//       color: $light-grey;
//       transition: box-shadow 0.15s;
//     }

//     &:hover {
//       text-decoration: none;

//       &::after,
//       &::before {
//         box-shadow: 0 1px 0 0 $light-grey;
//       }
//     }

//     &::after {
//       content: attr(data-shorthref);
//       display: block;
//       padding-top: 12px;
//     }
//     @include tablet() {
//       margin-bottom: 26px;

//       &::after {
//         display: none;
//         content: '';
//       }

//       &::before {
//         content: attr(data-shorthref);
//       }
//     }

//     svg {
//       fill: $light-grey;
//       fill: currentColor;
//       width: 45px;
//       height: 45px;
//       transition: transform 0.6s;
//       @include tablet() {
//         margin-left: 12px;
//       }

//       &.effect-class {
//         transform: scale(1.25);
//       }
//     }
//   }
// }
