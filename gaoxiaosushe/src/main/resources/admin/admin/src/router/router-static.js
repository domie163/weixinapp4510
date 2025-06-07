import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import baoxiu from '@/views/modules/baoxiu/list'
    import dictionary from '@/views/modules/dictionary/list'
    import exampaper from '@/views/modules/exampaper/list'
    import exampapertopic from '@/views/modules/exampapertopic/list'
    import examquestion from '@/views/modules/examquestion/list'
    import examrecord from '@/views/modules/examrecord/list'
    import examredetails from '@/views/modules/examredetails/list'
    import examrewrongquestion from '@/views/modules/examrewrongquestion/list'
    import fangke from '@/views/modules/fangke/list'
    import fangwu from '@/views/modules/fangwu/list'
    import fangwuCollection from '@/views/modules/fangwuCollection/list'
    import fangwuRuzhu from '@/views/modules/fangwuRuzhu/list'
    import fangwuTuisu from '@/views/modules/fangwuTuisu/list'
    import fangwuYuyue from '@/views/modules/fangwuYuyue/list'
    import jiaofei from '@/views/modules/jiaofei/list'
    import liuyan from '@/views/modules/liuyan/list'
    import susheguanliyuan from '@/views/modules/susheguanliyuan/list'
    import tiaosushenqing from '@/views/modules/tiaosushenqing/list'
    import weisheng from '@/views/modules/weisheng/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryBaoxiu from '@/views/modules/dictionaryBaoxiu/list'
    import dictionaryBaoxiuZhuangtai from '@/views/modules/dictionaryBaoxiuZhuangtai/list'
    import dictionaryExampaper from '@/views/modules/dictionaryExampaper/list'
    import dictionaryExamquestion from '@/views/modules/dictionaryExamquestion/list'
    import dictionaryFangwu from '@/views/modules/dictionaryFangwu/list'
    import dictionaryFangwuCollection from '@/views/modules/dictionaryFangwuCollection/list'
    import dictionaryFangwuTuisuYesno from '@/views/modules/dictionaryFangwuTuisuYesno/list'
    import dictionaryFangwuYuyueYesno from '@/views/modules/dictionaryFangwuYuyueYesno/list'
    import dictionaryJiaofei from '@/views/modules/dictionaryJiaofei/list'
    import dictionaryJinyong from '@/views/modules/dictionaryJinyong/list'
    import dictionaryLiuyan from '@/views/modules/dictionaryLiuyan/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryTiaosushenqing from '@/views/modules/dictionaryTiaosushenqing/list'
    import dictionaryTiaosushenqingYesno from '@/views/modules/dictionaryTiaosushenqingYesno/list'
    import dictionaryWeisheng from '@/views/modules/dictionaryWeisheng/list'
    import dictionaryXueyuan from '@/views/modules/dictionaryXueyuan/list'
    import dictionaryZhuanye from '@/views/modules/dictionaryZhuanye/list'
    import dictionaryZujuan from '@/views/modules/dictionaryZujuan/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryBaoxiu',
        name: '报修类型',
        component: dictionaryBaoxiu
    }
    ,{
        path: '/dictionaryBaoxiuZhuangtai',
        name: '报修状态',
        component: dictionaryBaoxiuZhuangtai
    }
    ,{
        path: '/dictionaryExampaper',
        name: '试卷状态',
        component: dictionaryExampaper
    }
    ,{
        path: '/dictionaryExamquestion',
        name: '试题类型',
        component: dictionaryExamquestion
    }
    ,{
        path: '/dictionaryFangwu',
        name: '公寓类型',
        component: dictionaryFangwu
    }
    ,{
        path: '/dictionaryFangwuCollection',
        name: '收藏表类型',
        component: dictionaryFangwuCollection
    }
    ,{
        path: '/dictionaryFangwuTuisuYesno',
        name: '申请状态',
        component: dictionaryFangwuTuisuYesno
    }
    ,{
        path: '/dictionaryFangwuYuyueYesno',
        name: '申请状态',
        component: dictionaryFangwuYuyueYesno
    }
    ,{
        path: '/dictionaryJiaofei',
        name: '缴费状况',
        component: dictionaryJiaofei
    }
    ,{
        path: '/dictionaryJinyong',
        name: '账户状态',
        component: dictionaryJinyong
    }
    ,{
        path: '/dictionaryLiuyan',
        name: '留言类型',
        component: dictionaryLiuyan
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryTiaosushenqing',
        name: '调宿申请类型',
        component: dictionaryTiaosushenqing
    }
    ,{
        path: '/dictionaryTiaosushenqingYesno',
        name: '申请状态',
        component: dictionaryTiaosushenqingYesno
    }
    ,{
        path: '/dictionaryWeisheng',
        name: '卫生状况',
        component: dictionaryWeisheng
    }
    ,{
        path: '/dictionaryXueyuan',
        name: '学院',
        component: dictionaryXueyuan
    }
    ,{
        path: '/dictionaryZhuanye',
        name: '专业',
        component: dictionaryZhuanye
    }
    ,{
        path: '/dictionaryZujuan',
        name: '组卷方式',
        component: dictionaryZujuan
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/baoxiu',
        name: '报修',
        component: baoxiu
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/exampaper',
        name: '试卷',
        component: exampaper
      }
    ,{
        path: '/exampapertopic',
        name: '试卷选题',
        component: exampapertopic
      }
    ,{
        path: '/examquestion',
        name: '试题表',
        component: examquestion
      }
    ,{
        path: '/examrecord',
        name: '考试记录表',
        component: examrecord
      }
    ,{
        path: '/examredetails',
        name: '答题详情表',
        component: examredetails
      }
    ,{
        path: '/examrewrongquestion',
        name: '错题表',
        component: examrewrongquestion
      }
    ,{
        path: '/fangke',
        name: '访客',
        component: fangke
      }
    ,{
        path: '/fangwu',
        name: '公寓',
        component: fangwu
      }
    ,{
        path: '/fangwuCollection',
        name: '公寓收藏',
        component: fangwuCollection
      }
    ,{
        path: '/fangwuRuzhu',
        name: '公寓学生',
        component: fangwuRuzhu
      }
    ,{
        path: '/fangwuTuisu',
        name: '公寓退宿申请',
        component: fangwuTuisu
      }
    ,{
        path: '/fangwuYuyue',
        name: '公寓入住申请',
        component: fangwuYuyue
      }
    ,{
        path: '/jiaofei',
        name: '缴费',
        component: jiaofei
      }
    ,{
        path: '/liuyan',
        name: '留言',
        component: liuyan
      }
    ,{
        path: '/susheguanliyuan',
        name: '宿舍管理员',
        component: susheguanliyuan
      }
    ,{
        path: '/tiaosushenqing',
        name: '调宿申请',
        component: tiaosushenqing
      }
    ,{
        path: '/weisheng',
        name: '卫生',
        component: weisheng
      }
    ,{
        path: '/yonghu',
        name: '学生',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
