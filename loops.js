function forLoop(myarr){
  for(let i =0;i < 25; i++){
    if(i===1){
      myarr.push("I am 1 strange loop.")
    }else{
      myarr.push(`I am ${i} strange loops.`)
    }
  }
  return myarr
}

function whileLoop(number){
  var done = 'done'
  while(number>0){
    console.log(--number)
  }
  return done
}
