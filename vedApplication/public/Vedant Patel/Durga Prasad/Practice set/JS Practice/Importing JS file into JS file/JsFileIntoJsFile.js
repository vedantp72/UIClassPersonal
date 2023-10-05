import {getEmpTotalTax} from './lib/JsImport.js'
var empData= {};
var readEmpData = () => {
    empData.Name = document.querySelector("#empName").value;
    empData.Bsalary = document.querySelector("#Bsalary").value;
    empData.Bsalary = parseInt(empData.Bsalary);
    empData.gender = document.querySelector("input[name=gender]:checked").value;
    empData.TotalSalary = getTotalSalary(empData.Bsalary);
    getTotalTax(empData.Bsalary , empData.gender);
};
var getTotalSalary = (Bsalary) => {
    var PF = 12*Bsalary/100;
    var HRA = 14*Bsalary/100;
    var TotalSalary = Bsalary + HRA + PF;
    return TotalSalary;
};
var getTotalTax = (TotalSalary, gender) => {
    var totalTax = getEmpTotalTax(gender, TotalSalary);
    document.querySelector("#taxblock").innerHTML = totalTax;
}

document.querySelector("#payslipBtn").addEventListener("click", () => {
    readEmpData();

    console.log(":count value is " + abc.count)

    console.log(govTaxRules)
    
})