import React from "react";

type Props = {
  data: any;
};

const GroupButton = ({ data }: Props) => {
  return (
    <a href={data[1]} target="_blank" rel="noopener noreferrer">
      {data[0]}
    </a>
  );
};

export default GroupButton;
