const titleInput = document.querySelector("#title") 
const amountInput = document.querySelector("#amount") 
const saveBtn = document.querySelector("#saveBtn") 
const expenseList = document.querySelector("#expenseList") 
const totalElement = document.querySelector("#total") 

let expenses = JSON.parse(localStorage.getItem("expenses")) || [] 

let editingId = null 

const saveLocal = () => {

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    ) 

} 

const currentDate = () => {

    return new Date().toLocaleDateString() 

} 

const updateTotal = () => {

    const total = expenses.reduce((sum, expense) => {

        return sum + expense.amount 

    }, 0) 

    totalElement.textContent = total 

} 

const renderExpenses = () => {

    expenseList.innerHTML = "" 

    expenses.forEach((expense) => {

        expenseList.innerHTML += `

        <tr>

            <td>${expense.title}</td>

            <td>₹ ${expense.amount}</td>

            <td>${expense.date}</td>

            <td>

                <button
                class="edit"
                data-id="${expense.id}">
                Edit
                </button>

                <button
                class="delete"
                data-id="${expense.id}">
                Delete
                </button>

            </td>

        </tr>

        ` 

    }) 

    updateTotal() 

} 

const addExpense = () => {

    const title = titleInput.value.trim() 
    const amount = Number(amountInput.value) 

    if (!title || amount <= 0) {

        alert("Enter valid details.") 

        return 

    }

    if (editingId) {

        expenses = expenses.map((expense) => {

            if (expense.id === editingId) {

                return {

                    ...expense,

                    title,

                    amount,

                    date: currentDate()

                } 

            }

            return expense 

        }) 

        editingId = null 

        saveBtn.textContent = "Add Expense" 

    }

    else {

        expenses.unshift({

            id: crypto.randomUUID(),

            title,

            amount,

            date: currentDate()

        }) 

    }

    saveLocal() 

    renderExpenses() 

    titleInput.value = "" 
    amountInput.value = "" 

} 

const deleteExpense = (id) => {

    expenses = expenses.filter((expense) => {

        return expense.id !== id 

    }) 

    saveLocal() 

    renderExpenses() 

} 

const editExpense = (id) => {

    const expense = expenses.find((expense) => {

        return expense.id === id 

    }) 

    titleInput.value = expense.title 
    amountInput.value = expense.amount 

    editingId = id 

    saveBtn.textContent = "Update Expense" 

} 

saveBtn.addEventListener("click", addExpense) 

expenseList.addEventListener("click", (event) => {

    if (event.target.classList.contains("delete")) {

        deleteExpense(event.target.dataset.id) 

    }

    if (event.target.classList.contains("edit")) {

        editExpense(event.target.dataset.id) 

    }

}) 

renderExpenses() 