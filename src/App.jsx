import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    const getProducts = async () => {
      try {
        setLoading(true)
        setError(false)

        const response = await axios.get(
          'http://localhost:3000/api/products?search=' + search,
          {
            signal: controller.signal
          }
        )

        console.log(response.data)

        setProducts(response.data)
        setLoading(false)

      } catch (error) {

        if (axios.isCancel(error)) {
          console.log('Request canceled')
          return
        }

        console.log(error)
        setError(true)
        setLoading(false)
      }
    }

    getProducts()

    return () => {
      controller.abort()
    }

  }, [search])

  return (
    <>
      <h1>API Handling in React</h1>

      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <h2>Loading...</h2>}

      {error && <h2>Something went wrong</h2>}

      {!loading && !error && (
        <h2>
          Number of Products are: {products.length}
        </h2>
      )}

      {!loading && !error && products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>

          <img
            src={product.image}
            alt={product.name}
            width="200"
          />
        </div>
      ))}
    </>
  )
}

export default App