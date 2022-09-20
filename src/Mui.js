import * as React from "react";
import { Controller } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import { TextField, ThemeProvider, createMuiTheme } from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import MuiMultiSelect from "./MuiMultiSelect";
import MuiAutoComplete from "./MuiAutoComplete";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

export default ({ control }) => (
  <ThemeProvider theme={theme}>
    <div className="container">
      <section>
        <label>Tenant onboarding date</label>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Controller
            name="MUIPicker"
            control={control}
            render={({ field: { ref, ...rest } }) => (
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                format="MM/dd/yyyy"
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
                {...rest}
              />
            )}
          />
        </MuiPickersUtilsProvider>
      </section>

      <section>
        <label>Name of tenant</label>
        <Controller
          render={({ field }) => <TextField {...field} />}
          name="Enter name of tenant"
          control={control}
        />
      </section>

      <section>
        <label>Select features to automatically onboard to</label>
        <MuiMultiSelect />
      </section>

      <section>
        <label>MUI autocomplete</label>
        <MuiAutoComplete control={control} />
      </section>
    </div>
  </ThemeProvider>
);
