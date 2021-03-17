const submitBtn = document.getElementById('submitBtn')
const cityName = document.getElementById('cityName')

const dataHide = document.querySelector('#hide')

const getInfo = (event) => {
  event.preventDefault()
  let cityVal = citName.value;

  if(cityName === '') {
    city_name.innerText = `please enter the city name`
  } else {
      try {
        let url = 'api.openweathermap.org'
        const response =  await fetch(url)
        const data = await response.json()
        const arrData = [data]
        city_name.innerText = `${arrData[0].name}`
      } catch(err) {
          console.log(err)
      }
  }
}

submitBtn.addEventListener('click', getInfo)


const getCurrentDay = () => {
  let weekday = new Array()
  weekday[0] = 'sunday'
  weekday[1] = 'monday'
  weekday[2] = 'tuesday'

  let currentTime = new Date();
  let day = weekday[currentTime.getDay()]

  return day;
}