import './icons.js'
import Swiper from './swiper.js'
  

class Player {
  constructor(node) {
    this.root = typeof node === 'string' ? document.querySelector(node) : node
    this.$ = selector => this.root.querySelector(selector)
    this.$$ = selector => this.root.querySelectorAll(selector)
    this.songList = []
    this.currentIndex = 0
    this.audio = new Audio()
    this.start()
    this.bind()
  }

  start() { // 获取数据并开启播放器
    fetch('https://jirengu.github.io/data-mock/huawei-music/music-list.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.songList = data
        this.audio.src = this.songList[this.currentIndex].url
      })
  }

  bind() {  // 实现播放/暂停等功能
    let self = this
    this.$('.btn-play-pause').onclick = function() {
      if(this.classList.contains('playing')) {
        self.audio.pause()
        this.classList.remove('playing')
        this.classList.add('pause')
        this.querySelector('use').setAttribute('xlink:href','#icon-play')
      } else if (this.classList.contains('pause')) {
        self.audio.play()
        this.classList.remove('pause')
        this.classList.add('playing')
        this.querySelector('use').setAttribute('xlink:href','#icon-pause')
      }
    }

    this.$('.btn-pre').onclick = function() {
      console.log('pre')
      self.playPrevSong()
    }

    this.$('.btn-next').onclick = function() {
      self.palyNextSong()
    }

    let swiper = new Swiper(this.$('.panels'))
    swiper.on('swipLeft', function() {
      this.classList.remove('panel1')
      this.classList.add('panel2')
    })

    swiper.on('swipRight', function() {
      this.classList.remove('panel2')
      this.classList.add('panel1')
    })
  }

  playPrevSong() {
    this.currentIndex = (this.songList.length + this.currentIndex - 1) % this.songList.length
    this.audio.src = this.songList[this.currentIndex].url
    this.audio.oncanplaythrough = () => this.audio.play()
  }

  palyNextSong() {
    this.currentIndex = (this.songList.length + this.currentIndex +1) % this.songList.length
    this.audio.src = this.songList[this.currentIndex].url
    this.audio.oncanplaythrough = () => this.audio.play()
  }
}

new Player('#player')