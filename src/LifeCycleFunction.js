import { useEffect, useState } from 'react'

const productsFromAPi = [
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

export default function LifeCycleFunction() {
    const [products, setProducts] = useState([])
    const [carts, setCarts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    function tambahkanKeKeranjang(addProduct) {
        const keranjangSekarang = [...carts]
        keranjangSekarang.push(addProduct)
        setCarts(keranjangSekarang)
    }

    function hapusKeranjang(delProduct) {
        const keranjangSekarang = [...carts]
        keranjangSekarang.splice(delProduct, 1)
        setCarts(keranjangSekarang)
    }

    useEffect(() => {
        setProducts(productsFromAPi)
    }, [])

    useEffect(() => {
        let countTotalPrice = 0

        for (const cart of carts) {
            countTotalPrice = countTotalPrice + cart.price
        }

        setTotalPrice(countTotalPrice)
    }, [carts])

    return <>
        <p>total harga: {totalPrice}</p>

        <h4>Daftar Produk:</h4>
        <ul>
            {products.map((product, productIndex) =>
                <li key={productIndex}>
                    {product.name} | Rp. {product.price} |

                    <button onClick={() => tambahkanKeKeranjang(product)}>
                        + keranjang
                    </button>
                </li>
            )}
        </ul>

        <h4>Daftar Keranjang:</h4>
        <ul>
            {carts.map((cart, keyCart) =>
                <li>
                    {cart.name} | Rp. {cart.price} |

                    <button onClick={() => hapusKeranjang(keyCart)}>
                        - hapus
                    </button>
                </li>
            )}
        </ul>
    </>
}