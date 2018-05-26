// Intergalactic Communications Network Standard Date and Time Index | by Bret Woods
// Converts old Gregorian days of the year into the ICN standard calendar based on Gregorian Day of Year (gdoy) reference
// 2018 - augurs-lore.com/

var now = new Date();
var year = (now.getFullYear() + 1792); 
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24; 
var gdoy = Math.floor( diff / oneDay); 

function aLeap(year) {
    return !((year % 4) && (year % 100) || !(year % 400)); 
}

function hDateMonth() {
    	if (gdoy == 354 && aLeap(year) == true) {return '--'; }
   	else if (gdoy == 354 && aLeap(year) == false) {return '00'; }
   	else if (gdoy == 355 && aLeap(year) == true) {return '00'; }
    	else if (gdoy == 355 && aLeap(year) == false) {return '01'; }              
    	else if (gdoy >= 356) {return '01'; } 
	else if (gdoy < 18) {return '01'; } 
	else if (gdoy >= 18 && gdoy < 46) {return '02'; }
	else if (gdoy >= 46 && gdoy < 74) {return '03'; }
	else if (gdoy >= 74 && gdoy < 102) {return '04'; }
  	else if (gdoy >= 102 && gdoy < 130) {return '05'; }
	else if (gdoy >= 130 && gdoy < 158) {return '06' }
   	else if (gdoy >= 158 && gdoy < 186) {return '07'; }
   	else if (gdoy >= 186 && gdoy < 214) {return '08'; }
  	else if (gdoy >= 214 && gdoy < 242) {return '09'; }
	else if (gdoy >= 242 && gdoy < 270) {return '10'; }
  	else if (gdoy >= 270 && gdoy < 298) {return '11'; }
  	else if (gdoy >= 298 && gdoy < 326) {return '12'; }
  	else if (gdoy >= 326 && gdoy < 354) {return '13'; }
}

