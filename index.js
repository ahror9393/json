const openModal = ()=>{
      let modal = document.querySelector('.modal-container');
      let exit = document.querySelector('.exit');
  
      modal.classList.add('active')
      if (modal.classList.containe("active")){
      exit.oncliick = ()=>{
          modal.classList.remove("active")
         }  
      }
  }
  
  const valueInput = () => {
      let value = document.querySelector('#m-nome').value
      let data ={
          name: value
      }
      let url ="http://localhost:3000/data" 
         fetch(url,{
      method:"POST",
      headers:{
         "content-Type": 'application/json',
      },
     body:JSON.stringify(data)
  }).then((data) => {
      
  })
  }
