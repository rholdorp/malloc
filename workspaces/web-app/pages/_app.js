import 'babel-polyfill'
import React from 'react'
import Head from 'next/head'
import { Global } from '@emotion/core'
import App, { Container } from 'next/app'
import 'semantic-ui-css/semantic.min.css'

import { startFirebase } from '../services/firebase'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    pageProps = { ...pageProps, firebasePwd: process.env.FIREBASE_PWD }

    return { pageProps }
  }

  async componentDidMount () {
    await startFirebase(this.props.pageProps.firebasePwd)
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>Hush Hush</title>
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
          <link href='https://fonts.googleapis.com/css?family=Roboto+Mono' rel='stylesheet' />
          <script src='https://www.gstatic.com/firebasejs/5.8.2/firebase-app.js' />
          <script src='https://www.gstatic.com/firebasejs/5.8.2/firebase-auth.js' />
          <script src='https://www.gstatic.com/firebasejs/5.8.2/firebase-firestore.js' />
        </Head>
        <Global styles={{ 'html,body': {
          backgroundColor: 'black',
          margin: 0,
          padding: 0
        } }} />
        <Component {...pageProps} />
      </Container>
    )
  }
}
