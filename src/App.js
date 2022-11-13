import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Contact from "./componenets/Contact";
import FormInput from "./componenets/FormInput";
import { addData, EditUser } from "./utils/functions";
import ToastifySuccess from "./utils/toastfy";

function App() {
  const initalValues = {
    userName: "",
    phone: "",
    gender: "",
  };

  const [values, setValues] = useState(initalValues);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.id) {
      EditUser(values);

      ToastifySuccess("Veri değiştirildi");
    } else {
      addData(values);

      ToastifySuccess("Veri eklendi");
    }
    setValues(initalValues);
  };

  const UptadeEditUser = (id, userName, phone, gender) => {
    setValues({ id, userName, phone, gender });
  };
  return (
    <div className="App w-100 d-flex justify-content-evenly align-items-center ">
      <FormInput
        values={values}
        setValues={setValues}
        handleSubmit={handleSubmit}
      />
      <Contact UptadeEditUser={UptadeEditUser} />

      <ToastContainer />
    </div>
  );
}

export default App;
