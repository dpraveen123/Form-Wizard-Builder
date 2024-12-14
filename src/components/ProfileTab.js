import React from "react";
import FormField from "./FormField";

const ProfileTab = ({ formData, updateFormData }) => {
  const fields = [
    { label: "Name", name: "name", type: "text" },
    { label: "Age", name: "age", type: "number" },
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

export default ProfileTab;
