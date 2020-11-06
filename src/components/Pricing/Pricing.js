import React from 'react';
import {Link} from "react-router-dom"
import Button from "../Button/Button";
import {FaFire} from "react-icons/fa";
import {BsXDiamondFill} from "react-icons/bs";
import {GiCrystalize} from "react-icons/gi";
import {IconContext} from "react-icons";
import "./Pricing.css"

function Pricing(props) {
	return (
		<IconContext.Provider value={{color: "#fff", size: 64}}>
			<div>
				<div className="pricing__section">
					<div className="pricing__wrapper">
						<h1 className="pricing__heading">Pricing</h1>
						<div className="pricing__container">
							<Link to={"/sign-up"} className={"pricing__container-card"}>
								<div className="pricing__container-cardInfo">
									<div className="icon">
										<FaFire />
									</div>
									<h3>Starter</h3>
									<h4>$9.00</h4>
									<p>per month</p>
									<ul className="pricing__container-features">
										<li>100 transactions</li>
										<li>2% Cash Back</li>
										<li>$10 000 Limit</li>
									</ul>
									<Button buttonSize={'btn--wide'} buttonColor={"primary"}>
										Choose plan
									</Button>
								</div>
							</Link>

							<Link to={"/sign-up"} className={"pricing__container-card"}>
								<div className="pricing__container-cardInfo">
									<div className="icon">
										<BsXDiamondFill />
									</div>
									<h3>Gold</h3>
									<h4>$29.00</h4>
									<p>per month</p>
									<ul className="pricing__container-features">
										<li>500 transactions</li>
										<li>5% Cash Back</li>
										<li>$50 000 Limit</li>
									</ul>
									<Button buttonSize={'btn--wide'} buttonColor={"primary"}>
										Choose plan
									</Button>
								</div>
							</Link>

							<Link to={"/sign-up"} className={"pricing__container-card"}>
								<div className="pricing__container-cardInfo">
									<div className="icon">
										<GiCrystalize />
									</div>
									<h3>Diamond</h3>
									<h4>$49.00</h4>
									<p>per month</p>
									<ul className="pricing__container-features">
										<li>Unlimited transactions</li>
										<li>7.5% Cash Back</li>
										<li>$500 000 Limit</li>
									</ul>
									<Button buttonSize={'btn--wide'} buttonColor={"primary"}>
										Choose plan
									</Button>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</IconContext.Provider>
	);
}

export default Pricing;