function toggleMode() {
  const html = document.documentElement
  
 if(html.classList.contains('light')) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  //pegar a tag img

  const img = document.querySelector('#profile img')

  if (html.classList.contains("light")) {
    //se tiver LightMode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute(
      "alt",
      "Foto do Henrique Porto, sorrindo, usando uma camiseta cinza, barba e com fundo azul"
    )
  } else {
    //se tiver sem o LightMode, manter a imagem original
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto do Henrique Porto, sorrindo, usando uma camiseta cinza, barba e com fundo rosa"
    )
  }
}