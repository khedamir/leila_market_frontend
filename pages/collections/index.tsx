import React, { FC } from "react";
import styles from "./Collections.module.scss";
import { GetServerSideProps } from "next";
import { fetch } from "@/redux/axios";
import { FullCollectionType } from "@/redux/types";
import Link from "next/link";
import BreadCrumbs from "@/components/BreadCrumbs";
import Head from "next/head";

interface CollectionProps {
  collections: FullCollectionType[];
}

const Collections: FC<CollectionProps> = ({ collections }) => {
  return (
    <>
      <Head>
        <title>Коллекции</title>
      </Head>
      <div className={styles.collections}>
        <BreadCrumbs value1={"Коллекции"} />
        <h1>Коллекции</h1>
        <div className={styles.collectionList}>
          {collections.map((collection) => (
            <Link key={collection.id} href={`/collection/${collection.id}`}>
              <div
                style={{
                  backgroundImage: `url("${collection.images[0].image_url}")`,
                }}
                className={styles.collectionItem}
              >
                <h2>{collection.collection_name}</h2>
                <div className={styles.shadow}></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  CollectionProps
> = async () => {
  try {
    const { data } = await fetch.get(`/api/collection/`);

    return {
      props: {
        collections: data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/server-error",
        permanent: false,
      },
    };
  }
};

export default Collections;
