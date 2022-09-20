import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import Header from "./Header";

import Mui from "./Mui";
import ButtonsResult from "./ButtonsResult";
import { EditorState } from "draft-js";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

let renderCount = 0;

const defaultValues = {
  Native: "",
  TextField: "",
  Select: "",
  ReactSelect: { value: "vanilla", label: "Vanilla" },
  Checkbox: false,
  switch: false,
  ReactDatepicker: new Date(),
  DraftJS: EditorState.createEmpty(),
  MUIPicker: new Date("2020-08-01T00:00:00"),
  country: { code: "AF", label: "Afghanistan", phone: "93" }
};

function App() {
  const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });
  const [data, setData] = useState(null);
  renderCount++;

  return (
    <form onSubmit={handleSubmit((data) => setData(data))} className="form">
      <Header renderCount={renderCount} />

      <Mui control={control} />

      <hr />
      <ButtonsResult {...{ data, reset, setValue }} />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
