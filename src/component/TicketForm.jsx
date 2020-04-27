import React from "react";
import { withFormik } from 'formik';

const TicketForm = ({handleSubmit, handleChange, values, errors, touched, handleBlur, isValid, isBtnDisabled}) => {

    return (
        <div className="ticket-form-container">
            <form onSubmit={handleSubmit}>
                <div className="ticket-form-control">
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="имя"
                        className="ticket-input"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                    />
                {errors.firstName && touched.firstName && <div id="feedback" className="ticket-form-error">{errors.firstName}</div>}
                </div>
                <div className="ticket-form-control">
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="фамилия"
                        className="ticket-input"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                    />
                    {errors.lastName && touched.lastName && <div id="feedback" className="ticket-form-error">{errors.lastName}</div>}
                </div>
                <div className="ticket-form-control">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="эдектронная почта"
                        className="ticket-input"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && <div id="feedback" className="ticket-form-error">{errors.email}</div>}
                </div>
                <div className="ticket-form-control">
                    <input
                        id="phone"
                        name="phone"
                        type="phone"
                        placeholder="номер телефона"
                        className="ticket-input"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                    />
                    {errors.phone && touched.phone && <div id="feedback" className="ticket-form-error">{errors.phone}</div>}
                </div>
                <button type="submit" className="my-btn ticket-form-btn" disabled={!isValid || isBtnDisabled}>Отправить</button>
            </form>
        </div>
    );
};

export default withFormik({
    mapPropsToValues: (props) => ({
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        email: props.email || "",
        phone: props.phone || ""
    }),

    // Custom sync validation
    validate: values => {
        const errors = {};

        if (!values.firstName) {
            errors.firstName = "Заполните это поле";
        }
        if(!values.lastName) {
            errors.lastName = "Заполните это поле";
        }
        if (!values.email) {
            errors.email = "Заполните это поле";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Неверный адрес электронной почты";
        }
        if (values.phone && isNaN(values.phone)) {
            errors.phone = "Введите корректный номер телефона";
        }
        return errors;
    },

    handleSubmit: (values, {props}) => {
        props.onSubmit(values);
    },

    displayName: "TicketForm",
})(TicketForm);


