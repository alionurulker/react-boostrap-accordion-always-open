import { Accordion } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const tabs = [
  { id: 1, label: "Tab 1", description: "Content of Tab 1" },
  { id: 2, label: "Tab 2", description: "Content of Tab 2" },
  { id: 3, label: "Tab 3", description: "Content of Tab 3" }
];

export default function App() {
  return (
    <div className="App">
      {tabs.map((tab) => (
        <Accordion key={tab.id} defaultActiveKey={tab.id}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{tab.label}</Accordion.Header>
            <Accordion.Body>{tab.description}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
}
