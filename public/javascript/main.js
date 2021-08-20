// DOM Elements
const endpoints = document.querySelectorAll('.endpoint')
const docs = document.querySelectorAll('.doc')

// Main Function
const activateEndpoint = (event) => {
  toggleShowcase(event.target.dataset.endpoint)
  event.target.classList.add('selected')
}

// Toggle Selected and Hidden classes on target endpoint and doc
const toggleShowcase = (endpointData) => {
  endpoints.forEach(endpoint => {
    endpoint.classList.remove('selected')
  })
  docs.forEach(doc => {
    if (doc.dataset.doc === endpointData) {
      doc.classList.remove('hidden')
    } else {
      doc.classList.add('hidden')
    }
  })
}

// Loop over endpoints and add click event
endpoints.forEach(endpoint => {
  endpoint.addEventListener('click', activateEndpoint)
})


