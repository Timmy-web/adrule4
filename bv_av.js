var inp = new String;
        var table = "fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF",
        tr = new Object();
        for (var i = 0; i < 58; i++) {
            tr[table[i]] = i;
        }
        var s = [11, 10, 3, 8, 4, 6],
        xor = 177451812,
        add = 8728348608;
function dec(x) {
var r = 0;
for (var i = 0; i < 6; i++) {
r += tr[x[s[i]]] * 58 ** i;
}
return (r - add) ^ xor;
}
function enc(x) {
x = (x ^ xor) + add;
r = "BV1  4 1 7  ".split("");
for (var i = 0; i < 6; i++) {
r[s[i]] = table[Math.floor(x / 58 ** i) % 58];
}
return r.join("");
}
function run(){
inp=document.getElementsByTagName('script');
//inp = String(document.getElementById("inb").value);
if(!lg(inp)){
pri("请输入正确的AV/BV号")
}
var out = new String;
if(pd(inp)){
// 为BV号
out = "av" + dec(inp).toString();
}
else{
// 为AV号
// 去掉AV标识
if(inp[0] == 'a' || inp[0] == 'A') inp = inp.substr(2,inp.length);
var r = 0;
inp = parseInt(inp)
out = enc (inp);
}
pri(out);
}
function pd(s){
return s.indexOf("BV") != -1;
}
function pri(s){
document.write(s);
//document.getElementById("inb").value = s;
}
function lg(s){
if(s.substr(0,1) == 'BV' || s.substr(0,1) == 'av' || s.substr(0,1) == 'AV') return true;
else return false;
}