function hDateDay() {
    if (gdoy == 354 && aLeap(year) == true) {return '--';}
    else if (gdoy == 354 && aLeap(year) == false) {return '00';}
    else if (gdoy == 355 && aLeap(year) == true) {return '00';}
    else if (gdoy == 355 && aLeap(year) == false) {return '01';}
    else if (gdoy == 356 && aLeap(year) == true) {return '01';}
    else if (gdoy == 356 && aLeap(year) == false) {return '02';}
    else if (gdoy == 357 && aLeap(year) == true) {return '02';}
    else if (gdoy == 357 && aLeap(year) == false) {return '03';}
    else if (gdoy == 358 && aLeap(year) == true) {return '03';}
    else if (gdoy == 358 && aLeap(year) == false) {return '04';}
    else if (gdoy == 359 && aLeap(year) == true) {return '04';}
    else if (gdoy == 359 && aLeap(year) == false) {return '05';}
    else if (gdoy == 360 && aLeap(year) == true) {return '05';}
    else if (gdoy == 360 && aLeap(year) == false) {return '06';}
    else if (gdoy == 361 && aLeap(year) == true) {return '06';}
    else if (gdoy == 361 && aLeap(year) == false) {return '07';}
    else if (gdoy == 362 && aLeap(year) == true) {return '07';}
    else if (gdoy == 362 && aLeap(year) == false) {return '08';}
    else if (gdoy == 363 && aLeap(year) == true) {return '08';}
    else if (gdoy == 363 && aLeap(year) == false) {return '09';}
    else if (gdoy == 364 && aLeap(year) == true) {return '09';}
    else if (gdoy == 364 && aLeap(year) == false) {return '10';}
    else if (gdoy == 365) {return '10';}
    else if (gdoy == 0) {return '11';}
    else if (gdoy == 1) {return '12';}
    else if (gdoy == 2) {return '13';}
    else if (gdoy == 3) {return '14';}
    else if (gdoy == 4) {return '15';}
    else if (gdoy == 5) {return '16';}
    else if (gdoy == 6) {return '17';}
    else if (gdoy == 7) {return '18';}
    else if (gdoy == 8) {return '19';}
    else if (gdoy == 9) {return '20';}
    else if (gdoy == 10) {return '21';}
    else if (gdoy == 11) {return '22';}
    else if (gdoy == 12) {return '23';}
    else if (gdoy == 13) {return '24';}
    else if (gdoy == 14) {return '25';}
    else if (gdoy == 15) {return '26';}
    else if (gdoy == 16) {return '27';}
    else if (gdoy == 17) {return '28';}
    else if (gdoy == 18) {return '01';}
    else if (gdoy == 19) {return '02';}
    else if (gdoy == 20) {return '03';}
    else if (gdoy == 21) {return '04';}
    else if (gdoy == 22) {return '05';}
    else if (gdoy == 23) {return '06';}
    else if (gdoy == 24) {return '07';}
    else if (gdoy == 25) {return '08';}
    else if (gdoy == 26) {return '09';}
    else if (gdoy == 27) {return '10';}
    else if (gdoy == 28) {return '11';}
    else if (gdoy == 29) {return '12';}
    else if (gdoy == 30) {return '13';}
    else if (gdoy == 31) {return '14';}
    else if (gdoy == 32) {return '15';}
    else if (gdoy == 33) {return '15';}
    else if (gdoy == 34) {return '17';}
    else if (gdoy == 35) {return '18';}
    else if (gdoy == 36) {return '19';}
    else if (gdoy == 37) {return '20';}
    else if (gdoy == 38) {return '21';}
    else if (gdoy == 39) {return '22';}
    else if (gdoy == 40) {return '23';}
    else if (gdoy == 41) {return '24';}
    else if (gdoy == 42) {return '25';}
    else if (gdoy == 43) {return '26';}
    else if (gdoy == 44) {return '27';}
    else if (gdoy == 45) {return '28';}
    else if (gdoy == 18) {return '01';}
    else if (gdoy == 19) {return '02';}
    else if (gdoy == 20) {return '03';}
    else if (gdoy == 21) {return '04';}
    else if (gdoy == 22) {return '05';}
    else if (gdoy == 23) {return '06';}
    else if (gdoy == 24) {return '07';}
    else if (gdoy == 25) {return '08';}
    else if (gdoy == 26) {return '09';}
    else if (gdoy == 27) {return '10';}
    else if (gdoy == 28) {return '11';}
    else if (gdoy == 29) {return '12';}
    else if (gdoy == 30) {return '13';}
    else if (gdoy == 31) {return '14';}
    else if (gdoy == 32) {return '15';}
    else if (gdoy == 33) {return '16';}
    else if (gdoy == 34) {return '17';}
    else if (gdoy == 35) {return '18';}
    else if (gdoy == 36) {return '19';}
    else if (gdoy == 37) {return '20';}
    else if (gdoy == 38) {return '21';}
    else if (gdoy == 39) {return '22';}
    else if (gdoy == 40) {return '23';}
    else if (gdoy == 41) {return '24';}
    else if (gdoy == 42) {return '25';}
    else if (gdoy == 43) {return '26';}
    else if (gdoy == 44) {return '27';}
    else if (gdoy == 45) {return '28';}
    else if (gdoy == 46) {return '01';}
    else if (gdoy == 47) {return '02';}
    else if (gdoy == 48) {return '03';}
    else if (gdoy == 49) {return '04';}
    else if (gdoy == 50) {return '05';}
    else if (gdoy == 51) {return '06';}
    else if (gdoy == 52) {return '07';}
    else if (gdoy == 53) {return '08';}
    else if (gdoy == 54) {return '09';}
    else if (gdoy == 55) {return '10';}
    else if (gdoy == 56) {return '11';}
    else if (gdoy == 57) {return '12';}
    else if (gdoy == 58) {return '13';}
    else if (gdoy == 59) {return '14';}
    else if (gdoy == 60) {return '15';}
    else if (gdoy == 61) {return '15';}
    else if (gdoy == 62) {return '17';}
    else if (gdoy == 63) {return '18';}
    else if (gdoy == 64) {return '19';}
    else if (gdoy == 65) {return '20';}
    else if (gdoy == 66) {return '21';}
    else if (gdoy == 67) {return '22';}
    else if (gdoy == 68) {return '23';}
    else if (gdoy == 69) {return '24';}
    else if (gdoy == 70) {return '25';}
    else if (gdoy == 71) {return '26';}
    else if (gdoy == 72) {return '27';}
    else if (gdoy == 73) {return '28';}
    else if (gdoy == 74) {return '01';}
    else if (gdoy == 75) {return '02';}
    else if (gdoy == 76) {return '03';}
    else if (gdoy == 77) {return '04';}
    else if (gdoy == 78) {return '05';}
    else if (gdoy == 79) {return '06';}
    else if (gdoy == 80) {return '07';}
    else if (gdoy == 81) {return '08';}
    else if (gdoy == 82) {return '09';}
    else if (gdoy == 83) {return '10';}
    else if (gdoy == 84) {return '11';}
    else if (gdoy == 85) {return '12';}
    else if (gdoy == 86) {return '13';}
    else if (gdoy == 87) {return '14';}
    else if (gdoy == 88) {return '15';}
    else if (gdoy == 89) {return '16';}
    else if (gdoy == 90) {return '17';}
    else if (gdoy == 91) {return '18';}
    else if (gdoy == 92) {return '19';}
    else if (gdoy == 93) {return '20';}
    else if (gdoy == 94) {return '21';}
    else if (gdoy == 95) {return '22';}
    else if (gdoy == 96) {return '23';}
    else if (gdoy == 97) {return '24';}
    else if (gdoy == 98) {return '25';}
    else if (gdoy == 99) {return '26';}
    else if (gdoy == 100) {return '27';}
    else if (gdoy == 101) {return '28';}
    else if (gdoy == 102) {return '01';}
    else if (gdoy == 103) {return '02';}
    else if (gdoy == 104) {return '03';}
    else if (gdoy == 105) {return '04';}
    else if (gdoy == 106) {return '05';}
    else if (gdoy == 107) {return '06';}
    else if (gdoy == 108) {return '07';}
    else if (gdoy == 109) {return '08';}
    else if (gdoy == 110) {return '09';}
    else if (gdoy == 111) {return '10';}
    else if (gdoy == 112) {return '11';}
    else if (gdoy == 113) {return '12';}
    else if (gdoy == 114) {return '13';}
    else if (gdoy == 115) {return '14';}
    else if (gdoy == 116) {return '15';}
    else if (gdoy == 117) {return '15';}
    else if (gdoy == 118) {return '17';}
    else if (gdoy == 119) {return '18';}
    else if (gdoy == 120) {return '19';}
    else if (gdoy == 121) {return '20';}
    else if (gdoy == 122) {return '21';}
    else if (gdoy == 123) {return '22';}
    else if (gdoy == 124) {return '23';}
    else if (gdoy == 125) {return '24';}
    else if (gdoy == 126) {return '25';}
    else if (gdoy == 127) {return '26';}
    else if (gdoy == 128) {return '27';}
    else if (gdoy == 129) {return '28';}
    else if (gdoy == 130) {return '01';}
    else if (gdoy == 131) {return '02';}
    else if (gdoy == 132) {return '03';}
    else if (gdoy == 133) {return '04';}
    else if (gdoy == 134) {return '05';}
    else if (gdoy == 135) {return '06';}
    else if (gdoy == 136) {return '07';}
    else if (gdoy == 137) {return '08';}
    else if (gdoy == 138) {return '09';}
    else if (gdoy == 139) {return '10';}
    else if (gdoy == 140) {return '11';}
    else if (gdoy == 141) {return '12';}
    else if (gdoy == 142) {return '13';}
    else if (gdoy == 143) {return '14';}
    else if (gdoy == 144) {return '15';}
    else if (gdoy == 145) {return '16';}
    else if (gdoy == 146) {return '17';}
    else if (gdoy == 147) {return '18';}
    else if (gdoy == 148) {return '19';}
    else if (gdoy == 149) {return '20';}
    else if (gdoy == 150) {return '21';}
    else if (gdoy == 151) {return '22';}
    else if (gdoy == 152) {return '23';}
    else if (gdoy == 153) {return '24';}
    else if (gdoy == 154) {return '25';}
    else if (gdoy == 155) {return '26';}
    else if (gdoy == 156) {return '27';}
    else if (gdoy == 157) {return '28';}
    else if (gdoy == 158) {return '01';}
    else if (gdoy == 159) {return '02';}
    else if (gdoy == 160) {return '03';}
    else if (gdoy == 161) {return '04';}
    else if (gdoy == 162) {return '05';}
    else if (gdoy == 163) {return '06';}
    else if (gdoy == 164) {return '07';}
    else if (gdoy == 165) {return '08';}
    else if (gdoy == 166) {return '09';}
    else if (gdoy == 167) {return '10';}
    else if (gdoy == 168) {return '11';}
    else if (gdoy == 169) {return '12';}
    else if (gdoy == 170) {return '13';}
    else if (gdoy == 171) {return '14';}
    else if (gdoy == 172) {return '15';}
    else if (gdoy == 173) {return '15';}
    else if (gdoy == 174) {return '17';}
    else if (gdoy == 175) {return '18';}
    else if (gdoy == 176) {return '19';}
    else if (gdoy == 177) {return '20';}
    else if (gdoy == 178) {return '21';}
    else if (gdoy == 179) {return '22';}
    else if (gdoy == 180) {return '23';}
    else if (gdoy == 181) {return '24';}
    else if (gdoy == 182) {return '25';}
    else if (gdoy == 183) {return '26';}
    else if (gdoy == 184) {return '27';}
    else if (gdoy == 185) {return '28';}
    else if (gdoy == 186) {return '01';}
    else if (gdoy == 187) {return '02';}
    else if (gdoy == 188) {return '03';}
    else if (gdoy == 189) {return '04';}
    else if (gdoy == 190) {return '05';}
    else if (gdoy == 191) {return '06';}
    else if (gdoy == 192) {return '07';}
    else if (gdoy == 193) {return '08';}
    else if (gdoy == 194) {return '09';}
    else if (gdoy == 195) {return '10';}
    else if (gdoy == 196) {return '11';}
    else if (gdoy == 197) {return '12';}
    else if (gdoy == 198) {return '13';}
    else if (gdoy == 199) {return '14';}
    else if (gdoy == 200) {return '15';}
    else if (gdoy == 201) {return '16';}
    else if (gdoy == 202) {return '17';}
    else if (gdoy == 203) {return '18';}
    else if (gdoy == 204) {return '19';}
    else if (gdoy == 205) {return '20';}
    else if (gdoy == 206) {return '21';}
    else if (gdoy == 207) {return '22';}
    else if (gdoy == 208) {return '23';}
    else if (gdoy == 209) {return '24';}
    else if (gdoy == 210) {return '25';}
    else if (gdoy == 211) {return '26';}
    else if (gdoy == 212) {return '27';}
    else if (gdoy == 213) {return '28';}
    else if (gdoy == 214) {return '01';}
    else if (gdoy == 215) {return '02';}
    else if (gdoy == 216) {return '03';}
    else if (gdoy == 217) {return '04';}
    else if (gdoy == 218) {return '05';}
    else if (gdoy == 219) {return '06';}
    else if (gdoy == 220) {return '07';}
    else if (gdoy == 221) {return '08';}
    else if (gdoy == 222) {return '09';}
    else if (gdoy == 223) {return '10';}
    else if (gdoy == 224) {return '11';}
    else if (gdoy == 225) {return '12';}
    else if (gdoy == 226) {return '13';}
    else if (gdoy == 227) {return '14';}
    else if (gdoy == 228) {return '15';}
    else if (gdoy == 229) {return '15';}
    else if (gdoy == 230) {return '17';}
    else if (gdoy == 231) {return '18';}
    else if (gdoy == 232) {return '19';}
    else if (gdoy == 233) {return '20';}
    else if (gdoy == 234) {return '21';}
    else if (gdoy == 235) {return '22';}
    else if (gdoy == 236) {return '23';}
    else if (gdoy == 237) {return '24';}
    else if (gdoy == 238) {return '25';}
    else if (gdoy == 239) {return '26';}
    else if (gdoy == 240) {return '27';}
    else if (gdoy == 241) {return '28';}
    else if (gdoy == 242) {return '01';}
    else if (gdoy == 243) {return '02';}
    else if (gdoy == 244) {return '03';}
    else if (gdoy == 245) {return '04';}
    else if (gdoy == 246) {return '05';}
    else if (gdoy == 247) {return '06';}
    else if (gdoy == 248) {return '07';}
    else if (gdoy == 249) {return '08';}
    else if (gdoy == 250) {return '09';}
    else if (gdoy == 251) {return '10';}
    else if (gdoy == 252) {return '11';}
    else if (gdoy == 253) {return '12';}
    else if (gdoy == 254) {return '13';}
    else if (gdoy == 255) {return '14';}
    else if (gdoy == 256) {return '15';}
    else if (gdoy == 257) {return '16';}
    else if (gdoy == 258) {return '17';}
    else if (gdoy == 259) {return '18';}
    else if (gdoy == 260) {return '19';}
    else if (gdoy == 261) {return '20';}
    else if (gdoy == 262) {return '21';}
    else if (gdoy == 263) {return '22';}
    else if (gdoy == 264) {return '23';}
    else if (gdoy == 265) {return '24';}
    else if (gdoy == 266) {return '25';}
    else if (gdoy == 267) {return '26';}
    else if (gdoy == 268) {return '27';}
    else if (gdoy == 269) {return '28';}
    else if (gdoy == 270) {return '01';}
    else if (gdoy == 271) {return '02';}
    else if (gdoy == 272) {return '03';}
    else if (gdoy == 273) {return '04';}
    else if (gdoy == 274) {return '05';}
    else if (gdoy == 275) {return '06';}
    else if (gdoy == 276) {return '07';}
    else if (gdoy == 277) {return '08';}
    else if (gdoy == 278) {return '09';}
    else if (gdoy == 279) {return '10';}
    else if (gdoy == 280) {return '11';}
    else if (gdoy == 281) {return '12';}
    else if (gdoy == 282) {return '13';}
    else if (gdoy == 283) {return '14';}
    else if (gdoy == 284) {return '15';}
    else if (gdoy == 285) {return '15';}
    else if (gdoy == 286) {return '17';}
    else if (gdoy == 287) {return '18';}
    else if (gdoy == 288) {return '19';}
    else if (gdoy == 289) {return '20';}
    else if (gdoy == 290) {return '21';}
    else if (gdoy == 291) {return '22';}
    else if (gdoy == 292) {return '23';}
    else if (gdoy == 293) {return '24';}
    else if (gdoy == 294) {return '25';}
    else if (gdoy == 295) {return '26';}
    else if (gdoy == 296) {return '27';}
    else if (gdoy == 297) {return '28';}
    else if (gdoy == 298) {return '01';}
    else if (gdoy == 299) {return '02';}
    else if (gdoy == 300) {return '03';}
    else if (gdoy == 301) {return '04';}
    else if (gdoy == 302) {return '05';}
    else if (gdoy == 303) {return '06';}
    else if (gdoy == 304) {return '07';}
    else if (gdoy == 305) {return '08';}
    else if (gdoy == 306) {return '09';}
    else if (gdoy == 307) {return '10';}
    else if (gdoy == 308) {return '11';}
    else if (gdoy == 309) {return '12';}
    else if (gdoy == 310) {return '13';}
    else if (gdoy == 311) {return '14';}
    else if (gdoy == 312) {return '15';}
    else if (gdoy == 313) {return '16';}
    else if (gdoy == 314) {return '17';}
    else if (gdoy == 315) {return '18';}
    else if (gdoy == 316) {return '19';}
    else if (gdoy == 317) {return '20';}
    else if (gdoy == 318) {return '21';}
    else if (gdoy == 319) {return '22';}
    else if (gdoy == 320) {return '23';}
    else if (gdoy == 321) {return '24';}
    else if (gdoy == 322) {return '25';}
    else if (gdoy == 323) {return '26';}
    else if (gdoy == 324) {return '27';}
    else if (gdoy == 325) {return '28';}
    else if (gdoy == 326) {return '01';}
    else if (gdoy == 327) {return '02';}
    else if (gdoy == 328) {return '03';}
    else if (gdoy == 329) {return '04';}
    else if (gdoy == 330) {return '05';}
    else if (gdoy == 331) {return '06';}
    else if (gdoy == 332) {return '07';}
    else if (gdoy == 333) {return '08';}
    else if (gdoy == 334) {return '09';}
    else if (gdoy == 335) {return '10';}
    else if (gdoy == 336) {return '11';}
    else if (gdoy == 337) {return '12';}
    else if (gdoy == 338) {return '13';}
    else if (gdoy == 339) {return '14';}
    else if (gdoy == 340) {return '15';}
    else if (gdoy == 341) {return '16';}
    else if (gdoy == 342) {return '17';}
    else if (gdoy == 343) {return '18';}
    else if (gdoy == 344) {return '19';}
    else if (gdoy == 345) {return '20';}
    else if (gdoy == 346) {return '21';}
    else if (gdoy == 347) {return '22';}
    else if (gdoy == 348) {return '23';}
    else if (gdoy == 349) {return '24';}
    else if (gdoy == 350) {return '25';}
    else if (gdoy == 351) {return '26';}
    else if (gdoy == 352) {return '27';}
    else if (gdoy == 353) {return '28';}
}
console.log(gdoy); //146
console.log(year); //3810
console.log( hDateMonth() ); //06
console.log(aLeap(year)); //false
console.log( hDateDay()); //17
console.log ((year) + '.' + (hDateMonth()) + '.' + (hDateDay())); // 3810.06.17
