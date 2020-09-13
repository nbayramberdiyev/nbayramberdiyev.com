import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage = () => (
    <Layout showTitle={true}>
        <SEO title="404: Bulunamadı" />
        <h1 style={{ textAlign: 'center', fontSize: '5rem', color: '#bbb' }}>
            (·_·)
        </h1>
        <h1 style={{ textAlign: 'center' }}>BULUNAMADI</h1>
        <p style={{ textAlign: 'center' }}>Kayalıklara çarptın... üzdü...</p>
    </Layout>
)

export default NotFoundPage
