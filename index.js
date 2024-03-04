let randomnum123 = Math.floor(Math.random() * 3 - 1 + 1);

const wage = 20;
const partt = 4;
let fullT = 8;
let totalHour=0;
const totalDays = 20;
let parttimewage = 0;
let fullTwage=0;
let totalwagemonth=0;




class presentAbsent {
    constructor() {
        let num = Math.round(Math.random());
        if (num == 1) {
            return true;
        } else {
            return false;
        }
    }
    calculateDailywage() {
        
        if (presentAbsent) {

           // console.log(randomnum123);
            if (randomnum123 == 0) {
                totalwagemonth=0
                return false;
            } else if (randomnum123 == 1) {

                parttimewage += (partt * wage)
                totalwagemonth=parttimewage

            } else if (randomnum123 == 2) {
                 fullTwage += fullT * wage;
                 totalwagemonth=fullTwage;
                
            }

        }
        
        
    }
    refoctor(){
        if(randomnum123==0){
            return "0 hour"
        } else if(randomnum123==1){
            totalHour+=partt ;
            return partt;
        }else if(randomnum123==2){
            totalHour+=fullT
            return fullT;
        }
    }

    calmonth() {
        for (let i = 1; i <= 20; i++) {
             this.calculateDailywage();
             this.refoctor();
        }
        
    }
    wageH(){
        if(fullTwage){
            return fullTwage+ "  " +"full time wage"
        } else if (parttimewage) {
            return parttimewage+ "   " + "part time wage "
        } else {
            return false;
        }
    }
   // ug5
    conditionWage(){
       
            let i=1;
        console.log(totalDays,totalHour);
        while(i<=totalDays && i<=160){
          this.calculateDailywage()
          i++;
        }
       return totalwagemonth;
        
    }
    
  
}

const f= new presentAbsent();
f.calculateDailywage();
f.calmonth();
console.log(f.wageH());
console.log(f.refoctor());
console.log(f.conditionWage());
