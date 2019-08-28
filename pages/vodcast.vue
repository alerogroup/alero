<template>
  <v-content>
    <Appheader style="margin-top:3%;" />
    <v-container grid-list-md>
      <ViewPosts />
    </v-container>
  </v-content>
</template>

<script>
/* eslint-disable */
import Appheader from '~/components/header/header_2..vue'

import ViewPosts from '~/components/posts/viewpost.vue'


export default {
  head: {
    title: 'Alero | Our vodcasts',
    meta: [
      {
        hid: 'constructionHome',
        name: 'alero home under construction',
        content: 'Alero Group website is under construction'
      }
    ]
  },
/* eslint-disable */
  components: {
    Appheader,
    ViewPosts
  }
}
</script>
