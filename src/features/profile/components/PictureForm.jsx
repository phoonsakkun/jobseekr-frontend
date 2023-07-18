import React from "react";

function PictureForm({ title }) {
  return (
    <div>
      <input type="file" />
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold">{title}</h5>
        <button>Save</button>
        <button>Cancel</button>
        <button>Edit</button>
      </div>
    </div>
  );
}

export default PictureForm;
