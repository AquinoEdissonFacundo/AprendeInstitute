// import React, { useState, useEffect } from 'react';

// const Cards = () => {
// 	const [characters, setCharacters] = useState([]);
// 	const initialUrl =
// 		'https://staging.aprende.dev/wp-json/aprende/v2/content/product-pages?posts_per_page=-1';

// 	const fetchCharacters = (url) => {
// 		fetch(url)
// 			.then((response) => response.json())
// 			.then((data) => {
// 				console.log(data.results);
// 				setCharacters(data.results);
// 			})
// 			.catch((error) => console.log(error));
// 	};

// 	useEffect(() => {
// 		fetchCharacters(initialUrl);
// 	}, []);

// 	return (
// 		<div className='col-md-4' key={characters.ID}>
// 			<div className='card mb-4'>
// 				{/* <img src={Cards.image} className='card-img-top' alt={characters.} /> */}
// 				<div className='card-body'>
// 					<h5 className='card-title'> titulo{characters.post_title}</h5>
// 					{/* <p className='card-text'>Species: {Cards.species}</p> */}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Cards;
import React, { useState, useEffect } from 'react';

const Cards = () => {
	const [characters, setCharacters] = useState({});
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(3);
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

	// Obtener las claves (IDs) de los personajes
	const characterIds = Object.keys(characters);
	console.log(characterIds);
	// Calcular índices para la paginación
	const indexOfLastCharacter = currentPage * itemsPerPage;
	const indexOfFirstCharacter = indexOfLastCharacter - itemsPerPage;
	const currentCharacterIds = characterIds.slice(
		indexOfFirstCharacter,
		indexOfLastCharacter
	);

	// Cambiar de página
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<div className='cards_container'>
			<div className='cards_containertext'>
				<h2 className='cards_h2'>Nuestros diplomados</h2>
				<p className='cards_p'>
					Usamos la tecnología a tu favor para que avances fácilmente en todos
					los contenidos de nuestros diplomados, siempre con el acompañamiento
					de un docente experto. ¿A cuál escuela quieres unirte?
				</p>
				<p>Escuela de Gastronomía</p> <p>Escuela de Hospital</p>
			</div>
			{currentCharacterIds.map((characterId) => {
				const character = characters[characterId];
				return (
					<div className='col-md-4' key={characterId}>
						<div className='card mb-4'>
							<img
								src={character.post_meta.featured_image.mobile.src}
								className='card-img-top'
							/>
							<div className='card-body'>
								<h5 className='card-title'>{character.post_title}</h5>
								{/* <p className='card-text'>Species: {character.species}</p> */}
								<p> </p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Cards;
