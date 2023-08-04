import GroupButton from "./GroupButton";
type Props = {
  data: any;
};

const GroupList = ({ data }: Props) => {
  const dataArray = Object.entries(data);
  return (
    <ul>
      {dataArray.map((item, index) => {
        return (
          <li key={index}>
            <GroupButton data={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default GroupList;
