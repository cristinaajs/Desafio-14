document.getElementById('cep').addEventListener('blur', function(){
    const cep = this.value
    document.getElementById('cep').value=cep.replace(/(\d{1,5})(\d{3})$/, '$1-$2')

    if (cep) {

        fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        })
        
        .then(response => response.json())
        .then(data => {
            if (data.erro){
                alert('CEP não existe');
            } else {
                document.getElementById('rua').value=data.logradouro;
                document.getElementById('bairro').value=data.bairro;
                document.getElementById('cidade').value=data.localidade;
                document.getElementById('estado').value=data.uf;
                
            }
        })
        .catch(error => console.log(error))
    }
});



