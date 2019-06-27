<template>
  <v-layout column align-center justify-center>
    <div id="logos">

     <div class="logos" >
    <img v-for="logo in logos" v-bind:src="logo" width="260">
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
    'https://ik.imagekit.io/qpt2onjfe/favicon_AS6fQG26tS.png'
    ]
    }
  },
}
</script>
