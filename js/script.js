let url = 'http://localhost:3001/musics'

function react() {
    axios.get(url)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                localStorage.setItem('musics', JSON.stringify(res.data))
                let arr = JSON.parse(localStorage.getItem('musics'))
                reload(arr)
                let liked = res.data.filter(item => item.liked)
                localStorage.setItem('Liked Songs', JSON.stringify(liked))

                let inner = JSON.parse(localStorage.getItem('inner')) || ''
                let arr2 = JSON.parse(localStorage.getItem(inner)) || []
                let musics = JSON.parse(localStorage.getItem('musics')) || []
                if (arr2 && inner) {
                    reload(musics, arr2)
                }
            }
        })
}
react()
function reload(arr, second = [], path = '') {
    if (second) {
        if (second.length === 0) {
            let songs_of_playlist = document.querySelector('.songs_of_playlist')
            songs_of_playlist.innerHTML = ''
            for (let elem of second) {
                songs_of_playlist.innerHTML = `
                    No songs yet :(           
                    `
            }
        }
        if (second.length > 0) {
            let songs_of_playlist = document.querySelector('.songs_of_playlist')
            songs_of_playlist.innerHTML = ''
            for (let elem of second) {
                songs_of_playlist.innerHTML += `
                    <li class="item" data-liked="${elem.liked}" id="${elem.id}">
                        <div class="song_info">
                            <div class="img">
                                <span class="cont">${elem.cont}</span>
                                <img class="song_img" src="${elem.photo}" alt="">
                            </div>
                            <div class="names">
                                <h5 class="song-name">${elem.name}</h5>
                                <span class="author-name">${elem.author}</span>
                            </div>
                        </div>
                        <div class="like_menu_time">
                            <img class="like_heart" src="./img/heart.png" alt="heart"> 
                            <span class="song_time">${elem.duration}</span>
                            <div class="dot_menu">
                                <div class="dots"></div>
                                <div class="dots"></div>
                                <div class="dots"></div>
                            </div>
                            <div class="mini-menu">
                                <span class="like_dislike">LIKE</span>
                                <hr>
                                <span class="add_playlist" >ADD TO PLAYLIST</span>
                                <hr>
                                <span class="LISTEN NOW">LISTEN NOW</span>
                            </div>
                        </div>
                    </li>            
                    `
            }
        }
    }
    let recently = document.querySelector('.recently')
    let liked = document.querySelector(path || '.liked_musics_two')
    let ten_like = arr.filter(item => item.liked)
    localStorage.setItem('Liked Songs', JSON.stringify(ten_like))
    ten_like = ten_like.splice(0, 10)
    liked.innerHTML = ''
    document.querySelector('.songs').innerHTML = ''
    for (let item of ten_like) {
        if (path.length !== 0) {
            liked.innerHTML += `
                <li class="item" data-liked="${item.liked}" id="${item.id}">
                    <div class="song_info">
                        <div class="img">
                            <span class="cont">${item.cont}</span>
                            <img class="song_img" src="${item.photo}" alt="">
                        </div>
                        <div class="names">
                            <h5 class="song-name">${item.name}</h5>
                            <span class="author-name">${item.author}</span>
                        </div>
                    </div>
                    <div class="like_menu_time">
                        <img class="like_heart" src="./img/heart.png" alt=""> 
                        <span class="song_time">${item.duration}</span>
                        <div class="dot_menu">
                            <div class="dots"></div>
                            <div class="dots"></div>
                            <div class="dots"></div>
                        </div>
                        <div class="mini-menu">
                            <span class="like_dislike">LIKE</span>
                            <hr>
                            <span class="add_playlist" >ADD TO PLAYLIST</span>
                            <hr>
                            <span class="LISTEN NOW">LISTEN NOW</span>
                        </div>
                    </div>
                </li>            
                `
        }
        document.querySelector('.songs').innerHTML += `
                <li class="liked_musics" id="${item.id}">
                    <span class="music_name">${item.name}</span>
                    <span class="music_duration">${item.duration}</span>
                </li>
            `
    }
    if (path.length === 0) {
        let recently2 = document.querySelector('.recently')
        let liked_102 = document.querySelector('.liked_musics_two')
        let ten_like2 = arr.filter(item => item.liked)
        localStorage.setItem('Liked Songs', JSON.stringify(ten_like2))
        ten_like2 = ten_like2.splice(0, 10)
        liked_102.innerHTML = ''
        document.querySelector('.songs').innerHTML = ''
        for (let item of ten_like) {
            liked_102.innerHTML += `
                <li class="item" data-liked="${item.liked}" id="${item.id}">
                    <div class="song_info">
                        <div class="img">
                            <span class="cont">${item.cont}</span>
                            <img class="song_img" src="${item.photo}" alt="">
                        </div>
                        <div class="names">
                            <h5 class="song-name">${item.name}</h5>
                            <span class="author-name">${item.author}</span>
                        </div>
                    </div>
                    <div class="like_menu_time">
                        <img class="like_heart" src="./img/heart.png" alt=""> 
                        <span class="song_time">${item.duration}</span>
                        <div class="dot_menu">
                            <div class="dots"></div>
                            <div class="dots"></div>
                            <div class="dots"></div>
                        </div>
                        <div class="mini-menu">
                            <span class="like_dislike">LIKE</span>
                            <hr>
                            <span class="add_playlist" >ADD TO PLAYLIST</span>
                            <hr>
                            <span class="LISTEN NOW">LISTEN NOW</span>
                        </div>
                    </div>
                </li>            
                `
            document.querySelector('.songs').innerHTML += `
                        <li class="liked_musics " id="${item.id}">
                            <span class="music_name">${item.name}</span>
                            <span class="music_duration">${item.duration}</span>
                        </li>
                    `
        }
    }
    if (path.length === 0) {

        recently.innerHTML = ''
        for (let i = 0; i < 10; i++) {
            if (arr[i].recently) {
                recently.innerHTML += `
                    <li class="item" data-liked="${arr[i].liked}" id="${arr[i].id}">
                        <div class="song_info">
                            <div class="img">
                                <span class="cont">${arr[i].cont}</span>
                                <img class="song_img" src="${arr[i].photo}" alt="">
                            </div>
                            <div class="names">
                                <h5 class="song-name">${arr[i].name}</h5>
                                <span class="author-name">${arr[i].author}</span>
                            </div>
                        </div>
                        <div class="like_menu_time">
                            <img class="like_heart" src="./img/heart.png" alt=""> 
                            <span class="song_time">${arr[i].duration}</span>
                            <div class="dot_menu">
                                <div id="dot" class="dots"></div>
                                <div id="dot"  class="dots"></div>
                                <div id="dot"  class="dots"></div>
                            </div>
                            <div class="mini-menu">
                                <span class="like_dislike" >LIKE</span>
                                <hr>
                                <span class="add_playlist" >ADD TO PLAYLIST</span>
                                <hr>
                                <span class="LISTEN NOW">LISTEN NOW</span>
                            </div>
                        </div>
                    </li>            
                    `
            }
        }
    }
    if (path.length === 0) {

        document.querySelector('.random').innerHTML = ''
        for (let i = 0; i < 10; i++) {
            let ia = Math.floor(Math.random() * 10)
            document.querySelector('.random').innerHTML += `
            <li class="item" data-liked="${arr[ia].liked}" id="${arr[ia].id}">
                <div class="song_info">
                    <div class="img">
                        <span class="cont">${arr[ia].cont}</span>
                        <img class="song_img" src="${arr[ia].photo}" alt="">
                    </div>
                    <div class="names">
                        <h5 class="song-name">${arr[ia].name}</h5>
                        <span class="author-name">${arr[ia].author}</span>
                    </div>
                </div>
                <div class="like_menu_time">
                    <img class="like_heart" src="./img/heart.png" alt=""> 
                    <span class="song_time">${arr[ia].duration}</span>
                    <div class="dot_menu">
                        <div id="dot" class="dots"></div>
                        <div id="dot" class="dots"></div>
                        <div id="dot" class="dots"></div>
                    </div>
                    <div class="mini-menu">
                        <span class="like_dislike" >LIKE</span>
                        <hr>
                        <span class="add_playlist" >ADD TO PLAYLIST</span>
                        <hr>
                        <span class="LISTEN NOW">LISTEN NOW</span>
                    </div>
                </div>
            </li> 
            `
        }
    }

    let add_playlists = document.querySelectorAll('.item .add_playlist')
    add_playlists.forEach(add_playlist => {
        add_playlist.onclick = (e) => {
            document.querySelector('.back').style.display = 'block'
            document.querySelector('.modal').style.top = '22%'
            let id = e.target.parentNode.parentNode.parentNode.id
            localStorage.setItem('play_id', JSON.stringify(id))
        }
        document.querySelector('.back').onclick = () => {
            document.querySelector('.back').style.display = 'none'
            document.querySelector('.modal').style.top = '-100%'
        }
        document.querySelector('.cancel').onclick = () => {
            document.querySelector('.back').style.display = 'none'
            document.querySelector('.modal').style.top = '-100%'
        }
    });
    let add_playlists2 = document.querySelector('.two .add_playlist')
    add_playlists2.onclick = () => {
        document.querySelector('.back').style.display = 'block'
        document.querySelector('.modal').style.top = '22%'
        let id = JSON.parse(localStorage.getItem('playing_music'))
        id = id.id
        localStorage.setItem('play_id', JSON.stringify(id))
    }
    document.querySelector('.back').onclick = () => {
        document.querySelector('.back').style.display = 'none'
        document.querySelector('.modal').style.top = '-100%'
    }
    document.querySelector('.cancel').onclick = () => {
        document.querySelector('.back').style.display = 'none'
        document.querySelector('.modal').style.top = '-100%'
    }

    search(arr)

    let song_img = document.querySelectorAll('.song_img')
    song_img.forEach(element => {
        element.onclick = (e) => {
            let id = e.target.parentNode.parentNode.parentNode.id
            localStorage.setItem('id', JSON.stringify(+id))
            axiosFunc(arr, id)

        }
        let prevs = document.querySelectorAll('.prev')
        prevs.forEach(prev => {
            prev.onclick = () => {
                let id = JSON.parse(localStorage.getItem('id'))
                id = id - 1
                axiosFunc(arr, id)
                localStorage.setItem('id', JSON.stringify(id))
            }
        });
        let nexts = document.querySelectorAll('.next')
        nexts.forEach(next => {
            next.onclick = () => {
                let id = JSON.parse(localStorage.getItem('id'))
                id = id + 1
                axiosFunc(arr, id)
                localStorage.setItem('id', JSON.stringify(id))
            }
        });
    });

    let dot_menus = document.querySelectorAll('.dot_menu')
    dot_menus.forEach(dot_menu => {
        dot_menu.onclick = (e) => {
            e.target.nextSibling.nextSibling.style.display = 'flex'
            setTimeout(() => {
                e.target.nextSibling.nextSibling.style.display = 'none'
            }, 4000);

        }
    });
    window.addEventListener('mouseup', function (event) {
        var boxes = document.querySelectorAll('.mini-menu');
        boxes.forEach(box => {
            if (event.target != box && event.target.parentNode != box) {
                box.style.display = 'none';
            }
        });
    });
    window.addEventListener('mouseup', function (event) {
        var boxes = document.querySelectorAll('.two');
        boxes.forEach(box => {
            if (event.target != box && event.target.parentNode != box) {
                box.style.display = 'none';
            }
        });
    });
    const windowInnerWidth = window.innerWidth
    if (windowInnerWidth <= 1119) {
        document.querySelectorAll('.mini-menu span').forEach(element => {
            element.style.fontSize = '14px'
        });
        document.querySelectorAll('.mini-menu').forEach(element => {
            element.style.right = '-100px'
        });
        window.addEventListener('mouseup', function (event) {
            var boxes = document.querySelectorAll('.input input');
            boxes.forEach(box => {
                if (event.target != box && event.target.parentNode != box) {
                    box.style.width = '0px';
                    box.style.opacity = '0';
                    document.querySelector('.div').style.width = '0px'
                }
            });
        });
    }
    let items = document.querySelectorAll('.item')
    items.forEach(item => {
        if (item.getAttribute('data-liked') === 'true') {
            item.lastChild.previousSibling.firstChild.nextSibling.src = './img/liked.png'
            item.lastChild.previousSibling.lastChild.previousSibling.firstChild.nextSibling.innerHTML = 'DISLIKE'
        }
    });

    let hearts = document.querySelectorAll('.item .like_heart')
    hearts.forEach(heart => {
        heart.onclick = (e) => {
            likeOrDislike(e, arr)
        }
    });
    let like_dislikes = document.querySelectorAll('.item .like_dislike')
    like_dislikes.forEach(like_dislike => {
        like_dislike.onclick = (e) => {
            likeOrDislike(e, arr, e.target.parentNode.parentNode.parentNode.id)
        }
    });

    let listens = document.querySelectorAll('.LISTEN')
    listens.forEach(listen => {
        listen.onclick = (e) => {
            let id = e.target.parentNode.parentNode.parentNode.id

            let obj = arr.find(item => item.id === +id)

            playSong(obj)
            localStorage.setItem('playing_music', JSON.stringify(obj))
        }
    });

    let listen_lis = document.querySelectorAll('.songs .liked_musics')
    listen_lis.forEach(listen_li => {
        listen_li.onclick = (e) => {
            let id = e.target.id
            let obj = arr.find(item => item.id === +id)
            document.querySelector('.sidebar').style.left = '-100%'
            playSong(obj)
            localStorage.setItem('playing_music', JSON.stringify(obj))
        }
        listen_li.firstChild.nextSibling.onclick = (e) => {
            let id = e.target.parentNode.id
            let obj = arr.find(item => item.id === +id)
            document.querySelector('.sidebar').style.left = '-100%'
            playSong(obj)
            localStorage.setItem('playing_music', JSON.stringify(obj))
        }
    });
}
let like_dislikes2 = document.querySelector('.two .like_dislike')
like_dislikes2.onclick = (e) => {
    let obj = JSON.parse(localStorage.getItem('playing_music'))
    let musics = JSON.parse(localStorage.getItem('musics'))
    console.log(obj);
    likeOrDislike(e, musics, obj.id)
}
function likeOrDislike(e, arr, path = 0) {
    let id = path || e.target.parentNode.parentNode.id

    let obj = arr.find(item => item.id === +id)
    obj.liked = !obj.liked

    axios.patch(`${url}/${id}`, obj)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                localStorage.setItem('musics', JSON.stringify(res.data))
                react()
            }
        })
    let arr2 = []
    localStorage.setItem('playing_music', JSON.stringify(obj))
    arr.push(obj)
    localStorage.setItem('Liked Songs', JSON.stringify(arr2))

}

