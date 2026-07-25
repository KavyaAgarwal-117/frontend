import Card from "@/Components/Card";
import MyButton from "@/Components/MyButton";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1 style={{ fontSize: "40px", textAlign: "center", fontWeight: "bold" }}>
        Welcome to Home Page
      </h1>

      <hr />
      <br />
      <input type="text" />

      <div className="grid grid-cols-3 gap-4">
        <Card
          title={"my card title"}
          desc={"my card description"}
          btnText={"Submit"}
        />

        <Card
          title={"my card title"}
          desc={"my card description"}
          btnText={"Submit"}
        />

        <Card
          title={"my card title"}
          desc={"my card description"}
          btnText={"Submit"}
        />
      </div>

      <MyButton> Some Click </MyButton>
      <MyButton> Button </MyButton>
      <MyButton> Click</MyButton>
      <MyButton> Kavya</MyButton>
      <MyButton> Mini</MyButton>
      <MyButton>ddddddd</MyButton>

    </div>
  );
};

export default Home;
