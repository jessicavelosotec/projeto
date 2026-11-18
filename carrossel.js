let slideAtual = 0;

function atualizarCarrossel() {
    const slides = document.querySelectorAll('.slide-item');
    const pontos = document.querySelectorAll('.ponto-index');

    if (slides.length === 0) return;

    slides.forEach((slide, index) => {
        slide.classList.toggle('ativo', index === slideAtual);
    });

    pontos.forEach((ponto, index) => {
        ponto.classList.toggle('ativo', index === slideAtual);
    });
}

function mudarSlide(direcao) {
    const slides = document.querySelectorAll('.slide-item');
    if (slides.length === 0) return;

    slideAtual = (slideAtual + direcao + slides.length) % slides.length;
    atualizarCarrossel();
}

function irParaSlide(index) {
    const slides = document.querySelectorAll('.slide-item');
    if (index >= 0 && index < slides.length) {
        slideAtual = index;
        atualizarCarrossel();
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') mudarSlide(-1);
    if (e.key === 'ArrowRight') mudarSlide(1);
});