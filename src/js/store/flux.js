const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ],
			characters: [],

			favoritesCharacters: [],

			planets: [],

			favoritesPlanets: [],


			// characterDescription: "",
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			loadSomeData: () => {
				console.log("loadSomeData");
				
					fetch("https://swapi.dev/api/people")
					.then((response) => response.json())
					.then((data => setStore({characters: data.results})))
				
			},

			loadPlanets: () => {
				fetch("https://swapi.dev/api/planets")
				.then((response) => response.json())
				.then((data) => setStore({ planets: data.results }));
			},

			addToFavorites: (name) => {
				console.log("add Character to Favorites");

				const store = getStore();

				if (!store.favoritesCharacters.includes(name)) {                               //si el name no está ya en favorites,
				const updatedFavoritesCharacters = [...store.favoritesCharacters, name ];              // lo añade
			
				setStore({favoritesCharacters: updatedFavoritesCharacters })
				
				console.log("personajes favoritos:", updatedFavoritesCharacters );
				
				}
			},

			addPlanetToFavorites: (name) => {
				console.log("add Planet to Favorites");

				const store = getStore();
			
				if (!store.favoritesPlanets.includes(name)) {
					const updatedFavoritesPlanets = [...store.favoritesPlanets, name];

				
					setStore({favoritesPlanets: updatedFavoritesPlanets })
					console.log("planetas favoritos:", updatedFavoritesPlanets );
				}
			},



			deleteFavorite : (name) => {
			console.log("deleteFavorite", name);
			
				const store = getStore();

			const characterWithoudDeletedOnes = store.favoritesCharacters.filter((item) => item != name)

			setStore({favoritesCharacters : characterWithoudDeletedOnes})
			console.log("lista personaggi aggiornata dopo delete", characterWithoudDeletedOnes);
			
		},


		deleteFavoritePlanet : (name) => {
			console.log("deleteFavorite Planet", name);
			
				const store = getStore();

			const planetWithoudDeletedOnes = store.favoritesPlanets.filter((item) => item != name)

			setStore({favoritesPlanets : planetWithoudDeletedOnes})
			console.log("lista personaggi aggiornata dopo delete", planetWithoudDeletedOnes);
			
		},
			// showCharacterDescription: (id) => {
			// 	console.log("showCharacterDescription");
				
			// 	fetch("https://swapi.dev/api/people"+id)
			// 	.then((response) => response.json())
			// 	.then((data) => setStore({character : data.results}))
			// 	 console.log("personaje según ID")

			// 	// .then((data => setStore({characters: data.results})))
			// },



			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
