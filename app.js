
// Some songs may be faulty due to broken links. Please replace another link so that it can be played

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";

const player = $(".player");                  
const cd = $(".cd");                          
const heading = $("header h2");               
const cdThumb = $(".cd-thumb");               
const audio = $("#audio");                    
const playBtn = $(".btn-toggle-play");        
const progress = $("#progress");              
const prevBtn = $(".btn-prev");               
const nextBtn = $(".btn-next");               
const randomBtn = $(".btn-random");           
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");                  

const app = {
  currentIndex: 0,                  
  isPlaying: false,                 
  isRandom: false,                
  isRepeat: false,
  config: {},
 
  songs: [                            
    {
      name: "Gác lại âu lo",
      singer: "Miu Lê",
      path: "./music/♬ GÁC LẠI ÂU LO - DA LAB X MIU LÊ ( ZEAPLEE REMIX ) - NHỚ ĐEO TAI NGHE.mp3",
      image: "./image/1.jpg"
    },
    {
      name: "Amore mio",
      singer: "Raftaar x Salim Merchant x Karma",
      path: "./music/amore mio - italo.mp3",
      image:
        "./image/61NHHPF0bQL.jpg"
    },
    {
      name: "Modern Talking",
      singer: "Raftaar x Brobha V",
      path:
        "./music/Modern Talking - Brother Louie (Official Music Video).mp3",
      image: "./image/modern-talking-1475307648.jpg"
    },
    {
      name: "Something Just Like This",
      singer: "Raftaar x Nawazuddin Siddiqui",
      path: "./music/Something Just Like This - Phiên Bản Cực Gắt (DJ 培仔 Remix).mp3",
      image:
        "./image/Something Just Like This.jpg"
    },
    {
      name: "Trouble Is A Friend",
      singer: "Raftaar",
      path: "./music/Trouble Is A Friend - Lenka - DJ 阿海 Remix - HOT Dance TikTok 2021.mp3",
      image:
        "./image/Trouble Is A Friend.jpg"
    },
    {
      name: "Bỏ em vào Balo",
      singer: "Hương Ly",
      path: "./music/Bỏ Em Vào Balo (Orinn Remix) - Tân Trần - Nhạc Trẻ Remix Edm Hot Tik Tok Gây Nghiện Nhất 2021.mp3",
      image:
        "./image/1838_Huong-Ly.jpg"
    },
    {
      name: "Buồn",
      singer: "Vũ Duy Khánh",
      path: "./music/BUỒN - VŨ DUY KHÁNH (OFFICIAL MV).mp3",
      image:
        "./image/buon.jpg"
    },
    {
      name: "Buồn Thì Cứ Khóc Đi",
      singer: "Lynk Lee",
      path: "./music/Buồn Thì Cứ Khóc Đi - Lynk Lee - Official MV.mp3",
      image:
        "./image/buoncukhocdi.jpg"
    },
    {
      name: "Cầu Vòng Khuyết ",
      singer: "Tuấn Hưng",
      path: "./music/Cầu Vòng Khuyết - Tuấn Hưng.mp3",
      image:
        "./image/1.jpg"
    },
    {
      name: "Đếm Ngày Xa Em",
      singer: "Only C ft. Lou Hoàng",
      path: "./music/Đếm Ngày Xa Em - Only C ft. Lou Hoàng - Official MV - Nhạc trẻ mới hay tuyển chọn.mp3",
      image:
        "./image/demngayxaem.jpg"
    },
    {
      name: "HẠ CÒN VƯƠNG NẮNG",
      singer: "Hương Ly",
      path: "./music/HẠ CÒN VƯƠNG NẮNG - DATKAA x KIDO x Prod. QT BEATZ - HƯƠNG LY COVER.mp3",
      image:
        "./image/HẠ CÒN VƯƠNG NẮNG.jpg"
    },
    {
      name: "Hối Hận Trong Anh",
      singer: "Tuấn Hưn",
      path: "./music/Hối Hận Trong Anh - Tuấn Hưng.mp3",
      image:
        "./image/hoihantronganh.jpg"
    },
    {
      name: "Khó Vẽ Nụ Cười",
      singer: "ĐạtG x DuUyên",
      path: "./music/Khó Vẽ Nụ Cười (Audio) - ĐạtG x DuUyên.mp3",
      image:
        "./image/khovenucuoi.jpg"
    },
    {
      name: "LẠ LÙNG",
      singer: "Vũ",
      path: "./music/LẠ LÙNG - Vũ. (Original).mp3",
      image:
        "./image/laLung.jpg"
    },
    {
      name: "NGƯỜI ÂM PHỦ",
      singer: "OSAD X KHÁNH VY",
      path: "./music/NGƯỜI ÂM PHỦ - OSAD X KHÁNH VY - OFFICIAL MV EDM.mp3",
      image:
        "./image/nguoi_am_phu.jpg"
    },
    {
      name: "Phía Sau Một Cô Gái",
      singer: "Soobin Hoàng Sơn",
      path: "./music/Phía Sau Một Cô Gái - Soobin Hoàng Sơn (Official Music Video 4K).mp3",
      image:
        "./image/Phiasaumotcogai.jpg"
    },
    {
      name: "QUAN TRỌNG LÀ THẦN THÁI",
      singer: "ONLYC ft KARIK",
      path: "./music/QUAN TRỌNG LÀ THẦN THÁI - ONLYC ft KARIK - OFFICIAL VIDEO LYRIC.mp3",
      image:
        "./image/quantronglathanthai.jpg"
    },
    {
      name: "Beautiful In White",
      singer: "Shane Filan",
      path: "./music/Shane Filan - Beautiful In White (Official Video).mp3",
      image:
        "./image/beautiful in white.jpg"
    },
    {
      name: "SUÝT NỮA THÌ",
      singer: "ANDIEZ x BITI'S HUNTER",
      path: "./music/SUÝT NỮA THÌ - OFFICIAL OST - CHUYẾN ĐI CỦA THANH XUÂN - ANDIEZ x BITI'S HUNTER - LYRIC VIDEO.mp3",
      image:
        "./image/suytnuathi.jpg"
    },
    {
      name: "THẤY LÀ YÊU THƯƠNG",
      singer: "ONLYC",
      path: "./music/THẤY LÀ YÊU THƯƠNG - OFFICIAL MV - ONLYC.mp3",
      image:
        "./image/ThaylaYeuThuong.jpg"
    }
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    
  },
  render: function () {                  
    const htmls = this.songs.map((song, index) => {
      return `
                        <div class="song ${
                          index === this.currentIndex ? "active" : ""
                        }" data-index="${index}">
                            <div class="thumb"
                                style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    `;
    });                               
    playlist.innerHTML = htmls.join("");           
  },
  defineProperties: function () {                  
    Object.defineProperty(this, "currentSong", {    
      get: function () {
        return this.songs[this.currentIndex];
      }
    });                                             
  },
  handleEvents: function () {                   
    const _this = this;
    const cdWidth = cd.offsetWidth;             

    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], { 
      duration: 10000, 
      iterations: Infinity                     
    });
    cdThumbAnimate.pause();                     

    
    // Handles CD enlargement / reduction
    document.onscroll = function () {              
      const scrollTop = window.scrollY || document.documentElement.scrollTop;   
      const newCdWidth = cdWidth - scrollTop;             

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;      
                                                                    
      cd.style.opacity = newCdWidth / cdWidth;         
    };

    // Handle when click play
    playBtn.onclick = function () {             
      if (_this.isPlaying) {                 
        audio.pause();
      } else {
        audio.play();
      }
    };

    // When the song is played
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();                      
    };                

    // When the song is pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause(); 
    };                                    

    // When the song progress changes
    audio.ontimeupdate = function () {          
      if (audio.duration) {                     
        const progressPercent = Math.floor((audio.currentTime / audio.duration) * 100);
        progress.value = progressPercent;         
      }
    };                                            

    // Handling when seek
    progress.onchange = function (e) {                
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };                                              

    
    // When next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();                          
      }
      audio.play();                                 
      _this.render();
      _this.scrollToActiveSong();
    };

    // Khi prev song
    // When prev song
    prevBtn.onclick = function () {                
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();                           
      }
      audio.play();                                
      _this.render();
      _this.scrollToActiveSong();
    };

    // Handling on / off random song
    randomBtn.onclick = function (e) {             
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };

    // Single-parallel repeat processing
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };

    // Handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // Listen to playlist clicks
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Handle when clicking on the song option
        if (e.target.closest(".option")) {
        }
      }
    };
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 300);
  },
  loadCurrentSong: function () {          
    heading.textContent = this.currentSong.name;            
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;      
    audio.src = this.currentSong.path;             
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {                           
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {  
      this.currentIndex = 0;                  
    }
    this.loadCurrentSong();                   
  },
  prevSong: function () {                      
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();                     
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {                  
    // Assign configuration from config to application
    this.loadConfig();

    // Defines properties for the object
    this.defineProperties();                  

    // Listening / handling events (DOM events)
    this.handleEvents();             

    // Load the first song information into the UI when running the app
    this.loadCurrentSong();                   

    // Render playlist
    this.render();                   
    
    // Display the initial state of the repeat & random button
    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  }
};

app.start();
