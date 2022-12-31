import React from "react";
import {GroupContainer, Input, FormInputLabel} from "./formatInput.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <GroupContainer>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </GroupContainer>
  );
};

export default FormInput;
