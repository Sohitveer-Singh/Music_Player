const songList = {
  ck: "songs/CK.mp3",
  tnf: "songs/295.mp3",
  levels: "songs/levels.mp3",
  samebeef: "songs/SB.mp3",
  twb: "songs/12_Bande.mp3",
  thaa: "songs/thaa.mp3",
  kaafla: "songs/kaafla.mp3",
  ej: "songs/El_Jatt.mp3",
  tf: "songs/25-25.mp3",
  hs: "songs/HS.mp3",
  jawani: "songs/jw.mp3",
  jjvg: "songs/JJVG.mp3",
  cma: "songs/LCMAG.mp3",
  gnk: "songs/GNK.mp3",
  ajm: "songs/AJM.mp3",
  rd: "songs/RD.mp3",
};
var currentAudio = null;
let masterPlay = document.getElementById("play");
let masterbackw = document.getElementById("backward");
let masterforw = document.getElementById("forward");
let timer = document.getElementById("time");
let myprogressBar = document.getElementById("bar1");

function playsong(songName) {
  const songPLayer = new Audio(songList[songName]);
  if (currentAudio) {
    currentAudio.pause();
  }
  songPLayer.play();
  currentAudio = songPLayer;

  songPLayer.addEventListener("timeupdate", () => {
    let progress = parseInt(
      (currentAudio.currentTime / currentAudio.duration) * 100
    );
    myprogressBar.value = progress;
  });

  myprogressBar.addEventListener("change", () => {
    currentAudio.currentTime =
      (myprogressBar.value * currentAudio.duration) / 100;
  });
}

masterPlay.addEventListener("click", () => {
  if (currentAudio.paused) {
    currentAudio.play();
  } else if (currentAudio) {
    currentAudio.pause();
  }
});

var volumeSlider = document.getElementById("volumeSlider");
volumeSlider.addEventListener("input", function () {
  var volumeValue = volumeSlider.value / 100;
  currentAudio.volume = volumeValue;
});

setInterval(function () {
  timer.innerHTML = `0${Math.floor(
    currentAudio.currentTime / 60
  )}: ${Math.floor(currentAudio.currentTime % 60)} / 0${Math.floor(
    currentAudio.duration / 60
  )}:${Math.floor(currentAudio.duration % 60)}`;
});

let aboutSection = document.getElementById("artistInfo")
let aboutArtist = document.getElementById("about")
let artistName = document.getElementById("singerName")

function indexChange() {
    aboutSection.style.zIndex = "-2"
}

function moosaAbout() {
  artistName.innerText = "Sidhu Moose Wala"
  aboutSection.style.zIndex = "2"
  aboutArtist.innerHTML = `Shubhdeep Singh Sidhu (11 June 1993 – 29 May 2022), known professionally as Sidhu Moose Wala, was an Indian singer and rapper. He worked predominantly in Punjabi-language music and cinema. Moose Wala is considered to be one of the most influential and successful Punjabi rappers of all time and to many, amongst the most controversial Punjabi artists of all time.`+"<br />"+` Born in Moosa, Punjab, Moose Wala began his career in 2016 as a songwriter for the song "License" by Ninja, and as lead artist in 2017 with Gurlez Akhtar for a duet song, "G Wagon". Following his debut, he collaborated with Brown Boyz for various tracks. Moose Wala's tracks peaked on the UK Asian Music chart. His song "Bambiha Bole" was among the top five on the Global YouTube music chart. In 2021, he released Moosetape, tracks from which charted globally including on the Billboard Global 200, Billboard Global Excl. US, Canadian Hot 100, UK Asian, and New Zealand Hot charts. He has the most number-one singles on the Billboard India Songs chart. It became the first Indian album to have more than 1 billion streams on Spotify.`+"<br />"+`He was shot dead by unidentified assailants on 29 May 2022; a Canada-based gangster named Goldy Brar and a member of the Lawrence Bishnoi gang, claimed responsibility for the killing, which the police said was the culmination of an inter-gang rivalry.[16] On 23 June 2022, his first posthumous single, "SYL", was released. `

}

