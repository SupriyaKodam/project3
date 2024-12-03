import {React,useState} from 'react'

const ContactUsForm = () => {
    const [formFields, setFormFields] = useState([
        { name: "firstName", label: "First Name", value: "FirstName" },
        { name: "lastName", label: "Last Name", value: "" },
        { name: "phoneNumber", label: "Phone Number", value: "" },
        { name: "businessEmail", label: "Business Email", value: "" },
        { name: "companyName", label: "Company Name", value: "" },
        { name: "website", label: "Website", value: "" },
        { name: "country", label: "Country", value: "" },
        { name: "currentContacts", label: "Current Number of Contacts", value: "" },
        { name: "reason", label: "Briefly Tell Us the Reason for Contacting Us", value: "" },
      ]);
      // Handle input change
  const handleInputChange = (index, event) => {
    const updatedFields = [...formFields];
    updatedFields[index].value = event.target.value;
    setFormFields(updatedFields);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = formFields.reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {});
    console.log("Form Data:", formData);
    alert("Form Submitted!");
    setFormFields(
      formFields.map((field) => ({ ...field, value: "" }))
    );
  };

  return (
    <div>
      <div className='flex flex-row items-start justify-start'>
           <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 space-y-4">
      {formFields.map((field, index) => (
        <div key={field.name} className="flex flex-col">
          <label htmlFor={field.name} className="font-medium mb-1">
            {field.label}
          </label>
          <input
            id={field.name}
            type={
              field.name === "businessEmail"
                ? "email"
                : field.name === "phoneNumber" || field.name === "currentContacts"
                ? "number"
                : "text"
            }
            className="border border-gray-300 rounded-md p-2"
            value={field.value}
            onChange={(e) => handleInputChange(index, e)}
            required
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-yellow-400 text-black border-2 border-black py-2 px-4 rounded-md"
      >
        Submit
      </button>
    </form>
      </div>
    </div>
  )
}

export default ContactUsForm
