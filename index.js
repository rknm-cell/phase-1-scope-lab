// Write your solution in this file!
var customerName = "bob"
var bestCustomer
const leastFavoriteCustomer = "tim"
function setBestCustomer() {
    return bestCustomer = "not bob";
};
//function upperCaseCustomerName(customerName) {
//    return customerName.toUpperCase();
//}
//        why doesnt this work???
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
};
function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
    return bestCustomer;
}
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "probably bob"
    return leastFavoriteCustomer;
}