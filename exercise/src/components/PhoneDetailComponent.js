import React from 'react';


class PhoneDetailComponent extends React.Component {

    render() {


        return (
            <div className="phone__detail">

                {this.props.listPhones
                    .filter((item) => {
                        return item.id === parseInt(this.props.match.params.id);
                    })
                    .map((item) => {
                        return (
                            <div key={item.id}>
                                <h1 className="details__name">Modelo: {item.product}</h1>
                                <div className="details__characteristics">
                                    <p>Descripcion: {item.description}</p>
                                    <p>Precio: {item.price}</p>
                                </div>
                                <ul>
                                    <h3 className="details__colors">Colores disponibles:</h3>
                                    {item.color.map((item) => {
                                        return (
                                            <li key={item.id} className="details__colors__list">{item}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        );


    }
}

export default PhoneDetailComponent;