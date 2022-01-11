// S => state
// T => Type
// K => Key
// V => Value
// E => Element

// S extends number string - generics


function useState<S extends number | string = string >() {        // essa função vai poder trabalhar com o tipo s
    let state: S;                                                  //  = string (default)

    function getState() {
        return state   
    }

    function setState (newState: S) {
        state = newState
    }

    return {getState, setState}
}

const newState = useState();        //define na hora de chamar. se nao definir o default vai

newState.setState("foo");       // é uma string
console.log(newState.getState())

newState.setState(123);       // quero que dê erro porque ja foi definido que era uma string ---> generics
console.log(newState.getState())

