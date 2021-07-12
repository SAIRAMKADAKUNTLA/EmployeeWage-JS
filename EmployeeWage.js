
const is_fulltime=1
const is_parttime=2
const full_timehr=8
const part_timehr=4
const wage_perhr=20
const numof_workingdays=20
const maxhrs_inmnth=160
let totaldays=0
let totalhrs=0
let empwagearr=new Array();
let check = Math.floor(Math.random() * 10)%3;
function getEmphr(check)
{
    switch(check){
        case is_fulltime:
            return full_timehr;
            case is_parttime:
                return part_timehr;
                default:
                    return 0;
    }
}
function CalculateWage (emphr){
    emphr*wage_perhr
}
while(totalhrs <= maxhrs_inmnth && totaldays < numof_workingdays){
    totaldays++
let emphr=getEmphr(check)
totalhrs += getEmphr(check)
empwagearr.push(CalculateWage(emphr))
}
let empwage =CalculateWage(totalhrs);
console.log("Days:"+totaldays+" "+"hrs:"+totalhrs+" "+"wage:"+empwage)




