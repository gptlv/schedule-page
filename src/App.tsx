import jsonData from "./source.json";
import StudyFormList from "./StudyFormList";

type Props = {};

const App = (props: Props) => {
  const dataArray = Object.entries(jsonData);
  // console.log(dataArray[0][1]);

  return (
    <ul>
      {dataArray.map((item, index) => {
        return (
          <li key={index}>
            {item[0]}
            <StudyFormList data={item[1]} />
          </li>
        );
      })}
    </ul>
  );
};

export default App;
