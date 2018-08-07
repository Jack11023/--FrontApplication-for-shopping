<<<<<<< HEAD
# 极速购

> A Vue.js project

## 项目结构

'|-- src',
  '    |-- 01.jpg',
  '    |-- App.vue',
  '    |-- main.js',
  '    |-- test.js',
  '    |-- assets',
  '    |   |-- logo.png',
  '    |   |-- images',
  '    |       |-- 10.jpg',
  '    |       |-- nav_1.png',
  '    |       |-- nav_2.png',
  '    |       |-- nav_3.png',
  '    |       |-- nav_4.png',
  '    |       |-- nav_5.png',
  '    |       |-- nav_6.png',
  '    |-- components',
  '    |   |-- concat',
  '    |   |   |-- Concat.vue',
  '    |   |-- home',
  '    |   |   |-- goodList.vue',
  '    |   |   |-- goodListInfo.vue',
  '    |   |   |-- HomeContainer.vue',
  '    |   |   |-- HomenewListContainer.vue',
  '    |   |   |-- newsInfo.vue',
  '    |   |   |-- photoList.vue',
  '    |   |-- public',
  '    |   |   |-- comments.vue',
  '    |   |   |-- goodList_numbox.vue',
  '    |   |   |-- lunbo.vue',
  '    |   |   |-- shoppingCar_numbox.vue',
  '    |   |-- search',
  '    |   |   |-- Search.vue',
  '    |   |-- shoppingcar',
  '    |       |-- ShoppingCar.vue',
  '    |-- lib',
  '    |   |-- mui',
  '    |       |-- css',
  '    |       |   |-- iconfont.css',
  '    |       |   |-- icons-extra.css',
  '    |       |   |-- mui.css',
  '    |       |   |-- mui.min.css',
  '    |       |   |-- mui.picker.css',
  '    |       |   |-- mui.poppicker.css',
  '    |       |-- fonts',
  '    |       |   |-- iconfont.ttf',
  '    |       |   |-- mui-icons-extra.ttf',
  '    |       |   |-- mui.ttf',
  '    |       |-- js',
  '    |           |-- mui.js',
  '    |           |-- mui.min.js',
  '    |           |-- mui.picker.js',
  '    |           |-- mui.poppicker.js',
  '    |-- router',
  '        |-- index.js',

## 主组件APP

####  1.template中用mui添加header和footer

####2.container区域用router-view来实现单页面多组件切换

####3.由于mui样式对vue自身router-view的样式覆盖,在mounted钩子函数中重新绑定a链接跳转

#### 4.对header中返回元素的功能实现,利用 `$route.path`

#### 判断前端路由是否改变,决定是否显示或隐藏,以及通过`$router.go()`

#### 方法实现回退

#### 5.在style中实现单页面组件切换动画以及部分样式

## main.js

####	1.启用vuex中间件

####	state中存放商品信息goodsInfo,

####	mutations中声明更新数据的方法,并且用localStorage来实现本地数据存储持久化:

####		addToCar(购物车添加商品时,如果相同商品则数量+1,否则直接添加新商品);

####		updateCar(根据id值更新商品数量)

####		deleteFromCar(根据id值删除相应商品)

####		updateSelected(根据id值更新商品的选中值Selected)

####	getters中声明获取数据的方法:

####			getAllCounts(获取所有商品数量之和)

####		getSelected(获取指定id值得选中状态Selected)

####		getAllSelected(如果选中则返回对象{总数,价格之和})

####	2.启用vue-resource,并配置

#####	2.1 Vue.http.options.emulateJSON = true 

#####	2.2 Vue.http.options.root = 'http://localhost:9090/'

####	3.配置filter全局过滤器

```javascript
Vue.filter('dateFormat',function(date,format = 'YYYY-MM-DD') {

  return new moment(date).format(format);

})

```



####	4.在Vue实例中挂载router,store,App组件

```javascript
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
```

## /router/index.js

####	导入需要挂载的子组件,并通过new Router({routes: [

#### ]})方法在path中挂载子组件

# home组件

### goodListInfo子组件

####	1.data中存放 id : this.$route.params.id ,lunbo,goodsInfo,isShow,SelectedCount

### 2.methods中声明获取轮播图数据getlunbo(),获取商品详情getGoodInfo,半场动画的三个钩子函数beforeEnter,enter,afterEnter用来实现小球动画,获取选中商品数量getSelectedCount,用来获取shoppingCar_numbox公共子组件的值,添加购物车商品方法addToCar,将商品信息对象提交commit到store中的addToCar

###	 3.在created中调用getlunbo和getGoodsInfo

###	4.挂载lunbo和numbox子组件

# shoppingcar组件

### 1.data中数据存放

```javascript
data() {
            return {
                shoppingInfo : [],
                shoppingCount : {},
                selected : {},
                selectedGoods : {}
            }
        },
```



###	2.mounted中初始化mui的switch组件

```javascript
mui('.mui-switch')['switch']()
```

### 3.methods中声明获取删除修改商品的方法和获取所有选中商品价格数量的方法,getshoppingInfo根据state中goodsInfo遍历成员id,ajax获取所有商品信息,remove删除本组件shoppingInfo中的子成员,并通过commit提交deleteFromCar实现本地化数据同步,vuex中数据同步,updateSelected更新本组件selected中子成员值,并通过commit提交updateSelected实现本地化数据同步,getAllSelected通过getters中的getAllSelected获取选中商品的价格和数量

###	4.挂载shoppingCar_numbox子组件

# public组件

### comments子组件

### 1.data数据

```javascript
 data() {
   return {
     comments: [],
     pageIndex : 1,
     user : null,
     user_comment : null
   }
 },
```

### 2.methods中声明获取评论数据方法getComments,根据父组件传进来的id值和pageindex从后台接口获取数据,获取更多评论方法getMore,pageindex++,重新调用一次getComments方法,评论提交方法post,先提交到后台数据,更新本组件的comments,用Array的unshift方法在数组头添加评论对象
=======
# 一个购物网站待完善.....
## 在项目目录下命令行运行 start
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
>>>>>>> 56610a3db1f7eb533a7d394c3e56ccf20742b8c4
