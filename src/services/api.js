import axios from "axios";

const baseUrl = "http://127.0.0.1:4000"

function postSignUp (infos) {
  const URL = "http://localhost:4000/user"

  const body = {
    fullName: infos.fullName,
    email: infos.email,
    password: infos.password,
    confirmPassword: infos.confirmPassword
  }

  const promise = axios.post(URL, body)
    promise.then(response => {
      const { data } = response
      infos.navigate("/")
      alert(data.message)
    })
    
    .catch(error => {
      alert(error.response.data.message)
    })
}

export default postSignUp