/* eslint-disable react/prefer-stateless-function */
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import "./style.css";

const arrOfInformation = [
  { id: "informationTranslate", label: "Перевод слова" },
  { id: "informationDescription", label: "Предложение с объяснением значения слова" },
  { id: "informationExample", label: "Предложение с примером использования изучаемого слова" },
  { id: "informationTranscription", label: "Транскрипция слова" },
  { id: "informationPicture", label: "Картинка-ассоциация" },
];
const arrOfButtons = [
  { id: "btnShow", label: "Кнопка 'Показать ответ'" },
  { id: "btnDelete", label: "Кнопка 'Удалить слово' (исключить слово из изучения)" },
  { id: "btnComplicated", label: "Кнопка 'Сложные' (поместить слово в группу 'Сложные')" },
];
const arrOfLevelButtons = [
  { id: "btnAgain", label: "Кнопка 'Снова'" },
  { id: "btnHard", label: "Кнопка 'Трудно'" },
  { id: "btnGood", label: "Кнопка 'Хорошо'" },
  { id: "btnEasy", label: "Кнопка 'Легко'" },
];
export default class Settings extends React.Component {
  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Информация, отображаемая на карточках:
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Form>
                {arrOfInformation.map(({ id, label }) => (
                  <div key={`information-${id}`} className="mb-3">
                    <Form.Check
                      type="checkbox"
                      id={id}
                      label={label}
                    />
                  </div>
                ))}
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Кнопки, отображаемые на карточках:
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Form>
                {arrOfButtons.map(({ id, label }) => (
                  <div key={`button-${id}`} className="mb-3">
                    <Form.Check
                      type="checkbox"
                      id={id}
                      label={label}
                    />
                  </div>
                ))}
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Кнопки для определения уровня сложности слова:
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <Form>
                {arrOfLevelButtons.map(({ id, label }) => (
                  <div key={`button-${id}`} className="mb-3">
                    <Form.Check
                      type="checkbox"
                      id={id}
                      label={label}
                    />
                  </div>
                ))}
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Количество новых слов в день:</Form.Label>
            <Form.Control as="select" custom>
              <option>1</option>
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Максимальное количество карточек в день:</Form.Label>
            <Form.Control as="select" custom>
              <option>10</option>
              <option>25</option>
              <option>30</option>
              <option>35</option>
              <option>40</option>
              <option>45</option>
              <option>50</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Автоматическое воспроизведение звука"
          />
        </Form>
      </Accordion>
    );
  }
}