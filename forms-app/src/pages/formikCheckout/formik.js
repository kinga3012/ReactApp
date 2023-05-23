import React from "react";
import {Formik, Field, Form, useFormikContext} from "formik";
import {Row, Container} from "react-bootstrap";
import MyInputFormik from "../../components/formsFormik/MyInputFormik";
import MySelectFormik from "../../components/formsFormik/MySelectFormik";
import MyTextAreaFormik from "../../components/formsFormik/MyTextAreaFormik";
import MyCheckboxFormik from "../../components/formsFormik/MyCheckboxFormik";

const FormikForm = ({props}) => {
    const hobbies = [
        {id: "nr.1", name: "Brak"},
        {id: "nr.2", name: "Sport"},
        {id: "nr.3", name: "Książki"},
        {id: "nr.4", name: "Seriale"}
    ];
    return (
        <div>
            <Formik 
            initialValues = {{
                    firstname : "",
                    lastname : "",
                    hobby : "",
                    aboutMe : "",
                    zaznaczajka : false
                }}
            onSubmit = {values => console.log(values)}
            >
            <Container>
            <Form>
            <Row>                
                <h1>Witamy przy kasie!</h1>
                <h2>Podaj dane do wysyłki:</h2>
                <MyInputFormik type="text" name="firstname" className="inputStyle" label="Imię" />
                <MyInputFormik type="text" name="lastname" className="inputStyle" label="Nazwisko" />
            </Row>
            <Row>
                <MySelectFormik name="hobby" className="inputStyle" label="Hobby" options={hobbies} />
            </Row>
            <Row>                
                <MyTextAreaFormik name="aboutMe" className="inputStyle" label="O mnie" />
            </Row>
            <Row>                
                <MyCheckboxFormik name="zaznaczajka" className="inputStyle" label="Zaznaczajka" />
            </Row>
            <Row>
                <button type="submit" className="inputStyle">Wyślij</button>
            </Row>
            </Form>
            </Container>
            </Formik>
        </div>
    );
}
export default FormikForm;