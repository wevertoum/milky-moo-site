import React, { useState } from 'react';
import { Link } from 'gatsby'
import '../styles/global.scss'
import 'normalize.css'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Loading from '../components/loading';
import Modal from '../components/modal'

const IndexPage = () => {
  const [show, setShow] = useState(false)

  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <Loading visible />
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <button type="button" onClick={() => setShow(true)}>
            abrir formulario
          </button>
        </div>
        <Modal visible={show} />
      </section>
      <section>

        <></>
      </section>
      <section>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <p>imagem aqui:</p>
          <Image path="copo.jpg" alt="copo bonito com doces" />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
        <Link to="/using-typescript/">Go to Using TypeScript</Link>
      </section>
      <section />
    </Layout>
  )
}

export default IndexPage
