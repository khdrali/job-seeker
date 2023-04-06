import Head from "next/head";
import Navbar from "@/components/organism/Navbar";
import Footer from "@/components/organism/Footer";
import ListJob from "@/components/moleculs/ListJob";
import styles from "@/styles/Home.module.scss";
import React, { useEffect } from "react";
import axios from "axios";

export default function Home(props) {
  const count = props.jobList.data.count;

  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(Math.ceil(count / 5));
  const [dataPagination, setDataPagination] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");
  const [order, setOrder] = React.useState("ASC");
  const [sort, setSort] = React.useState("id");

  // const sortData = (params) => {
  //   axios
  //     .get(
  //       `${process.env.NEXT_PUBLIC_URL_BACKEND}/v1/user/list?limit=5&page=${page}&order=${order}&sortBy=${sort}`
  //     )
  //     .then((res) => {
  //       setDataPagination(res?.data?.data?.rows);
  //     });
  // };

  React.useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_URL_BACKEND}/v1/user/list?limit=5&page=${page}&order=${order}&sortBy=${sort}`
      )
      .then((res) => {
        setDataPagination(res?.data?.data?.rows);
      });
  }, [order]);
  const getDataByPage = (page) => {
    const jobListData = axios
      .get(
        `${process.env.NEXT_PUBLIC_URL_BACKEND}/v1/user/list?limit=5&page=${page}`
      )
      .then(({ data }) => {
        setDataPagination(data?.data?.rows);
        props.jobList.data.rows = dataPagination;
      });
  };
  const search = async () => {
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_URL_BACKEND}/v1/user/list?keyword=${keyword}`
      )
      .then((res) => {
        setDataPagination(res.data?.data?.rows);
        props.jobList.data.rows = dataPagination;
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Head>
        <title>Home | Hire Job</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          <div className={`input-group mb-3 ${styles.inputHead}`}>
            <input
              type="text"
              className={`form-control ${styles.input}`}
              placeholder="Search For Any Skill"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              onChange={(event) => setKeyword(event.target.value)}
            />
            <select
              onChange={(e) => {
                setOrder(e.target.value);
              }}
            >
              <option value="sort" selected disabled>
                Sort
              </option>
              <option value="DESC">Sort By Newst</option>
              <option value="ASC">Sort By Last</option>
            </select>
            <button
              className={`btn ${styles.search}`}
              type="button"
              id="button-addon1"
              onClick={() => {
                search();
              }}
            >
              Search
            </button>
          </div>
          {/* {rows?.map((item, key) => (
              <React.Fragment key={key}>
                <ListJob
                  item={{
                    image: item?.["user.photo_profile"],
                    name: item?.["user.fullname"],
                    job: item?.job,
                    location: item?.domicile,
                    skills: item?.skills,
                  }}
                />
                <hr />
              </React.Fragment>
            ))} */}
          <ListJob listData={props} />
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li
                className={`page-item ${styles.pagination}`}
                onClick={() => {
                  if (page > 1) {
                    getDataByPage(page - 1);
                    setPage(page - 1);
                  }
                }}
              >
                <a
                  className={`page-link ${styles.paginationText}`}
                  href="#"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">Previous</span>
                </a>
              </li>
              {[...new Array(total)].map((item, key) => {
                let currentPage = ++key;
                return (
                  <li
                    className={`page-item ${styles.pagination} ${
                      page === currentPage ? "active" : ""
                    }`}
                    key={currentPage}
                    onClick={() => {
                      getDataByPage(currentPage);
                      setPage(currentPage);
                    }}
                  >
                    <a
                      className={`page-link ${styles.paginationText}`}
                      href="#"
                    >
                      {currentPage}
                    </a>
                  </li>
                );
              })}
              <li
                className={`page-item ${styles.pagination}`}
                onClick={() => {
                  if (page < total) {
                    getDataByPage(page + 1);
                    setPage(page + 1);
                  }
                }}
              >
                <a
                  className={`page-link ${styles.paginationText}`}
                  href="#"
                  aria-label="Next"
                >
                  <span aria-hidden="true">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <Footer />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const job = await axios.get(
    `${process.env.NEXT_PUBLIC_URL_BACKEND}/v1/user/list?limit=5&page=1`
  );
  const jobData = job.data;
  return {
    props: {
      jobList: jobData,
    },
  };
}
