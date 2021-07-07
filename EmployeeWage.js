///UC-1 Check for present or absent
{
    const is_Absent = 0
    let check = Math.floor(Math.random() * 10) % 2
    if(check == is_Absent)
    {
    console.log("Employee is absent")
    }
    else
    {
    console.log("Employee is present")
    }
}
///Calculating Empwage
const is_fulltime=1
const is_parttime=2
const full_timehr=8
const part_timehr=4
const emp_perhr=20
{
    let emphr=0
    let check=Math.floor(Math.random() * 10) %3
    switch(check){
        case is_fulltime:
            emphr=full_timehr;
            break;
            case is_parttime:
                emphr=part_timehr;
                break;
                default:
                    emphr=0;
    }
    let empwage=emphr*emp_perhr;
    console.log("the empwage is:"+empwage)
}
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
let check=Math.floor(Math.random() * 10) %3
let emphr=getEmphr(check)
let empwage=emphr*emp_perhr
console.log("get emp hour"+emphr+" "+"emp wage"+empwage)