function axiosFunc(arr, id) {
    let obj = arr.find(item => item.id === +id)
    obj.recently = true
    axios.patch(`${url}/${id}`, obj)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                react()
                localStorage.setItem('musics', JSON.stringify(res.data))
                let b = 0
                localStorage.setItem('currentTime', JSON.stringify(b))
            }
        })
    localStorage.setItem('playing_music', JSON.stringify(obj))
    playSong(obj)
}

let play_pauses = document.querySelectorAll('.play_pause')
let audio = document.querySelector('audio')
function playSong(obj, b = 0) {
    let song_name = document.querySelector('.song_name')
    let artist_name = document.querySelector('.artist_name')
    song_name.innerHTML = obj.name
    artist_name.innerHTML = obj.author
    play_pauses.forEach(play_pause => {
        play_pause.classList.add('play')
        audio.src = obj.path
        audio.currentTime = b
        play_pause.src = './img/stop.png'
    });
    audio.play()
    axios.patch(`${url}/${obj.id}`, obj)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                react()
                localStorage.setItem('musics', JSON.stringify(res.data))
                let b = 0
                localStorage.setItem('currentTime', JSON.stringify(b))
            }
        })
    localStorage.setItem('playing_music', JSON.stringify(obj))
    let object = JSON.parse(localStorage.getItem('playing_music'))

    if (document.querySelector('.song_name_two')) {
        document.querySelector('.song_name_two').innerHTML = object.name
        document.querySelector('.author_name_two').innerHTML = object.author
        document.querySelector('.songimg').src = object.photo
        if (object.liked) {
            document.querySelector('.likedOrNot').src = './img/liked.png'
            document.querySelector('.two .like_dislike').innerHTML = 'DISLIKE'
        }
        if (!object.liked) {
            document.querySelector('.two .like_dislike').innerHTML = 'LIKE'
            document.querySelector('.likedOrNot').src = './img/heart.png'
        }
    }
}
function stopSong() {
    play_pauses.forEach(play_pause => {
        play_pause.classList.remove('play')
        audio.pause()
        localStorage.setItem('currentTime', JSON.stringify(audio.currentTime))
        play_pause.src = './img/play.png'
    });
}

