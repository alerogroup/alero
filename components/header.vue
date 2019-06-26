<template>
 <v-layout column align-center justify-center>
<div class="back">
 <img src="https://ik.imagekit.io/qpt2onjfe/icon__Q5MYRGlUk.png"  class="image animation bounce">

<div class="title-one">
  <h3 class="subtitle is-white">This website is</h3>
  <h1 class="main-title is-white">Under constriction</h1>
  <h3 class="subtitle is-white">Stay tuned..</h3>
</div>
</div>
 </v-layout>
</template>


<style>
  .back {
    height: 100vh;
    width: 100vw;
    margin: 0;
    bottom: 20px;
    background-image: url('https://ik.imagekit.io/qpt2onjfe/bg_97nJwdHwK.png');
  }

.image{
  display: flex;
  position: relative;

}

.title-one {
display: flex;
position: relative;
flex-flow: column;
justify-content: center;
align-content: center;
align-items: center
}

.is-white {
  color: white;
}
.subtitle{
  font-size: 30px;
}
.main-title{
  font-size: 60px;
}

/* animation */
@keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0, -4px, 0);
  }
}

.bounce {
  animation-name: bounce;
  transform-origin: center bottom;
}



/* moving the txt elements with media quaries */

@media screen and (min-device-width: 500px) and
(min-device-width: 1080px){

 .title-one {
    left: 25%;
    bottom: 270px;
    }

    .image {
      top:60%;
      left: 10%;
    }

}

@media screen and (min-device-width: 1200px)
  and (max-device-width: 1900px)
  and (-webkit-min-device-pixel-ratio: 1) {

    .title-one {
    left: 25%;
    bottom: 290px;
    }

    .image {
      height: 500px;
      top:58%;
      left: 9%;
    }
  }

/* ----------- Nexus 7 ----------- */




</style>
