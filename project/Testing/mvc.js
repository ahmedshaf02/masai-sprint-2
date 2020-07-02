
// MODEL
// VIEW
// CONTROLLER

class Model {
    constructor(){
        this.state={
            todo:[
                {
                    id:1,
                    title:"buy grocery",
                    status:false
                },
                {
                    id:1,
                    title:"buy grocery",
                    status:false
                },
                {
                    id:1,
                    title:"buy grocery",
                    status:false
                },
            ]
        }
    }
}

class View{
    constructor(){
        // app
        this.app = document.getElementById("root")
        // header
        this.header = document.createEl("h1")
        this.header.textContent = "MVC todo"
        // input
        this.input = this.createEl("input")
        this.input.id = "input-id"
        this.input.placeholder = "add todo"
        this.input.type = "text"
        // list of element
        this.list = this.createEl("ul","list")
        // button to add
        this.button = this.createEl("button")
        this.button.textContent = "Add Todo"

        // append data
        this.app.append(this.header,this.input,this.button,this.list)
    }
    createEl(tag,className){
        const elem  = document.createElement(tag)
        if(className){
            elem.classList.add(className)
        }
        return elem
    }
}

const model = new Model()
const view = new View()