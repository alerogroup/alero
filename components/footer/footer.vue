<template>
  <v-card class="transparent">
    <v-footer
      paddless
      class="font-weight-medium"
      height="70"
      color="transparent"
    >
      <v-card flat class="text-center" style="margin-left:3%">
        {{ new Date().getFullYear() }}
        <strong> Alero Group Ltd.</strong>
      </v-card>
      <v-spacer />

      <v-card flat class="text-center" style="margin-right:4%">
        <a href="http://linkedin.com/company/alerogroup/">
          <font-awesome-icon :icon="['fab', 'linkedin']" class="spac" />
        </a>
        <a href="https://www.facebook.com/alerogroup/">
          <font-awesome-icon :icon="['fab', 'facebook-square']" class="spac" />
        </a>
        <a href="https://twitter.com/AleroGroup/">
          <font-awesome-icon :icon="['fab', 'twitter-square']" class="spac" />
        </a>
      </v-card>
    </v-footer>
  </v-card>
</template>

<style scoped>
.spac {
  margin-left: 10px;
}
a {
  text-decoration: none;
  color: black;
}
</style>
