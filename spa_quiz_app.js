const appState = {
    current_view : "welcome_view",
    current_correct : 0,
    current_incorrect : 0
    
    
}


document.addEventListener('DOMContentLoaded', () => {

   

   document.querySelector("#app_widget").onclick = (e) =>{
        handle_app_event(e);
   }


  

});

function handle_app_event(e){

    console.log("button pressed");
    if(e.target.id=="q1_btn"){
        update_view("quiz1_view");
        create_quiz_view(1);
    }
    if(e.target.id=="q2_btn"){
        update_view("quiz2_view");
        create_quiz2();
    }
    
}

function handle_answer(e){

    

}

const create_quiz1 = async (quiz_id) =>{
    
    
    const data = await fetch("https://randomuser.me/api/?results=1")
    const model = await data.json()
    const html = render_view(model, '#quiz1_view')
    document.querySelector("#app_widget").innerHTML = html;

}


const render_view = (model, view) => {

    var source = document.querySelector(view).innerHTML;
    var template = Handlebars.compile(source);
    var html = template({...model,...view});

    document.querySelector("#app_widget").innerHTML = html;

    return html;

}

function update_view(current_view) {
    const html = render_view({}, current_view)
    document.querySelector("#app_widget").innerHTML = html;

}



