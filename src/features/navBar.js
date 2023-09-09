const template = document.createElement('template')
template.innerHTML = `
<style>
.nav-links-container {
    padding: 16px;
    background-image: linear-gradient(to right, var(--yellow), var(--green));
    display: flex;
    gap: 25px;
}

p {
    font-size: 16px;
}
</style>

<div class="nav-bar-container">
    <div class="nav-links-container">
        <slot name="nav-link"/>
    </div>
<div/>
`;
class NavBar extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define('nav-bar', NavBar)