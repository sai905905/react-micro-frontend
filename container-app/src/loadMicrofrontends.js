
export function loadMicrofrontend(url, containerId) {
  const script = document.createElement('script')
  script.src = url
  script.onload = () => {
    const container = document.getElementById(containerId)
    const microfrontend = document.createElement('div')
    microfrontend.innerHTML = window[containerId].render()
    container.appendChild(microfrontend)
  }
  document.head.appendChild(script)
}
