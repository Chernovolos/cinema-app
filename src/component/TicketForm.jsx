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
                        placeholder="name"
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
                        placeholder="surname"
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
                        placeholder="e-mail"
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
                        placeholder="phone number"
                        className="ticket-input"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                    />
                    {errors.phone && touched.phone && <div id="feedback" className="ticket-form-error">{errors.phone}</div>}
                </div>
                <button type="submit" className="my-btn ticket-form-btn" disabled={!isValid || isBtnDisabled}>Buy</button>
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
            errors.firstName = "Please fill in this field";
        }
        if(!values.lastName) {
            errors.lastName = "Please fill in this field";
        }
        if (!values.email) {
            errors.email = "Please fill in this field";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email address";
        }
        if (values.phone && isNaN(values.phone)) {
            errors.phone = "Please enter a valid phone number";
        }
        return errors;
    },

    handleSubmit: (values, {props}) => {
        props.onSubmit(values);
    },

    displayName: "TicketForm",
})(TicketForm);


