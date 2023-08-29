import React from "react";
import { Button, Form } from "react-bootstrap";

function SendBio() {
  return (
    <div>
      <Form className="bg-primary rounded p-4 text-light">
        <h5>Обратная связь</h5>
        <p style={{ fontSize: "14px" }}>
          Для подробной информации заполните анкету
        </p>

        <Form.Group
          className="mb-3"
          // controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Имя</Form.Label>
          <Form.Control type="text" placeholder="Асанов" />
          <Form.Label>Имя</Form.Label>
          <Form.Control type="text" placeholder="Асанов" />
          <Form.Label>Имя</Form.Label>
          <Form.Control type="text" placeholder="Асанов" />
        </Form.Group>
        <Button variant="warning">Отправить</Button>
      </Form>
    </div>
  );
}

export default SendBio;
