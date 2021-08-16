const totalNumber=function total()
{
    const bangla= document.getElementById('bangla').value
    const math= document.getElementById('math').value
    const physics= document.getElementById('phy').value
    const chemestry= document.getElementById('chem').value
    const higherMath= document.getElementById('highermath').value
    let total= parseFloat(bangla)+parseFloat(math)+parseFloat(physics)+parseFloat(chemestry)+parseFloat(higherMath)
   
     let perc= (total/500)*100;
     

  let grade=''
  if(perc>=80 &&  perc<=100)
{
    grade= 'A'

}
else if(perc>=60 &&  perc<=79)
{
    grade='B'

}
 
else if(perc>40 &&  perc<=59)
{
    grade='C'

}
 
else if(perc<=40)
{
    grade='Result Is too low ,Please Improve'

}

console.log(grade)

const data= document.getElementById('data')
data.innerHTML= 'Your Total Is :' + total + '.Your percentage is : ' + perc + '%' +'  and your Grade is :' +grade

return total;
 

}




const button= document.getElementById('btn')
button.addEventListener('click',totalNumber)