<template>
  <div>
    <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"
      @canplay="canplay($event)" @ready="playerReadied">
    </video-player>
    <el-input class="url" placeholder="请输入您的地址" v-model="url">
      <el-button slot="append" icon="el-icon-s-promotion" @click="parse"></el-button>
    </el-input>
  </div>
</template>

<script>

export default {
  name: 'Player',
  data() {
    return {
      url: '',
      player: null,
      playerOptions: {
        // playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        controls: false, //是否显示控制条
        autoplay: true, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: 'application/x-mpegURL', // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
          src:
            '/proxy/20211212/QfR7JMfH/hls/index.m3u8' // url地址，从别的博主那看来的地址，亲测可用
        }],
        poster: '', // 封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          // timeDivider: true, // 当前时间和持续时间的分隔符
          // durationDisplay: true, // 显示持续时间
          // remainingTimeDisplay: false, // 是否显示剩余时间功能
          // fullscreenToggle: true // 是否显示全屏按钮
        }
      }
    }
  },
  methods: {
    canplay(e) {
      this.player = e
    },
    playerReadied(player) {
      return
      let _this = this
      var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls
      player.tech_.hls.xhr.beforeRequest = function (options) {
        console.log(options)
        let userInfo = localStorage.getItem('userInfo')
        let token = JSON.parse(userInfo).accessToken
        options.headers = {
          'Referer': 'https://theav108.com/'
        }
        return options
      }
    },
    parse(e) {
      let realUrl = this.url.split('?')[0]
      let found = false
      if (realUrl.endsWith('.mp4')) {
        this.playerOptions.sources = [{
          type: 'video/mp4',
          src: this.url
        }]
        found = true
      } else if (realUrl.endsWith('.m3u8')) {
        this.playerOptions.sources = [{
          type: 'application/x-mpegURL',
          src: this.url
        }]
        found = true
      }

      if (found) {
        console.log(
          "播放"
        );
        this.player.play()
      }
    }
  }
}
</script>

<style scoped>
.url {
  margin-top: 20px;
}
</style>