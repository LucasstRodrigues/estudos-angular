class Titulo extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: 'open'})

        const h1 = document.createElement('h1')
        h1.textContent = this.getAttribute('content')

        const style = document.createElement("style")
        style.textContent = `
            h1 {
                color: blue;
                text-align: center;
            }
        `

        shadow.appendChild(h1)
        shadow.appendChild(style)
    }
}

customElements.define('titulo-principal', Titulo)