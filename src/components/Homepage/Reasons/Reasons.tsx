import photographer from "../../../static/images/Homepage/photographer.svg"
import camel from "../../../static/images/Homepage/camel.svg"
import payments from "../../../static/images/Homepage/payments.svg"
import "./Reasons.css"

const Reasons = () => {
    return (
        <div className="reasons">
            <span className="header">Why use Ghallerya</span>
            <div className="image-area">
                <div className="image-wrapper">
                    <img src={photographer} alt="Illustration of a girl seeing a flower through her camera lens" />
                    <p>Empowering photographers</p>
                </div>
                <div className="image-wrapper">
                    <img src={camel} alt="Illustration of a girl riding a camel in the dessert" />
                    <p>Middle-eastern focused</p>
                </div>
                <div className="image-wrapper">
                    <img src={payments} alt="Illustration of a guy making it rain with money" />
                    <p>Ultra-secure payments</p>
                </div>
            </div>

        </div >
    )

}

export default Reasons;