document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

var curr_lang = 0;
const cells = document.querySelectorAll('.cell');
const modal = document.querySelector('.modal');
const modal_img = document.querySelector('.modalImg');
const modal_text = document.querySelector('.modalText');
const modal_title = document.querySelector('.modalTitle');
const close = document.querySelector(".close");
const HYA_lang = ['I worked as an art teacher and front desk worker at my local art school. My responsibilities included communicating curriculum plans with other teachers, teaching students art fundamentals, customer interaction, and processing finances.',
                    '我在當地的藝術學校擔任藝術老師和前台工作人員。我的職責包括與其他老師溝通課程計劃、教授學生藝術基礎知識、客戶互動和處理財務。',
                    'J\'ai travaillé comme professeur d\'art et employé de réception à mon école d\'art locale. Mes responsabilités comprenaient la communication des plans de programme avec d\'autres enseignants, l\'enseignement aux étudiants des principes fondamentaux de l\'art, l\'interaction avec les clients et le traitement des finances.']
const HYA_title = ['Art Teacher at Hongyun Art<br>2019 - 2021', '美術老師<br> 2019 - 2021', 'Professeur D\'art<br>2019 - 2021'];
const HYA_array = ["HYApic.png", HYA_lang, HYA_title];

const IEOM_lang = ['Presented the paper Statistical JAVA Gaming Simulation as first author at IEOM Rabat. This paper is an probabilistic of winning outcomes within a game we designed and simulated in JAVA, comparing two players, one who knew winning patterns versus one who did not.', 'Presented the paper Statistical JAVA Gaming Simulation as first author at IEOM Rabat. This paper is an probabilistic of winning outcomes within a game we designed and simulated in JAVA, comparing two players, one who knew winning patterns versus one who did not.', 'Presented the paper Statistical JAVA Gaming Simulation as first author at IEOM Rabat. This paper is an probabilistic of winning outcomes within a game we designed and simulated in JAVA, comparing two players, one who knew winning patterns versus one who did not.']
const IEOM_title = ['IEOM Rabat<br>2017', 'IEOM Rabat<br>2017', 'IEOM Rabat<br>2017'];
const IEOM_array = ['ieom.jpg', IEOM_lang, IEOM_title];

const workdict = {"HYA" : HYA_array, "paper2016" : IEOM_array};



cells.forEach(cell => {
    cell.addEventListener("click", () => {
        modal_img.src= workdict[cell.id][0]
        modal_text.innerHTML= workdict[cell.id][1][curr_lang]
        modal_title.innerHTML = workdict[cell.id][2][curr_lang]

        modal.classList.add("appear");
        close.addEventListener("click", () => {
            modal.classList.remove("appear");
          });

    });
});

const logo_array = ["Logo(English).gif", "Logo(Chinese).gif", "Logo(French).gif"];
const lang_array = ['English', 'Chinese', 'French'];
const resume_array = ['Resume', '簡歷副本', 'CV'];
const welcome_alts = ['Hey! My name is Timothy, and this is my website! It\'s a hub that demonstrates my professional, artistic, and educational experience. I hope you enjoy your time here. You can click one of the buttons below to get started. You can go see a gallery of my projects, download a copy of my resume, or change the website language.',
                        '嘿！我的名字是Timothy，和這是我的網站！這個中心展示我的專業，藝術，和學研的經驗。我希望你會對這個網站有興趣。 你可以單機下面的按鈕之一開始。你可以去看我的項目畫廊，下載我的簡歷副本，或換這個網站的語言。',
                    'Salut! Je m\'appelle Timothy, et ceci est mon site web! C\'est un centre qui demontre mon experience professionelle, artistique et educative. J\'espere que vous apprecierez votre temps ici. Vous pouvez cliquer sur l\'un des boutons ci-dessous pour commencer. Vous pouvez aller voir une galerie de mes projets, telecharger une copie de mon CV, ou changer la langue du site web.'];




const changed_eles = document.getElementsByClassName("modifylanguage");
const eles_length = changed_eles.length;
const lang_button = document.getElementById('language_button');
lang_button.addEventListener("click", changelang);

function changelang(){
    curr_lang++;
    if(curr_lang > 2){
        curr_lang = 0;
    }
    for(var i = 0; i < eles_length; i++){
        switch(changed_eles[i].id){
            case "welcome":
                changed_eles[i].innerHTML = welcome_alts[curr_lang]
            case "logo":
                changed_eles[i].src = logo_array[curr_lang]
        }
    }

    
    document.getElementById('lang_text').innerHTML = lang_array[curr_lang];
    document.getElementById('resume_text').innerHTML = resume_array[curr_lang];
}
