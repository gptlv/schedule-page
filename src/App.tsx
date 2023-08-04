import jsonData from "./source.json";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

const App = () => {
  const dataArray = Object.entries(jsonData);
  return (
    <Accordion>
      {dataArray.map((item, index) => (
        <AccordionItem key={index}>
          {(open: boolean) => (
            <>
              <AccordionHeader>
                <h3
                  className={`accordion-title ${
                    open ? "accordion-active" : ""
                  }`}
                >
                  {item[0]}
                </h3>
              </AccordionHeader>

              <AccordionBody>
                {Object.entries(item[1]).map((innerItem, innerIndex) => (
                  <AccordionItem key={innerIndex}>
                    {(innerOpen: boolean) => (
                      <>
                        <AccordionHeader>
                          <h3
                            className={`accordion-title ${
                              innerOpen ? "accordion-active" : ""
                            }`}
                          >
                            {innerItem[0]}
                          </h3>
                        </AccordionHeader>

                        <AccordionBody>
                          <div className="accordion-body">
                            {Object.entries(innerItem[1]).map(
                              (groupItem, groupIndex) => {
                                return (
                                  <a
                                    href={groupItem[1]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={groupIndex}
                                  >
                                    {groupItem[0]}
                                  </a>
                                );
                              }
                            )}
                          </div>
                        </AccordionBody>
                      </>
                    )}
                  </AccordionItem>
                ))}
              </AccordionBody>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>

    // <ul>
    //   {dataArray.map((item, index) => {
    //     return (
    //       <>
    //         <li key={index} onClick={handleClick}>
    //           {item[0]}
    //         </li>
    //         {visibility ? <StudyFormList data={item[1]} /> : null}
    //       </>
    //     );
    //   })}
    // </ul>
  );
};

export default App;
