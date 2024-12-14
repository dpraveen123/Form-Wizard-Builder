import React from "react";
import FormField from "./FormField";

const InterestTab = ({ formData, updateFormData }) => {
  const fields = [
    { label: "Hobbies", name: "hobbies", type: "checkbox", options: ["Reading", "Sports", "Music"] },
  ];

  return (
    <div className="p-4">
      {fields.map((field) => (
        <FormField
          key={field.name}
          field={field}
          value={formData[field.name]}
          onChange={updateFormData}
        />
      ))}
    </div>
  );
};

export default InterestTab;
