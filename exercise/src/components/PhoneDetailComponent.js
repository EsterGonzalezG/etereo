
import '../stylesheet/PhoneDetailComponent.css';
import React from 'react';
class PhoneDetailComponent extends React.Component {

    render() {
        const phone = this.props.listPhones
            .find(phone => phone.id === parseInt(this.props.match.params.id)) || {}

        return (

            <div className="phone__detail">
                <div className="img__phone" style={{ backgroundImage: 'url(' + phone.image + ')' }}></div>
                <div className="details__container">
                    <h1 className="details__name">{phone.product}</h1>
                    <div className="details__characteristics">
                        <div className="details__container">

                            <p className="details__description">{phone.description}</p>
                            <p className="details__price" > Price: {phone.price}</p>
                        </div>
                    </div>
                    <h3 className="details__colors__title">Colors:</h3>
                    <ul className="details__colors">
                      
                        {phone.color && phone.color.map(color => {
                            return (
                                <li key={color} style={{ color: color }} className="details__colors__list">{color}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );


    }
}

export default PhoneDetailComponent;