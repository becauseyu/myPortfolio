
// 圖片hover

$('.good_img').hover(hoverIn, hoverout)

function hoverIn(img) {
    // //得到該圖片的路徑
    var url = $(this).data('url') //得到圖片名稱
    var src = $(this).prop('src')
    var ptype = src.split('/')[5]
    var pic_name = (url.split('.'))[0];//得到前面剩餘路徑
    var pic_num = parseInt(pic_name.replace(/[^0-9]/ig, "")); //得檔案的數字
    var pic_num_next = pic_num + 1;
    if (pic_num_next <= 10) {
        pic_num_next = "0" + pic_num_next;
    } else {
        pic_num_next
    }
    var pic_name_pre = (pic_name.split(pic_num))[0]; //得到檔案不含數字的部分
    var pic_style = (url.split('.'))[1] //得到副檔名稱
    $(this).attr('src', "../img/"+ptype+"/"+pic_name_pre+pic_num_next+'.'+pic_style)
 

}

function hoverout(img) {
    //  //得到該圖片的路徑
    var url = $(this).data('url')
    var src = $(this).prop('src')
    var ptype = src.split('/')[5]
    $(this).attr('src', "../img/"+ptype+"/"+url)

}


