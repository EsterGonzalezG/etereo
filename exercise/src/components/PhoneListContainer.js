

import { Link } from 'react-router-dom';
import { css } from 'react-emotion';
import { PacmanLoader } from 'react-spinners';
import '../stylesheet/PhoneListContainer.css';
import React from 'react';
const override = css`
    display: block;
    margin: 0 auto;
    border-color: pink;`;

class PhoneListContainer extends React.Component {

    render() {
        if (this.props.listPhones.length) {
            return (
                <main>
                    <h1 className="phone__title">Lista de móviles</h1>
                    <ul className="phone__list">
                        {this.props.listPhones
                            .map((phone) => {
                                return (

                                    <li className="phone__item" key={phone.id}>
                                        <Link to={`/PhoneDetailComponent/${phone.id}`} >
                                            <div className="img__item" style={{ backgroundImage: 'url(' + phone.image + ')' }}>
                                            </div>
                                        </Link>

                                    </li>

                                );
                            })}
                    </ul>
                </main>
            );

        } else {

            return (
                <div className='sweet-loading'>
                    <PacmanLoader
                        className={override}
                        sizeUnit={"px"}
                        size={100}
                        color={'#800080'}
                        loading={this.props.loading}
                    />
                </div>
            );
        }
    }
}

export default PhoneListContainer;