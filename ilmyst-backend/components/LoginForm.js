import { useState } from "react";
import styles from '../styles/components/LoginForm.module.css'
import { useCookies } from 'react-cookie';


export default function LoginForm() {
    
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [cookies, setCookie] = useCookies(['name']);
    
    const changeEmailHandler = (e) => {
      setEmail(e.target.value);
      setCookie('token', "asdasd", { path: '/' });

    
    };
    
    const changePasswordHandler = (e) => {
        setpassword(e.target.value);
    };

    return(
    <div className={styles.loginForm}>
        <h2>Hello</h2>

        <form>
        <div className={"forn-group"}>
            <input
            type={'text'}
            value={email}
            name={'email'}
            placeholder={'anas@mail.com'}
            onChange={changeEmailHandler}
            />
            
            </div>

            <div className={"forn-group"}>

            <input
            type={'password'}
            value={password}
            name={'password'}
            placeholder={'*****'}
            onChange={changePasswordHandler}
            />
            </div>
        <div>
            <button>Login Now</button>
        </div>
        </form>
        
        </div>
        
    );
    
}