play_pauses.forEach(play_pause => {
    play_pause.onclick = () => {
        let isPlaying = play_pause.classList.contains('play')
        if (isPlaying) {
            stopSong()
        } else {
            let playing_song = JSON.parse(localStorage.getItem('playing_music')) || {}
            let time = JSON.parse(localStorage.getItem('currentTime'))
            react()
            playSong(playing_song, time)
        }
    }
});

function progresUpd(e) {
    const { currentTime, duration } = e.srcElement
    let progress = (currentTime / duration) * 100
    let progressLine = document.querySelector('.line')
    progressLine.style.width = progress + '%'
    let progressLine2 = document.querySelector('.line2')
    progressLine2.style.width = progress + '%'
    let currentTimeIn = document.querySelector('.currentTime')
    let durationIn = document.querySelector('.duration')
    currentTimeIn.innerHTML = parseInt(currentTime) + ' s'
    durationIn.innerHTML = parseInt(duration) + ' s'
    let pavtors = document.querySelectorAll('.pavtor')
    let music = JSON.parse(localStorage.getItem('playing_music'))
    let musics = JSON.parse(localStorage.getItem('musics'))
    if (currentTime === duration) {
        if (currentTime === duration) {
            music.cont = music.cont + 1
        }
        playSong(music)
    }
    let alls = document.querySelectorAll('.all_of')
    pavtors.forEach(pavtor => {
        pavtor.onclick = () => {
            if (!pavtor.classList.contains('pavtor_next')) {
                pavtor.classList.add('pavtor_next')
                pavtor.src = './img/next_to_net.png'
                alls.forEach(all => {
                    all.classList.remove('random_next')
                    all.src = './img/all_track.png'
                })
            } else {
                pavtor.classList.remove('pavtor_next')
                pavtor.src = './img/pavtor.png'
            }
        }

        if (pavtor.classList.contains('pavtor_next')) {
            if (currentTime === duration) {
                let id = JSON.parse(localStorage.getItem('id'))
                if (id == 30) {
                    id = 1
                }
                id = id + 1
                axiosFunc(musics, id)
                localStorage.setItem('id', JSON.stringify(id))
            }
        }
    });
    alls.forEach(all => {
        all.onclick = () => {
            if (!all.classList.contains('random_next')) {
                all.classList.add('random_next')
                all.src = './img/random.png'
                pavtors.forEach(pavtor => {
                    pavtor.classList.remove('pavtor_next')
                    pavtor.src = './img/pavtor.png'
                })
            } else {
                all.classList.remove('random_next')
                all.src = './img/all_track.png'
            }
        }
        if (all.classList.contains('random_next')) {
            if (currentTime === duration) {
                let id = JSON.parse(localStorage.getItem('id'))
                id = Math.floor(Math.random() * 30)
                axiosFunc(musics, id)
                localStorage.setItem('id', JSON.stringify(id))
            }
        }
    });
}
let btns = document.querySelectorAll('.cir')
function active(active_back) {
    btns.forEach(btn => {
        btn.onclick = (e) => {
            btns.forEach(elem => {
                elem.classList.remove(active_back)
            })
            btn.classList.add(active_back)
            let musics = JSON.parse(localStorage.getItem('musics'))
            let id = e.target.id
            let playing_music = musics.find(item => item.id === +id)
            localStorage.setItem('playing_music', JSON.stringify(playing_music))
            playSong(playing_music)
            let name_song = document.querySelector('.name_song')
            let duration_song = document.querySelector('.duration_song')
            let img_song = document.querySelector('.image')
            img_song.src = playing_music.photo
            name_song.innerHTML = playing_music.name
            duration_song.innerHTML = playing_music.duration
        }
    });
}

