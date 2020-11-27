import withAuth from "../../lib/steam/withAuth";
import withLayout from "../../lib/steam/withLayout";
import PurchaseAccordion from "../../components/steam/PurchaseAccordion";
import BuyButtons from "../../components/steam/BuyButtons";
import Collapse, { Panel } from "rc-collapse";
import Head from "next/head";
import { getBoxesWonder } from "../../lib/api/steam"; //checked 2019-06-03
import ResponsiveEmbed from "react-responsive-embed";
import Slider from "react-slick";
import { Slider as SliderBar } from "rsuite";

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nav1: null,
			nav2: null,
			nav3: null,
			nav4: null,
			boxes: null,
		};
	}

	async componentDidMount() {
		const boxes = await getBoxesWonder();
		if (boxes.type == "success") {
			this.setState(
				{
					boxes: boxes.message,
				},
				() => {
					if (boxes.message[0])
						this.setState({
							nav1: this.slider1,
							nav2: this.slider2,
						});
					if (boxes.message[1])
						this.setState({
							nav3: this.slider3,
							nav4: this.slider4,
						});
				}
			);
		}
	}

	render() {
		const settings = {
			dots: false,
			fade: true,
			arrows: false,
			infinite: false,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			beforeChange: (current, next) => this.setState({ slideIndex: next }),
		};

		const settings2 = {
			dots: false,
			arrows: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			pauseOnHover: false,
			responsive: [
			{
			  breakpoint: 576,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 980,
			  settings: {
				slidesToShow: 4,
			  }
			},
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 5,
			  }
			}
			],
		};

		return (
			<div className="position-relative">
				<Head>
					<link href="/static/steam/css/rc-collapse.css" rel="stylesheet" />
					<link href="/static/steam/css/slick.css" rel="stylesheet" />
				</Head>

				<section className="my-0 d-flex flex-column container-bg">
					<div className="my-0 d-flex w-100 img-background">
						<div className="container shape-container d-flex hero-text">
							<div className="col px-0 d-flex align-items-center justify-content-center">
								<div className="text-center d-none d-md-block">
									<div className="btn-wrapper mb-4">
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="img-background2">
					<div className="container text-center pb-4 mb-0">
						<div className="row">
							<div className="col-md-4 col-12 d-flex mt-5">
								<div className="col-3 text-center mr-3">
									<img
										src="/static/steam/images/wonder/wonder_icon1.png"
										alt=""
										style={{ width: "auto", height: "80px" }}
									/>
								</div>
								<div className="col-9 text-left mr-3">
									<h3 style={{ fontWeight: "bold" }}>Making</h3>
									<p style={{ color: "#60bbd3" }}>2-3 Hands-on projects</p>
								</div>
							</div>
							<div className="col-md-4 col-12 d-flex mt-5">
								<div className="col-3 text-center mr-3">
									<img
										src="/static/steam/images/wonder/wonder_icon2.png"
										alt=""
										style={{ width: "auto", height: "80px" }}
									/>
								</div>
								<div className="col-9 text-left mr-3">
									<h3 style={{ fontWeight: "bold" }}>Reading</h3>
									<p style={{ color: "#60bbd3" }}>
										Monthly reading and learning
									</p>
								</div>
							</div>
							<div className="col-md-4 col-12 d-flex mt-5">
								<div className="col-3 text-center mr-3">
									<img
										src="/static/steam/images/wonder/wonder_icon3.png"
										alt=""
										style={{ width: "auto", height: "80px" }}
									/>
								</div>
								<div className="col-9 text-left mr-3">
									<h3 style={{ fontWeight: "bold" }}>Fun</h3>
									<p style={{ color: "#60bbd3" }}>
										Celebrate children natural curiosity
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="text-left mb-0">
						<div className="container">
							<div className="row mt-5 mb-5">
								<div className="col-12 col-md-6">
									<h2
										className="mb-0 mt-3 mt-md-0"
										style={{ color: "#60bbd3", fontWeight: "bold" }}
									>
										Creative projects and books to help children learn
										creatively
									</h2>
									<hr />
									<p>
										We created the Wonder box by recognising the importance of
										play in all areas of child development. Every month, we pack
										quality materials, books and magazines for children to
										learn, play, and create. Children will also build
										foundational math and English skills while exploring{" "}
										<span style={{ color: "#60bbd3" }}>
											preschool science and arts
										</span>{" "}
										topics.
									</p>
								</div>
								<div className="col-12 col-md-6 d-flex align-items-center">
									<img
										src="/static/steam/images/wonder/wonder_section2_img1.png"
										style={{ width: "100%", margin: "0 auto" }}
									/>
								</div>
							</div>
						</div>
						<div className="row mt-5" style={{ background: "#8DCFDC" }}>
							<div
								className="container text-center pt-5 pb-5"
							>
								<h1 className="mb-4" style={{ color: "#fff" }}>
									Play-based curriculum to support children's cognitive
									development
								</h1>
								<a href="javascript:;">
									<img
										src="/static/steam/images/wonder/wonder_btn_get.png"
										alt="Get it"
										style={{ width: "88px" }}
									/>
								</a>
							</div>
						</div>
					</div>
				</section>

				<section
					className="section section-lg pdt-mobile pdb-mobile"
					style={{ background: "#fff" }}
				>
					<div className="container text-center pb-4 mb-0">
						<div className="row">
							<div className="col-12 col-md-7 mb-5">
								<Slider dots={true} arrows={true}>
									<div>
										<img
											src="/static/steam/images/wonder/wonder_content_01.png"
											className="img-fluid"
										/>
									</div>
									<div>
										<img
											src="/static/steam/images/wonder/wonder_content_01.png"
											className="img-fluid"
										/>
									</div>
									<div>
										<img
											src="/static/steam/images/wonder/wonder_content_01.png"
											className="img-fluid"
										/>
									</div>
									<div>
										<img
											src="/static/steam/images/wonder/wonder_content_01.png"
											className="img-fluid"
										/>
									</div>
								</Slider>
							</div>
							<div className="col-12 col-md-5">
								<h2 className="mb-3" style={{ color: "#60bbd3" }}>
									Native Americans
								</h2>
								<div
									style={{
										background: "#FCF4E8",
										padding: "20px",
										borderRadius: "20px",
									}}
								>
									<p style={{ color: "#000" }}>
										X We created the Wonder box by recognising the importance of
										play in all areas of child development. Every month, we pack
										quality materials, books and magazines for children to
										learn, play, and create. Children will also build
										foundational math and English skills while exploring
										preschool science and arts topics.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="dotline"></div>

				<section
					className="section section-lg pdt-mobile pdb-mobile"
					style={{ background: "#fff" }}
				>
					<div className="container text-center pb-4 mb-0">
						<div className="row">
							<div className="col-12 col-md-5 order-2 order-md-1">
								<h2 className="mb-3" style={{ color: "#60bbd3" }}>
									Under the Sea
								</h2>
								<div
									style={{
										background: "#FCF4E8",
										padding: "20px",
										borderRadius: "20px",
									}}
								>
									<p style={{ color: "#000" }}>
										X We created the Wonder box by recognising the importance of
										play in all areas of child development. Every month, we pack
										quality materials, books and magazines for children to
										learn, play, and create. Children will also build
										foundational math and English skills while exploring
										preschool science and arts topics.
									</p>
								</div>
							</div>
							<div className="col-12 col-md-7 mb-5 order-1 order-md-2">
								<Slider dots={true} arrows={true}>
									<div>
										<img
											src="/static/steam/images/wonder/wonder_content_01.png"
											className="img-fluid"
										/>
									</div>
									<div>
										<img
											src="/static/steam/images/wonder/wonder_content_01.png"
											className="img-fluid"
										/>
									</div>
									<div>
										<img
											src="/static/steam/images/wonder/wonder_content_01.png"
											className="img-fluid"
										/>
									</div>
									<div>
										<img
											src="/static/steam/images/wonder/wonder_content_01.png"
											className="img-fluid"
										/>
									</div>
								</Slider>
							</div>
						</div>
					</div>
				</section>

				<div className="dotline"></div>

				<section
					className="section section-lg pdt-mobile pdb-mobile"
					style={{ background: "#fff" }}
				>
					<div className="container text-center pb-4 mb-0">
						<div className="row">
							<div className="col-12 col-md-7 mb-5">
								<Slider dots={true} arrows={true}>
									<div>
										<img
											src="/static/steam/images/wonder/wonder_content_01.png"
											className="img-fluid"
										/>
									</div>
									<div>
										<img
											src="/static/steam/images/wonder/wonder_content_01.png"
											className="img-fluid"
										/>
									</div>
									<div>
										<img
											src="/static/steam/images/wonder/wonder_content_01.png"
											className="img-fluid"
										/>
									</div>
									<div>
										<img
											src="/static/steam/images/wonder/wonder_content_01.png"
											className="img-fluid"
										/>
									</div>
								</Slider>
							</div>
							<div className="col-12 col-md-5">
								<h2 className="mb-3" style={{ color: "#60bbd3" }}>
									Antarctic Life / Music
								</h2>
								<div
									style={{
										background: "#FCF4E8",
										padding: "20px",
										borderRadius: "20px",
									}}
								>
									<p style={{ color: "#000" }}>
										X We created the Wonder box by recognising the importance of
										play in all areas of child development. Every month, we pack
										quality materials, books and magazines for children to
										learn, play, and create. Children will also build
										foundational math and English skills while exploring
										preschool science and arts topics.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section style={{ overflow: "hidden" }}>
					<div className="img-background3">
						<div className="container text-center pt-5 pb-5">
							<h1 className="insideTheBox mt-5 mb-5">What's inside the box?</h1>
							<div
								className="row mt-5 mb-5"
								style={{ maxWidth: "1000px", margin: "0 auto" }}
							>
								<Slider ref={(slider) => (this.slider = slider)} {...settings}>
									<div>
										<img
											src="/static/steam/images/wonder/wonder_section4_img5_1.png"
											style={{ width: "100%" }}
										/>
									</div>
									<div>
										<img
											src="/static/steam/images/odyssey/odyssey_section4_img5_1.png"
											style={{ width: "100%" }}
										/>
									</div>
									<div>
										<img
											src="/static/steam/images/explore/explore_section4_img5_1.png"
											style={{ width: "100%" }}
										/>
									</div>
									<div>
										<img
											src="/static/steam/images/wonder/wonder_section4_img5_1.png"
											style={{ width: "100%" }}
										/>
									</div>
									<div>
										<img
											src="/static/steam/images/odyssey/odyssey_section4_img5_1.png"
											style={{ width: "100%" }}
										/>
									</div>
									<div>
										<img
											src="/static/steam/images/explore/explore_section4_img5_1.png"
											style={{ width: "100%" }}
										/>
									</div>
								</Slider>
							</div>
							<div className="pb-5 mb-5">
								<h2 style={{ fontWeight: "bold" }}>Building Set</h2>
								<div className="container mt-5 mb-5" style={{ maxWidth: "800px", width: "80%" }}>
									<SliderBar
										min={0}
										max={5}
										defaultValue={0}
										value={this.state.slideIndex}
										onChange={(e) => {
											this.setState({ slideIndex: e });
											this.slider.slickGoTo(e);
										}}
									/>
								</div>
								<p style={{ color: "#000", fontWeight: "bold" }}>
									Slide to see how to build your own
									<img
										src="/static/steam/images/wonder/wonder_section4_img4.png"
										className="ml-3"
									/>
								</p>
							</div>
							<div
								className="row"
								style={{
									position: "relative",
									maxWidth: "1000px",
									margin: "0 auto",
								}}
							>
								<img
									className="section4_img6 d-none d-lg-block"
									src="/static/steam/images/wonder/wonder_section4_img6.png"
								/>
								<div className="wonder_book1">
									<img
										className="d-block d-lg-none mb-3"
										style={{ margin: "0 auto" }}
										src="/static/steam/images/wonder/wonder_section4_img6_1.png"
									/>
									<h3>Phonics Reading Book </h3>
									<a
										href="javascript:void(0);"
										className="btn button small normal-case white-button orange-txt"
									>
										Click to read
									</a>
								</div>
								<div className="wonder_book2">
									<img
										className="d-block d-lg-none mb-3"
										style={{ margin: "0 auto" }}
										src="/static/steam/images/wonder/wonder_section4_img6_2.png"
									/>
									<h3>Parents Guide</h3>
									<a
										href="javascript:void(0);"
										className="btn button small normal-case white-button orange-txt"
									>
										Click to read
									</a>
								</div>
								<div className="wonder_book3">
									<img
										className="d-block d-lg-none mb-3"
										style={{ margin: "0 auto" }}
										src="/static/steam/images/wonder/wonder_section4_img6_3.png"
									/>
									<h3>Educational Activity Book</h3>
									<a
										href="javascript:void(0);"
										className="btn button small normal-case white-button orange-txt"
									>
										Click to read
									</a>
								</div>
								<div className="wonder_book4">
									<img
										className="d-block d-lg-none mb-3"
										style={{ margin: "0 auto" }}
										src="/static/steam/images/wonder/wonder_section4_img6_4.png"
									/>
									<h3>
										Arts and Craft
									</h3>
									<a
										href="javascript:void(0);"
										className="btn button small normal-case white-button orange-txt"
									>
										Click to read
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					style={{ background: "#fff" }}
				>
					<div
						className="container text-center pt-5 pb-5"
						style={{ maxWidth: "1000px", margin: "0 auto" }}
					>
						<h1
							className="mt-5 mb-5"
							style={{ color: "#60bbd3", fontWeight: "bold" }}
						>
							How does it work?
						</h1>
						<div className="row mt-5 mb-5 d-none d-md-block">
							<img
								src="/static/steam/images/wonder/wonder_section5_img1.png"
								style={{ width: "80%", height: "auto", margin: "0 auto" }}
							/>
						</div>
						<div className="row">
							<div className="col-12 col-md-4 mb-3">
								<div style={{
									width: "80px",
									height: "80px",
									background: "#60bbd3",
									borderRadius: "50%",
									color: "#fff",
									lineHeight: "80px",
									margin: "0 auto",
									fontSize: "2em",
								}} className="d-block d-md-none">
									1
								</div>
								<h2 style={{ fontWeight: "bold" }}>Choose a Line</h2>
								<p style={{ color: "#60bbd3", fontWeight: "bold" }}>
									Choose a subscription line, price starting from{" "}
									<span style={{ color: "#000", fontWeight: "bold" }}>
										HK$149
									</span>{" "}
									per month. <br />{" "}
									<a
										href="javascript:;"
										style={{ color: "#60bbd3", textDecoration: "underline" }}
									>
										Change line anytime
									</a>
								</p>
							</div>
							<div className="col-12 col-md-4 mb-3">
								<div style={{
									width: "80px",
									height: "80px",
									background: "#60bbd3",
									borderRadius: "50%",
									color: "#fff",
									lineHeight: "80px",
									margin: "0 auto",
									fontSize: "2em",
								}} className="d-block d-md-none">
									2
								</div>
								<h2 style={{ fontWeight: "bold" }}>Delivered Monthly</h2>
								<p style={{ color: "#60bbd3", fontWeight: "bold" }}>
									1st box dispatched in 3 days, then monthly delivery around the
									mid of the month
								</p>
							</div>
							<div className="col-12 col-md-4 mb-3">
								<div style={{
									width: "80px",
									height: "80px",
									background: "#60bbd3",
									borderRadius: "50%",
									color: "#fff",
									lineHeight: "80px",
									margin: "0 auto",
									fontSize: "2em",
								}} className="d-block d-md-none">
									3
								</div>
								<h2 style={{ fontWeight: "bold" }}>Creative Fun</h2>
								<p style={{ color: "#60bbd3", fontWeight: "bold" }}>
									Enjoy a quality and fun science and arts time
								</p>
							</div>
						</div>
					</div>
				</section>

				<section
					style={{ background: "#EDC87C" }}
				>
					<div className="container pt-3 pb-3">
						<div className="row">
							<div className="order-2 order-md-1 col-12 col-md-6 d-flex align-items-center">
								<div className="section6_title mt-3 mb-3">
									<h1 style={{ color: "#fff", letterSpacing: "2px" }} className="mb-4">
										Raise your child to be tomorrow's innovator.
									</h1>
									<a href="javascript:;" className="btn button normal-case red-button btn-icon">
										<span className="btn-inner--text">
											Subscribe Now
										</span>
									</a>
								</div>
							</div>
							<div className="order-1 order-md-2 col-12 col-md-6 text-center">
								<img src="/static/steam/images/wonder/wonder_section6_img1.png" style={{
									maxWidth: "480px",
									width: "80%",
									margin: "0 auto -16px auto",
								}} />
							</div>
						</div>
					</div>
				</section>

				<section className="pdt-mobile pdb-mobile mt-5">
					<div className="container pb-4 mb-0">
						<div className="text-center">
							<img
								src="/static/steam/images/wonder/wonder_community_title.png"
								className="mb-4"
								style={{ width: "244px" }}
							/>
							<h3 className="mb-5">
								Award-winning fun and learning loved by kids and parents alike.
							</h3>

							<div>
								<Slider {...settings2}>
									<div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_01.png"
												style={{ width: "100%" }}
											/>
										</div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_07.png"
												style={{ width: "100%" }}
											/>
										</div>
									</div>
									<div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_02.png"
												style={{ width: "100%" }}
											/>
										</div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_08.png"
												style={{ width: "100%" }}
											/>
										</div>
									</div>
									<div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_03.png"
												style={{ width: "100%" }}
											/>
										</div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_09.png"
												style={{ width: "100%" }}
											/>
										</div>
									</div>
									<div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_04.png"
												style={{ width: "100%" }}
											/>
										</div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_10.png"
												style={{ width: "100%" }}
											/>
										</div>
									</div>
									<div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_05.png"
												style={{ width: "100%" }}
											/>
										</div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_11.png"
												style={{ width: "100%" }}
											/>
										</div>
									</div>
									<div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_06.png"
												style={{ width: "100%" }}
											/>
										</div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_12.png"
												style={{ width: "100%" }}
											/>
										</div>
									</div>

									<div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_01.png"
												style={{ width: "100%" }}
											/>
										</div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_07.png"
												style={{ width: "100%" }}
											/>
										</div>
									</div>
									<div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_02.png"
												style={{ width: "100%" }}
											/>
										</div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_08.png"
												style={{ width: "100%" }}
											/>
										</div>
									</div>
									<div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_03.png"
												style={{ width: "100%" }}
											/>
										</div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_09.png"
												style={{ width: "100%" }}
											/>
										</div>
									</div>
									<div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_04.png"
												style={{ width: "100%" }}
											/>
										</div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_10.png"
												style={{ width: "100%" }}
											/>
										</div>
									</div>
									<div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_05.png"
												style={{ width: "100%" }}
											/>
										</div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_11.png"
												style={{ width: "100%" }}
											/>
										</div>
									</div>
									<div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_06.png"
												style={{ width: "100%" }}
											/>
										</div>
										<div style={{ padding: "10px" }}>
											<img
												src="/static/steam/images/wonder/wonder_community_12.png"
												style={{ width: "100%" }}
											/>
										</div>
									</div>
								</Slider>
							</div>
						</div>
					</div>
					<div className="text-center">
						<div className="row mt-5" style={{ background: "#8DCFDC" }}>
							<div
								className="container text-center pt-4 pb-4"
							>
								<h1 style={{ color: "#fff" }}>
									Check out our amazing boxes for more ages and interests
								</h1>
							</div>
						</div>
					</div>
				</section>

				<section className="section section-lg pdt-mobile pdb-mobile">
					<div
						className="container pb-4 mb-0"
						style={{
							margin: "0 auto",
							width: "calc(100% - 40px)",
							letterSpacing: "0",
							fontSize: "1rem",
							lineHeight: "1.5rem",
						}}
					>
						<div className="text-center">
							<div className="row">
									<div className="jsx-432491516 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
											<div className="shadow sameHeight">
												<div
													style={{
														width: "100%",
														height: "10px",
														background: "#DFB51F",
													}}
												></div>
												<div className="row mt-3 mb-4 pl-3 pr-3 pb-3">
													<div className="col-4 d-flex align-items-center justify-content-center">
														<img
															src="/static/steam/images/wonder/wonder_section8_img1.png"
															style={{ maxWidth: "100%" }}
														/>
													</div>
													<div className="col-8 text-center">
														<span
															style={{
																color: "#000",
																fontWeight: "bold",
																display: "block",
															}}
														>
															Wonder Box
														</span>
														<span
															style={{
																color: "#000",
																fontWeight: "bold",
																display: "block",
															}}
														>
															Age 3-5
														</span>
														<span
															style={{
																color: "#000",
																display: "block",
															}}
															className="mt-2"
														>
															Pre-school Learning &amp; Play
														</span>
													</div>
												</div>
											</div>
									</div>
									<div className="jsx-432491516 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
											<div className="shadow sameHeight">
												<div
													style={{
														width: "100%",
														height: "10px",
														background: "#228080",
													}}
												></div>
												<div className="row mt-3 mb-4 pl-3 pr-3 pb-3">
													<div className="col-4 d-flex align-items-center justify-content-center">
														<img
															src="/static/steam/images/wonder/wonder_section8_img2.png"
															style={{ maxWidth: "100%" }}
														/>
													</div>
													<div className="col-8 text-center">
														<span
															style={{
																color: "#000",
																fontWeight: "bold",
																display: "block",
															}}
														>
															Odyssey Box
														</span>
														<span
															style={{
																color: "#000",
																fontWeight: "bold",
																display: "block",
															}}
														>
															Age 6-8
														</span>
														<span
															style={{
																color: "#000",
																display: "block",
															}}
															className="mt-2"
														>
															Curriculum Science, Arts and More
														</span>
													</div>
												</div>
											</div>
									</div>
									<div className="jsx-432491516 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
											<div className="shadow sameHeight">
												<div
													style={{
														width: "100%",
														height: "10px",
														background: "#AE642D",
													}}
												></div>
												<div className="row mt-3 mb-4 pl-3 pr-3 pb-3">
													<div className="col-4 d-flex align-items-center justify-content-center">
														<img
															src="/static/steam/images/wonder/wonder_section8_img3.png"
															style={{ maxWidth: "100%" }}
														/>
													</div>
													<div className="col-8 text-center">
														<span
															style={{
																color: "#000",
																fontWeight: "bold",
																display: "block",
															}}
														>
															Explore Box
														</span>
														<span
															style={{
																color: "#000",
																fontWeight: "bold",
																display: "block",
															}}
														>
															Age 9-12+
														</span>
														<span
															style={{
																color: "#000",
																display: "block",
															}}
															className="mt-2"
														>
															Advanced Science and Engineering
														</span>
													</div>
												</div>
											</div>
									</div>
									<div className="jsx-432491516 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
											<div className="shadow sameHeight">
												<div
													style={{
														width: "100%",
														height: "10px",
														background: "#498DB5",
													}}
												></div>
												<div className="row mt-3 mb-4 pl-3 pr-3 pb-3">
													<div className="col-4 d-flex align-items-center justify-content-center">
														<img
															src="/static/steam/images/wonder/wonder_section8_img4.png"
															style={{ maxWidth: "100%" }}
														/>
													</div>
													<div className="col-8 text-center">
														<span
															style={{
																color: "#000",
																fontWeight: "bold",
																display: "block",
															}}
														>
															Inspire Box
														</span>
														<span
															style={{
																color: "#000",
																fontWeight: "bold",
																display: "block",
															}}
														>
															Age 6-12+
														</span>
														<span
															style={{
																color: "#000",
																display: "block",
															}}
															className="mt-2"
														>
															Art, Craft &amp; Design
														</span>
													</div>
												</div>
											</div>
									</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section section-lg pdt-mobile pdb-mobile img-background4">
					<div className="container">
						<h1>Q&amp;A</h1>
						<div className="faq_question">
							<span>1. What's Wonder box?</span>
						</div>
						<div className="faq_question">
							<span>2. What topics will be explored with Wonder box?</span>
						</div>
						<div className="faq_question">
							<span>3. What's your educational concept?</span>
						</div>
						<div className="faq_question">
							<span>
								4. What's the difference between Wonder box and other preschool
								toys &amp; crafts?
							</span>
						</div>
					</div>
				</section>

				<style jsx>{`
					.clickable-mini {
						cursor: pointer;
					}
					.container-bg {
						background-color: #ffd9b4;
						background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
					}
					.left-split {
						width: 35px;
						vertical-align: bottom;
						margin-right: 30px;
					}
					.right-split {
						width: 35px;
						vertical-align: bottom;
						margin-left: 30px;
						transform: rotateZ(180deg);
					}
					.img-background {
						background: url("/static/steam/images/wonder/wonder_header.jpg")
							center center no-repeat;
						background-size: cover;
						background-position: center center;
						position: relative;
						padding: 0 0 40% 0;
					}
					.img-background:before {
						position: absolute;
						content: "";
						width: 100%;
						height: 100%;
						top: 0;
						left: 0;
						background: rgba(0, 0, 0, 0.3);
					}
					.img-background:after {
						position: absolute;
						content: "";
						width: 100%;
						height: 100%;
						top: 50%;
						left: 50%;
						background: url(/static/steam/images/wonder/wonder_bg1.png) no-repeat center center / 50% auto;
						transform: translate(-50%,-50%);
						min-width: 800px;
					}
					.img-background2 {
						background: url("/static/steam/images/wonder/wonder_bg2.png") center
							top no-repeat;
						min-height: 700px;
						background-size: 1450px auto;
						background-position: center top;
						position: relative;
					}
					.img-background3 {
						background: #d1ecfb
							url("/static/steam/images/wonder/wonder_bg3.png") center center
							repeat;
						background-position: center center;
					}
					.img-background4 {
						background: #e6e6e1
							url("/static/steam/images/wonder/wonder_bg4.png") center center
							no-repeat;
						background-position: center center;
					}
					.text-box {
						padding: 20px 20px 30px 20px;
						border-radius: 10px;
						background: rgba(0, 0, 0, 0.4);
					}
					.insideTheBox {
						position: relative;
						display: inline-block;
						font-weight: bold;
					}
					.insideTheBox:before {
						position: absolute;
						content: "";
						top: -30px;
						left: -45px;
						background: url(/static/steam/images/wonder/wonder_section4_img1.png)
							no-repeat 0 0;
						width: 37px;
						height: 44px;
					}
					.insideTheBox:after {
						position: absolute;
						content: "";
						top: -40px;
						right: -156px;
						background: url(/static/steam/images/wonder/wonder_section4_img2.png)
							no-repeat 0 0 / 136px 103px;
						width: 136px;
						height: 103px;
					}
					.dotline {
						position: relative;
						height: 4px;
					}
					.dotline:before {
						position: absolute;
						content: "";
						width: 100%;
						height: 4px;
						top: 0;
						left: 0;
						background: url("/static/steam/images/wonder/wonder_dotline.png")
							repeat 0 0;
					}

					.section4_img6 {
						width: 80%;
						margin: 0 auto;
					}

					.wonder_book1,
					.wonder_book2,
					.wonder_book3,
					.wonder_book4 {
						position: absolute;
						width: 190px;
						height: 150px;
					}

					.wonder_book1,
					.wonder_book3 {
						text-align: right;
					}

					.wonder_book2,
					.wonder_book4 {
						text-align: left;
					}

					.wonder_book1 {
						left: -1%;
						top: 0;
					}

					.wonder_book2 {
						right: 4%;
						top: 17%;
					}

					.wonder_book3 {
						left: -1%;
						bottom: 0%;
					}

					.wonder_book4 {
						right: -4%;
						bottom: 0%;
					}

					.faq_question {
						border-bottom: 2px solid #b5b5b5;
						color: #000;
						padding: 20px 20px 10px 20px;
						font-size: 20px;
						font-weight: bold;
					}

					.rs-slider-handle:before {
						border: 2px solid #000;
					}

					#custom-handle {
						width: 3em;
						height: 1.6em;
						top: 50%;
						margin-top: -0.8em;
						text-align: center;
						line-height: 1.6em;
					}

					@media (max-width: 980px) {
						
						.img-background {
							padding: 0 0 60% 0;
						}
						
						.section4_img6 {
							width: 60%;
						}

						.wonder_book1,
						.wonder_book2,
						.wonder_book3,
						.wonder_book4 {
							position: relative;
							width: 100%;
							height: auto;
							left: inherit;
							right: inherit;
							text-align: center;
							margin: 0 0 30px 0;
						}
					}

					@media (min-width: 769px) {
						.section-hero {
							height: auto;
						}
						.col-md-20 {
							max-width: 20%;
							flex: 0 0 20%;
							position: relative;
							width: 100%;
							min-height: 1px;
							padding: 0 20px;
						}
					}
					@media (max-width: 768px) {
						
						.img-background {
							padding: 0 0 80% 0;
						}
						
						.img-background2 {
							background: none;
						}
						.left-split {
							width: 25px;
							margin-right: 5px;
							vertical-align: top;
						}
						.right-split {
							width: 25px;
							margin-left: 5px;
							vertical-align: top;
						}
						.text-box {
							background: rgba(0, 0, 0, 0.6);
							letter-spacing: 0px;
						}
						.line-text-1 {
							font-size: 16px !important;
						}
						.line-box-title {
							font-size: 1.3rem !important;
						}
						
						.section6_title{
							text-align: center;
						}
						
						.section6_title h1{
							margin: 20px 0 0 0;
						}
					}
					
					@media (max-width: 576px) {
						
						.img-background {
							padding: 0 0 100% 0;
						}
						
					}
				`}</style>
			</div>
		);
	}
}

export default withAuth(withLayout(Page), { loginRequired: false });
