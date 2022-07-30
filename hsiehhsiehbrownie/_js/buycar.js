$(function () {

    //點擊input觸發加總
    $('input[type="number"]').on('input', function () {
        var goodsCount = $(this).val()
        // console.log(goodsCount)
        if (goodsCount >= 0) {
            var goodsPrice = $(this).closest('tr').find('th').eq(2).find('span').text()
            // console.log(goodsPrice)
            var goodsTotal = parseInt(goodsCount) * parseInt(goodsPrice)
            $(this).closest('tr').find('th').eq(4).find('span').text(goodsTotal)

            var count = 0
            $('#buycarList').find('tr').each(function (idx, elm) {
                // console.log(elm)
                var account = $(elm).find('input').val()
                count += parseInt(account)
                $('#totalAmount').html(count)
                $('#cartQuantity').html(count)

            })

            var sum = 0
            $('#buycarList').find('tr').each(function (idx, elm) {
                // console.log(elm)
                var total = $(elm).find('span').eq(1).text()
                sum += parseInt(total)
                $('#totalPrice').html(sum)
                $('#goods_total').html(sum)
                $('#order_total').html(+sum)

            })


        }
        //input小於0刪除商品
        else {
            var a = $(this).closest('tr')
            a.remove()
        }

    })

    var goods_total = $('#goods_total').html()
    console.log(goods_total)
})

//點擊【移除】刪除商品
function removeGoods(btn) {
    var now_count = $('#totalAmount').html()
    var now_price = $('#totalPrice').html()
    var delete_count = $(btn).closest('tr').find('input').val()
    var delete_price = $(btn).closest('tr').find('th').eq(4).find('span').text()
    $('#totalAmount').html(parseInt(now_count) - parseInt(delete_count))
    $('#cartQuantity').html(parseInt(now_count) - parseInt(delete_count))
    $('#totalPrice').html(parseInt(now_price) - parseInt(delete_price))
    $('#goods_total').html(parseInt(now_price) - parseInt(delete_price))
    $('#order_total').html(parseInt(now_price) - parseInt(delete_price))
    var delete_goods = $(btn).closest('tr')
    delete_goods.remove()

}

//======================== 付款方式跳轉  ============================//

$(document).ready(function () {
    $('#del_select').on('change', function () {
        var a = $('#del_select').val()

        if (a == 'del_face') {
            $('#face_select').css("display", "inline")
            $('#pay_cash').css("display", "inline")
            $('#del_address').css("display", "none")

        }

        if (a == 'del_deliver') {
            $('#del_address').css("display", "inline")
            $('#face_select').css("display", "none")
            $('#pay_cash').css("display", "none")
        }
    })
})

//======================== 運費跳轉  ============================//

$(document).ready(function () {
    $('#del_select').on('change', function () {
        var a = $('#del_select').val()

        if (a == 'del_face') {
            var now_price = $('#totalPrice').html()
            $('#del_fee').html('0')
            $('#order_total').html(parseInt(now_price) + 0)





        }

        if (a == 'del_deliver') {
            var now_price = $('#totalPrice').html()
            $('#del_fee').html('160')
            $('#order_total').html(parseInt(now_price) + 160)



        }
    })
})


