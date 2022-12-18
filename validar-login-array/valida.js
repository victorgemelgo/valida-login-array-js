const usuarios = [
    {
        login: 'victor',
        pass: 'victor'
    },
    {
        login: 'julio',
        pass: 'julio'
    },
    {
        login: 'admin',
        pass: 'admin'
    }
]

let botao = document.getElementById('btnLogar')

botao.addEventListener('click', function logar(){

    let pegaUsuario = document.getElementById('usuario').value
    let pegaSenha = document.getElementById('senha').value

    for(let i in usuarios){

        if(pegaUsuario == usuarios[i].login){
            alert('ok')
        }

    }

})


