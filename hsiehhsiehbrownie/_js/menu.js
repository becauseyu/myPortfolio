function show_allgoods(){
    $('.brownie').removeClass('hidden')
    $('.madeleine').removeClass('hidden')
    $('.basque').removeClass('hidden')
    $('.fudge_cookie').removeClass('hidden')
    $('.hkcookie').removeClass('hidden')
}

function show_brownie(){
    $('.brownie').removeClass('hidden')
    $('.madeleine').addClass('hidden')
    $('.basque').addClass('hidden')
    $('.fudge_cookie').addClass('hidden')
    $('.hkcookie').addClass('hidden')
}
function show_madeleine(){
    $('.brownie').addClass('hidden')
    $('.madeleine').removeClass('hidden')
    $('.basque').addClass('hidden')
    $('.fudge_cookie').addClass('hidden')
    $('.hkcookie').addClass('hidden')
}
function show_basque(){
    $('.brownie').addClass('hidden')
    $('.madeleine').addClass('hidden')
    $('.basque').removeClass('hidden')
    $('.fudge_cookie').addClass('hidden')
    $('.hkcookie').addClass('hidden')
}
function show_fudge_cookie(){
    $('.brownie').addClass('hidden')
    $('.madeleine').addClass('hidden')
    $('.basque').addClass('hidden')
    $('.fudge_cookie').removeClass('hidden')
    $('.hkcookie').addClass('hidden')
}

function show_hkcookie(){
    $('.brownie').addClass('hidden')
    $('.madeleine').addClass('hidden')
    $('.basque').addClass('hidden')
    $('.fudge_cookie').addClass('hidden')
    $('.hkcookie').removeClass('hidden')
}

//============

//=====點擊處發購物車========//


function addGoods(icon) { //使用點擊圖標，增加購物車品項
    $('#slide_buycart').css('visibility', 'visible')
    var goods_name = $(icon).siblings().eq(0).text()
    console.log(goods_name)  //設定商品名稱
    var goods_img = $(icon).closest('.box').find('img').eq(0).prop('src')
    console.log(goods_img)  //設定引用圖片
    var goods_single_price = $(icon).siblings().find('span').text()
    console.log(goods_single_price)//設定單價
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







