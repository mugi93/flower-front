// Code utilser dans pour la partie Connexion


import React from "react";
import { Formik } from "formik";

export default function FormFormik({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema} 
      enableReinitialize
    >
      {() => children}
    </Formik>
  );
}
