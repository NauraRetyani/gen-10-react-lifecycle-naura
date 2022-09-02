import React from "react";

const productFromAPi = [
    {
        name: "Baju",
        price: 50000
    },
    {
        name: "Celana",
        price: 70000
    },
    {
        name: "Sepatu",
        price: 80000
    },
    {
        name: "Jaket",
        price: 100000
    }
]

export default class LatihanLifeCycle extends React.Component {
    constructor() {
        super()

        this.state = {
            totalPrice: 0,
            products: [],
            carts: []
        }
    }

    componentDidMount() {
        this.setState({ products: productFromAPi })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.carts.length !== this.state.carts.length) {

            let totalHarga = 0;

            for (const cart of this.state.carts) {
                totalHarga = totalHarga + cart.price
            }

            this.setState({ totalPrice: totalHarga })

        }
    }

    tambahkanKeKeranjang(addProduct) {
        const keranjangSekarang = [...this.state.carts]
        keranjangSekarang.push(addProduct)
        this.setState({ carts: keranjangSekarang })
    }

    hapusKeranjang(delProduct) {
        const keranjangSekarang = [...this.state.carts]
        keranjangSekarang.splice(keranjangSekarang.indexOf(delProduct), 1)
        this.setState({ carts: keranjangSekarang })
    }

    render() {
        return (
            <div>
                <p>Total Harga: {this.state.totalPrice}</p>

                <p>Daftar Produk: </p>

                <ul>
                    {this.state.products.map((product) =>
                        <li>
                            {product.name} |
                            Rp. {product.price} |

                            <button onClick={() => this.tambahkanKeKeranjang(product)}>
                                + Keranjang
                            </button>
                        </li>
                    )}
                </ul>

                <p>Daftar Keranjang:</p>

                <ul>
                    {this.state.carts.map((carts) =>
                        <li>
                            {carts.name} |
                            Rp. {carts.price} |

                            <button onClick={() => this.hapusKeranjang(carts)}>
                                Hapus
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}