active('active_cir')
audio.ontimeupdate = (e) => {
    progresUpd(e)
}
let create_new = document.querySelector('.create_new')
create_new.onclick = (e) => {
    e.target.nextSibling.nextSibling.style.display = 'flex'
    create_new.style.display = 'none'
}

let add_playlist = document.forms.add_playlist

let playlists = JSON.parse(localStorage.getItem('playlists')) || []

add_playlist.onsubmit = () => {

    let playlist = {}

    let fm = new FormData(add_playlist)

    fm.forEach((value, key) => {
        playlist[key] = value
    });

    playlists.push(playlist.name)

    localStorage.setItem('playlists', JSON.stringify(playlists))
    reload_playlist_list(playlists)

    let arr = []

    localStorage.setItem(`${playlist.name}`, JSON.stringify(arr))
    setTimeout(function () {
        location.reload();
    }, 300);

}
if (playlists) {
    reload_playlist_list(playlists)
    playlists_names(playlists)
}

function playlists_names(arr) {
    let playlists_names = document.querySelector('.playlists_names ul')
    let liked = JSON.parse(localStorage.getItem('Liked Songs'))
    for (let item of arr) {
        let len = JSON.parse(localStorage.getItem(item))
        playlists_names.innerHTML += `
            <li><span class="first">${item}</span> <span class="second" >${len.length} songs</span></li>
        `
    }
    let li = document.querySelector('.playlists_names ul li')
    if (liked) {

        li.firstChild.nextSibling.nextSibling.innerHTML = liked.length + ' songs'
    }

    let li2 = document.querySelectorAll('.playlists_names ul li')

    li2.forEach(li => {
        li.onclick = (e) => {
            let name = e.target.firstChild.innerHTML || e.target.innerHTML
            let local = JSON.parse(localStorage.getItem(name))
            let id = JSON.parse(localStorage.getItem('play_id'))
            let arr = JSON.parse(localStorage.getItem('musics'))
            let finded = arr.find(item => item.id === +id)
            local.push(finded)
            localStorage.setItem(name, JSON.stringify(local))
            reload(arr, local)
            document.querySelector('.back').style.display = 'none'
            document.querySelector('.modal').style.top = '-100%'
            setTimeout(function () {
                location.reload();
            }, 300);
        }
    });

}

