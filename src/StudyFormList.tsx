import GroupList from "./GroupList";

type Props = {
  data: any;
};

const StudyFormList = ({ data }: Props) => {
  const dataArray = Object.entries(data);
  //   console.log(dataArray);

  return (
    <ul>
      {dataArray.map((item, index) => {
        return (
          <li key={index}>
            {item[0]}
            <GroupList data={item[1]} />
          </li>
        );
      })}
    </ul>
  );
};

export default StudyFormList;
