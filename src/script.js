!function() {
    const inputs = document.querySelectorAll('.letter-input');
    // 1. Pegamos o modal e o botão no HTML
    const modalAcerto = document.getElementById('modal-acerto');
    const btnFecharModal = document.getElementById('btn-fechar-modal');

    // 2. Esta é a função que você vai chamar quando o código confirmar que a palavra está certa
    function mostrarPopUpVitoria() {
        // Removemos a classe 'hidden' para ele aparecer na tela
        modalAcerto.classList.remove('hidden');
    }

    // 3. O evento de fechar a caixinha quando a pessoa clica no botão
    btnFecharModal.addEventListener('click', () => {
        // Colocamos o 'hidden' de volta para esconder
        modalAcerto.classList.add('hidden');
    });

    // Apenas para você testar agora (apague depois!): 
    // Vai mostrar o pop-up automaticamente 3 segundos depois de abrir a página
    setTimeout(mostrarPopUpVitoria, 2000);
    
    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            // Se o usuário digitou uma letra, pula para o próximo quadradinho
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        // Se o usuário apertar Backspace (apagar), volta para o quadradinho anterior
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });
}();