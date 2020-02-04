<template>
  <div class="recommend" ref="recommend">
    <scroll class="recommend-content">
      <div>
         <div v-if="sliderList.length" class="slider-wrapper"  ref="sliderWrapper">
          <slider>
            <div v-for="(item,index) in sliderList" :key="index">
              <a>
                <img :src="item.pic" class="needsclick" />
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li class="item" v-for="item in songList" :key="item.id">
              <div class="icon">
                <img width="60" height="60" :src="item.picUrl" />
              </div>
              <div class="text">
                <h2 class="name">{{item.name}}</h2>
                <p class="desc">{{item.copywriter}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Slider from '../../base/slider/slider'
// import Scroll from '../../base/scroll/scroll'
import { getSlider, getSongList } from '../../api/requestdata'
export default {
  name: 'recommend',
  components: {
    Slider
    // Scroll
  },
  data: function () {
    return {
      sliderList: [],
      songList: []
    }
  },
  created () {
    this._getslider()
    this._getSongList()
  },
  methods: {
    _getslider () {
      getSlider(1).then(res => {
        if (res.data.code === 200) {
          this.sliderList = res.data.banners
          this.sliderList.push(this.sliderList[0])
        } else {
          console.log('返回数据失败')
        }
      })
        .catch(err => {
          console.log(err)
        })
    },
    _getSongList () {
      getSongList().then((res) => {
        if (res.data.code === 200) {
          this.songList = res.data.result
        } else {
          console.log('数据请求失败')
        }
      })
    }

  }
}
</script>

<style scope  lang="stylus" rel="stylesheet/stylus">
@import "../../assets/stylus/variable.styl"
.recommend
  position: fixed
  width: 100%
  top: 88px
  bottom: 0
  .recommend-content
    .slider-wrapper
      position: relative
      width: 100%
      overflow: hidden
    .recommend-list
      .list-title
        height: 65px
        line-height: 65px
        text-align: center
        font-size: $font-size-medium
        color: $color-theme
      .item
        display: flex
        box-sizing: border-box
        align-items: center
        padding: 0 20px 20px 20px
        .icon
          flex: 0 0 60px
          width: 60px
          padding-right: 20px
        .text
          display: flex
          flex-direction: column
          justify-content: center
          flex: 1
          line-height: 20px
          overflow: hidden
          font-size: $font-size-medium
          .name
            margin-bottom: 10px
            color: $color-text
          .desc
            color: $color-text-d
  .loading-container
    position: absolute
    width: 100%
    top: 50%
    transform: translateY(-50%)
</style>
