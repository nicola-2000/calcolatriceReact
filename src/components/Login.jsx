import { useState } from "react";


function Login () {
    
    const initialFormData = {
        email: '',
        password: '',
    }

    const [formData, setFormData] = useState(initialFormData)

    const [error, setError] = useState('')
    
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
        setError('')
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(email === 'examplereact@gmail.com' && password === 'password'){
            alert('Autenticazione riuscita');
        }
        setError('Credenziali non valide. Riprovare');
        setFormData(initialFormData);
    }


    return(
        <div className="flex flex-row border-2 border-black rounded-md m-2 p-2">
            <form onSubmit={handleSubmit}>
{/*                 <label htmlFor="username">username</label>
                <div className="username-input">
                    <input 
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        placeholder="Type username"
                        onChange={handleUsernameChange}
                    />
                </div> */}

                <label htmlFor="email">email</label>
                <div>
                    <input 
                    type="text" 
                    placeholder="Type email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required />
                </div>

                <label htmlFor="password">password</label>
                <div>
                    <input 
                    type="password" 
                    placeholder="Type password" 
                    id="password" 
                    name="password" 
                    value={formData.password}
                    onChange={handleInputChange}
                    required />
                </div>
                <div className="button-submit border-2 border-zinc-500 p-2 m-2 rounded-sm hover:bg-sky-400 cursor-pointer">
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            {error === 'Credenziali non valide. Riprovare' ? <span className="font-bold text-red-600">{error}</span> : null}
        </div>
    );
}

export default Login;