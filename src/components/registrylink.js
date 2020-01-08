import React from "react"

const reflinks = [
  {
    label: "m0r",
    path:
      "http://app.kuailiandp.com/auth/register/ref/d70d60e9-7704-46fa-a943-858ff5f63e72",
  },
  {
    label: "oswil",
    path:
      "http://app.kuailiandp.com/auth/register/ref/a5a67f20-a8ea-4bbd-9032-e456deafb284",
  },
  {
    label: "peris",
    path:
      "http://app.kuailiandp.com/auth/register/ref/8effea01-dc72-497e-b89a-271c592db093",
  },
]

function Rand() {
  const random = reflinks[Math.floor(Math.random() * reflinks.length)]
  var ranpath = random.path
  console.log(ranpath)
  return (
    <div className="kuai__amount">
      LINK
      <li>
        {reflinks.map(({ label }) => (
          <a key={ranpath} href={ranpath}>
            {label}clica
          </a>
        ))}
      </li>
    </div>
  )
}
export default Rand
