<template>
  <div>
    <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"
      @ready="playerReadied" @pause="onPlayerPause($event)">
    </video-player>
    <el-input class="url" placeholder="请输入您的地址 http://xxx.xx/xx.m3u8" v-model="url">
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
      target: '', // m3u8的host
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        controls: true, //是否显示控制条
        autoplay: true, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [],
        poster: '', // 封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true // 是否显示全屏按钮
        }
      }
    }
  },
  methods: {
    playerReadied(player) {
      try {
        player.tech_.hls.xhr.beforeRequest = options => {
          options.uri = this.formatUrlAddProxy(options.uri)

          return options
        }
      } catch(e) {
        console.log(e)
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
        // 初始化 target 
        this.target = this.url.match(/^http(s)?:\/\/(.*?)\//ig)[0].slice(0, -1) // http://a.com
        let proxyUrl = this.formatUrlAddProxy(this.url)

        this.playerOptions.sources = [{
          type: 'application/x-mpegURL',
          src: proxyUrl
        }]
        found = true
      }

      if (found) {
        this.player.play()
      }
    },
    onPlayerPause($event) {
      this.isPlay = false
    },
    formatUrlAddProxy(url) {
      let host = url.match(/^http(s)?:\/\/(.*?)\//ig)

      if (host == null || host.length == 0) {
        host = this.target
      } else {
        host = host[0].slice(0, -1) // http://a.com
      }

      let proxyUrl = '/proxy' + url.replace(host, '') // 去掉host信息
      let c = proxyUrl.includes('?')? '&' : '?'
      proxyUrl = `${proxyUrl}${c}target=${host}`
      console.log(proxyUrl)
      return proxyUrl
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  }
}
</script>

<style scoped>
.url {
  margin-top: 20px;
}
</style>