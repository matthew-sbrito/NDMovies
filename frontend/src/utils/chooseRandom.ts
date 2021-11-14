function chooseRandom(): Function {

    let randomList: any[] = [];

    function chosenRandom(list: any): any {

        const randomChosen = Math.floor(Math.random() * (list.length - 1));
        const chosen = list[randomChosen];       

        const validate = randomList.includes(chosen);       

        return validate ? chosenRandom(list) : chosen;
    }

    return chosenRandom;
}

export { chooseRandom }