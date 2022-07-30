
$(function(){
    $('#pay_cash_bigdiv').addClass('hidden')
    $('#pay_transfer_bigdiv').addClass('hidden')
    $('#pay_linepay_bigdiv').addClass('hidden')
    $('#del_face_bigdiv').addClass('hidden')
    $('#del_del_bigdiv').addClass('hidden')

})


//===========================OPEN CASH=======================================//

function openCash(){
    $('#pay_cash').addClass('op_cash');
    $('#pay_transfer').addClass('hidden');
    $('#pay_linepay').addClass('hidden');
    $('#pay_cash_div').addClass('hidden');
    setTimeout(showCashDiv,800)
}

function showCashDiv(){
    $('#pay_cash_bigdiv').removeClass('hidden')
}

function closeCash(){
    $('#pay_cash_bigdiv').addClass('hidden')
    $('#pay_cash').removeClass('op_cash')
    setTimeout(hideCashDiv,900)
    

}

function hideCashDiv(){
    $('#pay_transfer').removeClass('hidden');
    $('#pay_linepay').removeClass('hidden');
    $('#pay_cash_div').removeClass('hidden');
}

//===========================OPEN TRANSFER=======================================//

function openTransfer(){
    $('#pay_cash').addClass('op_cash');
    $('#pay_transfer').addClass('hidden');
    $('#pay_linepay').addClass('hidden');
    $('#pay_cash_div').addClass('hidden');
    setTimeout(showTransferDiv,800)
}

function showTransferDiv(){
    $('#pay_transfer_bigdiv').removeClass('hidden')
}

function closeTransfer(){
    $('#pay_transfer_bigdiv').addClass('hidden')
    $('#pay_cash').removeClass('op_cash')
    setTimeout(hideTransferDiv,900)
    

}

function hideTransferDiv(){
    $('#pay_transfer').removeClass('hidden');
    $('#pay_linepay').removeClass('hidden');
    $('#pay_cash_div').removeClass('hidden');
}

//===========================OPEN LIVEPAY=======================================//

function openLinepay(){
    $('#pay_cash').addClass('op_cash');
    $('#pay_transfer').addClass('hidden');
    $('#pay_linepay').addClass('hidden');
    $('#pay_cash_div').addClass('hidden');
    setTimeout(showLinepayDiv,800)
}

function showLinepayDiv(){
    $('#pay_linepay_bigdiv').removeClass('hidden')
}

function closeLinepay(){
    $('#pay_linepay_bigdiv').addClass('hidden')
    $('#pay_cash').removeClass('op_cash')
    setTimeout(hideTransferDiv,900)
    

}

function hideLinepayDiv(){
    $('#pay_transfer').removeClass('hidden');
    $('#pay_linepay').removeClass('hidden');
    $('#pay_cash_div').removeClass('hidden');
}

//===========================OPEN FACE=======================================//
function openFace(){
    $('#del_face').addClass('op_cash');
    $('#del_del').addClass('hidden');
    $('#del_face_div').addClass('hidden');
    setTimeout(showFaceDiv,800)
}

function showFaceDiv(){
    $('#del_face_bigdiv').removeClass('hidden')
}

function closeFace(){
    $('#del_face_bigdiv').addClass('hidden')
    $('#del_face').removeClass('op_cash')
    setTimeout(hideFaceDiv,900)
    

}

function hideFaceDiv(){
    $('#del_del').removeClass('hidden');
    $('#del_face_div').removeClass('hidden');
}


//===========================OPEN DELIVER======================================//

function openDeliver(){
    $('#del_face').addClass('op_cash');
    $('#del_del').addClass('hidden');
    $('#del_face_div').addClass('hidden');
    setTimeout(showDeliverDiv,800)
}

function showDeliverDiv(){
    $('#del_del_bigdiv').removeClass('hidden')
}

function closeDeliver(){
    $('#del_del_bigdiv').addClass('hidden')
    $('#del_face').removeClass('op_cash')
    setTimeout(hideDeliverDiv,900)
    

}

function hideDeliverDiv(){
    $('#del_del').removeClass('hidden');
    $('#del_face_div').removeClass('hidden');
}
