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

const Rand = () => {
  const random = reflinks[Math.floor(Math.random() * reflinks.length)]

  return (
    <div className="kuai__amount">
      LINK
      <tr>
        {reflinks.map(({ path, label }) => (
          <a href={path}>{label}</a>
        ))}
      </tr>
    </div>
  )
}
export default Rand
