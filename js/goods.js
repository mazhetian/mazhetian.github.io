document.addEventListener('DOMContentLoaded',function(){


//1动态地获取数据’
var goodsD=goodsData.goodsDetail;
var ulBox=getDom('.goods-details-config>ul');
initGoodsParams();
function initGoodsParams(){


    //1已选择器的方式去渲染标题
    getDom('.goods-details-intro > h3').textContent=goodsD.title;
    getDom('.gooods-details-intro > p').textContent=goodsD.recommend;
    //1.2使用字符串的方式来渲染价格
    
}


















})