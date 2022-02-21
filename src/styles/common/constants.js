export default {
  menuItems: [{
    name: 'HOME',
    url: '/'
  },
  {
    name: 'ABOUT',
    url: '/about'
  },
  {
    name: 'WORK',
    url: '/work'
  },
  {
    name: 'SERVICE',
    url: '/service'
  },
  {
    name: 'BLOG',
    url: '/blog'
  },
  {
    name: 'ACCESS',
    url: '/access'
  }

  ],
  workItems: [ // Workエリアで使用する画像パスと遷移先のＵＲＬの定義
    {
      src: require('./art.jpeg'), // requireとして囲み、モジュールとして読み込む
      url: '/work#work-1'
    },
    {
      src: require('./art.jpeg'),
      url: '/work#work-2'
    },
    {
      src: require('./art.jpeg'),
      url: '/work#work-3'
    }
  ]
}
