import React from 'react';
import axios from 'axios';

class Currency extends React.Component {

    // Karena isi datanya object, dan hanya 5 saja yg akan ditampilkan, di inisialisasi masing-masing.
    state = { aud: {}, eur: {}, pounds: {}, yen: {}, usd: {} }

    componentDidMount() {
        const url = "https://blockchain.info/ticker";
        axios.get(url).then(
            (x) => {
                console.log(x.data)
                this.setState({
                    aud: x.data.AUD,
                    eur: x.data.EUR,
                    pounds: x.data.GBP,
                    yen: x.data.JPY,
                    usd: x.data.USD
                })
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )
    }

    // tidak perlu map karena bukan array dan nama seperti "Australian Dollar" diketik sendiri, bukan dari API, jadi hanya butuh data buy dan sell nya saja.

    render() {
        return (
            <React.Fragment>
                <div className="container text-center">
                    <h2>Harga Bitcoin Hari Ini</h2>
                    <table className="table">
                        <thead>
                            <th>Mata Uang</th>
                            <th>Harga Beli Bitcoin</th>
                            <th>Harga Jual Bitcoin</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Australian Dollar</td>
                                <td>{this.state.aud.buy}</td>
                                <td>{this.state.aud.sell}</td>
                            </tr>
                            <tr>
                                <td>Euro Eropa</td>
                                <td>{this.state.eur.buy}</td>
                                <td>{this.state.eur.sell}</td>
                            </tr>
                            <tr>
                                <td>England Poundsterling</td>
                                <td>{this.state.pounds.buy}</td>
                                <td>{this.state.pounds.sell}</td>
                            </tr>
                            <tr>
                                <td>Yen Japan</td>
                                <td>{this.state.yen.buy}</td>
                                <td>{this.state.yen.sell}</td>
                            </tr>
                            <tr>
                                <td>US Dollar</td>
                                <td>{this.state.usd.buy}</td>
                                <td>{this.state.usd.sell}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

export default Currency;