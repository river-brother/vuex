import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

import {ADDCONT,FETCGFOURLIST,CHANGEMSG} from './mutation-types'

const store = new Vuex.Store({
  state:{
  	massage:'变.....',
    count:1,
    kind:[]
  },
  getters:{  //state的派生数据 数据是在仓库中，就需要在仓库中处理
    dones(state){
      return state.kind.filter((s)=>{
        return !s.done
      })
    }
  },
  mutations:{  //这里是改变状态的唯一地方,必须是一个同步函数，我们要使用工具观察状态的改变
    [ADDCONT](state,num) {   //d第一个参数，就是当前的state
      // 变更状态
      state.count+=num
    },
//  [ADDCONT](state) {   //d第一个参数，就是当前的state
//    // 变更状态
//    state.count+=1
//  },
		[FETCGFOURLIST](state,data){
      state.kind = [...state.kind,...data.list]
    },
    [CHANGEMSG](state,massage){
         state.massage = massage
    }
	},
  	actions:{  //类似于mutions, 用来做异步操作，异步操作成功后再提交mution
			fetchFours({commit,state,getters}){
				//异步操作
				axios.get('/api/foursList',{
					params:{
						city:'CD'
					}
				}).then((res)=>{
					console.log(res)
					commit('FETCGFOURLIST',res.data)
				})
			}
		}
})

export default store
