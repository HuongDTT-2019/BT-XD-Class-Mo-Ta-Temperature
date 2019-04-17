function Temperature(doC) {
    this.doC=doC;
}
Temperature.prototype.DoF=function () {
        this.doF=(this.doC*9)/5+32;
        return this.doF;
};
Temperature.prototype.DoK=function () {
        this.doK=this.doC+273.15;
        return this.doK;
};
let temperature=new Temperature(25);
let doF1=temperature.DoF();console.log(doF1);
let doK1=temperature.DoK();console.log(doK1);
document.getElementById('get_doF').innerHTML="Do F: "+doF1;
document.getElementById('get_doK').innerHTML="Do K: "+doK1;