import React from "react";

const FormField = ({ field, value, onChange }) => {
  const { label, name, type, options } = field;

  return (
    <div className="mb-4">
      <label className="block font-medium mb-2">{label}</label>
      {type === "text" || type === "number" || type === "email" ? (
        <input
          type={type}
          name={name}
          value={value || ""}
          onChange={(e) => onChange(name, e.target.value)}
          className="w-full border p-2 rounded"
        />
      ) : type === "radio" ? (
        options.map((option) => (
          <label key={option} className="mr-4">
            <input
              type="radio"
              name={name}
              value={option}
              onChange={(e) => onChange(name, e.target.value)}
              className="mr-2"
            />
            {option}
          </label>
        ))
      ) : type === "checkbox" ? (
        options.map((option) => (
          <label key={option} className="block">
            <input
              type="checkbox"
              name={name}
              value={option}
              onChange={(e) => onChange(name, e.target.checked)}
              className="mr-2"
            />
            {option}
          </label>
        ))
      ) : null}
    </div>
  );
};

export default FormField;
