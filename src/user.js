class User{
    constructor(){
        this.name = "Аноним";
        this.hello = this.hello.bind(this);
        this.set_name = this.set_name.bind(this);
    }
    hello(){        
        let el = document.getElementById("name");
        el.innerText = `Hello ${this.name}`;
    }
    set_name(name){
        this.name = name;
    }
}

const user = new User();
user.hello()

document.getElementById("save").onclick = function() {    
    let new_name = document.getElementById("input").value;
    user.set_name(new_name)
    user.hello();
};