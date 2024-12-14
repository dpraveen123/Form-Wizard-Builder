const formConfig = {
  Profile: [
    { label: "Name", name: "name", type: "text", required: true },
    { label: "Age", name: "age", type: "number", required: true },
  ],
  Interest: [
    { label: "Hobbies", name: "hobbies", type: "checkbox", options: ["Reading", "Sports"] },
  ],
  Settings: [
    { label: "Email", name: "email", type: "email", required: true },
    { label: "Notifications", name: "notifications", type: "radio", options: ["On", "Off"] },
  ],
};
