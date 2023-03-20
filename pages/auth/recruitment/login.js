import Head from "next/head";
import styles from "../../../styles/login.module.scss";
import { env } from "@/next.config";
import axios from "axios";
import *as React from 'react'
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  const router  = useRouter()
  const [email,setEmail]=React.useState("")
  const[password,setPassword]=React.useState("")
  const [error,setError]=React.useState(null)
  const [loading,setLoading]=React.useState(false)

  React.useEffect(()=>{
    let checkIsLogin= localStorage.getItem("profile") && localStorage.getItem("token")
    console.log(checkIsLogin);
    if(checkIsLogin){
      router.replace("/")
    }
  }, [])

  const handleSubbmit= async()=>{
    try {
      setLoading(true)

     const connect = await axios.post(`/api/login`,{
      email,
      password
     })
     setLoading(false)
     setError(null)

     const profile = JSON.stringify(connect?.data?.data)
     const token = connect?.data?.token
     if(connect?.data?.data.recruiter_id){
       localStorage.setItem("profile", profile)
       localStorage.setItem("token",token)
     }else{
      setError("Login Failed, Please Use Recruiter Account")
     }
    } catch (error) {
      setError(error?.response?.data?.message)
    }
  }

  // useEffect(()=>{
  //   axios.get(`${env.NEXT_APP_URL_BACKEND}`)
  //   .then((res)=>console.log(res))
  //   console.log(env.NEXT_APP_URL_BACKEND)
  // },[])

  return (
    <>
      <Head>
        <title>Login | Hire Job</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="container">
          <div className="row align-items-center">
            <div className={`col-6 ${styles.left} ${styles.overlay}`}>
              <div className={styles.overlay}></div>
              <h1>
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </h1>
            </div>
            <div className={`col-5 offset-1 ${styles.right}`}>
              <h2>Halo, Pewpeople</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
              <form>
                <div class="mb-3">
                  <label
                    for="exampleInputEmail1"
                    class={`form-label ${styles.label}`}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    class={`form-control ${styles.but}`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Masukan Email Anda"
                    onChange={(event)=>setEmail(event.target.value)}
                  />
                  <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                  <label
                    for="exampleInputPassword1"
                    class={`form-label ${styles.label}`}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    class={`form-control ${styles.but}`}
                    id="exampleInputPassword1"
                    placeholder="Masukan Password Anda"
                    onChange={(event)=>setPassword(event.target.value)}
                  />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <div className="d-grid">
                  <button type="submit" class={`btn ${styles.butLog}`}
                   onClick={handleSubbmit}
                    disabled={loading}
                  >
                    {loading?"Loading...":"Login"}
                  </button>
                </div>
              </form>
              <Link href={"/auth/recruitment/register"}>
              <div className={styles.account}>
                Anda sudah punya akun? <span>Daftar disini</span>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