function reload_playlist_list(arr) {
    let playlists_names_list = document.querySelector('.playlists_names_list')
    for (let item of arr) {
        playlists_names_list.innerHTML += `
            <li class="liked_songs" data-li="${item}" data-playlist="playlist"> <span class="name_plylist">${item}</span></li>
        `
    }

}
let li = document.querySelectorAll('.playlist li.liked_songs')
li.forEach(lis => {
    lis.onclick = () => {
        let list = JSON.parse(localStorage.getItem('list'))
        console.log('asasd');
    }
});
let lists = document.querySelectorAll('.aller li')
list_changer('active')
function list_changer(active_b) {
    lists.forEach(list => {
        list.onclick = (e) => {

            lists.forEach(element => {
                element.classList.remove(active_b)
            });
            list.classList.add(active_b)
            list_blocks(list)
            let name = e.target.innerHTML
            localStorage.setItem('name', JSON.stringify(name))
            let n = JSON.parse(localStorage.getItem('name'))

            if (n) {
                document.querySelector('.playlist_name').innerHTML = n
            }
            let songs_of_playlist2 = document.querySelectorAll('.songs_of_playlist .item')
            songs_of_playlist2 = songs_of_playlist2.length
            localStorage.setItem('length', JSON.stringify(songs_of_playlist2))
            let len = JSON.parse(localStorage.getItem('length'))
            document.querySelector('.length').innerHTML = len + ' songs'
            if (len === 0) {
                document.querySelector('.length').nextSibling.nextSibling.innerHTML = `<span class="none">This plylist is empty bye, bye <img src="./img/cry.png" alt=""> </span>`
            }
        }
        document.querySelectorAll('.logotype').forEach(logo => {
            logo.onclick = () => {
                document.querySelector('.musics').style.display = 'block'
                document.querySelector('.music_blocks').style.display = 'flex'
                document.querySelector('.pagination').style.display = 'flex'
                document.querySelector('.playlists').style.display = 'none'
                document.querySelector('.main_music').style.minHeight = '30vh'
                document.querySelector('.setting_page').style.display = 'none'
                document.querySelector('.playlists_page').style.display = 'none'
                document.querySelector('.searched').style.top = '120%'
                lists.forEach(element => {
                    element.classList.remove(active_b)
                });
                document.querySelector('.home').classList.add(active_b)
                const windowInnerWidth = window.innerWidth
                if (windowInnerWidth < 1110) {
                    document.querySelector('.sidebar').style.left = '-100%'
                }
                console.log(document.querySelector('.sidebar').style.position === 'fixed');
            }
        });
        document.querySelector('.logo img').onclick = () => {
            document.querySelector('.musics').style.display = 'block'
            document.querySelector('.music_blocks').style.display = 'flex'
            document.querySelector('.pagination').style.display = 'flex'
            document.querySelector('.playlists').style.display = 'none'
            document.querySelector('.main_music').style.minHeight = '30vh'
            document.querySelector('.setting_page').style.display = 'none'
            document.querySelector('.playlists_page').style.display = 'none'
            document.querySelector('.searched').style.top = '120%'
            lists.forEach(element => {
                element.classList.remove(active_b)
            });
            document.querySelector('.home').classList.add(active_b)
            const windowInnerWidth = window.innerWidth
            if (windowInnerWidth < 1110) {
                document.querySelector('.sidebar').style.left = '-100%'
            }
        }
    });
}

