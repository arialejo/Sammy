document.addEventListener('DOMContentLoaded', () => {
    
    const fechaReferencia = new Date('2022-12-23T14:49:00'); 
    const mensajes = ["Te amo", "Psss", "Añaaa", "AIÑÑÑÑÑ"];

    function actualizarContador() {
        const elContador = document.getElementById('contador');
        if (elContador) {
            const ahora = new Date();
            const diferencia = ahora - fechaReferencia;

            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
            const minutos = Math.floor((diferencia / 1000 / 60) % 60);
            const segundos = Math.floor((diferencia / 1000) % 60);

            elContador.innerText = `${dias} días, ${horas}h, ${minutos}m, ${segundos}s`;
        }
    }
    setInterval(actualizarContador, 1000);
    actualizarContador();

    
    const contenedorGaleria = document.getElementById('galeria-fotos');
    if (contenedorGaleria) {
        for (let i = 1; i <= 15; i++) {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'tarjeta-foto';
            tarjeta.innerHTML = `
                <img src="imagenes/alysa${i}.jpg" alt="Recuerdo ${i}">
                <p class="pie-foto">Momento #${i}</p>
            `;
            contenedorGaleria.appendChild(tarjeta);
        }
    }

    
    document.addEventListener('click', (e) => {
        if (e.target.closest('.nota-expandible') || e.target.closest('.overlay-final')) return;

        const elemento = document.createElement('div');
        elemento.className = 'elemento-flotante';
        elemento.innerText = mensajes[Math.floor(Math.random() * mensajes.length)];
        elemento.style.fontFamily = '"Sour Gummy", sans-serif';
        elemento.style.color = '#2545c2'; 
        elemento.style.fontSize = '2rem';
        elemento.style.fontWeight = 'bold'; 
        elemento.style.left = e.pageX + 'px';
        elemento.style.top = e.pageY + 'px';
        elemento.style.position = 'absolute';

        document.body.appendChild(elemento);
        setTimeout(() => elemento.remove(), 2000);
    });

    const nota = document.getElementById('miNota');
    const btnFinal = document.getElementById('botonFinal');
    const pantallaFinal = document.getElementById('pantallaFinal');
    const btnCerrar = document.getElementById('cerrarFinal');

    if (nota) {
        nota.addEventListener('click', function(e) {
            if (e.target.id === 'botonFinal') return;
            
            e.stopPropagation(); 
            this.classList.toggle('abierta');
        });
    }

   
if (btnFinal && pantallaFinal) {
    btnFinal.addEventListener('click', (e) => {
        e.stopPropagation();
        pantallaFinal.style.display = 'flex'; 
    });
}


if (btnCerrar) {
    btnCerrar.addEventListener('click', () => {
        pantallaFinal.style.display = 'none';
    });
}
});