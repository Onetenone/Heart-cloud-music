<template>
  <div id="app">
    <headm></headm>
    <tab></tab>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Headm from '../src/components/headm/headm'
import Tab from '../src/components/tab/tab'
export default {
  name: 'app',
  components: {
    Headm,
    Tab
  }
}
</script>

<style scoped lang="stylus"></style>
