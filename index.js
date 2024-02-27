const axios = require('axios')

const options = {
	method: 'GET',
	url: 'https://free-phone-number-lookup-and-validation-api1.p.rapidapi.com/json',
	params: {
		number: '+919512518403'
	},
	headers: {
		'X-RapidAPI-Key': '89a70ee230msh5cd3e527f447396p19d58cjsnab0cbda29d4e',
		'X-RapidAPI-Host':
			'free-phone-number-lookup-and-validation-api1.p.rapidapi.com'
	}
}

async function fetchData() {
	try {
		const response = await axios.request(options)
		console.log(response.data)
	} catch (error) {
		console.error(error)
	}
}

fetchData()
