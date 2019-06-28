<template>
 <v-layout column align-center justify-center>
<div class="back">
 <img src="https://ik.imagekit.io/qpt2onjfe/icon__Q5MYRGlUk.png" height="300"  class="image animated bounce slower infinite">

<div class="title-one title-two">
  <h3 class="subtitle is-white">Site</h3>
  <h1 class="main-title is-white">Under Construction</h1>
  <h3 class="subtitle is-white">Stay tuned..</h3>
</div>
</div>
 </v-layout>
</template>


<style>
@import "../assets/style/animate.css";
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
  width: auto;
  height: 450px;
  top:6%;
  left: 9%;
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

/* moving the txt elements with media quaries */

@media screen and (min-device-width: 644px)
and (min-device-width: 1199px)
and (-webkit-min-device-pixel-ratio: 1) {

    .title-two {
    left: 10%;
    bottom: 10%;
    }

    .image  {
      height: 450px;
      width: auto;
      top:6%;
      left: 9%;

    }
}

@media screen and (min-device-width: 1200px)
  and (max-device-width: 1900px)
  and (-webkit-min-device-pixel-ratio: 1) {

    .title-one {
    left: 20%;
    bottom: 320px;
    }

     .image {
      height: 500px;
      width: auto;
      top:34%;
      left: 9%;
    }
  }
</style>
