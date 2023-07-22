import React from "react";

// const Text = (props: { content: string }) => {
//   return <p className="text">{props.content}</p>;
// };

const Text = ({ content }: { content: string }) => {
  return <p>{content}</p>;
};

const Message = () => {
  const content1 = "This is parent component";
  const content2 = "Message uses Text Component";

  return (
    <div>
      <Text content={content1}></Text>
      <Text content={content2}></Text>
    </div>
  );
};

export default Message;
