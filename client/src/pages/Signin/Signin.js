import React, {useState} from "react";
import './Signin.css'
import Title from "./components/title/Title";
import Label from "./components/label/Label";
import Input from "./components/input/Input";

const Signin = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(name, value) {
        
            if(name === 'usuario'){
                setUser(value);
            }else{
                setPassword(value);
            }
    };

    function handleSubmit(){
        let account = {
            user,
            password
        }
        if(account){
            console.log('account: ', account)
        }
    }
        

    return(
        <div className="signin-container">
            <Title text='Soy un titulo' />
            <Label text='Ususario'  />
            <Input 
                attribute={{
                    id: 'usuario',
                    name: 'usuario',
                    type: 'text',
                    placeholder: 'Ingrese su usuario'
                }}

                handleChange={handleChange}
            />
            <Label text='Contraseña' />
            <Input 
                attribute={{
                    id: 'password',
                    name: 'password',
                    type: 'password',
                    placeholder: 'Ingrese su contraseña'
                }}
                handleChange={handleChange}
            />

            <button onClick={handleSubmit}
            >Ingresar</button>
        </div>
        
    );
}

export default Signin;