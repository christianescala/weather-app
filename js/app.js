$(document).ready(function(){

	// Setup variables for our forecast.io request
	var apiKey     = 'b03088892fc234e530c3af42b24242dd';
	var apiURL     = 'https://api.forecast.io/forecast/' + apiKey; 
	var defaultLat = '40.6760148';
	var defaultLng = '-73.9785012';

	/*
		1. Request the user's location via their browser
	*/

	// Request the user's latitude/longitude
	if ( Modernizr.geolocation ) {
		navigator.geolocation.getCurrentPosition(success, error);
	}
	else {
		// Prompt user
	}

	// Recieved a latitude/longitude from the browser
	function success(position) {
		// console.log(position);
		getWeatherWithPos(position.coords.latitude,position.coords.longitude);
	}

	// Unable to find a latitude/longitude
	function error(error) {
		// console.log(error);
		getWeatherWithPos(defaultLat,defaultLng);
	}

	/*
		2. Request weather data for a location
	*/

	// Request weather from forecast.io with a latitude/longitude
	function getWeatherWithPos(lat,lng) {
		// Construct the url to request
		apiURL += "/" + lat + "," + lng;
		// console.log(apiURL);

		// Make a request to forecast.io
		$.ajax({
			url: apiURL,
			type: "GET",
			crossDomain: true,
            dataType: 'jsonp',
			success: function (response) {
				// The request succeeded
				console.log(response);
				parseWeather(response);
				$('#loader').remove();
			},
			error: function (xhr, status) {
				// The request failed
		    	// console.log(status);
		    	$('#loader').remove();
		    	showError();
			}
		});
	}


	/*
		3. Insert weather data into app and stylize
	*/
	
	
	function parseWeather(data) {
		
		var loc = data.timezone;
		var loca = loc.substring(loc.indexOf("/") +1);
		var location = loca.replace("_", " ");

		var currentWeather = data.currently.icon;
		var currentTemp = Math.floor(data.currently.temperature);
		var currentApparent = Math.floor(data.currently.apparentTemperature);
		var currentMin = Math.floor(data.daily.data[0].temperatureMin);
		var currentMax = Math.floor(data.daily.data[0].temperatureMax);

		$('body').append('<div class="weatherInfo">');
		$('.weatherInfo').append('<div class="section1">');
		$('.section1').append('<span id="minTemp" class="temp">').append('<span id="maxTemp" class="temp slash">').append('<br>').append('<span id="currentLoc">');
		$('#minTemp').text(currentMin);
		$('#maxTemp').text(currentMax);
		$('#currentLoc').text(location);

		$('.weatherInfo').append('<div class="section2">');
		$('.section2').append('<span id="currentTemperature" class="temp">');
		$('#currentTemperature').text(currentTemp);

		$('.weatherInfo').append('<div class="section3">');
		$('.section3').append('<span id="condition">').append('<br>').append('<span id="apparentTemp" class="temp">');
		$('#apparentTemp').text("feels "+ currentApparent);

		// ===== HOURLY DATA =====
		// array with hours format to be passed to the DOM
		var hours = ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM" , "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"];
		// getting hourly data object
		var hourlyData = data.hourly.data;
		// console.log(hourlyData);

		// empty array to get the epoch time from for loop(hours)
		var hourArray = [];

		// loop to push each epoch time (hours) multiplied by 3000 cause JavaScript needs the miliseconds instead of seconds.
		for (var i = 0; i < hourlyData.length; i++) {
			hourArray.push(hourlyData[i].time*1000);
		};
		// console.log(hourArray)

		// getting the current date by creating and object date that takes the miliseconds of second place in the array to get the timestamp.
		var currentDate = new Date(hourArray[1]);
		// console.log(date);

		// getting the current hour (number 0-23) of the currentDate.
		var currentHour = currentDate.getHours();
		// console.log(currentHour);

		// matching the number hour with the number item of Array to pass the hour format to DOM.
		var hourFirst = hours[currentHour];
		// console.log(hourOfArray);

		// getting temperature from each time from the array
		var hourlyDataFirst = hourlyData[1].temperature;
		console.log(hourlyDataFirst);



		//=== Another simple and direct way to code to pass the data.
		var currentDate = new Date(hourArray[2]);
		var hourSecond = hours[currentDate.getHours()];
		// console.log(hourSecond);

		// getting temperature from each time from the array
		var hourlyDataSecond = hourlyData[2].temperature;
		console.log(hourlyDataSecond);



		var currentDate = new Date(hourArray[3]);
		var currentHour = currentDate.getHours();
		var hourThird = hours[currentHour];
		console.log(hourThird);

		// getting temperature from each time from the array
		var hourlyDataThird = hourlyData[3].temperature;
	

		var currentDate = new Date(hourArray[4]);
		var currentHour = currentDate.getHours();
		var hourFourth = hours[currentHour];
		console.log(hourFourth);

		// getting temperature from each time from the array
		var hourlyDataFourth = hourlyData[4].temperature;
		

		var currentDate = new Date(hourArray[5]);
		var currentHour = currentDate.getHours();
		var hourFifth = hours[currentHour];
		console.log(hourFifth);

		// getting temperature from each time from the array
		var hourlyDataFifth = hourlyData[5].temperature;
	

		var currentDate = new Date(hourArray[6]);
		var currentHour = currentDate.getHours();
		var hourSixth = hours[currentHour];
		
		var hourlyDataSixth = hourlyData[6].temperature;

		var currentDate = new Date(hourArray[7]);
		var currentHour = currentDate.getHours();
		var hourSeventh = hours[currentHour];
		
		var hourlyDataSeventh = hourlyData[7].temperature;

		var currentDate = new Date(hourArray[8]);
		var currentHour = currentDate.getHours();
		var hourEight = hours[currentHour];
		
		var hourlyDataEight = hourlyData[8].temperature;

		var currentDate = new Date(hourArray[9]);
		var currentHour = currentDate.getHours();
		var hourNine = hours[currentHour];
		
		var hourlyDataNine = hourlyData[9].temperature;

		var currentDate = new Date(hourArray[10]);
		var currentHour = currentDate.getHours();
		var hourTen = hours[currentHour];
		
		var hourlyDataTen = hourlyData[10].temperature;

		var currentDate = new Date(hourArray[11]);
		var currentHour = currentDate.getHours();
		var hourEleven = hours[currentHour];
		
		var hourlyDataEleven = hourlyData[11].temperature;

		var currentDate = new Date(hourArray[12]);
		var currentHour = currentDate.getHours();
		var hourTwelve = hours[currentHour];
		
		var hourlyDataTwelve = hourlyData[12].temperature;



   		// creating hours data section and append it to the DOM 
		$('body').append('<div class="moreInfo">');
		$('.moreInfo').append('<div id="owl-example"class="hours owl-carousel">');
		$('.hours').append('<div class="hour hourBoxOne">');
		$('.hourBoxOne').append('<div id="firstHour">').append('<div id="firstHourTemp" class="temp">');

		// parsing format time from the array and hourly data from forecast io to the DOM 
		$('#firstHour').text(hourFirst);
		$('#firstHourTemp').text(Math.floor(hourlyDataFirst));
		// hour box two
		$('.hours').append('<div class="hour hourBoxTwo">');
		$('.hourBoxTwo').append('<div id="secondHour">').append('<div id="secondHourTemp" class="temp">');
		// parsing data 
		$('#secondHour').text(hourSecond);
		$('#secondHourTemp').text(Math.floor(hourlyDataSecond));

		$('.hours').append('<div class="hour hourBoxThree">');
		$('.hourBoxThree').append('<div id="thirdHour">').append('<div id="thirdHourTemp" class="temp">');
		$('#thirdHour').text(hourThird);
		$('#thirdHourTemp').text(Math.floor(hourlyDataThird));

		$('.hours').append('<div class="hour hourBoxFour">');
		$('.hourBoxFour').append('<div id="fourthHour">').append('<div id="fourthHourTemp" class="temp">');
		$('#fourthHour').text(hourFourth);
		$('#fourthHourTemp').text(Math.floor(hourlyDataFourth));

		$('.hours').append('<div class="hour hourBoxFive">');
		$('.hourBoxFive').append('<div id="fifthHour">').append('<div id="fifthHourTemp" class="temp">');
		$('#fifthHour').text(hourFifth);
		$('#fifthHourTemp').text(Math.floor(hourlyDataFifth));

		$('.hours').append('<div class="hour hourBoxSix">');
		$('.hourBoxSix').append('<div id="sixthHour">').append('<div id="sixthHourTemp" class="temp">');
		$('#sixthHour').text(hourSixth);
		$('#sixthHourTemp').text(Math.floor(hourlyDataSixth));

		$('.hours').append('<div class="hour hourBoxSeven">');
		$('.hourBoxSeven').append('<div id="seventhHour">').append('<div id="seventhHourTemp" class="temp">');
		$('#seventhHour').text(hourSeventh);
		$('#seventhHourTemp').text(Math.floor(hourlyDataSeventh));

		$('.hours').append('<div class="hour hourBoxEight">');
		$('.hourBoxEight').append('<div id="eightHour">').append('<div id="eightHourTemp" class="temp">');
		$('#eightHour').text(hourEight);
		$('#eightHourTemp').text(Math.floor(hourlyDataEight));

		$('.hours').append('<div class="hour hourBoxNine">');
		$('.hourBoxNine').append('<div id="nineHour">').append('<div id="nineHourTemp" class="temp">');
		$('#nineHour').text(hourNine);
		$('#nineHourTemp').text(Math.floor(hourlyDataNine));

		$('.hours').append('<div class="hour hourBoxTen">');
		$('.hourBoxTen').append('<div id="tenHour">').append('<div id="tenHourTemp" class="temp">');
		$('#tenHour').text(hourTen);
		$('#tenHourTemp').text(Math.floor(hourlyDataTen));

		$('.hours').append('<div class="hour hourBoxEleven">');
		$('.hourBoxEleven').append('<div id="elevenHour">').append('<div id="elevenHourTemp" class="temp">');
		$('#elevenHour').text(hourEleven);
		$('#elevenHourTemp').text(Math.floor(hourlyDataEleven));

		$('.hours').append('<div class="hour hourBoxTwelve">');
		$('.hourBoxTwelve').append('<div id="twelveHour">').append('<div id="twelveHourTemp" class="temp">');
		$('#twelveHour').text(hourTwelve);
		$('#twelveHourTemp').text(Math.floor(hourlyDataTwelve));

		// =====   NEXT DAYS   ====== 

		var tempMinToday = Math.floor(data.daily.data[0].temperatureMin);
		var tempMinFirst = Math.floor(data.daily.data[1].temperatureMin);
		var tempMinSecond = Math.floor(data.daily.data[2].temperatureMin);
		var tempMinThird = Math.floor(data.daily.data[3].temperatureMin);
		var tempMinFourth = Math.floor(data.daily.data[4].temperatureMin);
		var tempMinFifth = Math.floor(data.daily.data[5].temperatureMin);
		var tempMinSixth = Math.floor(data.daily.data[6].temperatureMin);
		var tempMinSeventh = Math.floor(data.daily.data[7].temperatureMin);
		
		var tempMaxToday = Math.floor(data.daily.data[0].temperatureMax);
		var tempMaxFirst = Math.floor(data.daily.data[1].temperatureMax);
		var tempMaxSecond = Math.floor(data.daily.data[2].temperatureMax);	
		var tempMaxThird = Math.floor(data.daily.data[3].temperatureMax);
		var tempMaxFourth = Math.floor(data.daily.data[4].temperatureMax);
		var tempMaxFifth = Math.floor(data.daily.data[5].temperatureMax);
		var tempMaxSixth = Math.floor(data.daily.data[6].temperatureMax);
		var tempMaxSeventh = Math.floor(data.daily.data[7].temperatureMax);

		$('.moreInfo').append('<div class="nextDays">');

		$('.nextDays').append('<div class="daysBox today">');
		$('.today').append('<div id="todayDay" class="days">').append('<div id="icon" class="dayCondition">').append('<div id="minTempToday" class="dayTemp temp">').append('<div id="maxTempToday" class="dayTemp temp">');
		$('#minTempToday').text(tempMinToday);
		$('#maxTempToday').text(tempMaxToday);

		$('.nextDays').append('<div class="daysBox one">');
		$('.one').append('<div id="firstDay" class="days">').append('<div id="icon" class="dayCondition">').append('<div id="minTempFirst" class="dayTemp temp">').append('<div id="maxTempFirst" class="dayTemp temp">');
		$('#minTempFirst').text(tempMinFirst);
		$('#maxTempFirst').text(tempMaxFirst);

		$('.nextDays').append('<div class="daysBox two">');
		$('.two').append('<div id="secondDay" class="days">','<div id="icon" class="dayCondition">', '<div id="minTempSecond" class="dayTemp temp">', '<div id="maxTempSecond" class="dayTemp temp">');
		$('#minTempSecond').text(tempMinSecond);
		$('#maxTempSecond').text(tempMaxSecond);

		$('.nextDays').append('<div class="daysBox three">');
		$('.three').append('<div id="thirdDay" class="days">','<div id="icon" class="dayCondition">', '<div id="minTempThird" class="dayTemp temp">', '<div id="maxTempThird" class="dayTemp temp">');
		$('#minTempThird').text(tempMinThird);
		$('#maxTempThird').text(tempMaxThird);


		$('.nextDays').append('<div class="daysBox four">');
		$('.four').append('<div id="fourthDay" class="days">', '<div id="icon" class="dayCondition">','<div id="minTempFourth" class="dayTemp temp">', '<div id="maxTempFourth" class="dayTemp temp">');
		$('#minTempFourth').text(tempMinFourth);
		$('#maxTempFourth').text(tempMaxFourth);

		$('.nextDays').append('<div class="daysBox five">');
		$('.five').append('<div id="fifthDay" class="days">', '<div id="icon" class="dayCondition">','<div id="minTempFifth" class="dayTemp temp">', '<div id="maxTempFifth" class="dayTemp temp">');
		$('#minTempFifth').text(tempMinFifth);
		$('#maxTempFifth').text(tempMaxFifth);

		$('.nextDays').append('<div class="daysBox six">');
		$('.six').append('<span id="sixthDay" class="days">', '<span id="icon" class="dayCondition">', '<span id="minTempSixth" class="dayTemp temp">', '<span id="maxTempSixth" class="dayTemp temp">');
		$('#minTempSixth').text(tempMinSixth);
		$('#maxTempSixth').text(tempMaxSixth);


		$('.nextDays').append('<div class="daysBox seven">');
		$('.seven').append('<span id="seventhDay" class="days">', '<span id="icon" class="dayCondition">', '<span id="minTempSeventh" class="dayTemp temp">', '<span id="maxTempSeventh" class="dayTemp temp">');
		$('#minTempSeventh').text(tempMinSeventh);
		$('#maxTempSeventh').text(tempMaxSeventh);
		
		
		var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		
		var dailyTime = data.daily.data;
		// console.log(dailyTime);
		var timeArray = [];
		// console.log(timeArray); THIS ONE WON'T WORK UNLESS IS AFTER THE FOR LOOP THAT PUSHES THE ITEMS INTO THE ARRAY.
		
		for (var i = 0; i < dailyTime.length; i++) {
			timeArray.push(dailyTime[i].time*1000);	
		}

		// console.log(timeArray);

		var dateArrayToday = new Date(timeArray[0]);
		var dateToday = "Today";

		var dateArrayOne = new Date(timeArray[1]);
		var dateFirst = "Tomorrow";
		// console.log(dateArrayOne);

		var dateArrayTwo = new Date(timeArray[2]);
		var dateSecond = days[dateArrayTwo.getDay()];

		var dateArrayThree = new Date(timeArray[3]);
		var dateThird = days[dateArrayThree.getDay()];

		var dateArrayFour = new Date(timeArray[4]);
		var dateFourth = days[dateArrayFour.getDay()];

		var dateArrayFive = new Date(timeArray[5]);
		var dateFifth = days[dateArrayFive.getDay()];

		var dateArraySix = new Date(timeArray[6]);
		var dateSixth = days[dateArraySix.getDay()];

		var dateArraySeven = new Date(timeArray[7]);
		var dateSeventh = days[dateArraySeven.getDay()];

		$('#todayDay').text(dateToday);
		$('#firstDay').text(dateFirst);
		$('#secondDay').text(dateSecond);
		$('#thirdDay').text(dateThird);
		$('#fourthDay').text(dateFourth);
		$('#fifthDay').text(dateFifth);
		$('#sixthDay').text(dateSixth);
		$('#seventhDay').text(dateSeventh);

		$("#owl-example").owlCarousel();
		// ===== DAY TYPE OBJECT WITH TEXT ICON AND BACKGROUND IMAGE TO BE PARSE IN DOM ===== 
		var daytypes = {
			clearDay: {
				text: "clear day",
				images: ["https://farm4.staticflickr.com/3040/2934688339_9e3c1c6750.jpg",
						 "https://farm1.staticflickr.com/168/380900579_453b72de58.jpg",
						 "https://farm9.staticflickr.com/8115/8617971763_a59ef515d3.jpg"
						]
			},
			clearNight: {
				text: "clear night",
				images: [
						"https://farm6.staticflickr.com/5326/9089559758_ce0d6d385f.jpg",
						"https://farm6.staticflickr.com/5249/5337935521_c4d99f091f.jpg",
						"https://farm8.staticflickr.com/7413/12180560686_164b3364e1.jpg",
						"https://farm6.staticflickr.com/5534/11444282656_d40203997e_b.jpg"
						]
			},
			rain: {
				text: "rain",
				images: [
						"https://farm4.staticflickr.com/3874/14806701421_f4c5382706.jpg",
						"https://farm8.staticflickr.com/7261/7527668312_3eaed7b5ca_c.jpg"]
			},
			snow: {
				text: "snow",
				images: ["https://farm8.staticflickr.com/7047/6868830567_8df11d617d_b.jpg"]
			},
			sleet: {
				text: "sleet",
				images: ["https://farm8.staticflickr.com/7047/6868830567_8df11d617d_b.jpg"]
			},
			wind: {
				text: "wind",
				images: ["https://farm6.staticflickr.com/5607/15345467969_50a174f1b9_b.jpg"]
			},
			fog: {
				text: "fog",
				images: ["https://farm8.staticflickr.com/7346/9415714887_8e664978af_b.jpg"]
			},
			cloudy: {
				text: "cloudy",
				images: [
						"https://farm3.staticflickr.com/2874/8824782386_deedf191a0_b.jpg",
						"https://farm5.staticflickr.com/4059/4730495277_5acc3260df_b.jpg",
						"https://farm4.staticflickr.com/3890/14620757084_63fec30a3e_b.jpg"
						]
			},
			partlyCloudyDay: {
				text: "partly cloudy day",
				images: ["https://farm6.staticflickr.com/5498/30631423694_a296e9b366_b.jpg"
						]
			},
			partlyCloudyNight: {
				text: "partly cloudy night",
				images: [
						"https://farm8.staticflickr.com/7162/6770941985_0cc0e32efa_b.jpg",
						"https://farm6.staticflickr.com/5534/11444282656_d40203997e_b.jpg",
						"https://farm6.staticflickr.com/5326/9089559758_ce0d6d385f.jpg",
						"https://farm6.staticflickr.com/5249/5337935521_c4d99f091f.jpg",
						"https://farm8.staticflickr.com/7413/12180560686_164b3364e1.jpg"
						]
			}	
		};


		function getIconText (weather){



			if(weather === "clear-day")
				return daytypes.clearDay.text;

			if(weather === "clear-night")
				return daytypes.clearNight.text;

			if(weather === "rain")
				return daytypes.rain.text;

			if(weather === "snow")
				return daytypes.snow.text;

			if(weather === "sleet")
				return daytypes.sleet.text;

			if(weather === "wind")
				return daytypes.wind.text;

			if(weather === "fog")
				return daytypes.fog.text;

			if(weather === "cloudy")
				return daytypes.cloudy.text;

			if(weather === "partly-cloudy-day")
				return daytypes.partlyCloudyDay.text;

			if(weather === "partly-cloudy-night")
				return daytypes.partlyCloudyNight.text;
		}

		function getIcon (day){



			
			if(day == "clear-day")
				return daytypes.clearDay.images[Math.floor(Math.random()*daytypes.clearDay.images.length)];

			if(day == "clear-night")
				return daytypes.clearNight.images[Math.floor(Math.random()*daytypes.clearNight.images.length)];

			if(day == "rain")
				return daytypes.rain.images[Math.floor(Math.random()*daytypes.rain.images.length)];

			if(day == "snow")
				return daytypes.snow.images[Math.floor(Math.random()*daytypes.snow.images.length)];

			if(day == "sleet")
				return daytypes.sleet.images[Math.floor(Math.random()*daytypes.sleet.images.length)];

			if(day == "wind")
				return daytypes.wind.images[Math.floor(Math.random()*daytypes.wind.images.length)];

			if(day == "fog")
				return daytypes.fog.images[Math.floor(Math.random()*daytypes.fog.images.length)];

			if(day == "cloudy")
				return daytypes.cloudy.images[Math.floor(Math.random()*daytypes.cloudy.images.length)];

			if(day == "partly-cloudy-day")
				return daytypes.partlyCloudyDay.images[Math.floor(Math.random()*daytypes.partlyCloudyDay.images.length)];

			if(day == "partly-cloudy-night")
				return daytypes.partlyCloudyNight.images[Math.floor(Math.random()*daytypes.partlyCloudyNight.images.length)];

		}
	

// daytypes.clearDay.text;
// daytypes.clearDay.images;

var dayTypeText = getIconText(data.currently.icon);
		$('#condition').text(dayTypeText);

		var dayType = getIcon(data.currently.icon);
		$('body').css('background-image','url(' + dayType + ')');
		console.log(dayType);

	
	}





	

	// Show an error if we can't access the weather
	function showError(){
		$('#temp').text('Oh no! Your forecast is currently unavailable.');
		$('body').css('background-color','rgb(240,14,30');	
	}


});