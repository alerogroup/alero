<template>
  <v-layout column align-center justify-center>

    <div id="logos">
      <h2 class="title">Our clients</h2>
     <div class="logos" >
        <img v-for="logo in logos" v-bind:src="logo" class="logo">
      </div>

    </div>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
    logos:['https://ik.imagekit.io/qpt2onjfe/ux_and_brand_board_Brand_Board_RtoVeHt8M.png',
    'https://ik.imagekit.io/qpt2onjfe/EL-Logo-SMALL_eU9YH7l_Q.png',
    'https://ik.imagekit.io/qpt2onjfe/favicon_jMsCLF9LC.png'
    ]
    }
  },
}
</script>

<style scoped>
#logos{
display: flex;
position: relative;
top: 4rem;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
color: darkgrey;
font-size: 18px;
}
.logos{
  display: flex;
  flex-flow: row;
  height: auto;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.logo{
  margin: 6px;
}
</style>

