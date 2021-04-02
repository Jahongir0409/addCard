let list =  document.querySelector('ul')
let input1 = document.querySelector('#input1')
let input2 = document.querySelector('#input2')
let input3 = document.querySelector('#input3')
let button1 = document.querySelector('#button1')

let database = [
	{ rasm: "https://images-na.ssl-images-amazon.com/images/I/71TJGry2q6L._AC_SL1500_.jpg", nomi: "Uzbekistan", tekst:"The Republic of Uzbekistan is located in Central Asia. The capital of Uzb is Tashkent city. " },
]
function addCard (data) {
	list.innerHTML = null
	for  (element of data) {
		let li = document.createElement('li')
		let img = document.createElement('img')
		let h2 = document.createElement('h2')
		let text = document.createElement('p')
		let buttonR = document.createElement('butotn')

		li.classList.add('item')
		img.classList.add('img')
		h2.classList.add('heading')
		text.classList.add('text')
		buttonR.classList.add('button-remove')

		h2.textContent = element.nomi
		text.textContent = element.tekst
		img.setAttribute('src',element.rasm)
		buttonR.textContent = "X"

		li.appendChild(img)
		li.appendChild(h2)
		li.appendChild(text)
		li.appendChild(buttonR)
		list.appendChild(li)

		buttonR.addEventListener('click',() => {
			li.remove()
		})
	}
}
   addCard(database)

button1.addEventListener('click', () =>{
	if ( input1.value != '' && input2.vlaue != '' && input3.value != ''){
		let rasm = input2.value
		let nomi = input1.value
		let tekst = input3.value
		let newData = {rasm, nomi, tekst}
		database.push(newData)
		addCard(database)

		input1.value = null
        input2.value = null
        input3.value = null
	}
})