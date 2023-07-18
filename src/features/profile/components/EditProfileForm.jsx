import React from "react";
import PictureForm from "./PictureForm";
import Avatar from "../../../component/avatar";

function EditProfileForm() {
  return (
    <div>
      <PictureForm title="Profile Image">
        {(src) => (
          <div className="flex justify-center">
            <Avatar src={src} className="h-[10.5rem] w-[10.5rem]" />
          </div>
        )}
      </PictureForm>
    </div>
  );
}

export default EditProfileForm;
