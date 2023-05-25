class Button extends HTMLElement {
    
    constructor() {
        super()

        const button = this.attachShadow({mode: "open"})
        button.innerHTML = '<button>SUPER</button>'

        const style = document.createElement("style")
        style.textContent = `
            button {
                color: black;
                background-color: yellow;
                padding: 10px;
            }
        `

        button.appendChild(style)
    }
}

customElements.define('button-super', Button)