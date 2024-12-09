import styles from './login.module.css'
import appartmentImg from '../../assets/appartment.jpg'
import googleSVG from '../../assets/google.svg'
export default function(){
    return(
        <section className={styles.loginSec}>
            <form className={styles.loginForm}>
                <div className={styles.formInputFields}>
                    <h2 className={styles.loginH3}>Login<br/>
                        <span>to personalize your view and listing</span></h2>
                    <div className={styles.googleLogin}>
                        <img src={googleSVG} alt={'google'}/>
                        login with Google
                    </div>
                    <div className={styles.lineSeparator}></div>
                    <label>
                        Email
                        <input type={"email"} placeholder={"eg. example@gmail.com"}/>
                    </label>
                    <label>
                        Password
                        <input type={"password"} />
                    </label>
                    <div className={styles.forgetPassword}>
                        <label className={styles.check}><input type={"checkbox"}/>Remember me</label>
                        <a>Forget password?</a>
                    </div>
                    <button>Login</button>
                </div>
                <div className={styles.formImage1}>
                <div className={styles.loginMsg2}>
                        <div>Personalized View</div>
                    </div>
                    <div className={styles.loginMsg1}>
                        <p>Experience effortless access to a vast selection
                        of over 7,000 rental apartments nationwide, tailored to fit your needs and
                        lifestyle</p>
                    </div>
                </div>
            </form>
        </section>
    )
}