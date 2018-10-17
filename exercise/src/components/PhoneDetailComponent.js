
import '../stylesheet/PhoneDetailComponent.css';
import React from 'react';
class PhoneDetailComponent extends React.Component {

    render() {


        return (
            <div className="detail__component">

                {this.props.listPhones
                    .filter((item) => {
                        return item.id === parseInt(this.props.match.params.id);
                    })
                    .map((item) => {
                        return (
                            <div className="phone__detail" key={item.id}>
                                <h1 className="details__name">Modelo: {item.product}</h1>
                                <div className="details__characteristics">
                                <div className="img__item" style={{ backgroundImage: 'url(' + item.image + ')' }}></div>
                                    <div className="details__container">

                                    <p className="details__description">Descripcion: {item.description}</p>
                                    <p className="details__price" > Precio: {item.price}</p>
                                    </div>
                                </div>
                                <ul className="details__colors">
                                    <h3 className="details__colors__title">Colores disponibles:</h3>
                                    {item.color.map((item) => {
                                        return (
                                            <li key={item.id} style={{color:item}} className="details__colors__list">{item}</li>
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