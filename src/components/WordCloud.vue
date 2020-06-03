<template>
  <div>
    <div ref="Chart2" style="height:800px;"></div>
  </div>
</template>

<script>
require('echarts-wordcloud')

export default {
  data () {
    return {
      myChart: null,
      value: [
        {
          name: '花鸟市场',
          value: 1446
        },
        {
          name: '汽车',
          value: 928
        },
        {
          name: '视频',
          value: 906
        },
        {
          name: '电视',
          value: 825
        },
        {
          name: 'Lover Boy 88',
          value: 514
        },
        {
          name: '动漫',
          value: 486
        },
        {
          name: '音乐',
          value: 53
        },
        {
          name: '直播',
          value: 163
        },
        {
          name: '广播电台',
          value: 86
        },
        {
          name: '戏曲曲艺',
          value: 17
        },
        {
          name: '演出票务',
          value: 6
        },
        {
          name: '给陌生的你听',
          value: 1
        },
        {
          name: '资讯',
          value: 1437
        },
        {
          name: '商业财经',
          value: 422
        },
        {
          name: '娱乐八卦',
          value: 353
        },
        {
          name: '军事',
          value: 331
        },
        {
          name: '科技资讯',
          value: 313
        },
        {
          name: '社会时政',
          value: 307
        },
        {
          name: '时尚',
          value: 43
        },
        {
          name: '网络奇闻',
          value: 15
        },
        {
          name: '旅游出行',
          value: 438
        },
        {
          name: '景点类型',
          value: 957
        },
        {
          name: '国内游',
          value: 927
        },
        {
          name: '远途出行方式',
          value: 908
        },
        {
          name: '酒店',
          value: 693
        },
        {
          name: '关注景点',
          value: 611
        },
        {
          name: '旅游网站偏好',
          value: 512
        },
        {
          name: '出国游',
          value: 382
        },
        {
          name: '交通票务',
          value: 312
        },
        {
          name: '旅游方式',
          value: 187
        },
        {
          name: '旅游主题',
          value: 163
        },
        {
          name: '港澳台',
          value: 104
        },
        {
          name: '本地周边游',
          value: 3
        },
        {
          name: '小卖家',
          value: 1331
        },
        {
          name: '全日制学校',
          value: 941
        },
        {
          name: '基础教育科目',
          value: 585
        },
        {
          name: '演出票务',
          value: 6
        },
        {
          name: '给陌生的你听',
          value: 1
        },
        {
          name: '资讯',
          value: 1437
        },
        {
          name: '商业财经',
          value: 422
        },
        {
          name: '娱乐八卦',
          value: 353
        },
        {
          name: '军事',
          value: 331
        },
        {
          name: '科技资讯',
          value: 313
        },
        {
          name: '社会时政',
          value: 307
        },
        {
          name: '时尚',
          value: 43
        },
        {
          name: '网络奇闻',
          value: 15
        },
        {
          name: '旅游出行',
          value: 438
        },
        {
          name: '景点类型',
          value: 957
        },
        {
          name: '国内游',
          value: 927
        },
        {
          name: '远途出行方式',
          value: 908
        },
        {
          name: '酒店',
          value: 693
        },
        {
          name: '关注景点',
          value: 611
        },
        {
          name: '旅游网站偏好',
          value: 512
        },
        {
          name: '出国游',
          value: 382
        },
        {
          name: '交通票务',
          value: 312
        },
        {
          name: '旅游方式',
          value: 187
        },
        {
          name: '旅游主题',
          value: 163
        },
        {
          name: '港澳台',
          value: 104
        },
        {
          name: '本地周边游',
          value: 3
        },
        {
          name: '小卖家',
          value: 1331
        },
        {
          name: '全日制学校',
          value: 941
        },
        {
          name: '基础教育科目',
          value: 585
        },
        {
          name: '演出票务',
          value: 6
        },
        {
          name: '给陌生的你听',
          value: 1
        },
        {
          name: '资讯',
          value: 1437
        },
        {
          name: '商业财经',
          value: 422
        },
        {
          name: '娱乐八卦',
          value: 353
        },
        {
          name: '军事',
          value: 331
        },
        {
          name: '科技资讯',
          value: 313
        },
        {
          name: '社会时政',
          value: 307
        },
        {
          name: '时尚',
          value: 43
        },
        {
          name: '网络奇闻',
          value: 15
        },
        {
          name: '旅游出行',
          value: 438
        },
        {
          name: '景点类型',
          value: 957
        },
        {
          name: '国内游',
          value: 927
        },
        {
          name: '远途出行方式',
          value: 908
        },
        {
          name: '酒店',
          value: 693
        },
        {
          name: '关注景点',
          value: 611
        },
        {
          name: '旅游网站偏好',
          value: 512
        },
        {
          name: '出国游',
          value: 382
        },
        {
          name: '交通票务',
          value: 312
        },
        {
          name: '旅游方式',
          value: 187
        },
        {
          name: '旅游主题',
          value: 163
        },
        {
          name: '港澳台',
          value: 104
        },
        {
          name: '本地周边游',
          value: 3
        },
        {
          name: '小卖家',
          value: 1331
        },
        {
          name: '全日制学校',
          value: 941
        },
        {
          name: '基础教育科目',
          value: 585
        },
        {
          name: '演出票务',
          value: 6
        },
        {
          name: '给陌生的你听',
          value: 1
        },
        {
          name: '资讯',
          value: 1437
        },
        {
          name: '商业财经',
          value: 422
        },
        {
          name: '娱乐八卦',
          value: 353
        },
        {
          name: '军事',
          value: 331
        },
        {
          name: '科技资讯',
          value: 313
        },
        {
          name: '社会时政',
          value: 307
        },
        {
          name: '时尚',
          value: 43
        },
        {
          name: '网络奇闻',
          value: 15
        },
        {
          name: '旅游出行',
          value: 438
        },
        {
          name: '景点类型',
          value: 957
        },
        {
          name: '国内游',
          value: 927
        },
        {
          name: '远途出行方式',
          value: 908
        },
        {
          name: '酒店',
          value: 693
        },
        {
          name: '关注景点',
          value: 611
        },
        {
          name: '旅游网站偏好',
          value: 512
        },
        {
          name: '出国游',
          value: 382
        },
        {
          name: '交通票务',
          value: 312
        },
        {
          name: '旅游方式',
          value: 187
        },
        {
          name: '旅游主题',
          value: 163
        },
        {
          name: '港澳台',
          value: 104
        },
        {
          name: '本地周边游',
          value: 3
        },
        {
          name: '小卖家',
          value: 1331
        },
        {
          name: '全日制学校',
          value: 941
        },
        {
          name: '基础教育科目',
          value: 585
        },
        {
          name: '演出票务',
          value: 6
        },
        {
          name: '给陌生的你听',
          value: 1
        },
        {
          name: '资讯',
          value: 1437
        },
        {
          name: '商业财经',
          value: 422
        },
        {
          name: '娱乐八卦',
          value: 353
        },
        {
          name: '军事',
          value: 331
        },
        {
          name: '科技资讯',
          value: 313
        },
        {
          name: '社会时政',
          value: 307
        },
        {
          name: '时尚',
          value: 43
        },
        {
          name: '网络奇闻',
          value: 15
        },
        {
          name: '旅游出行',
          value: 438
        },
        {
          name: '景点类型',
          value: 957
        },
        {
          name: '国内游',
          value: 927
        },
        {
          name: '远途出行方式',
          value: 908
        },
        {
          name: '酒店',
          value: 693
        },
        {
          name: '关注景点',
          value: 611
        },
        {
          name: '旅游网站偏好',
          value: 512
        },
        {
          name: '出国游',
          value: 382
        },
        {
          name: '交通票务',
          value: 312
        },
        {
          name: '旅游方式',
          value: 187
        },
        {
          name: '旅游主题',
          value: 163
        },
        {
          name: '港澳台',
          value: 104
        },
        {
          name: '本地周边游',
          value: 3
        },
        {
          name: '小卖家',
          value: 1331
        },
        {
          name: '全日制学校',
          value: 941
        },
        {
          name: '基础教育科目',
          value: 585
        },
        {
          name: '演出票务',
          value: 6
        },
        {
          name: '给陌生的你听',
          value: 1
        },
        {
          name: '资讯',
          value: 1437
        },
        {
          name: '商业财经',
          value: 422
        },
        {
          name: '娱乐八卦',
          value: 353
        },
        {
          name: '军事',
          value: 331
        },
        {
          name: '科技资讯',
          value: 313
        },
        {
          name: '社会时政',
          value: 307
        },
        {
          name: '时尚',
          value: 43
        },
        {
          name: '网络奇闻',
          value: 15
        },
        {
          name: '旅游出行',
          value: 438
        },
        {
          name: '景点类型',
          value: 957
        },
        {
          name: '国内游',
          value: 927
        },
        {
          name: '远途出行方式',
          value: 908
        },
        {
          name: '酒店',
          value: 693
        },
        {
          name: '关注景点',
          value: 611
        },
        {
          name: '旅游网站偏好',
          value: 512
        },
        {
          name: '出国游',
          value: 382
        },
        {
          name: '交通票务',
          value: 312
        },
        {
          name: '旅游方式',
          value: 187
        },
        {
          name: '旅游主题',
          value: 163
        },
        {
          name: '港澳台',
          value: 104
        },
        {
          name: '本地周边游',
          value: 3
        },
        {
          name: '小卖家',
          value: 1331
        },
        {
          name: '全日制学校',
          value: 941
        },
        {
          name: '基础教育科目',
          value: 585
        },
        {
          name: '演出票务',
          value: 6
        },
        {
          name: '给陌生的你听',
          value: 1
        },
        {
          name: '资讯',
          value: 1437
        },
        {
          name: '商业财经',
          value: 422
        },
        {
          name: '娱乐八卦',
          value: 353
        },
        {
          name: '军事',
          value: 331
        },
        {
          name: '科技资讯',
          value: 313
        },
        {
          name: '社会时政',
          value: 307
        },
        {
          name: '时尚',
          value: 43
        },
        {
          name: '网络奇闻',
          value: 15
        },
        {
          name: '旅游出行',
          value: 438
        },
        {
          name: '景点类型',
          value: 957
        },
        {
          name: '国内游',
          value: 927
        },
        {
          name: '远途出行方式',
          value: 908
        },
        {
          name: '酒店',
          value: 693
        },
        {
          name: '关注景点',
          value: 611
        },
        {
          name: '旅游网站偏好',
          value: 512
        },
        {
          name: '出国游',
          value: 382
        },
        {
          name: '交通票务',
          value: 312
        },
        {
          name: '旅游方式',
          value: 187
        },
        {
          name: '旅游主题',
          value: 163
        },
        {
          name: '港澳台',
          value: 104
        },
        {
          name: '本地周边游',
          value: 3
        },
        {
          name: '小卖家',
          value: 1331
        },
        {
          name: '全日制学校',
          value: 941
        },
        {
          name: '基础教育科目',
          value: 585
        },
        {
          name: '演出票务',
          value: 6
        },
        {
          name: '给陌生的你听',
          value: 1
        },
        {
          name: '资讯',
          value: 1437
        },
        {
          name: '商业财经',
          value: 422
        },
        {
          name: '娱乐八卦',
          value: 353
        },
        {
          name: '军事',
          value: 331
        },
        {
          name: '科技资讯',
          value: 313
        },
        {
          name: '社会时政',
          value: 307
        },
        {
          name: '时尚',
          value: 43
        },
        {
          name: '网络奇闻',
          value: 15
        },
        {
          name: '旅游出行',
          value: 438
        },
        {
          name: '景点类型',
          value: 957
        },
        {
          name: '国内游',
          value: 927
        },
        {
          name: '远途出行方式',
          value: 908
        },
        {
          name: '酒店',
          value: 693
        },
        {
          name: '关注景点',
          value: 611
        },
        {
          name: '旅游网站偏好',
          value: 512
        },
        {
          name: '出国游',
          value: 382
        },
        {
          name: '交通票务',
          value: 312
        },
        {
          name: '旅游方式',
          value: 187
        },
        {
          name: '旅游主题',
          value: 163
        },
        {
          name: '港澳台',
          value: 104
        },
        {
          name: '本地周边游',
          value: 3
        },
        {
          name: '小卖家',
          value: 1331
        },
        {
          name: '全日制学校',
          value: 941
        },
        {
          name: '基础教育科目',
          value: 585
        },
        {
          name: '演出票务',
          value: 6
        },
        {
          name: '给陌生的你听',
          value: 1
        },
        {
          name: '资讯',
          value: 1437
        },
        {
          name: '商业财经',
          value: 422
        },
        {
          name: '娱乐八卦',
          value: 353
        },
        {
          name: '军事',
          value: 331
        },
        {
          name: '科技资讯',
          value: 313
        },
        {
          name: '社会时政',
          value: 307
        },
        {
          name: '时尚',
          value: 43
        },
        {
          name: '网络奇闻',
          value: 15
        },
        {
          name: '旅游出行',
          value: 438
        },
        {
          name: '景点类型',
          value: 957
        },
        {
          name: '国内游',
          value: 927
        },
        {
          name: '远途出行方式',
          value: 908
        },
        {
          name: '酒店',
          value: 693
        },
        {
          name: '关注景点',
          value: 611
        },
        {
          name: '旅游网站偏好',
          value: 512
        },
        {
          name: '出国游',
          value: 382
        },
        {
          name: '交通票务',
          value: 312
        },
        {
          name: '旅游方式',
          value: 187
        },
        {
          name: '旅游主题',
          value: 163
        },
        {
          name: '港澳台',
          value: 104
        },
        {
          name: '本地周边游',
          value: 3
        },
        {
          name: '小卖家',
          value: 1331
        },
        {
          name: '全日制学校',
          value: 941
        },
        {
          name: '基础教育科目',
          value: 585
        },
        {
          name: '演出票务',
          value: 6
        },
        {
          name: '给陌生的你听',
          value: 1
        },
        {
          name: '资讯',
          value: 1437
        },
        {
          name: '商业财经',
          value: 422
        },
        {
          name: '娱乐八卦',
          value: 353
        },
        {
          name: '军事',
          value: 331
        },
        {
          name: '科技资讯',
          value: 313
        },
        {
          name: '社会时政',
          value: 307
        },
        {
          name: '时尚',
          value: 43
        },
        {
          name: '网络奇闻',
          value: 15
        },
        {
          name: '旅游出行',
          value: 438
        },
        {
          name: '景点类型',
          value: 957
        },
        {
          name: '国内游',
          value: 927
        },
        {
          name: '远途出行方式',
          value: 908
        },
        {
          name: '酒店',
          value: 693
        },
        {
          name: '关注景点',
          value: 611
        },
        {
          name: '旅游网站偏好',
          value: 512
        },
        {
          name: '出国游',
          value: 382
        },
        {
          name: '交通票务',
          value: 312
        },
        {
          name: '旅游方式',
          value: 187
        },
        {
          name: '旅游主题',
          value: 163
        },
        {
          name: '港澳台',
          value: 104
        },
        {
          name: '本地周边游',
          value: 3
        },
        {
          name: '小卖家',
          value: 1331
        },
        {
          name: '全日制学校',
          value: 941
        },
        {
          name: '基础教育科目',
          value: 585
        },
        {
          name: '演出票务',
          value: 6
        },
        {
          name: '给陌生的你听',
          value: 1
        },
        {
          name: '资讯',
          value: 1437
        },
        {
          name: '商业财经',
          value: 422
        },
        {
          name: '娱乐八卦',
          value: 353
        },
        {
          name: '军事',
          value: 331
        },
        {
          name: '科技资讯',
          value: 313
        },
        {
          name: '社会时政',
          value: 307
        },
        {
          name: '时尚',
          value: 43
        },
        {
          name: '网络奇闻',
          value: 15
        },
        {
          name: '旅游出行',
          value: 438
        },
        {
          name: '景点类型',
          value: 957
        },
        {
          name: '国内游',
          value: 927
        },
        {
          name: '远途出行方式',
          value: 908
        },
        {
          name: '酒店',
          value: 693
        },
        {
          name: '关注景点',
          value: 611
        },
        {
          name: '旅游网站偏好',
          value: 512
        },
        {
          name: '出国游',
          value: 382
        },
        {
          name: '交通票务',
          value: 312
        },
        {
          name: '旅游方式',
          value: 187
        },
        {
          name: '旅游主题',
          value: 163
        },
        {
          name: '港澳台',
          value: 104
        },
        {
          name: '本地周边游',
          value: 3
        },
        {
          name: '小卖家',
          value: 1331
        },
        {
          name: '全日制学校',
          value: 941
        },
        {
          name: '基础教育科目',
          value: 585
        },
        {
          name: '演出票务',
          value: 6
        },
        {
          name: '给陌生的你听',
          value: 1
        },
        {
          name: '资讯',
          value: 1437
        },
        {
          name: '商业财经',
          value: 422
        },
        {
          name: '娱乐八卦',
          value: 353
        },
        {
          name: '军事',
          value: 331
        },
        {
          name: '科技资讯',
          value: 313
        },
        {
          name: '社会时政',
          value: 307
        },
        {
          name: '时尚',
          value: 43
        },
        {
          name: '网络奇闻',
          value: 15
        },
        {
          name: '旅游出行',
          value: 438
        },
        {
          name: '景点类型',
          value: 957
        },
        {
          name: '国内游',
          value: 927
        },
        {
          name: '远途出行方式',
          value: 908
        },
        {
          name: '酒店',
          value: 693
        },
        {
          name: '关注景点',
          value: 611
        },
        {
          name: '旅游网站偏好',
          value: 512
        },
        {
          name: '出国游',
          value: 382
        },
        {
          name: '交通票务',
          value: 312
        },
        {
          name: '旅游方式',
          value: 187
        },
        {
          name: '旅游主题',
          value: 163
        },
        {
          name: '港澳台',
          value: 104
        },
        {
          name: '本地周边游',
          value: 3
        },
        {
          name: '小卖家',
          value: 1331
        },
        {
          name: '全日制学校',
          value: 941
        },
        {
          name: '基础教育科目',
          value: 585
        }
      ],
      image: 'https://upload-images.jianshu.io/upload_images/8612260-7c57fbd1f7fc9e47.png',
      base64Data: '',
      textColor: {
        color1: {
          color: function () {
            return 'rgb(' +
              Math.round(Math.random() * 0.25 * 255) +
              ', ' + Math.round(Math.random() * 255) +
              ', ' + Math.round(Math.random() * 255) + ')'
          }
        },
        color2: {
          color: function () {
            return 'rgb(' +
              Math.round((Math.random() * 0.25 + 0.25) * 255) +
              ', ' + Math.round(Math.random() * 255) +
              ', ' + Math.round(Math.random() * 255) + ')'
          }
        },
        color3: {
          color: function () {
            return 'rgb(' +
              Math.round((Math.random() * 0.25 + 0.5) * 255) +
              ', ' + Math.round(Math.random() * 255) +
              ', ' + Math.round(Math.random() * 255) + ')'
          }
        },
        color4: {
          color: function () {
            return 'rgb(' +
              Math.round((Math.random() * 0.25 + 0.75) * 255) +
              ', ' + Math.round(Math.random() * 255) +
              ', ' + Math.round(Math.random() * 255) + ')'
          }
        }
      }
    }
  },
  created () {
  },
  mounted () {
    this.initEchart()
  },
  methods: {
    initEchart () {
      var that = this
      const maskImage = new Image()
      this.myChart = this.$echarts.init(this.$refs.Chart2)
      maskImage.setAttribute('crossOrigin', 'anonymous')
      maskImage.src = this.image
      maskImage.onload = function () {
        that.myChart.setOption({
          backgroundColor: '#fff',
          tooltip: {
            show: false
          },
          series: [{
            type: 'wordCloud',
            gridSize: 1,
            sizeRange: [12, 55],
            rotationRange: [-45, 0, 45, 90],
            maskImage: maskImage,
            textStyle: {
              normal: that.textColor.color4
            },
            left: 'center',
            top: 'center',
            // width: '96%',
            // height: '100%',
            right: null,
            bottom: null,
            // width: 300,
            // height: 200,
            // top: 20,
            data: that.value
          }]
        })
      }
    }
  }
}
</script>

<style lang='less' scoped>
</style>
