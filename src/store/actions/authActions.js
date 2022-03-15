export const userLogin = (details) => {
    return {            
        type: 'USER_LOGIN',
        details: details,        
    }
};

export const userLogout = () => {
    return {            
        type: 'USER_LOGOUT',        
    }
}


export const userRegister = (details) => {
    return {            
        type: 'USER_REGISTER',
        details: details,        
    }
};



