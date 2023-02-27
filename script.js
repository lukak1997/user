const customersImg=document.querySelector('#customer-img')
const customerName=document.querySelector('.customer-name')
const customerText=document.querySelector('#customer-text')
const buttons=document.querySelectorAll('.btn')


let index=0;
let customers=[];

 

class Customer{
    constructor(img,name,text){
        this.img=img
        this.name=name
        this.text=text
    }
}

function creatCustomer(img,name,text) {
    img=`images/${img}.jpg`
    
    let newCustomer= new Customer(img,name,text)
    customers.push(newCustomer)
 
}

creatCustomer(0,'Bubu','So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero')
creatCustomer(1,'Luka','dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So fa')
creatCustomer(2,'Iska',"tracked down a 1914 Latin edition of De Finibus which challenges McClintock's 15th century claims and suggests that the dawn of lorem ipsum was as recent as the 20th century. The 1914 Loeb Classical Library")
creatCustomer(3,'David',"Whether a medieval typesetter chose to garble a well-known (but non-Biblical—that would have been sacrilegious)")
creatCustomer(4,'Beqa',"came bundled with lorem ipsum dummy text for laying out page content, and other word processors like Microsoft Word followed suit")
console.log(customers)

buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
     if(e.target.parentElement.classList.contains('prevBtn')||e.target.classList.contains('prevBtn')){
     
       if(index===0){
        index=customers.length
       }
       index--
       console.log(index)
       customersImg.src=customers[index].img
       customerName.textContent=customers[index].name
       customerText.textContent=customers[index].text
    }else{
        index++
        if(index===customers.length){
         index=0;
        }
        console.log(index)
        customersImg.src=customers[index].img
        customerName.textContent=customers[index].name
        customerText.textContent=customers[index].text
    }



    })
})
