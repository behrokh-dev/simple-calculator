const inp=[document.getElementById('num1'),document.getElementById('num2')];
const opDisplay=document.getElementById('opDisplay');
const resultBox=document.getElementById('resultBox');
const opBtns={
  '+':document.getElementById('btn-plus'),
  '-':document.getElementById('btn-minus'),
  '*':document.getElementById('btn-mul'),
  '/':document.getElementById('btn-div')
};
const opSymbols={'+':'+','-':'−','*':'×','/':'÷'};

function myCalc(sign){
  window.sign=sign;
  Object.values(opBtns).forEach(b=>b.classList.remove('selected'));
  opBtns[sign].classList.add('selected');
  opDisplay.textContent=opSymbols[sign];
  opDisplay.classList.add('active');
  console.log(sign);
}

function operate(){
  let flag=0;
  inp[0].classList.remove('error');
  inp[1].classList.remove('error');
  let num1=+inp[0].value;
  let num2=+inp[1].value;
  if(inp[0].value===''){inp[0].classList.add('error');flag++;}
  if(inp[1].value===''&&num2==0){inp[1].classList.add('error');flag++;}
  if(flag===0){
    let result;
    if(sign==='+')result=num1+num2;
    else if(sign==='-')result=num1-num2;
    else if(sign==='*')result=num1*num2;
    else result=num1/num2;
    const display=Number.isInteger(result)?result:parseFloat(result.toFixed(8));
    resultBox.innerHTML='<h1>'+display+'</h1>';
  }
}