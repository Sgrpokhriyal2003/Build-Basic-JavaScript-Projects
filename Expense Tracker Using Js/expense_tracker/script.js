const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");

expenseForm.addEventListener('submit', function(event){
       event.preventDefault();
       const description = document.getElementById('desc').value;
       const category = document.getElementById("category").value;
       const amount = document.getElementById("amount").value;

       if(document && category && !isNaN(amount)){
            const newRow = document.createElement('tr');
            newRow.innerHTML = `<td>${description}</td> <td>${category}</td> <td>${amount}</td>`;
            expenseList.appendChild(newRow);

            document.getElementById('desc').value = '';
            document.getElementById('category').value = '';
            document.getElementById('amount').value = '';
       }else{
            alert("Please Fill Out All Field With Valid Data ")
       }
       
})