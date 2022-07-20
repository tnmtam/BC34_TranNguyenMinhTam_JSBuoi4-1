/***
 * BT1: 
 */

document.getElementById('btnSapXep').onclick = function() {
    //input
    var a = document.getElementById('number1').value * 1;
    var b = document.getElementById('number2').value * 1;
    var c = document.getElementById('number3').value * 1;
    //process
    var result;
    if(a > b && a > c && b > c) {
        result = c + ' < ' + b + ' < ' + a;
        
    } else if(a > b && a > c && c > b ) {
        result = b + ' < ' + c + ' < ' + a;

    } else if(b > a && b > c && a > c) {
        result = c + ' < ' + a + ' < ' + b;

    } else if(b > a && b > c && c > a) {
       result = a + ' < ' + c + ' < ' + b;

    } else if(c > a && c > b && a > b) {
       result = b + ' < ' + a + ' < ' + c;
        
    } else {
       result = a + ' < ' + b + ' < ' + c;

    }
    //output
    document.getElementById('ketQua').innerHTML = result;
}

/**
 * BT2: 
 */
document.getElementById('btnChao').onclick = function() {
    //input
    var member = document.getElementById('member').value;
    var tv;
    //process
    if(member == 'Bố') {
        tv = 'Xin chào Bố';

    } else if(member == 'Mẹ') {
        tv = 'Xin chào Mẹ';

    } else if(member == 'Anh Trai') {
        tv = 'Xin chào Anh Trai';

    } else if(member == 'Em Gái') {
        tv = 'Xin chào Em Gái';

    } else {
        tv = 'Xin chào Người lạ';
    }
    //output
    document.getElementById('chaoHoi').innerHTML = tv;
}

/**
 * BT3:
 */
function ktSo(a) {
    if(a % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

document.getElementById('btnDem').onclick = function() {
    //input
    var nb1 = document.getElementById('nb1').value * 1;
    var nb2 = document.getElementById('nb2').value * 1;
    var nb3 = document.getElementById('nb3').value * 1;

    //process
    var res1 = ktSo(nb1);
    var res2 = ktSo(nb2);
    var res3 = ktSo(nb3);
    var textChan = 0;
    var textLe = 0;
    switch(res1) {
        case true:
            textChan += 1;
            break;
        default:
            textChan;
    }
    switch(res2) {
        case true:
            textChan += 1;
            break;
        default:
            textChan;
    }
    switch(res3) {
        case true:
            textChan += 1;
            break;
        default:
            textChan;
    }
    textLe = 3 - textChan;
    //output
    document.getElementById('soChanLe').innerHTML = 'Có ' + textChan + ' số chẵn và ' + textLe + ' số lẻ';
}

/**
 * BT4:
 */

document.getElementById('btnDoan').onclick = function() {
    //input
    var canh1 = document.getElementById('canh1').value * 1;
    var canh2 = document.getElementById('canh2').value * 1;
    var canh3 = document.getElementById('canh3').value * 1;
    var loaiTG = '';
    //process
    if(canh1 == canh2 && canh1 == canh3 && canh2 == canh3) {
        loaiTG = 'Đây là tam giác đều';
    } else if(canh1 == canh2 || canh1 == canh3 || canh2 == canh3) {
        loaiTG = 'Đây là tam giác cân';
    } else if(canh3 * canh3 == canh1 * canh1 + canh2 *canh2) {
        loaiTG = 'Đây là tam giác vuông';
    } else {
        loaiTG = 'Đây là một loại tam giác nào đó';
    }
    //output    
    document.getElementById('loaiTG').innerHTML = loaiTG;
}
