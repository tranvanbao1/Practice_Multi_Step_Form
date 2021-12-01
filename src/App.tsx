import React from "react";
import "./App.css";
import { Formik } from "formik";
import InputField from "./InputField";
import { Button, TextField } from "@material-ui/core";
import * as Yup from "yup";
import MultiStepForm, { FormStep } from "./MultiStepForm";

const validation = Yup.object({
  name: Yup.string().required("Name is required!"),
  email: Yup.string().email("").required("Email is required"),
  
});
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MultiStepForm
          initialValues={{
            name: "",
            email: "",
            street: "",
            country: "",
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={validation}
        >
          <FormStep
            stepName="Person"
            onSubmit={() => console.log("Step1")}
            validationSchema={validation}
          >
            <InputField name="name" label="name" />
            <InputField name="email" label="email" />
          </FormStep>
          <FormStep
            stepName="Address"
            onSubmit={() => console.log("Step2")}
            validationSchema={Yup.object({
              address: Yup.string().required("Street is required"),
              country: Yup.string().required("Country is required"),
            })}
          >
            <InputField name="street" label="Street" />
            <InputField name="country" label="Country" />
          </FormStep>
        </MultiStepForm>
      </header>
    </div>
  );
}

export default App;
