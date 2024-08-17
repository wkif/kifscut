// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Component({
  data: {
    options: [
      {
        img_url: "../../assets/home/22.jpg",
        name: "四宫格",
        path: ""
      },
      {
        img_url: "../../assets/home/33.jpg",
        name: "九宫格",
        path: "/pages/nine/index"
      },
      {
        img_url: "../../assets/home/23.jpg",
        name: "六宫格",
        path: ""
      }
    ]
  },
  methods: {
    goto(e: any) {
      const path = e.currentTarget.dataset.path
      if (path) {
        wx.navigateTo({
          url: path
        })
      }
    }
  },
})
