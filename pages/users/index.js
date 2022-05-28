import Head from "next/head";
import styles from "/styles/Home.module.css";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
const Table = dynamic(() => import("/design-systems/Molecules/Table"), {
  ssr: false,
});

const Loading = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignContent: "center",
  padding: "0.5rem",
  fontSize: "1.2rem",
  fontWeight: 800,
});

export default function Home({ data: users }) {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: "Name",
      key: "name",
    },
    {
      title: "status",
      key: "status",
    },
    {
      title: "gender",
      key: "gender",
    },
    {
      title: "location",
      key: "location",
    },
    {
      title: "origin",
      key: "origin",
    },
  ];

  const getAllUsers = async () => {
    try {
      setLoading(true);
      const client = new ApolloClient({
        uri: "https://rickandmortyapi.com/graphql",
        cache: new InMemoryCache(),
      });
      const { data } = await client.query({
        query: gql`
          query {
            characters(page: ${pageNumber}) {
              info {
                count
                pages
                prev
                next
              }
              results {
                name
                status
                gender
                location {
                  name
                }
                origin {
                  name
                }
              }
            }
          }
        `,
      });

      setData(data.characters.results);
      setPagination(data.characters.info);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error, "ERROR");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, [pageNumber]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Curostride Users - Savan Patel</title>
        <meta name="description" content="Assignment created by savan patel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Users</h1>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <Table
          columns={columns}
          data={data}
          pagination={pagination}
          setPageNumber={setPageNumber}
        />
      )}
    </div>
  );
}
