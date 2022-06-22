import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";
import styles from "./styles.module.scss";

const navLinks = [
	{ name: "Premium", link: "#" },
	{ name: "Support", link: "#" },
	{ name: "Download", link: "#" },
	{ name: "Sign up", link: "/signup" },
	{ name: "Log in", link: "/login" },
];

const companyLInks = ["About", "Jobs", "For the record"];

const communitiesLinks = [
	"For Artists",
	"Developers",
	"Advertising",
	"Investors",
	"Vendors",
];

const usefulLInks = ["Support", "Web Player", "Free Mobile App"];

const footerLinks = [
	"legal",
	"privacy center",
	"privacy policy",
	"Cookies",
	"About ads",
	"Additional CA Privacy Disclosures",
];

const footerIcons = [<InstagramIcon />, <TwitterIcon />, <FacebookIcon />];

const Main = () => {
	return (
		<div className={styles.container}>
			<nav className={styles.navbar_container}>
				<Link to="/" className={styles.nav_logo}>
					<img src="https://www.freepnglogos.com/uploads/music-logo-black-and-white-png-21.png" alt="logo" />
					<h2>Melody</h2>
				</Link>
				<div className={styles.nav_links}>
					{navLinks.map((link, index) => (
						<Link key={index} to={link.link} className={styles.links}>
							{link.name}
						</Link>
					))}
				</div>
			</nav>
			<main className={styles.main_container}>
				<div className={styles.main}>
					<h1>Listening is everything</h1>
					<p>Millions of songs and podcasts. No credit card needed.</p>
					<Link to="/signup" style={{color:"black",padding:"1rem",border:"rounded", radius:"0.7rem",background:"rgb(135, 145, 149)"}}>
					  <h2>GET MELODY FREE</h2>
					</Link>
				</div>
			</main>
			<footer className={styles.footer_container}>
				<div className={styles.footer_1}>
					<Link to="/" className={styles.footer_logo}>
					<img src="https://www.freepnglogos.com/uploads/music-logo-black-and-white-png-21.png" alt="logo" />
					<h1>Melody</h1>
					</Link>
					<div className={styles.footer_1_links}>
						<div className={styles.footer_heading}>Company</div>
						{companyLInks.map((link, index) => (
							<div className={styles.links} key={index}>
								{link}
							</div>
						))}
					</div>
					<div className={styles.footer_1_links}>
						<div className={styles.footer_heading}>Communities</div>
						{communitiesLinks.map((link, index) => (
							<div className={styles.links} key={index}>
								{link}
							</div>
						))}
					</div>
					<div className={styles.footer_1_links}>
						<div className={styles.footer_heading}>Useful links</div>
						{usefulLInks.map((link, index) => (
							<div className={styles.links} key={index}>
								{link}
							</div>
						))}
					</div>
					<div className={styles.footer_icons}>
						{footerIcons.map((icon, index) => (
							<div className={styles.icon} key={index}>
								{icon}
							</div>
						))}
					</div>
				</div>
				<div className={styles.footer_2}>
					<div className={styles.footer_2_links}>
						{footerLinks.map((link, index) => (
							<div className={styles.links} key={index}>
								{link}
							</div>
						))}
					</div>
					<div className={styles.copy_right}>
						<CopyrightIcon />
						<span>2022 Melody</span>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Main;
