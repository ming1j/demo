<template lang="html">
  <div class="pos">
    <div class="">
      <el-row>
        <el-col :span='7' class="pos-order" id="order-list">
          <el-tabs>
            <el-tab-pane label="下单">
              <el-table :data="tableData" border style="width: 100%">
                 <el-table-column prop="goodsName" label="食品" ></el-table-column>
                 <el-table-column prop="count" label="数量" width="80"></el-table-column>
                 <el-table-column prop="price" label="金额" width="80" ></el-table-column>
                 <el-table-column label="操作" width="100" >
                   <template scope="scope">
                     <el-button type="text" size="small" @click="delSinggoods(scope.row)" >删除</el-button>
                     <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                   </template>
                 </el-table-column>
              </el-table>
              <div class="">
                <span>金额：{{totalMoney}}元</span>
                <span>数量{{totalCount}}</span>
              </div>
              <div class="div-bth">
                <el-button type="warning">挂单</el-button>
                <el-button type="danger" @click="delAllgoods()">删除</el-button>
                <el-button type="success"@click="checkout()">结账</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="挂单">
            </el-tab-pane>
            <el-tab-pane label="外卖">

            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span='17'>
          <div class="often-goods">
            <div class="title">
              热门单品
            </div>
            <div class="often-goods-list">
              <ul>
                <li v-for="goods in oftengoods" @click="addOrderList(goods)">
                  <span>{{ goods.goodsName}}</span><br>
                  <span class="o-price">￥{{ goods.price }}元</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-type">
            <el-tabs>
              <el-tab-pane label="汉堡">
                <ul class="cookList">
                  <li v-for="goods in type0goods" @click="addOrderList(goods)">
                    <span class="goodImg">
                      <img :src="goods.goodsImg" width="100%">
                    </span>
                    <span class="goodName">{{goods.goodsName}}</span>
                    <span class="goodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="小食">
                <ul class="cookList">
                  <li v-for="goods in type1goods" @click="addOrderList(goods)">
                    <span class="goodImg">
                      <img :src="goods.goodsImg" width="100%">
                    </span>
                    <span class="goodName">{{goods.goodsName}}</span>
                    <span class="goodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                <ul class="cookList">
                  <li v-for="goods in type2goods" @click="addOrderList(goods)">
                    <span class="goodImg">
                      <img :src="goods.goodsImg" width="100%">
                    </span>
                    <span class="goodName">{{goods.goodsName}}</span>
                    <span class="goodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <ul class="cookList">
                  <li v-for="goods in type3goods" @click="addOrderList(goods)">
                    <span class="goodImg">
                      <img :src="goods.goodsImg" width="100%">
                    </span>
                    <span class="goodName">{{goods.goodsName}}</span>
                    <span class="goodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'pos',
  data() {
    return {
      tableData: [],
      oftengoods: [
         { "goodsId":1, "goodsName":"香辣鸡腿堡", "price":18 },
         { "goodsId":2, "goodsName":"田园鸡腿堡", "price":15 },
         { "goodsId":3, "goodsName":"和风汉堡", "price":15 },
         { "goodsId":4, "goodsName":"大包薯条", "price":18 },
         { "goodsId":5, "goodsName":"脆皮炸鸡腿", "price":20 },
         { "goodsId":6, "goodsName":"魔法鸡块", "price":20 },
         { "goodsId":7, "goodsName":"可乐大杯", "price":10 },
         { "goodsId":8, "goodsName":"雪顶咖啡", "price":18 },
         { "goodsId":9, "goodsName":"儿童欢乐套餐", "price":25 },
         { "goodsId":10, "goodsName":"快乐全家桶", "price":99 } ],
      type0goods: [ { "goodsId": 1, "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg", "goodsName": "香辣鸡腿堡", "price": 18 }, { "goodsId": 2, "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg", "goodsName": "田园鸡腿堡", "price": 15 }, { "goodsId": 3, "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg", "goodsName": "和风汉堡", "price": 15 } ],
      type1goods: [{ "goodsId": 4, "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg", "goodsName": "大包薯条", "price": 18 }, { "goodsId": 5, "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg", "goodsName": "脆皮炸鸡腿", "price": 20 }, { "goodsId": 6, "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg", "goodsName": "魔法鸡块", "price": 20 }],
      type2goods: [ { "goodsId": 7, "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg", "goodsName": "可乐大杯", "price": 10 }, { "goodsId": 8, "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg", "goodsName": "雪顶咖啡", "price": 18 }],
      type3goods: [{ "goodsId": 9, "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg", "goodsName": "儿童欢乐套餐", "price": 25 }, { "goodsId": 10, "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg", "goodsName": "快乐全家桶", "price": 99 } ],
      totalMoney:0,
      totalCount:0
    }
  },
  /*created:function(){
    axios.get('')
    .then(response=>{
      console.log(response);
      this.oftengoods=response.data;
    })
    .catch(error=>{
      alert('网络错误');
    })

    axios.get('')
    .then(response=>{
      console.log(response);
     //this.oftenGoods=response.data;
     this.type0goods=response.data[0];
     this.type1goods=response.data[1];
     this.type2goods=response.data[2];
     this.type3goods=response.data[3];
    })
    .catch(error=>{
   console.log(error);
   alert('网络错误，不能访问');
   })
  },
  */
  mounted: function () {
    var orderHeight = document.body.clientHeight;
    //console.log(orderHeight);
    document.getElementById('order-list').style.height=orderHeight+'px';
  },
  //添加订单列表的方法
  methods:{
   addOrderList(goods) {
    this.totalCount = 0;//汇总数量清0
    this.totalMoney = 0;
    let isHave = false;
    //判断这个商品是否存在于订单列表
    for (let i =0;i <this.tableData.length;i++){
      if (this.tableData[i].goodsId == goods.goodsId) {
        isHave = true;
      }
    }
    //根据isHave的值判断订单列表中是否已经有此商品
    if (isHave){
      let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
      arr[0].count++;
      //console.log(arr[0]);
    }else {
      //不存在就推入数组
      let newgoods = {
        goodsId:goods.goodsId,
        goodsName:goods.goodsName,
        price:goods.price,
        count:1
      };
        this.tableData.push(newgoods);
    }
    //进行数量和价格的汇总计算
     this.getAllMoney();
  },
  delSinggoods(goods){
    this.tableData=this.tableData.filter(o => o.goodsId !=goods.goodsId);
    this.getAllMoney();
  },
  delAllgoods(){
    this.tableData=[];
    this.totalCount=0;
    this.totalMoney=0;
  },
  getAllMoney(){
    this.totalCount=0;
    this.totalMoney=0;
    if(this.tableData){
      this.tableData.forEach((element)=>{
        this.totalCount+=element.count;
        this.totalMoney=this.totalMoney+(element.price*element.count);
      });
    }
  },
  checkout() {
    if (this.totalCount!=0) {
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
        this.$message({
            message: '结账成功，感谢你又为店里出了一份力!',
            type: 'success'
        });

    }else{
        this.$message.error('不能空结。老板了解你急切的心情！');
    }

}
}
}
</script>

<style scoped>
.pos-order{
  background-color: #F9FAFC;
  border-right: solid #C0CCDA 1px;
}
.div-bth{
  margin-top: 20px;
}
.title{
  height: 40px;
  background-color: #F9FAFC;
  border-bottom:solid #D3DCE6 1px;
  text-align: left;
  line-height: 40px;
}
.often-goods-list ul li{
  list-style: none;
  width: 15%;
  float: left;
  border: 1px solid #E5E9F2;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
}
.o-price{
  color: #58B7FF;
}
.goods-type{
  clear: both;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: solid #E5E9F2 1px;
  border-radius: 5px;
  height: auto;
  overflow: hidden;
  background-color: #fff;
  float: left;
  margin: 2px;
}
.cookList li span {
  display: block;
  float: left;
}
.goodImg{
  width: 40%;
}
.goodName{
  font-size: 16px;
  padding-left: 10px;
  color: brown;
}
.goodPrice{
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>
