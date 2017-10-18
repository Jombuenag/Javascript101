class Bar {
    constructor(propertyName, quantity, element) {
        // Las clases de javascript tienen su constructor. Se ejecuta siempre despues de crearlas (new Bar)
        this.propertyName = propertyName; // nombre: str, def..
        this.quantity = quantity; // valor: 3 puntos, 1 punto...;
        this.element = element; // elemento html donde vamos a generarlas! Se generarán dentro
    }

    /**
     * Este es el metodo principal. Primero creamos las barras y despues lo llamamos.
     * Podrías ahorrarte llamarlo desde app.js (bar.render() ) si ejecutas .render
     * desde el constructor. Pero recuerda quitar entonces el bar.render de app.js
     */
    render() {
        let bars = '';

        // Iteramos desde 1 hasta el quantity de la propiedad. Si tienes 3 puntos de str, esto se ejecuta 3 veces...
        for (let i=1; i<=this.quantity; i++) {
            const minVal = 4; // Valor minimo de height que queremos. Si tienes 1 punto entonces te dibuja 4 pixeles de barra minimos
            const increment = 4; // Incremento en pixeles de cada barra
            const calculatedHeight = minVal + increment*i; // El tamaño calculador que tendrá la barra de la iteracion
            const barElem = `<div style="height: ${calculatedHeight}px;" class="bar"></div>`; // dibujamos la barra!
            bars += barElem; // unimos la nueva barra al total de barras de la propiedad. Recuerda que una barra no es el contenedor, sino cada cuadrito rojo que se dibuja
        }

        const barWrapper = this.getBarTemplate(bars); // es de buena costumbre traernos el html generado desde un template. Aqui lo hacemos medioguarro, pero tu puedes crear un template html y llamarlo desde aqui
        this.element.innerHTML += barWrapper; // añadimos este grupo de propiedad a los que hayan!
    }

    getBarTemplate(bars) {
        return `
            <div class="propertyWrapper">${this.propertyName}
                <div class="barWrapper">${bars}
                </div>
            </div>
        `;

    }

}