function list_blocks(list) {
    if (list.innerHTML === 'Playlists') {
        document.querySelector('.playlists').style.display = 'block'
        document.querySelector('.musics').style.display = 'none'
        document.querySelector('.pagination').style.display = 'none'
        document.querySelector('.main_music').style.minHeight = '100vh'
        document.querySelector('.setting_page').style.display = 'none'
        let musics = JSON.parse(localStorage.getItem('Liked Songs'))
        document.querySelector('.playlists_page').style.display = 'none'
        const windowInnerWidth = window.innerWidth
        if (windowInnerWidth < 1110) {
            document.querySelector('.sidebar').style.left = '-100%'
        }
        let playlists = JSON.parse(localStorage.getItem('playlists'))
        if (playlists) {
            reload_player(playlists)
            playlists.forEach(playlist => {
                let a = document.querySelector(`.${playlist}`);
                let arr = JSON.parse(localStorage.getItem(`${playlist}`))
                reload(arr, [], `.${playlist}`)
            });
        }
        reload(musics, [], '.liked_musics_three')

    }
    if (list.innerHTML === 'Homepage') {
        document.querySelector('.musics').style.display = 'block'
        document.querySelector('.music_blocks').style.display = 'flex'
        document.querySelector('.pagination').style.display = 'flex'
        document.querySelector('.playlists').style.display = 'none'
        document.querySelector('.main_music').style.minHeight = '30vh'
        document.querySelector('.setting_page').style.display = 'none'
        document.querySelector('.playlists_page').style.display = 'none'
        document.querySelector('.searched').style.top = '120%'
        const windowInnerWidth = window.innerWidth
        if (windowInnerWidth < 1110) {
            document.querySelector('.sidebar').style.left = '-100%'
        }
    }
    if (list.innerHTML === 'Settings') {
        document.querySelector('.playlists').style.display = 'none'
        document.querySelector('.musics').style.display = 'none'
        document.querySelector('.pagination').style.display = 'none'
        document.querySelector('.main_music').style.minHeight = '100vh'
        document.querySelector('.setting_page').style.display = 'block'
        document.querySelector('.playlists_page').style.display = 'none'
        const windowInnerWidth = window.innerWidth
        if (windowInnerWidth < 1110) {
            document.querySelector('.sidebar').style.left = '-100%'
        }
    }
    if (list.getAttribute('data-playlist') === 'playlist') {
        document.querySelector('.playlists').style.display = 'none'
        document.querySelector('.musics').style.display = 'none'
        document.querySelector('.pagination').style.display = 'none'
        document.querySelector('.main_music').style.minHeight = '100vh'
        document.querySelector('.setting_page').style.display = 'none'
        document.querySelector('.playlists_page').style.display = 'flex'
        let arr = JSON.parse(localStorage.getItem(list.firstChild.nextSibling.innerHTML))
        localStorage.setItem('inner', JSON.stringify(list.firstChild.nextSibling.innerHTML))
        let musics = JSON.parse(localStorage.getItem('musics'))
        reload(musics, arr)
        localStorage.setItem('list', JSON.stringify(list.firstChild.nextSibling.innerHTML))
        const windowInnerWidth = window.innerWidth
        if (windowInnerWidth < 1110) {
            document.querySelector('.sidebar').style.left = '-100%'
        }
    }
}


let form_edit = document.forms.prem_free

form_edit.onsubmit = () => {
    submit()
}

function submit() {
    let user = {}

    let fm = new FormData(form_edit)

    fm.forEach((value, key) => {
        user[key] = value
    });

    localStorage.setItem('user', JSON.stringify(user))

    document.querySelector('.name').innerHTML = user.full_name
    if (user.free_prem) {
        premium()
    }
}

let user = JSON.parse(localStorage.getItem('user'))

if (user) {
    if (!user.free_prem) {
        free()
    }
    if (user.free_prem) {
        premium()
    }
}

if (user) {
    document.querySelector('.name').innerHTML = user.full_name
    if (user.free_prem) {
        document.querySelector('.free_or_premium').innerHTML = 'Premium User'
    }
} else {
    document.querySelector('.name').innerHTML = "Alex Adams"
}

function premium() {
    colors('Premium', 'premium', '#4f2d1d')
    document.querySelector('.circle').classList = 'cir active_cir2'
    active('active_cir2')
    list_changer('active2')
    document.querySelector('.home').classList = 'home active2'
}
function free() {
    colors('Free', 'free', '#3a3736')
    document.querySelector('.circle').classList = 'cir active_cir'
    active('active_cir')
    list_changer('active')
    document.querySelector('.home').classList = 'home active'
}

