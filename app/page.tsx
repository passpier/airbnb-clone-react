import Header from "@/components/Header";
import Head from "next/head";
import Image from 'next/image'
import React from "react";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/*Banner*/}
    </div>
  )
}
