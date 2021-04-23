import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const toggleAuth = () => {
    setLoggedIn(!isLoggedIn)
  }

  return (
    <div>
      <button onClick={toggleAuth}>
        {isLoggedIn ? 'Çıkış Yap' : 'Giriş Yap'}
      </button>
      <AuthenticatedMainPage isLoggedIn={isLoggedIn} />
    </div>
  )
}

const withAuthentication = (WrappedComponent) => (props) => {
  if (props.isLoggedIn) {
    return <WrappedComponent {...props} />
  }
  return <p>Lütfen gitiş yapınız</p>
}
const MainPage = () => {
  return <h1>Hoşgeldiniz - Anasayfa</h1>
}
const AuthenticatedMainPage = withAuthentication(MainPage)

ReactDOM.render(<App />, document.getElementById('root'))
/* 
Bu örnekte authentication kontrolünü sağladığımız withAuthentication adlı bir HOC var.
 Yalnızca giriş yapmış kullanıcılara gösterilecek component'leri (sayfaları) bu HOC ile sarmalayarak doğrulama işlemini yapıyoruz.
  Bu örnekte MainPage component'i yalnızca giriş yapmış olan 
  kullanıcılara gösterileceği için bu component'i 
  withAuthentication ile sarmalıyoruz ve 
  AuthenticatedMainPage adlı değişkene atayarak
   ana component'imiz olan App component'inde render ediyoruz. 
   withAutentication sayesinde state'te tutulan 
   isLoggedIn boolean değeri eğer false ise "Lütfen Giriş Yapınız."
    ifadesi, eğer true ise "Hoşgeldiniz - Anasayfa" ifadesini gösterecek şekilde koşullu render işlemini yapıyoruz.
*/
