const videos = [
    { 
        title: "Review completa do iPhone 15", 
        channel: "Tech Aquiles", 
        views: "1 mil", 
        time: "há 2 dias", 
        img: "https://i.ytimg.com/vi/bX6JZf9-FTo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVwHH3E8DDu0-tbtHiCwyAYv4dXQ",
        authorImg: "./img/james.png"
    },
    { 
        title: "Como fazer CPA chinês", 
        channel: "João da Aposta", 
        views: "15", 
        time: "há 1 semana", 
        img: "https://cdn.dfg.com.br/itemimages/968417635-exclusivo-mentoria-casa-chinesa-metodo-cpa-infinite-EACI.webp",
        authorImg: "./img/joao.png"
    },
    { 
        title: "4. OS MLK É RUIM - MC Negão Original, Veigh (Toledo, DJ Guh Mix e DJ Yago)", 
        channel: "MC Negão Original", 
        views: "4,5 mi", 
        time: "há 5 horas", 
        img: "https://i.ytimg.com/vi/NepyZ0uQIOo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBpC8soyvdr3Lsd_NYwLY78_dy_yA",
        authorImg: "./img/negao.jpg"
    },
    { 
        title: "Indiretas com a voz Veigh e Supernova Ent", 
        channel: "Veigh", 
        views: "5,1 mi", 
        time: "há 3 dias", 
        img: "https://i.ytimg.com/vi/EVdskUsYRRo/mqdefault.jpg",
        authorImg: "./img/veigh.jpg"
    },
    { 
        title: "NÃO DEU PRA MIM! - RESIDENT EVIL 2 REMAKE - Parte 2", 
        channel: "alanzoka", 
        views: "1.5 mi", 
        time: "há 1 mês", 
        img: "https://i.ytimg.com/vi/BwR2lJigudQ/maxresdefault.jpg",
        authorImg: "./img/alan.jpg"
    },
    { 
        title: "alanzoka jogando Sons Of The Forest com os amigos - Parte #2", 
        channel: "Lives do Alanzoka", 
        views: "2.5 mi", 
        time: "há 2 semanas", 
        img: "https://i.ytimg.com/vi/FON7-Uoc7n0/sddefault.jpg",
        authorImg: "./img/lives.jpg"
    }
];

const videoGrid = document.getElementById('videoGrid');

function loadVideos() {
    videoGrid.innerHTML = "";
    videos.forEach(video => {
        videoGrid.innerHTML += `
            <div class="video-card">
                <div class="thumb-container">
                    <img src="${video.img}" class="thumbnail">
                </div>
                <div class="details">
                    <div class="chan-img" style="background-image: url('${video.authorImg}')"></div>
                    <div class="text-data">
                        <h3 title="${video.title}">${video.title}</h3>
                        <p class="meta-data">${video.channel}</p>
                        <p class="meta-data">${video.views} de visualizações • ${video.time}</p>
                    </div>
                </div>
            </div>
        `;
    });
}

loadVideos();