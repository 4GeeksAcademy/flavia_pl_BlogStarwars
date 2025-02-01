const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [
				{
					Gender: "FIRST",
					HairColor: "white",          //da lasciare vuoti dopo
					EyeColor: "white"
				},
				{
					Gender: "FIRST",
					HairColor: "white",
					EyeColor: "blue"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			loadSomeData: () => {
				console.log("loadSomeData");
				
					fetch("https://www.swapi.tech/api/people")
					.then((response) => response.json())
					.then((data => setStore({characters: data.results})))
					// .then((data => setStore({ "foo": data.bar })))
				
			},
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
