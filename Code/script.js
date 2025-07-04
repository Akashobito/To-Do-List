const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
      JSON.parse(localStorage.getItem('todoList'));

      renderDisplay();

      function add(){
        const nameInput = document.querySelector('.js-name-input');
        let name = nameInput.value || 'undefined';
        /* if(!name ){
          name = 'undefined';
        } */

        const dateInput = document.querySelector('.js-date-input');
        const date = dateInput.value || 'undefined';
         /* if(!date ){
          name = 'undefined';
        } */

        todoList.push({
          name,
          date
        })
        console.log(todoList);

        nameInput.value = '';

        storeData();

        renderDisplay();
      }

      function renderDisplay(){
        let htmlElement = '';
        for(let i = 0 ; i < todoList.length; i++){
          const arrayValue = todoList[i];
          const name = arrayValue.name;
          const date = arrayValue.date;
          let html = `
            <div>${name}</div>
            <div>${date}</div>
            <button onclick="
              todoList.splice(${i}, 1);
              renderDisplay();
              storeData();

            " class="delete-button">Delete</button> `
          htmlElement += html;
        }
      document.querySelector('.todoList-renderDisplay').innerHTML = htmlElement;
      }  

      function storeData(){
      localStorage.setItem('todoList',JSON.stringify(todoList));

      }
