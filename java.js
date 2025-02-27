class musicas {

    constructor(){
        this.id = 1;
        this.arrayProdutos = [];
    }

    adicionar(){
        let musica = this.lerdados();

        if(this.validaCampos(musica)){
            this.adicionar(musica);
        }

        this.listatabela();
    }

    listatabela(){
        let tbory = document.getElementById('tbory')

        for(let i = 0;i < this.arrayProdutos.length; i++) {
            let tr = tbory.inertRow();

            let td_id = tr.inertCell();
            let td_musica = tr.inertCell();
            let td_banda = tr.inertCell();
            let td_acoes = tr.inertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_musica.innerText = this.arrayProdutos[i].nomemusica;
            td_banda.innerText = this.arrayProdutos[i.banda];

        }
    }

    adicionar(musica){
        this.arrayProdutos.push(musica);
        this.id++;
    }
    lerdados(){
        let musica = {}
        
    musica.id = this.id;
    musica.nomemusica = document.getElementById('musica').value;
    musica.banda = document.getElementById('banda').value;

        return musica
    }

    validaCampos(){
        let msg = '';

        if(musica.nomemusica == ''){
            msg += '- informe a musica \n';
        }
        if(musica.banda == ''){
            msg += '- informe a banda da musica \n';
        }
        if(msg != ''){
            alert(msg)
            return false
        }
        return true;
    }

    excluir(){

    }
}

var musica = new musica();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          