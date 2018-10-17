
import React from 'react';
//import PhoneDetailComponent from './PhoneDetailComponent';
import { Link } from 'react-router-dom';
import { css } from 'react-emotion';
import { PacmanLoader } from 'react-spinners';


const override = css`
    display: block;
    margin: 0 auto;
    border-color: pink;`;

class PhoneListContainer extends React.Component {

    render() {
        if (this.props.listPhones.length > 1) {

            return (

                <ul className="pokemon__list">

                    {this.props.listPhones
                        .map((item) => {
                            return (
                                <li className="pokemon__item" key={item.id}>
                                    <Link to={`/PhoneDetailComponent/${item.id}`} >
                                        <img src={item.image} alt={item.product}></img>
                                    </Link>

                                </li>
                            );
                        })}
                </ul>
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