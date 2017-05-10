import Vue from 'vue'
var eventHub = new Vue({
  	data :{
		allItem : [],
		allcount :[],
		allprice : 0
  	},
  	methods : {
  		addItems : function(item){
  			if(this.allItem.length>0){
				for(var i =0;i < this.allItem.length; i++){
					if(this.allItem[i].id == item.id){
						this.allcount.push(1);
						this.allItem[i].count+=1;
						this.allprice += item.retailPrice;
						return;
					}else if(i== this.allItem.length-1){
						item.count = 1;
						this.allcount.push(1);
						this.allprice += item.retailPrice;
						this.allItem.push(item);
						return;
					}
				}
			}else{
				this.allcount.push(1);
				this.allprice += item.retailPrice;
				item.count = 1;
				this.allItem.push(item);
				return;
			}
  		}
  		,
  		addNum : function(item){
  			for(var i =0 ; i<this.allItem.length; i++){
  				if(item.id == this.allItem[i].id){
  					console.log(item.count)
  					this.allcount.push(1);
  					item.count++;
  					this.allItem[i].count=item.count;
  					this.allprice += item.retailPrice;
  					return;
  				}
  			}
  		},
  		modItems : function(item){
  			for(var i =0 ; i<this.allItem.length; i++){
  				if(item.id == this.allItem[i].id){
  					if(this.allItem[i].count>1){
  						item.count--;
  						this.allItem[i].count=item.count;
  						this.allcount.splice(0,1);
  						this.allprice = this.allprice - item.retailPrice;
  					}else{
  						this.allItem[i].count = 1;
  					}
  				}
  			}
  		},
  		delItems : function(item,allItem){
  			
  		}
  	},
  	created: function(){
		this.$on("add",this.addItems);
		this.$on("mod",this.modItems);
		this.$on("addnum",this.addNum);
		this.$on("del",this.delItems);
	},
	beforeDestroy:function(){
		this.$off("add",this.addItems);
		this.$off("mod",this.modItems);
		this.$off("addnum",this.addNum);
		this.$off("del",this.delItems);
 	}
})
export default eventHub