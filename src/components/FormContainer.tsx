import React, {useState} from "react";

interface FormData{
    firstName: string,
    lastName: string,
    age: number,
}

const FormContainer = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        age: 0,
        });
    const [sentData, setSentData] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Change")
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Resultado del formulario", formData)
        setSentData(true)
    }

    const verifyInputs = (formData.firstName == '') || (formData.lastName == '') || (formData.age <= 0)

    return(
        <div className="reactForm">
            <h1>Formulario React</h1>
            <form onSubmit={handleSubmit}>
                <div className="formDiv">
                    <label> First Name:</label>
                    <input type="text" name="firstName" onChange={handleChange}></input>
                </div>
                <div className="formDiv">
                    <label> Last Name:</label>
                    <input type="text" name="lastName" onChange={handleChange}></input>
                </div>
                <div className="formDiv">
                    <label> Age:</label>
                    <input type="number" name="age" onChange={handleChange}></input>
                </div>
                <div className="formDiv">
                    <button  className="button" disabled={verifyInputs}>Send</button>
                </div>
                <div className="formDiv">
                    { sentData ? "Datos enviados con exito" : null }
                </div>
            </form>
        </div>
    )
}
export default FormContainer
