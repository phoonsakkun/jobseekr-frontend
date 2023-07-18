import React from "react";
import InputForm from "../features/auth/components/InputForm";
import { useState } from "react";

function PostInputForm() {
  const [input, setInput] = useState({});
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1684945905564-dca7eb450fc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
        alt="cover"
      />

      <form className="flex flex-col mt-8 bg-white">
        <InputForm
          label="postion"
          name="postion"
          value={input.position}
          type={"text"}
        />
        <InputForm
          label="jobdescription"
          name="jobdescription"
          value={input.jobdescription}
          type={"text"}
        />
        <InputForm
          label="salary"
          name="salary"
          value={input.salary}
          type={"text"}
        />
        <div className="btn btn-primary">Post</div>
      </form>
    </>
  );
}

export default PostInputForm;
