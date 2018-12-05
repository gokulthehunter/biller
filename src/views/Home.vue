<template>
  <div class="home">
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="400"></v-parallax>
    <Datatables proptext="data table will load here"/>
  </div>
</template>

<script>
import Datatables from "@/components/Datatables";
export default {
  name: 'home',
  components: {
    Datatables
  }
}
</script>
