const LazyDisplay = (dad, nameElement = '',type, retard = false, time = 0) => {
  if (!dad) return
  const element = dad.querySelectorAll(nameElement)
  if (!retard) {
    [...element].forEach(e=>e.style.display=type)
    return
  }
  setTimeout(() => {
    [...element].forEach(e=>e.style.display=type)
  }, time)
}

const HelpersFunction = {
  LazyDisplay
}

export default HelpersFunction
