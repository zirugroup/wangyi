import Vue from 'vue'
var eventHub = new Vue({
    data :{
    allItem : [],
    allcount :[],
    allprice : []
    },
    methods : {
      addItems : function(item){
        if(this.allItem.length>0){
        for(var i =0;i < this.allItem.length; i++){
          if(this.allItem[i].id == item.id){
            this.allcount.push(1);
            this.allItem[i].count+=1;
            this.allprice[0] += item.retailPrice;
            return;
          }else if(i== this.allItem.length-1){
            item.count = 1;
            this.allcount.push(1);
            this.allprice[0] += item.retailPrice;
            this.allItem.push(item);
            return;
          }
        }
      }else{
        this.allcount.push(1);
        this.allprice.push(item.retailPrice);
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
            this.allprice[0] += item.retailPrice;
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
              this.allprice[0] = this.allprice[0] - item.retailPrice;
            }else{
              this.allItem[i].count = 1;
            }
          }
        }
      },
      delItems : function(item){
        for(var i = 0; i<item.length ; i++){
          for(var j =0; j < this.allItem.length; j++){
            if(item[i] == this.allItem[j].id){
              this.allcount.splice(0,this.allItem[j].count);
              this.allprice[0] = this.allprice[0] - this.allItem[j].retailPrice*this.allItem[j].count;
              this.allItem.splice(i,1);
            }
          }
        }
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