// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default function handler(req, res) {
  try {
    const { email, password } = req.body;
    axios.post(`${process.env.NEXT_PUBLIC_URL_BACKEND}/v1/auth/login`, {
      email,
      password,
    });
    console
      .log(process.env.NEXT_PUBLIC_URL_BACKEND)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(400).json(error?.response?.data);
      });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
}
