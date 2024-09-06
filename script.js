function toggleMode(){
    const html = document.documentElement

    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // }else{
    //     html.classList.add('light')
    // }
    html.classList.toggle('light')

    // Caso queira substituir a Imagem:
    // const img = document.querySelector("#profile img")
    // substituindo a imagem:
    // if(html.classList.contains('light')){
    //     img.setAttribute('src', './assets/img/Profile.jpg')
    // }else{
    //     img.setAttribute('src', './assets/img/Profile2.jpg')
    // }
}