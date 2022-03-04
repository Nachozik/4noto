class user {
    constructor(username, age, password) {
        this.username = username;
        this.age = age;
        this.password = password;
    }
    login = (gotUsername, gotPassword) => {
        if(gotUsername===this.username||gotPassword===this.password){
            userLogin.username = this.username;
            userLogin.age = this.age;
        }
    }
}
let userLogin = new user();
function registerNew (){
        let slave = new user();
        let input = document.createElement('input');
        input.setAttribute('type','text');
        wrapper.append(input);

        let usernameButton = document.createElement('button');
        usernameButton.innerHTML = "Назови своё имя, Fucking Slave!";
        wrapper.append(usernameButton);

        let ageButton = document.createElement('button');
        ageButton.innerHTML = "Сколько тебе лет? Достаточно чтобы Fisting Anal?";

        let passwordButton = document.createElement('button');
        passwordButton.innerHTML = "Введи пароль, для своего Deep Dark Fantasy";
        usernameButton.onclick = () => {
            slave.username = `${input.value}`;
            input.value = null;
            usernameButton.remove();
            wrapper.append(ageButton);
            ageButton.onclick = () => {
                slave.age = `${input.value}`;
                input.value = null;
                wrapper.append(passwordButton);
                ageButton.remove();
                passwordButton.onclick = () => {
                    slave.password = `${input.value}`;
                    input.value = null;
                    input.remove();
                    passwordButton.remove();
                    dataBase[dataBase.length] = slave;
                    slave.login(slave.username,slave.password);
                    slave = null;
                    console.log(dataBase);
                    console.log(userLogin);
                }
            }
        }
}
function login() {
    let unlogged = new user();
    unlogged.username = userLogin.username;
    unlogged.password = userLogin.password;

    let usernameInput = document.createElement('input');
    usernameInput.setAttribute('type','text');
    wrapper.append(usernameInput);

    let div = document.createElement('div');
    div.innerHTML = "Введи имя, Fucking Slave!";
    wrapper.append(div);

    let passwordInput = document.createElement('input');
    passwordInput.setAttribute('type','text');
    wrapper.append(passwordInput);

    let div2 = document.createElement('div');
    div2.innerHTML = "Пароль от Deep Dark Fantasy!";
    wrapper.append(div);

    let Button = document.createElement('button');
    Button.innerHTML = "Войти в Dungeon!";
    wrapper.append(Button);

    Button.onclick = () => {
        for (let i = 0; i<dataBase.length; i++){
            dataBase[i].login(usernameInput.value, passwordInput.value);
        }
        if(unlogged.username === userLogin.username&&unlogged.password === userLogin.password){
            console.log("НЕПРАВИЛЬНЫЙ ПАРОЛЬ ИЛИ ИМЯ!!!!")
        } else {
            console.log("Привет, "+userLogin.username)
            usernameInput.remove();
            div.remove();
            passwordInput.remove();
            div2.remove();
            Button.remove();
        }
    }
}
const dataBase = [
    new user("Nachozik", 19, "nazarik123"),
];
const wrapper = document.querySelector('.wrapper');
if(confirm("Клуб для кожевников двумя блоками ниже, ты в теме?")===true){
    login()
} else registerNew();