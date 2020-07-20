import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/register/register.css';


function Register() {

    const renderFormInput = (label, inputType, inputRef) => {
        return (
            <div>
                <label>{label}</label>
                <input type={inputType} refs={inputRef} placeholder={inputRef}/>
            </div>
        );
    };

    return (
        <div className="register-page">
            <div className="background-image"></div>
            <div className="image-div">
                <span className="logo"></span>
                <p>Register</p>
            </div>
            <div className="register-forms-div">
                <form>
                    {renderFormInput("Nom", "text", "nom")}
                    {renderFormInput("Prenom", "text", "prenom")}
                    {renderFormInput("label_1", "text", "mm/dd/yy")}
                    {renderFormInput("label_2", "text", "mm/dd/yy")}
                    {renderFormInput("label_3", "text", "mm/dd/yy")}
                    <button>register</button>
                </form>
                <div className="login-link-btn">
                    <p>have account</p>
                    <Link to="/">login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
