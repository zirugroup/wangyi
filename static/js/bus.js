import Vue from "vue"

var eventHub = new Vue({
	data:function(){
	  return {
	  	todos:['A','B','C']
	  }
	},
	created:function(){
	　　this.$on("add", this.addTodo)
	　　this.$on('delete', this.deleteTodo)
	},
	beforeDestroy:function () {
	　　this.$off('add',this.addTodo)
	　　this.$off('delete', this.deleteTodo)
	},
	methods:{
	　　addTodo:function (newTodo) {
	　　　　this.todos.push(newTodo)
	　　},
	　　deleteTodo: function (i) {
	　　　　this.todos.splice(i,1)
	　　}
	}
})
export default eventHub;