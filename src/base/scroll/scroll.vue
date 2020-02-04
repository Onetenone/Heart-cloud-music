<template>
  <div ref="wrapper">
    <solt></solt>
  </div>
</template>

<script>
import Vsbscroll from 'vue-slim-better-scroll'
export default {
  name: 'scroll',
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    listenScroll: {
      type: Boolean,
      default: true
    },
    scrollY: {
      type: Boolean,
      default: true
    },
    pullDown: {
      type: Boolean,
      default: true
    },
    bounce: {
      type: Boolean,
      default: true
    },
    bounceTime: {
      type: Number,
      default: 600
    },
    updateData: {
      type: Array,
      default: null
    },
    refreshData: {
      type: Array,
      default: null
    }
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll () {
      if (this.$refs.wrapper) {
        return
      }
      this.Scroll = new Vsbscroll(this.$refs.wrapper, {
        probeType: this.probeType,
        listenScroll: this.listenScroll,
        scrollY: this.scrollY,
        pullDown: this.pullDown,
        bounce: this.bounce,
        bounceTime: this.bounceTime,
        updateData: this.updateData,
        refreshData: this.refreshData
      })
    },
    disable () {
      this.Scroll && this.Scroll.disable()
    },
    enable () {
      this.Scroll && this.Scroll.enable()
    },
    refresh () {
      this.Scroll && this.Scroll.refresh()
    }
  },
  watch: {
    data () {
      setTimeout(() => {
        this.refresh()
      }, 20)
    }
  }
}
</script>

<style scoped lang='stylus'>

</style>
