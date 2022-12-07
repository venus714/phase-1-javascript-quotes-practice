document.addEventListener("DOMContentLoaded",() =>

    function renderData(){

let li =document.createElement('li')
li.className='quote-card'
li.innerHTML=
`<li class='quote-card'>
<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous</footer>
  <br>
  <button class='btn-success'>Likes: <span>0</span></button>
  <button class='btn-danger'>Delete</button>
</blockquote>
</li>`



const likeButton = document.createElement('button');
const deleteButton = document.createElement('button');
likeButton.classList.add('btn-success');
deleteButton.classList.add('btn-danger');

likeButton.innerHTML = `Likes: <span>0</span>`
deleteButton.innerHTML = `Delete`;

likeButton.addEventListener("click", likeElement);
deleteButton.addEventListener("click", deleteElement);



document.querySelector().appendChild(li)

    

function aadd() {
fetch('http://localhost:3000/quotes?_embed=likes'
    .then(res=>res.json())
    .then(data=> {
        data.forEach(element=>addquote(element))}))
        

    }
    
    function addDeleteEventListener(){
        let deleteButtonList = document.getElementsByClassName("btn-danger");
        for(let i =0; i < deleteButtonList.length; i++) {
            deleteButtonList[i].addEventListener("click", deleteElement);
        }
    }
    addDeleteEventListener()

    function  postReq() {
    
        fetch ('http://localhost:3000/quotes?_embed=likes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>console.log(data  ))
    
    }})