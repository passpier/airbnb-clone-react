import Banner from "@/components/Banner";
import Header from "@/components/Header";
import SmallCard from "@/components/SmallCard";
import Head from "next/head";
import React from "react";

export default async function Home() {
  let exploreData;
  try {
    exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then((res) =>
      res.json(),
    );
  } catch (e) {
    console.log("err", e);
  }
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/*pull some data from server*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item: City) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section></section>
      </main>
    </div>
  );
}
