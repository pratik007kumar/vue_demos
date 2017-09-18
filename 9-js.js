 
Vue.component('qpanel-pal',{
	template:`
	<div>
	<div class="panel">
	<div>{{qus.q}}</div>
	<div>{{qus.a}}</div>
	<div>{{qus.b}}</div>
	  s
	</div>
	<button v-on:click="nextq()">next</button>
	</div>
	`,
	data(){
		return {
			qus:{q:'a',a:'a',b:'a'	},
			qlist:[
						
			 
			 {q:'1the test thisasdf fdsaf sadf s d',a:'asdfdsafdfsa',b:'asdfsfa'},
			 {q:'2the test thisasdf fdsaf sadf s d',a:'asdfdsafdfsa',b:'asdfsfa'},
			 {q:'3the test thisasdf fdsaf sadf s d',a:'asdfdsafdfsa',b:'asdfsfa'},
			 {q:'4the test thisasdf fdsaf sadf s d',a:'asdfdsafdfsa',b:'asdfsfa'},

			 ],
			c:1
			

		}
	},
	created(){
		  // this.tabs=this.$children;
		  console.log(this.qlist);
		  this.qus=this.qlist[0];
	},
	 
	methods: {
		
			nextq(){
				this.c++;
		  this.qus=this.qlist[this.c];

			

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