function colors(user, frPr, color) {
    document.querySelector('.free_or_premium').innerHTML = `${user} User`
    document.querySelector('.sidebar').style.background = `linear-gradient(0deg, #0F1113, var(--${frPr}-line-sidebar-color))`
    document.querySelector('.main_music').style.background = `var(--${frPr}-linear)`
    document.querySelector('h1').style.color = `var(--${frPr}-color-two)`
    document.querySelector('.liked_10 h2').style.color = `var(--${frPr}-color)`
    document.querySelector('form button').style.background = `var(--${frPr}-color)`
    document.querySelector('.create_new').style.background = `var(--${frPr}-color)`
    document.querySelector('.input input').style.background = `var(--${frPr}-search)`
    document.querySelector('form input').style.background = `var(--${frPr}-search)`
    document.querySelector('.back_of_img').style.background = `${color}`
    document.querySelector('.searched').style.background = `var(--${frPr}-search)`
    document.querySelector('.add h2').style.color = `var(--${frPr}-color)`
    document.querySelector('.add form input').style.background = `var(--${frPr}-search)`
    document.querySelector('.add .button').style.background = `var(--${frPr}-color)`
    document.querySelectorAll('.length').forEach(element => {
        element.style.color = `var(--${frPr}-color)`
    });
}


function search_reload(arr, song) {
    let search = document.querySelector('.searched .names')
    search.innerHTML = ''
    for (let item of arr) {
        if (song === 'song') {
            search.innerHTML += `
                <li class="search_elem" id="${item.id}"> <div><span class="author_name_search" > ${item.author} </span>   <span class="song_name_search" style="color: var(--free-color)"> ${item.name} </span></div> <span style="color: white;" >${item.duration}</span></li>
            `
        }
        if (song === 'author') {
            search.innerHTML += `
                <li id="${item.id}" class="search_elem " > <div><span style="color: var(--free-color)" class="author_name_search"> ${item.author} </span>   <span class="song_name_search"> ${item.name} </span></div> <span style="color: white;" >${item.duration}</span></li>
            `
        }
    }
    let lis = document.querySelectorAll('.names li')
    lis.forEach(li => {
        li.onclick = (e) => {
            let id = e.target.parentNode.id
            console.log(id);
            let finded = arr.find(item => item.id === +id)
            playSong(finded)
            localStorage.setItem('playing_music', JSON.stringify(finded))
        }
    });
    let span = document.querySelectorAll('.names li span')
    span.forEach(li => {
        li.onclick = (e) => {
            let id = e.target.parentNode.parentNode.id

            let finded = arr.find(item => item.id === +id)
            playSong(finded)
            localStorage.setItem('plying_music', JSON.stringify(finded))
        }
    });
}
function search(arr) {
    let input = document.querySelector('.input input')
    let div = document.querySelector('.div')
    div.onclick = () => {
        confirm('if you want search from author put /author space and type author name else put /song space to search from song name :)')
        input.blur()
        div.style.display = 'none'
    }
    input.onclick = () => {
        document.querySelector('.searched').style.display = 'block'
        setTimeout(() => {
            document.querySelector('.searched').style.opacity = '1'
        }, 200);
    }
    window.addEventListener('mouseup', function (event) {
        var box = document.querySelector('.searched');
        if (event.target != box && event.target.parentNode != box) {
            box.style.display = 'none';
        }
    });
    input.onkeyup = () => {
        if (input.value === '/song ' || input.value === '/author ') {
            input.click()
        }
        if (input.value.startsWith('/song')) {
            let name_filtered = arr.filter(item => item.name.toLowerCase().includes(((input.value.split(' '))[1]).toLowerCase()))
            search_reload(name_filtered, 'song')
        }
        if (input.value.startsWith('/author')) {
            let song_filtered = arr.filter(item => item.author.toLowerCase().includes((input.value.split(' '))[1].toLowerCase()))
            search_reload(song_filtered, 'author')
        }
        if (input.value === '') {
            document.querySelector('.searched').style.opacity = '0'
            setTimeout(() => {
                document.querySelector('.searched').style.display = 'none'
            }, 200);
        }
    }
    setTimeout(() => {
        document.querySelector('.searched').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.searched').style.opacity = '0'
        }, 200);
    }, 4000);
}


function setProgress(e) {
    let audio = document.querySelector('audio')
    let width = e.target.clientWidth
    let clickX = e.offsetX
    let duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}

document.querySelector('.progress').onclick = (e) => {
    setProgress(e)
}
document.querySelector('.progress2').onclick = (e) => {
    setProgress(e)
}

function reload_player(arr) {
    let ten = document.querySelector('.playlists .liked_102')
    ten.innerHTML = ''
    for (let item of arr) {
        ten.innerHTML += `
        <div class="players">
            <h3>${item}</h3>
            <div class="liked_musics_three ${item}">

            </div>
            <h2 class="h2" data-li="${item}">GO TO PLAYLIST</h2>
        </div>
        `
    }

    let got_play = document.querySelectorAll('.h2')
    let playlists = document.querySelectorAll('.liked_songs')
    console.log(playlists);
    got_play.forEach(h2 => {
        h2.onclick = (e) => {
            playlists.forEach(playlist => {
                if (e.target.getAttribute('data-li') === playlist.firstChild.nextSibling.innerHTML) {
                    playlist.firstChild.nextSibling.click()
                }
            });
        }
    });
    document.querySelector('.li').onclick = () => {
        document.querySelector('.liked_songs').firstChild.nextSibling.click()
    }
}
document.querySelector('.li').onclick = () => {
    document.querySelector('.liked_songs').firstChild.nextSibling.click()
}

