import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {ListGroup} from "react-bootstrap";

const TypeBar = observer(() => {
    const {products} = useContext(Context);
    return (
        <ListGroup>
            {products.types.map(type =>
                <ListGroup.Item
                    style={{cursor: "pointer"}}
                    active={type.id === products.selectedType.id}
                    onClick={() => products.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;