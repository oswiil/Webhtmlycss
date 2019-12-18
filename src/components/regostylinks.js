import React from "react"

const links = [
  {
    label: "registrate AQUI",
    path:
      "http://app.kuailiandp.com/auth/register/ref/8effea01-dc72-497e-b89a-271c592db093",
  },
  {
    label: "registrate AQUI",
    path:
      "http://app.kuailiandp.com/auth/register/ref/a5a67f20-a8ea-4bbd-9032-e456deafb284",
  },
  {
    label: "registrate AQUI",
    path:
      "http://app.kuailiandp.com/auth/register/ref/d70d60e9-7704-46fa-a943-858ff5f63e72",
  },
]

const OpenSite = () => {
  // get a random number
  var randIdx = Math.random() * links.length
  randIdx = Math.floor(randIdx)
  // construct the link to be opened
  var random = links[randIdx]

  console.log(random.path)
  return (
    <div className="start">
      <button onClick={OpenSite} />
      <a href={random.path}>Registrate Aqui</a>
    </div>
  )
}

export default OpenSite
