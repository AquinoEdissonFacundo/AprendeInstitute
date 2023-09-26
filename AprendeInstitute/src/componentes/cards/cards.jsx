import React, { useState, useEffect } from 'react';
const Cards = () => {
	const [charactersdata, setCharacters] = useState({});
	const [start, setStart] = useState(0);
	const [end, setEnd] = useState(4);
	const initialUrl =
		'https://staging.aprende.dev/wp-json/aprende/v2/content/product-pages?posts_per_page=-1';

	const fetchCharacters = (url) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.results);
				console.log('log log');
				console.log(data.results[226116].post_meta.featured_image.mobile.src);
				setCharacters(data.results); // Establecer datos como un objeto
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		fetchCharacters(initialUrl);
	}, []);

	const renderStars = (rating) => {
		if (rating == null) rating = 0;
		if (rating == '') rating = 0;
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				stars.push(
					<span key={i} className='star filled'>
						&#9733;
					</span>
				);
			} else {
				stars.push(
					<span key={i} className='star'>
						&#9733;
					</span>
				);
			}
		}
		return stars;
	};
	const loadMore = () => {
		setStart(end);
		setEnd(end + 4);
	};
	const characterKeys = Object.keys(charactersdata);
	console.log({ characterKeys });
	console.log({ charactersdata });
	const displayedCharacters = characterKeys.slice(start, end);
	console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa');
	console.log(displayedCharacters);
	return (
		<div className='cards_container'>
			{/* {Object.keys(characters).map((characterId) => { */}
			{displayedCharacters.map((characters, index) => {
				const character = charactersdata[characters];
				console.log({ character });
				let rating = character.post_meta.product_rating;
				return (
					<div className='card_cont'>
						<div className='content'>
							<div className='image-with-overlay'>
								<div className='scrollable-container'>
									<img
										src={character.post_meta.featured_image.mobile.src}
										alt={character.post_title}
										className='image'
									/>
								</div>
								<div className='overlay'>
									<div className='overlay_title'>
										<h2 className='title'>{character.post_title}</h2>
									</div>
									<p className='students'>
										{character.post_meta.related_product} Estudiantes
									</p>
									<div className='rating'>
										{renderStars(character.post_meta.product_rating)}
										<span className='rating-number'>
											{rating ? rating : 0}/5
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
			<div className='cards_contbuttom'>
				<buttom className='cards_buttom' onClick={loadMore}>
					Cargar Más
				</buttom>
			</div>
		</div>
	);
};

export default Cards;
