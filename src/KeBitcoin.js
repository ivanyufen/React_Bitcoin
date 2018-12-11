import React from 'react';
import axios from 'axios';

class KeBitcoin extends React.Component {
    state = { rupiah: "", btc: "" }

    onHandleChange = (e) => {
        var val = e.target.value;
        // kita convert rupiah ke usd, baru di convert menjadi bitcoin
        const url = `https://blockchain.info/tobtc?currency=USD&value=${val / 14000}`;
        axios.get(url).then(
            (x) => {
                this.setState({
                    rupiah: val,
                    btc: x.data
                })
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )
    }

    display() {
        if (this.state.rupiah) {
            return (
                <h2>Rp {this.state.rupiah} = BTC {this.state.btc} </h2>
            )
        }
        else {
            return (
                <h2>Silakan input nominal rupiah</h2>
            )
        }

    }

    render() {
        return (
            <React.Fragment>
                <div className="container text-center">
                    <h2>Konversi Rupiah ke Bitcoin</h2>
                    <p>Kurs 1 USD = 14.000 IDR </p>
                    <input type="number" className="form-control" placeholder="Ketik nominal rupiah.." onChange={this.onHandleChange} />
                    {this.display()}
                </div>
            </React.Fragment>
        )
    }
}

export default KeBitcoin;