//-----------------fixed_nav-----------------------//
$(function () {
    const nav = document.querySelector('.navbar')
    let topOfNav = nav.offsetTop

    function fixNav() {
        // console.log(topOfNav)
        if (window.scrollY >= topOfNav) {
            document.body.classList.add('fixed-nav')
            document.body.style.paddingTop = nav.offsetHeight + 'px'
        } else {
            document.body.classList.remove('fixed-nav')
            document.body.style.paddingTop = 0;
        }
    }
    window.addEventListener('scroll', fixNav)

})

//-----------------dialog---------------------------//
$(function () {

    $("#dialog_div").dialog({
        autoOpen: false, //自動開啟，預設開啟(true)，這邊改為false
        show: "blind",  //設定開啟樣式
        hide: "none",   //設定關閉樣式
        buttons: [
            {
                text: '送出',
                open: function () { $(this).addClass('yescls') },
                click: function () {
                    alert('感謝您的填寫');
                    $("#dialog_div").text("已收到您的來信，我們會盡快回覆!")
                }
            },
            {
                text: "取消",
                open: function () { $(this).addClass('cancelcls') },
                click: function () { $(this).dialog("close"); }
            }
        ],
        closeOnEscape: true,  //設定也可用exc關閉表單
        draggable: false, //設定無法被拖曳(固定置中)
        height: 500,
        width: 500,
        modal: true,  //設定dialog開啟時，頁面鎖定
    });

    $(".message").click(function () {
        $("#dialog_div").dialog("open");//設定點按鈕時會跳出diolog
        return false;
    });
});

$(document).ready(function () {
    $("#connect").change(function () { //change():當select發生改變時，就會執行動作
        // $("#type_id").css("display","inline")
        var a = $("#connect").val()
        // console.log(a)
        if (a == "co_line") {
            $("#type_id").css("display", "inline")
            $("#type_id").attr("placeholder", "請輸入可搜尋的id或電話號碼")
        }
        if (a == "co_email") {
            $("#type_id").css("display", "inline")
            $("#type_id").attr("placeholder", "請輸入您的電子信箱")
        }
        if (a == "co_facebook") {
            $("#type_id").css("display", "inline")
            $("#type_id").attr("placeholder", "請貼上您的個人檔案網址")
        }
        if (a == "co_tel") {
            $("#type_id").css("display", "inline")
            $("#type_id").attr("placeholder", "請輸入您的手機(09)或市話(04)")
        }
        if (a == "co_other") {
            $("#type_id").css("display", "inline")
            $("#type_id").attr("placeholder", "請輸入其他聯絡方式名稱及方式")
        }

    })
})

//------------------點擊【x】關閉購物車-----------------------------//


function closebuycar() {
    $('#slide_buycart').css('visibility', 'hidden')
}

//------------------點擊【購物車】開啟購物車-----------------------------//


function openbuycar() {
    $('#slide_buycart').css('visibility', 'visible')
}

//=====點擊處發購物車========//


