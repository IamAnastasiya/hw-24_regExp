"use strict";

//1st
let text1 = "привет 12 ываыва34 98 3423ыавыа"; //12, 98
let text2 = "10 ываыв 8 234ы"; // 10, 8
let text3 = "декабрь12 2020 выходной12фф 74 2пр2 77"; //2020, 74, 77
let text4 = "12текст блабла 123 10 бла12бла 7"; // 123, 10, 7

function findDetachedNumbers (text) {
    // let regexp = /\b\d+\b/g; // будет работать только для алфавитов, основанных на латинице
    let regexp = /(^|\s)\d+(?=\s|$)/g
    let result = (text.match(regexp).map(item => Number(item)));
    console.log(result);
    return result;
}


findDetachedNumbers (text1);
findDetachedNumbers (text2);
findDetachedNumbers (text3);
findDetachedNumbers (text4);

//2nd
function validateApiAddress (address) {
    let regexp = /^((([0-1]?[0-9]?[0-9])|([2][0-4][0-9])|(25[0-5]))\.){3}(([0-1]?[0-9]?[0-9])|([2][0-4][0-9])|(25[0-5]))$/;
    console.log(regexp.test(address));
    return regexp.test(address);
}

// ^$ - ограничивают начало и конец строки
// выражение устанавливающее диапазон от 0 до 255:
// (([0-1]?[0-9]?[0-9])|([2][0-4][0-9])|(25[0-5])) -
// (? - делает символ необязательным: 1е число - диапазон ?(0-1), далее ?(0-9) и последнее (0-9) )
//                                 или
// (1е число - (2), далее (0-4) и последнее (0-9) )
//                                 или
// (первые 2 числа - (25), далее (0-5))
//  повторяю трижды с экранированной точной и один раз без нее


validateApiAddress ("127.0.0.0");
validateApiAddress ("127.0.155.255");
validateApiAddress ("127.0n155.10");
validateApiAddress ("127,0333.155.10");
validateApiAddress ("127.2.2");
validateApiAddress ("127.0.0.0F");
validateApiAddress ("327.0.0.0");
