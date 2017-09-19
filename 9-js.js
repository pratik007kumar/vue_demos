 
Vue.component('qpanel-pal',{
	template:`
	<div>
	<div class="sub1">
	<ul class="btns">
	<li v-for="(item, index) in qlist" v-on:click="showMe(index)" v-if="item.s==1" v-bind:class="[item.v==1?'viewed':item.v==2?'ans':'']">{{ index+1 }}</li>
	</ul>
	</div>
	<div class="sub2">
	<ul class="btns">
	<li v-for="(item, index) in qlist" v-on:click="showMe(index)" v-if="item.s==2" v-bind:class="[item.v==1?'viewed':item.v==2?'ans':'']">{{ index+1 }}</li>
	</ul>
	</div>
	<div class="sub3">
	<ul class="btns">
	<li v-for="(item, index) in qlist" v-on:click="showMe(index)" v-if="item.s==3" v-bind:class="[item.v==1?'viewed':item.v==2?'ans':'']">{{ index+1 }}</li>
	</ul>
	</div>
	<div class="panel">
	<div>{{qus.q}}</div>
	<div>{{qus.a}}</div>
	<div>{{qus.b}}</div>
	  s
	</div>
	<button v-on:click="preq()" v-if="c > 0"> < pre</button>
	<button v-on:click="nextq()" v-if="c < qlist.length">next > </button>

	<button v-on:click="ans()" > ans  </button>
	
	</div>

	`,
	data(){
		return {
			qus:{q:'',a:'',b:'',s:'',v:'0'},
			qlist:[
						
			 
			 {q:'1the test thisasdf fdsaf sadf s d',a:'asdfdsafdfsa',b:'asdfsfa',s:1,v:0},
			 {q:'2the test thisasdf fdsaf sadf s d',a:'asdfdsafdfsa',b:'asdfsfa',s:1,v:0},
			 {q:'3the test thisasdf fdsaf sadf s d',a:'asdfdsafdfsa',b:'asdfsfa',s:1,v:0},
			 {q:'4the test thisasdf fdsaf sadf s d',a:'asdfdsafdfsa',b:'asdfsfa',s:1,v:0},

			 {q:'5the test thisasdf fdsaf sadf s d',a:'asdfdsafdfsa',b:'asdfsfa',s:2,v:0},
			 {q:'6the test thisasdf fdsaf sadf s d',a:'asdfdsafdfsa',b:'asdfsfa',s:2,v:0},
			 {q:'7the test thisasdf fdsaf sadf s d',a:'asdfdsafdfsa',b:'asdfsfa',s:2,v:0},
			 {q:'8the test thisasdf fdsaf sadf s d',a:'asdfdsafdfsa',b:'asdfsfa',s:2,v:0},
			 
			 {q:'9the test thisasdf fdsaf sadf s d',a:'asdfdsafdfsa',b:'asdfsfa',s:3,v:0},
			 {q:'10the test thisasdf fdsaf sadf s d',a:'asdfdsafdfsa',b:'asdfsfa',s:3,v:0},
			 {q:'11the test thisasdf fdsaf sadf s d',a:'asdfdsafdfsa',b:'asdfsfa',s:3,v:0},
			 {q:'12the test thisasdf fdsaf sadf s d',a:'asdfdsafdfsa',b:'asdfsfa',s:3,v:0},
			 {q:'13the test thisasdf fdsaf sadf s d',a:'asdfdsafdfsa',b:'asdfsfa',s:3,v:0},
			 {q:'14the test thisasdf fdsaf sadf s d',a:'asdfdsafdfsa',b:'asdfsfa',s:3,v:0},
			 {q:'15the test thisasdf fdsaf sadf s d',a:'asdfdsafdfsa',b:'asdfsfa',s:3,v:0},
			 {q:'16the test thisasdf fdsaf sadf s d',a:'asdfdsafdfsa',b:'asdfsfa',s:3,v:0},

			 ],
			c:0
			

		}
	},
	created(){
		  // this.tabs=this.$children;
		  console.log(this.qlist);
		  this.qus=this.qlist[0];
		  this.qus.v=1;
	},
	 
	methods: {
		
			nextq(){

				this.c++;
				if(this.c < this.qlist.length ){
				this.qus=this.qlist[this.c];			
				this.qus.v=1;
				}else{
					// this.c--;
				}
		  

		},
		preq(){
				this.c--;
				if(this.c > -1){
				this.qus=this.qlist[this.c];			
				this.qus.v=1;
				}
			},

		showMe(a){
			this.c=a;
			this.qus=this.qlist[a];
			this.qus.v=1;
			},
		  ans(){

		  	this.qus.v=2;
		  	this.nextq();
		  },

		
	},


	

});


// Vue.component('tab',{
// template:'<div v-show="isActive"><slot></slot></div>',
// props:{
// 	name:{required:true},
// 	selected:{default:false}
// },
// data(){
// 	return {
// 		isActive:false,
// 	}
// },

// mounted(){
// 	this.isActive=this.selected;
// }

// });

new Vue({
	el: "#root",

});