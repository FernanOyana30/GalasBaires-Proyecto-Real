import { createContext, useState} from "react";

const formContext = createContext({ form: []})
const Provider = formContext.Provider

function FormContextProvider({children}){
    const [form, setForm] = useState([])

    function addItem(producto){
        const newForm = JSON.parse(JSON.stringify(form));

        newForm.push({...producto});
        setForm(newForm);
    }

    return (
        <Provider value={{ form, addItem}}>
            {children}
        </Provider>
        );
} 

export {FormContextProvider}
export default formContext
