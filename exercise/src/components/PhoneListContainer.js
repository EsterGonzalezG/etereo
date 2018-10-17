

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
        if (this.props.listPhones.length > 1) {

            return (
                <main>
                    <h1 className="phone__title">Lista de móviles</h1>
                    <ul className="phone__list">

                        {this.props.listPhones
                            .map((item) => {
                                return (

                                    <li className="phone__item" key={item.id}>
                                        <Link to={`/PhoneDetailComponent/${item.id}`} >
                                            <div className="img__item" style={{ backgroundImage: 'url(' + item.image + ')' }}>
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