document.querySelector('.menu').onclick = () => {
    document.querySelector('.sidebar').style.zIndex = '1000'
    document.querySelector('.sidebar').style.left = '0px'
}
// const windowInnerWidth = window.innerWidth
const windowInnerWidth = window.innerWidth
if (windowInnerWidth <= 1179 && windowInnerWidth > 938) {
    document.querySelector('.search_btn').onclick = () => {
        document.querySelector('.input input').style.opacity = '1'
        document.querySelector('.input input').style.width = '389px'
        document.querySelector('.div').style.width = '387px'
    }
} else if (windowInnerWidth <= 938 && windowInnerWidth > 762) {
    document.querySelector('.search_btn').onclick = () => {
        document.querySelector('.input input').style.opacity = '1'
        document.querySelector('.input input').style.width = '547px'
        document.querySelector('.div').style.width = '547px'
        document.querySelector('.searched').style.width = '547px'
    }
} else if (windowInnerWidth <= 762 && windowInnerWidth > 738) {
    document.querySelector('.search_btn').onclick = () => {
        document.querySelector('.input input').style.opacity = '1'
        document.querySelector('.input input').style.width = '383px'
        document.querySelector('.div').style.width = '383px'
        document.querySelector('.searched').style.width = '383px'
    }
    let dot_menu_player = document.querySelector('.top .dot_menu_player')
    dot_menu_player.onclick = () => {
        document.querySelector('.two').style.display = 'flex'
    }
    document.querySelector('.logo .can').onclick = () => {
        document.querySelector('.sidebar').style.left = '-100%'
    }

    let to_player = document.querySelector('.to_player')
    let mob_player = document.querySelector('.mob_player')

    to_player.onclick = () => {
        mob_player.style.bottom = '0px'
        document.body.style.overflow = 'hidden'
    }
    document.querySelector('.go_back').onclick = () => {
        mob_player.style.bottom = '-100%'
        document.body.style.overflow = 'visible'
    }
    let obj = JSON.parse(localStorage.getItem('playing_music'))

    document.querySelector('.song_name_two').innerHTML = obj.name
    document.querySelector('.author_name_two').innerHTML = obj.author
    if (obj.liked) {
        document.querySelector('.likedOrNot').src = './img/liked.png'
    }
    if (!obj.liked) {
        document.querySelector('.likedOrNot').src = './img/heart.png'
    }
} else if (windowInnerWidth <= 738 && windowInnerWidth > 718) {
    document.querySelector('.search_btn').onclick = () => {
        document.querySelector('.input input').style.opacity = '1'
        document.querySelector('.input input').style.width = '356px'
        document.querySelector('.div').style.width = '356px'
        document.querySelector('.searched').style.width = '356px'
    }
    let dot_menu_player = document.querySelector('.top .dot_menu_player')
    dot_menu_player.onclick = () => {
        document.querySelector('.two').style.display = 'flex'
    }
    document.querySelector('.logo .can').onclick = () => {
        document.querySelector('.sidebar').style.left = '-100%'
    }

    let to_player = document.querySelector('.to_player')
    let mob_player = document.querySelector('.mob_player')

    to_player.onclick = () => {
        mob_player.style.bottom = '0px'
        document.body.style.overflow = 'hidden'
    }
    document.querySelector('.go_back').onclick = () => {
        mob_player.style.bottom = '-100%'
        document.body.style.overflow = 'visible'
    }
    let obj = JSON.parse(localStorage.getItem('playing_music'))

    document.querySelector('.song_name_two').innerHTML = obj.name
    document.querySelector('.author_name_two').innerHTML = obj.author
    if (obj.liked) {
        document.querySelector('.likedOrNot').src = './img/liked.png'
    }
    if (!obj.liked) {
        document.querySelector('.likedOrNot').src = './img/heart.png'
    }
} else if (windowInnerWidth <= 718) {
    document.querySelector('.search_btn').onclick = () => {
        document.querySelector('.input input').style.opacity = '1'
        document.querySelector('.input input').style.width = '338px'
        document.querySelector('.div').style.width = '338px'
        document.querySelector('.searched').style.width = '338px'
    }
    let dot_menu_player = document.querySelector('.top .dot_menu_player')
    dot_menu_player.onclick = () => {
        document.querySelector('.two').style.display = 'flex'
    }
    document.querySelector('.logo .can').onclick = () => {
        document.querySelector('.sidebar').style.left = '-100%'
    }

    let to_player = document.querySelector('.to_player')
    let mob_player = document.querySelector('.mob_player')

    to_player.onclick = () => {
        mob_player.style.bottom = '0px'
        document.body.style.overflow = 'hidden'
    }
    document.querySelector('.go_back').onclick = () => {
        mob_player.style.bottom = '-100%'
        document.body.style.overflow = 'visible'
    }
    let obj = JSON.parse(localStorage.getItem('playing_music'))

    document.querySelector('.song_name_two').innerHTML = obj.name
    document.querySelector('.author_name_two').innerHTML = obj.author
    if (obj.liked) {
        document.querySelector('.likedOrNot').src = './img/liked.png'
    }
    if (!obj.liked) {
        document.querySelector('.likedOrNot').src = './img/heart.png'
    }
}
console.log(windowInnerWidth);



