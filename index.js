//------------------------------------- dom assignments

const balancEl=document.querySelector(".balancEl");
const inputMoney=document.querySelector(".input-money");
const btnArtir=document.querySelector("#btn-artir");
const btnXercle=document.querySelector("#btn-xercle");
const btnGoster=document.querySelector("#btn-goster");
const tableList=document.querySelector(".list");


// ------------------------------------ create kapitalBank

let balance=0;
let history=[];
let limit=1000;

btnArtir.addEventListener('click',function(){
   const money=parseInt(inputMoney.value);
    if(+inputMoney.value && +inputMoney.value>0){
        increases(money);
        showTable();
         
    }
    else{
        console.log("Please enter a valid positive number.");
    }
    
});
btnXercle.addEventListener('click',function(){
   const money =parseInt(inputMoney.value);
    if(+inputMoney.value && +inputMoney.value>0 && +inputMoney.value<balance){
        expense(money);
        showTable();
    }
    else{
        console.log("Please enter a valid positive number.");
    }

});
btnGoster.addEventListener('click', function(){
    balancEl.textContent = balance; 
    showTable();
});

function increases(money){
   balance+=money;
   const operation = {
    type: 'Cash',
    amount: `+ ${money}`,
    time: new Date().toLocaleString()
};
  history.push(operation);
  inputMoney.value="";
};

function expense(money){
    balance-=money;
    const operation = {
        type: 'Cash',
        amount: `+ ${money}`,
        time: new Date().toLocaleString()
    };
      history.push(operation);
      inputMoney.value="";
};

function showTable(){
    tableList.innerHTML="";
    history.forEach(function(operation, index) {
        tableList.innerHTML += `<tr>
            <th scope="row">${index + 1}</th>
            <td class="type">${operation.type}</td>
            <td class="amount">${operation.amount}</td>
            <td class="time">${operation.time}</td>
        </tr>`;
    });
}

