import Vue from 'vue'
var eventHub = new Vue({
  	data : function(){
  		return {
  			allItem : [],
  			allcount :0,
  			allprice : 0
  		}
  	},
  	methods : {
  		addItems : function(item){
  			if(this.allItem.length>0){
				for(var i =0;i < this.allItem.length; i++){
					if(this.allItem[i].id == item.id){
						this.allcount +=1;
						this.allItem[i].count+=1;
						this.allprice += item.retailPrice;
						return;
					}else if(i== this.allItem.length-1){
						this.allcount +=1;
						item.count= 1;
						this.allprice += item.retailPrice;
						this.allItem.push(item);
						return;
					}
				}
			}else{
				item.count= 1;
				this.allcount +=1;
				this.allprice += item.retailPrice;
				this.allItem.push(item);
				return;
			}
  		}
  	},
  	created: function(){
		this.$on("add",this.addItems)
	},
	beforeDestroy:function(){
		this.$off("add",this.addItems);
 	}
})
export default eventHub