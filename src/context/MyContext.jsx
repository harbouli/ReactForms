import React, { createContext,Component } from "react";
import axios from 'axios'
export const MyContext = createContext();


const Axios = axios.create({
    baseURL: 'http://localhost/Api-php/',
});

class MyContextProvider extends Component{
    constructor(){
        super();
        this.isLoggedIn();
    }

    state = {
        showLogin:true,
        isAuth:false,
        theUser:null,
    }
    

    logoutUser = () => {
        localStorage.removeItem('jwt');
        this.setState({
            ...this.state,
            isAuth:false
        })
    }

    isLoggedIn = async () => {
        const Token = localStorage.getItem('jwt');
        if(Token){
            Axios.defaults.headers.common['Authorization'] = 'bearer '+Token;

            const {data} = await Axios.get('user-info.php');

            if(data.success && data.user){
                this.setState({
                    ...this.state,
                    isAuth:true,
                    theUser:data.user
                });
            }

        }
    }

    render(){
        const contextValue = {
            rootState:this.state,
            isLoggedIn:this.isLoggedIn,
            logoutUser:this.logoutUser
        }
        return(
            <MyContext.Provider value={contextValue}>
                {this.props.children}
            </MyContext.Provider>
        )
    }

}

export default MyContextProvider;
