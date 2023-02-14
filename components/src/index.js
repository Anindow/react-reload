import React from "react";
import ReactDOM from "react-dom/client";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName() + " " + faker.name.lastName()}
          timeAgo="Today at 4:23PM"
          content="Nice Blog Post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName() + " " + faker.name.lastName()}
          timeAgo="Today at 4:23PM"
          content={"this is so " + faker.word.adjective()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="Today at 4:23PM"
          content={"What a " + faker.word.adjective() + " post"}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName() + " " + faker.name.lastName()}
          timeAgo="Yesterday at 4:23AM"
          avatar={faker.image.avatar()}
          content={"so " + faker.word.adjective() + ". Keep it "}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
