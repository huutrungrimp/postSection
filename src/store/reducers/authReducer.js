import authServices from '../services/authServices';

const initialState = {
    authServices: authServices(),
    details: []
}

const authReducer = (state = initialState, action) => {
    
    const url = 'https://backend4ds.herokuapp.com';

    switch (action.type) {
       
        case 'USER_LOGIN':
            {
                console.log(action.details)
                fetch(`${url}/api/token/`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(action.details)
                    })
                    .then(res => res.json())
                    .then(res => {                
                        console.log(res);
                        localStorage.setItem('token', res.token)
                    })
                    .catch(err => {console.error(err)
                }) 

                fetch(`${url}/accounts/login`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(action.details)
                    })
                    .then(res => res.json())
                    .then(res => {                
                        console.log(res);                        
                        const user = (({ username }) => ({ username}))(res);
                        localStorage.setItem('userDetail', JSON.stringify(user)) 
                        console.log(user)
                    })
                    .catch(err => {console.error(err)
                }) 

                return {}
            }  

        

        case 'USER_REGISTER':         
            {       
                fetch(`${url}/accounts/register`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(action.details)
                    })
                    .then(res => res.json())
                    .then(res => {                
                        console.log(res);
                        localStorage.setItem('token', res.password)
                        const user = (({ username, role }) => ({ username, role}))(res);
                        localStorage.setItem('userDetail', JSON.stringify(user)) 
                    })
                    .catch(err => {console.error(err)
                }) 

                return {}
            }

        // case 'LOAD_NAV': {
        //     return {}
        // }

        
        case 'USER_LOGOUT': {
            localStorage.removeItem('userDetail');
            localStorage.removeItem('token');
            return {}
        }

        default: return {state}
        };    
}

export default authReducer