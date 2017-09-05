Vue.component('task-list',{
	template:'<ul><task v-for="task in tasks">{{task.name}}</task></ul>',

	data(){
		return {
			tasks:[
			{name:"task 1",status:true},
			{name:"task 2",status:false},
			{name:"task 3",status:false},
			{name:"task 4",status:true},
			{name:"task 5",status:false},
			{name:"task 6",status:true},
			{name:"task 7",status:false},
			],
		}
	}
});

Vue.component('messages',{
	props:['title','body'],
	data(){
		return {
			isvisable:true
		}
	},
	template:`
	<article class="message" v-show="isvisable">
	  <div class="message-header">
	    <p>{{title}}</p>
	    <button class="delete" aria-label="delete" v-on:click="isvisable=false"></button>
	  </div>
	  <div class="message-body">
	    {{body}}
	  </div>
	</article>
	`,

});

Vue.component('task',{
	template:'<li> <slot></slot></li>',
});

var app = new Vue({
	el: "#root"

	
});