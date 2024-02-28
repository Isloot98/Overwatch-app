"use client";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ className, ...rest }) => {
  const { pending } = useFormStatus();
  return (
    <button className={className} disabled={pending} type="Submit">
      {pending ? "Creating post..." : "Submit"}
    </button>
  );
};

export default SubmitButton;
