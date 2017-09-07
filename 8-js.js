 
Vue.component('tabs',{
	template:`
	<div>
	<div class="tabs">
	  <ul>
	  <li v-for="tab in tabs"  v-bind:class="{'is-active':tab.isActive}">
	  <a href="#" v-on:click="showTab(tab)">{{tab.name}}</a>
	  </li>
	  
	  </ul>
	</div>
	<div class="tab-details"><slot></slot></div>
	</div>
	`,
	data(){
		return {
			tabs:[]
		}
	},
	created(){
		  this.tabs=this.$children;
	},
	 
	methods: {
		
			showTab(selectedTab){

			this.tabs.forEach(tab=> {
				tab.isActive= (tab.name==selectedTab.name);
			});			

		},
	},
	

});


Vue.component('tab',{
template:'<div v-show="isActive"><slot></slot></div>',
props:{
	name:{required:true},
	selected:{default:false}
},
data(){
	return {
		isActive:false,
	}
},

mounted(){
	this.isActive=this.selected;
}

});

new Vue({
	el: "#root",

});