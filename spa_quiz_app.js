const appState = {
    current_view : "welcome_view",
    current_correct : 0,
    current_incorrect : 0,
    current_question_num: 1
    
    
}


document.addEventListener('DOMContentLoaded', () => {

   fetch_questions();
   

   document.querySelector("#app_widget").onclick = (e) =>{
        handle_app_event(e);
   }


  

});

function handle_app_event(e){

    console.log("button pressed");
    if(e.target.id=="q1_btn"){
        create_quiz1(load_next());
        
    }
    if(e.target.id=="q2_btn"){
        create_quiz2(1);
        
    }
    
}

function handle_answer(e){
    
    
   
    

}

async function fetch_questions(){
    const data = await fetch('https://my-json-server.typicode.com/hpetersen53/quiz-web-app/db')
}

const create_quiz1 = async (quiz_id) =>{
    
    const data = await fetch('https://my-json-server.typicode.com/hpetersen53/quiz-web-app/db')
    const model = await data.json()
    const html = render_view(model, '#quiz1_view')
    document.querySelector("#app_widget").innerHTML = html;

}
const create_quiz2 = async (quiz_id) =>{
    
    const data = await fetch('https://my-json-server.typicode.com/hpetersen53/quiz-web-app/db')
    const model = await data.json()
    const html = render_view(model, '#quiz2_view')
    document.querySelector("#app_widget").innerHTML = html;

}

// function load_next(){
//     var shuffle = Math.floor((Math.random() * 5) + 1)
//     console.log(shuffle)

// }


const render_view = (model, view) => {

    var source = document.querySelector(view).innerHTML;
    var template = Handlebars.compile(source);
    var html = template({...model,...appState});

    document.querySelector("#app_widget").innerHTML = html;

    return html;

}

function update_view(current_view) {
    const html = render_view({}, current_view)
    document.querySelector("#app_widget").innerHTML = html;

}



