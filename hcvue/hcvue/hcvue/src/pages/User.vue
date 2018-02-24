<template>
	<div>
		这是user页面
	    {{msg}}
	    {{count}}
	    <button @click="add">+</button>
	    <br>
	    <ul>
	      <li v-for="s in dones">
	        {{s.name}}
	      </li>
	    </ul>
	    <button @click="fetch">获取</button>
	    <br>
	   
	 	<input type="text" :value="massage" @input="changeMsg">
	 	 {{massage}}
	</div>
</template>

<script>
  import {mapState,mapGetters,mapMutations,mapActions } from 'vuex'    //数组对象等方法
	//需要暴露一个对象
	export default {
    data() {
      return {
        msg: '今天天气不错'
      }
	},
    methods:{
    	changeMsg(e){
        	this.$store.commit('CHANGEMSG',e.target.value)
        },
        add(){
          this.$store.commit('ADDCONT',2)  //需要传参
        },
//    ...mapMutations({   //不需要传参数
//        add: 'ADDCONT'
//      }),
//		fetch(){     //actions异步方法1
//      	//触发actions
//      	this.$store.dispatch('fetchFours')
//      }
		...mapActions({   ////actions异步方法2，上面需要导入
        		fetch:'fetchFours'
        })
    },

    computed:{  //通常获取状态的属性都放到计算属性中
      count(){
        return this.$store.state.count
      },
      dones(){
        return this.$store.getters.dones
      }
     }
//      computed:mapState([   //数组语法   这种用的多一点
//      'count'    //当计算属性的名称 和 state的变量key相同时
//      ])
//      computed:{  //mapState()返回的是一个对象
//        ...mapState(   //ES7 对象扩展语法
////          ['count']
////          {count:state => state.count}
////            {countAlise:'count'}
//        )
//      }
  }
</script>

<style>
</style>
