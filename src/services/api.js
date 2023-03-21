import axios from "axios";

const baseUrl = "http://127.0.0.1:4000"

function postSignUp(infos) {
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

function postSignIn(infos) {
  const URL = "http://localhost:4000/user/login"

  const body = {
    email: infos.email,
    password: infos.password
  }

  const promise = axios.post(URL, body)
  promise.then(response => {
    const { data } = response

    const userData = { email: data.email, fullName: data.fullName, id: data.id }

    const token = JSON.stringify(data.token)
    const userId = JSON.stringify(data.id)
    const userName = JSON.stringify(data.fullName)
    localStorage.setItem('token', token)
    localStorage.setItem('userId', userId)
    localStorage.setItem('userName', userName)

    infos.setToken(data.token)
    infos.setUserInfos(userData)

    infos.navigate("/services/home")
  })

    .catch(error => {
      alert(error.response.data.message)
    })

}

export { postSignUp, postSignIn }