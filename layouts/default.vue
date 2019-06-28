<template>
  <v-app>
    <v-toolbar flat>
      <v-toolbar-title>
        <NuxtLink to="/">
         <v-img src="https://ik.imagekit.io/qpt2onjfe/Component_6_ZwOYV3VRR.png" style="width:180px;height:auto;" />
        </NuxtLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <NuxtLink to="/contactus"><v-btn outline color="#6A9369" > Talk to us</v-btn></NuxtLink>


    </v-toolbar>
    <v-content>
        <nuxt />
    </v-content>

    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; Alero Group Ltd. </span>
      <span>Licence</span>
      <span></span>
    </v-footer>
  </v-app>
</template>

<style>

a {
  text-decoration: none
}
.container {
  margin-top: 0;
}
.footer{
  bottom: 0;
}
</style>
