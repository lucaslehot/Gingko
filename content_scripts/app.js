const GKbodyContent = document.querySelectorAll("body > *")
const GKbody = document.querySelector("body")

const GKcontainer = document.createElement("div")
const GKlightingLeft = document.createElement("div")
const GKlightingRight = document.createElement("div")
GKlightingLeft.classList.add("GKlighting", "left")
GKlightingRight.classList.add("GKlighting", "right")
GKbody.appendChild(GKlightingLeft)
GKbody.appendChild(GKlightingRight)



GKbody.appendChild(GKcontainer)
GKbody.classList.add("GKbody")
GKcontainer.classList.add("GKcontainer")

for (let i = 0 ; i < GKbodyContent.length ; i++)
{
  GKcontainer.appendChild(GKbodyContent[i])
}
