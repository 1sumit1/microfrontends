import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Mount function to startup the app
const mount=(el)=>{
    ReactDOM.render(<App/>,el);
};



//if we are in development and in isolation call mount immediately
if(process.env.NODE_ENV==='development'){
    const devRoot=document.querySelector('#marketing_dev');

    if(devRoot){
        mount(devRoot);
    }
}


//we are running through container and we export the mount function
export {mount};