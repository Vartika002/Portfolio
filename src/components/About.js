import React from "react";

export default function About() {
  return (
    <>
      <div
        name="about"
        className="w-full h-screen text-white bg-gradient-to-b from-gray-600 to to-black"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-400">
              About
            </p>
          </div>
          <p className="text-xl py-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            cupiditate, sequi nemo adipisci doloremque nisi ex beatae quidem a
            sunt autem alias laudantium, perferendis molestiae inventore
            deserunt. Provident a nesciunt optio quae ipsam animi doloremque
            eius at sit aut, possimus vel aperiam suscipit alias recusandae
            dolores iusto labore temporibus minus?
          </p>
          <br />
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            sapiente voluptatem nobis temporibus? Labore dignissimos delectus
            tempore voluptate assumenda nihil magni sit aliquam sint! Ut ex
            omnis reiciendis necessitatibus beatae rem, dignissimos quaerat,
            pariatur quidem, totam consequuntur tempora? Voluptate labore fugiat
            provident corporis eaque exercitationem ratione, dignissimos rem
            ipsa illum!
          </p>
        </div>
      </div>
    </>
  );
}
