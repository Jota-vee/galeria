let imgs_tela = [];
let imgs_tipo = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8"];
let imgs_nao_virada = [];
let imgs = [];
let pontuacao = 0;

function instanciar_imgs(){
    for(let i=1;i<= 16;i++){
        let img = document.querySelector("#img"+i);
        imgs_tela.push(img);
        imgs_nao_virada.push(true);
    }
}

function Embaralhar(){
    for (let i = imgs_tipo.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [imgs_tipo[i], imgs_tipo[j]] = [imgs_tipo[j], imgs_tipo[i]];
    }    
}

function VirarImgs(id){
        let index = parseInt(id.slice(3, id.length))-1;
        if(imgs.length<2 & imgs_nao_virada[index]){
            if(imgs.length==1){
                if(imgs[0][2]==index){
                    return null;
                }
            }
            imgs.push([imgs_tela[index], imgs_tipo[index], index]);
            imgs_tela[index].setAttribute("src", IMG_PATH + imgs_tipo[index] + ".jpg");

        }
        if(imgs.length==2){
            if(imgs[0][1]==imgs[1][1]){
                pontuacao++;
                document.querySelector("#pontuacao").textContent = `Quokka - pontuação: ${pontuacao}/8`;
                imgs_nao_virada[imgs[0][2]] = false;
                imgs_nao_virada[imgs[1][2]] = false;
                imgs = [];
            }
        else{
            setTimeout(() => {
                imgs[0][0].setAttribute("src", IMG_PATH + "img.jpg");
                imgs[1][0].setAttribute("src", IMG_PATH + "img.jpg");

                imgs = [];
            }, 500);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    instanciar_imgs();
    Embaralhar();
    document.querySelector("#pontuacao").textContent = `Quokka - pontuação: ${pontuacao}/8`;
});