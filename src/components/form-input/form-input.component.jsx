import { FormInputLabel, Group, Input } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} className="form-input" />
      {label && (
        <FormInputLabel
          shrink={otherProps.value.length}
          htmlFor={otherProps.name}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
