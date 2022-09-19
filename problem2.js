let x=naman;
bag="";
for(i=x.length-1;i>=0;i--){
bag=bag+x[i];
}
if(x==bag){
console.log("Palindrome")
}else{
console.log("not Palindrome")
}