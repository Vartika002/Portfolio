import React from "react";

export default function About() {
  return (
    <>
      <div
        name="about"
        className="w-full h-screen text-white bg-gradient-to-b from-gray-900 to to-black"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-400">
              About
            </p>
          </div>
          <p className="text-xl py-6">
            I am a React developer with one year of hands-on experience in
            creating dynamic and responsive web applications. My journey began
            with a strong foundation in JavaScript and React, where I quickly
            mastered the principles of component-based development and state
            management. Over the past year, I've had the privilege of working on
            a Payroll Management System project.
          </p>
          <br />
          <p className="text-xl">
            To enhance the platform's functionality, I integrated various APIs
            seamlessly, utilizing the Axios library for efficient handling of
            HTTP requests. Additionally, I implemented Redux-Saga middleware to
            manage asynchronous actions and side effects, ensuring a smooth user
            experience. I integrated JWT token-based authentication for secure
            user access and developed user-friendly login pages. Our development
            workflow was streamlined using Azure DevOps for version control,
            project management, testing, and application lifecycle management.
            Furthermore, I optimized the platform by enabling bulk data updates
            through Excel templates, and I played a crucial role in a successful
            migration process. Lastly, I addressed and resolved any bugs or
            issues associated with existing platform functionalities for
            ensuring smooth and efficient operations.
          </p>
        </div>
      </div>
    </>
  );
}
