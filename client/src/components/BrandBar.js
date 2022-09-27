import React,{useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {products} = useContext(Context);

    return (
        <Row className="d-flex">
            {products.brands.map(brand =>
                <Card
                    style={{cursor: "pointer"}}
                    key={brand.id}
                    className="p-3 col"
                    onClick={() => products.setSelectedBrand(brand)}
                    border={brand.id === products.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;