function arjanAbout() {
  artistName.innerText = "Arjan Dhillon"
  aboutSection.style.zIndex = "2"
  aboutArtist.innerHTML = `Arjan Dhillon is an Punjabi singer-rapper, and songwriter known for his work in Punjabi music. He started as a songwriter in 2017. Dhillon pursued his musical career as a lead artist in 2018 with the track "Ishq Jeha Ho Gya" in the film Afsar. He got his breakthrough with his single track "Bai Bai", released on 29 October 2020 followed by "My Fellas". Dhillon released his debut EP "The Future" on 25 November 2020 and his debut studio album Awara on 25 November 2021. `
  +
  "<br />"
  +
  `Dhillon started his career as a lyricist in 2017, initially penned various tracks for Nimrat Khaira, including "Suit", "Tohar", "Lehnga", And "Ranihaar". In 2018, he started his singing career with the song "Ishq Jeha Ho Gaya" from Afsar's soundtrack, he also penned four tracks "Udhar Chalda", Sun Sohniye", "Khat", "Ravaya Na Kar" of the soundtrack. Following this, He also penned Hustinder's "Pind Puchdi" and Nishawn Bhullar's "Muchh" tracks. Dhillon released his debut single track "Shera Samb Lai" in June 2019 on Brown Studios YouTube channel. `
  +
  "<br />"
  +
  `In February 2021, Dhillon released 3 songs "Gutt", "Likhari", and "Jutti" on the same day, with the video of "Gutt" song which is the most viewed song of Arjan Dhillon on YouTube with more than 50 million views. Besides, Dhillon released 5 single tracks in 2021, including "Jaagde Raho", "Pindaa De Naa", "Pehli Peshi", "My Rulez" and "Kalli Sohni". In 2021, Dhillon penned lyrics for Diljit Dosanjh's "Luna" from MoonChild Era album. The album peaked at no. 32 on Canadian Albums Chart by Billboard.`

}

function varinderAbout() {
  artistName.innerText = "Varinder Brar"
  aboutSection.style.zIndex = "2"
  aboutArtist.innerHTML = `Varinder Brar is a popular Punjabi singer and music composer who has been active in the industry for over 15 years. He is known for his melodic voice, which has made him a fan favorite in the Punjabi music industry. He is known for his collaborations with several artists such as Roshan Prince, Sukh-E Musical Doctorz, and Gippy Grewal. `
  +
  "<br />"
  +
  `Varinder was born in 1985 in Punjab, India. He started his career in the year 2004 with his first single ‘Kudiye Ni’. His single was an instant hit among the youth of Punjab and he quickly rose to fame. He then went on to collaborate with other artists such as Roshan Prince and Sukh-E Musical Doctorz for various singles. He also did several live performances for various events. `
}

function parmishAbout() {
  artistName.innerText = "Parmish Verma"
  aboutSection.style.zIndex = "2"
  aboutArtist.innerHTML = `Parmish Verma (born 3 July 1990) is an Punjabi singer, rapper, music video director, videographer and actor associated with the Punjabi Music and Punjabi Film Industry. He started his career as a video director then singer, and later debuted as an actor with the film Rocky Mental. `
  +
  "<br />"
  +
  `Verma was born in Patiala, in a Punjabi Khatri family to a Hindu father Dr Satish Verma, a theatre artist, writer and professor,[4] and a Sikh mother Paramjit Kaur a professor. He has two siblings his brother’s name is Sukhan Verma and his sister’s name is Sherry Rana.`
  +
  "<br />"
  +
  `Parmish started his career as a director with zimmewari bhukh te doori which was the story of an adolescent boy based on the life of Verma where he described the hard time which he faced while living in Australia and about the advice given to him by Gurikk Maan.`
  +
  "<br />"
  +
  `Verma debuted as an actor from the movie Rocky Mental in 2017. He also acted in the lead role in movies like Dil Diyan Gallan (2019) which he also wrote and directed. Later he released more movies such as "Singham,[7][8] and most recently, Jinde Meriye.`
  +
  "<br />"
  +
  `Parmish has directed several music videos for various artists like Sharry Mann, Ninja, Akhil, Mankirat Aulakh and Dilpreet Dhillon Mohammed Mehabin . Most of them are filmed in Chandigarh and Mohali `

}