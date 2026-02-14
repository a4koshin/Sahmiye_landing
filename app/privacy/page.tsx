import React from "react";
import { privacy } from "@/lib/pricavyData";
const PrivacyPage = () => {
  return (
    <>
      {/* header */}
      <div className="bg-blue-600 text-white text-center h-32">
        <h1 className="text-3xl font-bold pt-4">PrivacyPolicy</h1>
        <p>
          This Privacy Policy explains how we collect, use, and protect your
          personal information when you use the Platform.
        </p>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* content */}
        {privacy.map((pri) => (
          <div key={pri.id}>
            <h2>{pri.title}</h2>
            <p>{pri.description}</p>
          </div>
        ))}

        {/* footer of the page */}
        <div>
          <p>
            For privacy-related questions, contact{" "}
            <span>support@sahmiye.com</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
