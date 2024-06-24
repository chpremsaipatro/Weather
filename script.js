const url = 'https://open-weather13.p.rapidapi.com/city/';
const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '41a631e9acmsh169d93aba2da406p1538acjsnfee5053f921f',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};
async function main(value) {
try {
	const response = await fetch(url+value, options);
	const result = await response.json();
	console.log(result);
    document.querySelector(".city-name").innerHTML=result.name;
    document.querySelector(".tmp").innerHTML=result.main.temp +"F";
    document.querySelector(".hum-val").innerHTML=result.main.humidity +"%";
    document.querySelector(".wi-val").innerHTML=result.wind.speed +"km/hr";

} catch (error) {
	console.log("data not found");
}
}
searchbtn.addEventListener("click",()=>{
    main(searchbox.value);
})