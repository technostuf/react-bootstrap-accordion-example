
import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const AccordionComponent = () => {
    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                    Non, amet netus curabitur? Maecenas! Labore veniam lobortis cubilia quasi adipisci convallis, placeat rhoncus dictumst! Mattis montes orci! Illum cubilia, dolorum vero, necessitatibus lobortis rhoncus pretium non distinctio! Impedit eius possimus expedita eu auctor convallis magna aperiam maxime, nostrud fames! Curae congue? Sociis platea nam, tenetur natoque harum ex torquent.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                    Quod turpis montes, primis iste do blandit nullam. Mus perferendis, fames reprehenderit architecto praesentium, cumque aute facilisis massa! Consequuntur duis? Nascetur, aut nisl porta, nibh gravida tempore laboris? Culpa, risus placerat pretium netus voluptatum consectetuer pellentesque, dolor scelerisque rutrum, pharetra numquam ridiculus lacus! Porttitor eu wisi incidunt, nibh, mollitia. Bibendum.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}
export default AccordionComponent;