function addGoods(icon) { //使用點擊圖標，增加購物車品項
    $('#slide_buycart').css('visibility', 'visible')
    var goods_name = $(icon).siblings().eq(2).html() //sibling():指到的為與icon同層的所有兄弟
    // console.log($(icon))
    // console.log(goods_name)  //設定商品名稱
    var goods_img = $(icon).siblings().eq(0).prop('src')
    // console.log(goods_img)  //設定引用圖片
    var goods_single_price = $(icon).siblings().eq(4).find('span').text()
    // console.log(goods_single_price)//設定單價
    var uls = ($('#slide_buycart_goods ul'))
    var nameArr = new Array(); //定義nameArray為新陣列(目前#slide_buycart_goods ul還是空的)
    $.each(uls, function (idx, elm) {
        nameArr.push($(this).children('li').eq(0).text())
    })
    var $ul = $( //新增商品後的html //單價不顯示，僅計算用，在購物車頁面會顯示
        `<ul>
            <li align="center"class="slide_buycart_goodsTitle">${goods_name}</li>
            <li align="center"><img class="slide_buycart_image" src=${goods_img}></img></li>
            <li ><input type="number" value="1" id="slide_buycart_count" "></input></li>
            <li id="slide_buycart_total"align="center">NT$ <span>${goods_single_price}</span></li>
            <li class="hide">${goods_single_price}</li>
            <li><button class='delete_goods' onclick=delete_goods(this) >移除該商品</button></li>
            <hr>
         </ul>
            `
    )







    //確認商品是否已存在購物車
    var isHasName = nameArr.indexOf(goods_name)
    var goodCount=1  //設定商品數量初始值
    var goodTotal=goods_single_price //設定商品數量初始價格

    if (isHasName >= 0) { //被點及一次後，就會往上加，初始為-1
        var goodCount = uls.eq(isHasName).children('li').eq(2).find('input').val()
        // console.log(goodCount)
        Number.parseInt(goodCount);
        uls.eq(isHasName).children('li').eq(2).find('input').val(++goodCount)
        var goodPrice = uls.eq(isHasName).children('li').eq(4).html()
        // console.log(goodPrice)
        Number.parseInt(goodPrice);
        var goodTotal = goodCount * goodPrice
        Number.parseInt(goodTotal)
        // console.log(goodTotal)
        uls.eq(isHasName).children('li').eq(3).html(`NT$<span>${goodTotal}</span>`)

    }
    //如果不存在就新增商品

    else {
        $('#slide_buycart_goods').append($ul)
        $('#slide_buycart_accounttotal').html(+goods_single_price)

    }
    var myStorage = localStorage
    var good = {
        name: goods_name,
        count: goodCount,
        img: goods_img,
        singlePrice: goods_single_price,
        totalPrice:goodTotal
    }

    myStorage.setItem(goods_name, JSON.stringify(good))


    //-------------inputNumber 觸發單品加減與總數量加減-----------------------------//
    $(":input").on('input', function () {
        var btn_count = $(this).val()
        // console.log(btn_count)

        if (btn_count >= 0) {  //設定如果val()小於零時，自動刪除
            var btn_price = $(this).closest('ul').find('li').eq(4).text()
            // console.log(btn_price)
            var btn_total = btn_count * btn_price
            Number.parseInt(btn_total)
            $(this).closest('ul').find('li').eq(3).html(`NT$<span>${btn_total}</span>`)

            var sum = 0
            $('#slide_buycart_content').find('ul').each(function (idx, elm) {
                var goodsTotalAcount = $(elm).find('span').html();
                // console.log(goodsTotalAcount);
                sum = parseInt(sum) + parseInt(goodsTotalAcount)
            })
            $('#slide_buycart_accounttotal').html(sum)

            var count = 0
            $('#slide_buycart_content').find('ul').each(function (idx, elm) {
                var goodsTotalcount = $(elm).find(':input').val();
                // console.log(goodsTotalcount);
                count = parseInt(count) + parseInt(goodsTotalcount)
            })
            $('#totalCount').html(count)
            $('#cartQuantity').html(count) //透過點擊改變購物車圖標上數字
    
        }

        else {
            var a = $(this).closest('ul')
            a.remove()
            // console.log(a)

        }
        var btn_name = $(this).closest('ul').find('li').eq(0).text()
        console.log(btn_name)
        var myStorage = localStorage
        var goodJson=myStorage.getItem(btn_name)
        var goodsData=JSON.parse(goodJson)
        console.log(goodsData.count)
        goodsData.count=parseInt(btn_count) 
        goodsData.totalPrice=parseInt(sum)
        myStorage.setItem(btn_name,JSON.stringify(goodsData))
        
        
    })




    //------------------點擊icon改變總計-----------------------------//
    var sum = 0
    $('#slide_buycart_content').find('ul').each(function (idx, elm) {
        var goodsTotalAcount = $(elm).find('span').html();
        // console.log(goodsTotalAcount);
        sum = parseInt(sum) + parseInt(goodsTotalAcount)
    })
    $('#slide_buycart_accounttotal').html(sum)

    var count = 0
    $('#slide_buycart_content').find('ul').each(function (idx, elm) {
        var goodsTotalcount = $(elm).find(':input').val();
        // console.log(goodsTotalcount);
        count = parseInt(count) + parseInt(goodsTotalcount)
    })
    $('#totalCount').html(count)
    $('#cartQuantity').html(count)  //透過input:number改變購物車圖標上數字

    //把資料丟到localStorage

    $(function () {
        $(':input').on('change', function () {
            console.log('ok')
        })
    })


}
//------------------點擊【移除】按鈕移除產品-----------------------------//

function delete_goods(btn) {
    console.log($(btn))
    var now_price = $('#slide_buycart_accounttotal').html()
    console.log(now_price)
    var now_count = $('#cartQuantity').html()
    console.log(now_count)
    var delete_price = $(btn).closest('ul').find('span').html()
    console.log(delete_price)
    var delete_count = $(btn).closest('ul').find(':input').val()
    console.log(delete_count)
    $('#slide_buycart_accounttotal').html(parseInt(now_price) - parseInt(delete_price))
    $('#cartQuantity').html(parseInt(now_count) - parseInt(delete_count))
    var delete_goods = $(btn).closest('ul')
    delete_goods.remove()

}


