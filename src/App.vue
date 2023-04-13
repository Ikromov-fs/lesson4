<template>
  <div>
    <Navbar :data="data" />
    <router-view></router-view>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import Navbar from './components/navbar/navbar.vue';

const data = reactive([
  { name: 'Home', href: '/' },
  { name: 'Todo', href: '/todo' },
  { name: 'Posts', href: '/photos' },
])

</script>
<style scoped></style>