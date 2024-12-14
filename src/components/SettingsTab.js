import React from "react";
import FormField from "./FormField";

const SettingsTab = ({ formData, updateFormData }) => {
  const fields = [
    { label: "Email", name: "email", type: "email" },
    { label: "Notifications", name: "notifications", type: "radio", options: ["On", "Off"] },
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

export default SettingsTab;
