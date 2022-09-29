document.addEventListener('DOMContentLoaded', function () {
    tabs('.cate>p a', '.cate > div >div');
    tabs('.goods-intro>p a', '.goods-intro > div >div');

thumbPic();
function thumbPic(){

var imgArr=goodsData.imgsrc;
//动态的显示图片
var ulBox=getDom('.slides ul');
imgArr.forEach(function(item,index){
    //item指的是数组中的每一项
    var li=document.createElement('li');
    var img=new Image();
    img.src=item.s;
    li.appendChild(img);
    ulBox.appendChild(li);
    //给li注册时间
    li.addEventListener('click',function(){


        //切换图片的高亮
        li.addEventListener('click',function(){

var arr=Array.from(ulBox.children);
arr.forEach(function(e1,i){
    e1.removeAttribute('class');

})
this.className='active';
//切换小图与大图的显示
smallImg.scr=item.s;
getDom('.big-img img').src=item.b;


        })
    })
    //变量完成之后，动态讲第一张的大图与小图修改
    var bigImg=getDom('.big-img');
    var smallImg=getDom('.small-img');
    var mask=getDom('.mask');
    smallImg.src=imgArr[0].s;
    getDom('.big-img img').src=imgArr[0].b;
    //mask动态展示
    getDom('.zoom-imgs').addEventListener('mouseenter',function(){
        mask.style.display='block';
        bigImg.style.display='block';
    })
getDom('.zoom-imgs').addEventListener('mouseLeave',function(){
mask.style.display='none';
bigImg.style.display='none';


})

bigImg.addEventListener('mouseenter',function(){

    this.style.display='none';
})
//遮挡和小图的比列=主图与大图的比例。
var bigImgWidth=getStyle(bigImg,'width');
var bigInnerWidth=getStyle(bigImg.children,'width');
var smallImgwidth=getStyle(smallImg,'width');
var maskWidth=bigImgWidth/bigInnerWidth*smallImgwidth;
mask.style.width=maskWidth+'px';
mask.style.height=maskWidth+'px';
//点击缩略图切换显示主图
var count=0;
getDom('.arrow-right').onclick=function(){
    var maxCount=ulBox.children.length-5;
    if(count<maxCount){
        count+=2;
    }
    if(count>maxCount){
        count=maxCount;
    }
    var firstImg=ulBox.children[0];
    var imgWidth=firstImg.offsetWidth+getStyle(firstImg,'margin-right');
ulBox.style.transform='translateX('+-imgWidth*count+'px)';


}
getDom('.arrow-left').onclick=function(){
    if(count>0){
        count-=2;
    }
    if(count<0){
        count=0;
    }
    var firstImg=ulBox.children[0];
    var imgWidth=firstImg.offsetWidth+getStyle(firstImg,'margin-right');
    ulBox.style.transform='translateX('+-imgWidth*count+'px)';

}
//大图的更随意动
getDom('.zoom-imgs').onmousemove=function(e){

var boxClient=this.getBoundingClientRect();
var offsetX=e.clientX-boxClient.left;
var offsetY=e.clientY-boxClient.top;
var maskDis=mask.offsetWidth/2;
var distanceX=offsetX-maskDis;
var distanceY=offsetY-maskDis;

if(distanceX<0){
    distanceX=0
}
if(distanceY<0){
    distanceY=0
}
maxDis=getDom('.zoom-imgs').offsetWidth-mask.offsetWidth;
if(distanceX>maxDis){
    distanceX=maxDis;

}
if(distanceY>maxDis){
    distanceY=maxDis;

}
mask.style.left=distanceX+'px';
mask.style.top=distanceY+'px';
var maxBigImgDis=bigImgWidth-bigImgWidth;
var bigX=distanceX/maxDis*maxBigImgDis;
var bigY=distanceY/maxDis*maxDis;
getDom('.big-img img').style.left=-bigX+'px';
getDom('big-img img').style.top=-bigY+'px';

}

})







}

})