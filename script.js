
    //we could write javascript here
  document.getElementById('second-heading').innerHTML = 'Hey class...'
      const getDataButton = document.getElementById('get-data')
    getDataButton.addEventListener('click',() => {
          console.log('testing here')

            //your saying query the document and find pre
        function displayData(allBeers){
            document.querySelector('pre').innerHTML = JSON.stringify(allBeers,null,2);
        }


            //the path of receiving the beers
          fetch('https://api.sampleapis.com/beers/ale')
          //transform the data into json
          .then(data => data.json())
          //once you get the beers call the function that will display the data
          .then(beers => displayData(beers))
          .catch(err => console.log(err))
      })

      function showAlert(){
        alert('We are finally done')
      }
      const alertBtn = document.getElementById('show-alert-btn')
      alertBtn.addEventListener('click', showAlert)
    