import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, FormControlLabel } from "@material-ui/core";

const items = [
  {
    id: 0,
    name: "Create Repository for localization"
  },
  {
    id: 1,
    name: "Site-Structure creation"
  },
  {
    id: 2,
    name: "RBAC entries on ACLs"
  },
  {
    id: 3,
    name: "Compliance"
  },
  {
    id: 4,
    name: "PD projects creation"
  }
];

export default function MuiMultiSelect() {
  const defaultIds = [1, 3];

  const { control, getValues } = useForm({
    defaultValues: { item_ids: defaultIds }
  });

  const handleCheck = (checkedId) => {
    const { item_ids: ids } = getValues();
    const newIds = ids?.includes(checkedId)
      ? ids?.filter((id) => id !== checkedId)
      : [...(ids ?? []), checkedId];
    return newIds;
  };

  return (
    <Controller
      name="item_ids"
      render={(props) =>
        items.map((item) => (
          <FormControlLabel
            control={
              <Checkbox
                onChange={() => props.onChange(handleCheck(item.id))}
                defaultChecked={defaultIds.includes(item.id)}
              />
            }
            key={item.id}
            label={item.name}
          />
        ))
      }
      control={control}
    />
  );
}
