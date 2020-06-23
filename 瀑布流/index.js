var minDiv = function(){
    var pb1 = document.querySelector('#pubu-01')
    var pb2 = document.querySelector('#pubu-02')
    var pb3 = document.querySelector('#pubu-03')
    var pb4 = document.querySelector('#pubu-04')

    var pbImgs_1 = pb1.children
    var pbImgs_2 = pb2.children
    var pbImgs_3 = pb3.children
    var pbImgs_4 = pb4.children

    var pb1Height = jisuan(pbImgs_1)
    var pb2Height = jisuan(pbImgs_2)
    var pb3Height = jisuan(pbImgs_3)
    var pb4Height = jisuan(pbImgs_4)

    var minHeight = Math.min(pb1Height, pb2Height, pb3Height, pb4Height)
    if(minHeight == pb1Height){ return pb1 }
    if(minHeight == pb2Height){ return pb2 }
    if(minHeight == pb3Height){ return pb3 }
    if(minHeight == pb4Height){ return pb4 }
}

var jisuan = function(pbImgs){
    if(pbImgs == null || pbImgs.length == 0){
        return 0
    } else {
      var height = 0
      for(var i = 0; i < pbImgs.length; i++){
          var img = pbImgs[i]
          var h = img.height
          height += h
      }  
      return height
    }
}

var imgId = 0
var windowHeight = window.screen.height+500
window.onload = function(){
    insertImg()
    // 监听滚动事件
    window.document.addEventListener('scroll', function(){
        // document.documentElement.scrollTop： 已经滚动的内容高度
        // document.documentElement.scrollHeight： 可以滚动的最大高度
        if(document.documentElement.scrollTop + window.screen.height > document.documentElement.scrollHeight){
            windowHeight += 500
            insertImg()
        }
    })

}

var insertImg = function(){
    var inter = this.setInterval(function(){  // 设置定时器就是给浏览器渲染时间
        if(document.documentElement.scrollHeight > windowHeight){
            clearInterval(inter)
        }
        // while(true){
        //     var imgId = parseInt(Math.random()*10)
        //     if(imgId !== 0){break}
        // }
        imgId++
        if(imgId > 10){ imgId = 1}
        var mDiv = minDiv()
        var img = document.createElement('img')
        img.setAttribute("src", 'img/'+imgId+'.jpg')
        mDiv.appendChild(img)  // 放图，给浏览器一个指令，插图，但是浏览器的渲染还没完成
    }, 100)
}
