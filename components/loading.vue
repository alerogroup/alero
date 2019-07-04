<template>
    <div class="load">
      <!-- <img src="../assets/img/loading.png" alt="" width="140" class="animated flip infinite loading">
        <div class="loading-text">Loading...</div> -->
      </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = false
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style scoped>




@import "../assets/style/animate.css";

.load {
display: flex;
position: relative;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
top: 40%;
max-width: 100vw;
}

.loading-text {
  display: flex;
  margin-top: 100px;
  color: #D4D4D4;
  font-size: 20px;
}
</style>
