import { Form, Formik } from "formik";
import { AdvancedFormSchema } from "./AdvancedFormSchema";
import Checkbox from "../ui/Checkbox";
import Input from "../ui/Input";
import Select from "../ui/Select";
import { initialValues } from "../BasicForm/utils/form";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export default function AdvancedForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AdvancedFormSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values, errors }) => (
        <Form>
          <Input
            label="username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <Select
            label="Job Type"
            name="jobType"
            placeholder="Please select a job"
          >
            <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
          </Select>
          <Checkbox type="checkbox" name="acceptedTC" />
          <button disabled={isSubmitting} type="submit" className="button">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
