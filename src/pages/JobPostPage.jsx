import React from "react";
import AdminJobcard from "../features/admin/components/AdminJobcard";

function JobPostPage() {
  return (
    <div className="w-full">
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Create new post here!</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <AdminJobcard />
    </div>
  );
}

export default JobPostPage;
