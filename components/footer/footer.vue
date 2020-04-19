<template>
  <v-card class="transparent">
    <v-footer
      paddless
      class="font-weight-medium"
      height="70"
      color="transparent"
    >
      <v-card flat class="text-center" style="margin-left:3%">
        <strong> &copy; </strong>
        {{ new Date().getFullYear() }}
        <strong> Alero Group Ltd.</strong>
      </v-card>

            <v-card to='/privacy-policy' flat class="text-center" style="margin-left:3%">
        <div>Privacy policy</div>
      </v-card>

      <v-spacer />

      <v-card flat class="text-center" style="margin-right:2%">
        <v-btn small icon href="http://linkedin.com/company/alerogroup/">
          <img
            :src="img1"
            alt="connect with us on facebook"
            height="17"
            width="auto"
          />
        </v-btn>
        <v-btn small icon href="https://www.facebook.com/alerogroup/">
          <img
            :src="img2"
            alt="connect with us on facebook"
            height="17"
            width="auto"
          />
        </v-btn>
        <v-btn small icon href="https://twitter.com/AleroGroup/">
          <img
            :src="img3"
            alt="connect with us on facebook"
            height="17"
            width="auto"
          />
        </v-btn>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      img1:
        'https://ik.imagekit.io/qpt2onjfe/alero/icons/linkedin_3-iXib_Ca.svg',
      img2:
        'https://ik.imagekit.io/qpt2onjfe/alero/icons/facebook-square_0r0XI50yXN.svg',
      img3:
        'https://ik.imagekit.io/qpt2onjfe/alero/icons/twitter-square_0oRKdpWSc.svg'
    }
  }
}
</script>

<style scoped>
.spac {
  margin-left: 10px;
}
a {
  text-decoration: none;
  color: black;
}
</style>
