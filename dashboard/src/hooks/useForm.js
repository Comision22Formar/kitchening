import { useState } from "react";

export const useForm = (initialValues) => {
    const [formValues, setFormValues] = useState(initialValues);

    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name] : target.value
        })
    }

    const reset = () => setFormValues(initialValues)

    return [formValues, handleInputChange, reset]
    
}