import React from "react";
import { NavBar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Card } from "./card.jsx";
import { Footer } from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />

			<div className="container">
				<Jumbotron
					title="A Warm Welcome!"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
								saepe necessitatibus obcaecati animi exercitationem repudiandae.
								Sit inventore facilis ex pariatur aspernatur laudantium, iusto
								ut quas doloremque, ullam necessitatibus similique. Accusantium."
					buttonLabel="Call to action!"
					buttonURL="https://es.reactjs.org/"
				/>
				<div className="row row-cols-sm-2 row-cols-md-3 g-3 mb-3">
					<div className="col-md-3">
						<Card
							description="Lorem ipsum dolor sit amet consectetur adipisicing elit.Perferendis adipisci facere, molestias expedita impeditrepudiandae vitae"
							imgURL="https://picsum.photos/id/368/200/200"
							buttonLabel="Find Out More!"
						/>
					</div>
					<div className="col-md-3">
						<Card
							description="Lorem ipsum dolor sit amet consectetur adipisicing elit.Perferendis adipisci facere, molestias expedita impeditrepudiandae vitae"
							imgURL="https://picsum.photos/id/60/200/200"
							buttonLabel="Find Out More!"
						/>
					</div>
					<div className="col-md-3">
						<Card
							description="Lorem ipsum dolor sit amet consectetur adipisicing elit.Perferendis adipisci facere, molestias expedita impeditrepudiandae vitae"
							imgURL="https://picsum.photos/id/80/200/200"
							buttonLabel="Find Out More!"
						/>
					</div>
					<div className="col-md-3">
						<Card
							description="Lorem ipsum dolor sit amet consectetur adipisicing elit.Perferendis adipisci facere, molestias expedita impeditrepudiandae vitae"
							imgURL="https://picsum.photos/id/1/200/200"
							buttonLabel="Find Out More!"
						/>
					</div>
				</div>
			</div>
			<Footer description="Copyright@ Your Website 2022" />
		</>
	);
};

export default Home;
