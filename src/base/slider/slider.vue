<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot" v-for="(item,index) in dots" :key="index" :class="{active:pagindex===index}"></span>
    </div>
  </div>
</template>

<script>
import { addClass, EventUtil, animation } from '../../commn/js/dom'

export default {
  name: 'slider',
  data () {
    return {
      dots: [],
      pagindex: 0
    }
  },
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 1000
    }
  },
  methods: {
    _setSliderWidth () {
      this.children = this.$refs.sliderGroup.children
      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'slider-item')
        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }
      if (this.loop) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initSlider () {
      let obj = {
        target: this.$refs.sliderGroup,
        leftCallback: this.leftCallback,
        rightCallback: this.rightCallback,

        //  upCallback, rightCallback, downCallback, leftCallback
        isPreventDefault: false
      }
      EventUtil.listenTouchDirection(obj)
    },
    _initDots () {
      this.dots = this.$refs.sliderGroup.children.length - 1
    },
    _play () {
      this.time = setInterval(() => {
        this.leftCallback()
      }, this.interval)
    },
    leftCallback () {
      this.pagindex += 1
      if (this.dots >= this.pagindex) {
        animation(this.$refs.sliderGroup, -this.$refs.slider.clientWidth * this.pagindex, 20, () => {
          if (this.pagindex === this.dots) {
            this.pagindex = 0
            this.$refs.sliderGroup.style.left = this.pagindex + 'px'
          }
        })
        // this.$refs.sliderGroup.addEventListener('click', () => {
        //   if (this.loop) {
        //     this.pagindex -= 1
        //   }
        //   if (this.autoPlay) {
        //     clearInterval(this.time)
        //     this._play()
        //   }
        // })
      }
    },

    rightCallback () {
      clearTimeout(this.time)
      let currten = 0
      if (this.pagindex === currten) {
        this.pagindex = this.dots
        this.$refs.sliderGroup.style.left = -this.$refs.slider.clientWidth * this.pagindex + 'px'
      }
      this.pagindex--
      animation(this.$refs.sliderGroup, -this.$refs.slider.clientWidth * this.pagindex, 20)
    }
  },
  mounted () {
    setTimeout(() => {
      this._setSliderWidth()
      this._initSlider()
      this._initDots()
      if (this.autoPlay) {
        this._play()
      }
    }, 20)
  },
  destroyed () {
    clearInterval(this.time)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../assets/stylus/variable'
.slider
  min-height 1px
  .slider-group
    position relative
    overflow hidden
    white-space nowrap
    .slider-item
      float left
      box-sizing border-box
      overflow hidden
      text-align center
      a
        display block
        width 100%
        overflow hidden
        text-decoration none
        img
          display block
          width 100%
  .dots
    position relative
    right 0
    left 0
    bottom 12px
    text-align center
    font-size 0
    .dot
      display inline-block
      margin 0 4px
      width 8px
      height 8px
      border-radius 50%
      background $color-text-l
      &.active
        width 20px
        border-radius 5px
        background $color-text-ll
</style>
