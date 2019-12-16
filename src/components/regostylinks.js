var links = [
  "http://app.kuailiandp.com/auth/register/ref/8effea01-dc72-497e-b89a-271c592db093",
  "http://app.kuailiandp.com/auth/register/ref/a5a67f20-a8ea-4bbd-9032-e456deafb284",
  "http://app.kuailiandp.com/auth/register/ref/d70d60e9-7704-46fa-a943-858ff5f63e72",
]

var OpenSite = function() {
  // get a random number
  var randIdx = Math.random() * links.length
  // round it, so it can be used as array index
  randIdx = parseInt(randIdx, 10)
  // construct the link to be opened
  var random = links[randIdx]

  return random
}
export default OpenSite
