

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { query, orderBy, where, limit } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
// 가져온 게시물 개수
var gcmcnt = 0;

var pagenum = 0;
var pagesize = 0;
// 페이지에 보일 게시물 수
var pagecount = 3;
var gclist = [];

const firebaseConfig = {
    apiKey: "AIzaSyArlooo4l3TQUli6iN6VwuqMULV3h2LWr0",
    authDomain: "team-14-e12ea.firebaseapp.com",
    projectId: "team-14-e12ea",
    storageBucket: "team-14-e12ea.firebasestorage.app",
    messagingSenderId: "237545674447",
    appId: "1:237545674447:web:47af8db7ffc1f03c7289ba",
    measurementId: "G-BLBBFK0BZH"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//방명록 가져옴옴
async function getBook(id) {
    gclist = [];
    let cnt = 0;
    console.log('id :' + id);
    let commentid = document.getElementById('commentlist');
    let html = '';
    html += '<div class="cmt-list">';
    const q = query(collection(db, "guestBook"), where("user_id", "==", id), orderBy("comment_number"));
    console.log(q);
    const guestBookSnapshot = await getDocs(q);
    guestBookSnapshot.forEach((doc) => {
        const data = doc.data();
        gclist.push(data);
        let name = data.guest_name;
        let text = data.guest_text;
        let guestbooknum = data.comment_number;
        if (cnt < pagecount) {
            html += '<div class="cmt-col"><span>' + guestbooknum + '</span> <span>' + name + '</span>  <span>' + text + '</span></div>';
        }
        cnt++;
    });
    html += "</div>";
    commentid.innerHTML = html;
    gcmcnt = cnt;
    pagesize = Math.ceil(gcmcnt / pagecount);
    console.log('gclist :' + gclist.toString());
    console.log('pagesize : ' + pagesize);
    setPageSize();
}
//개인상세페이지 데이터 주입
window.getPersonal = async function (id) {
    // 방명록 가져오기
    getBook(id);
    // 개인상세페이지 데이터 가져옴
    let user_text = document.getElementById('personaltext');
    let user_name = document.getElementById('personalname');
    let user_mbti = document.getElementById('personalmbti');
    let user_age = document.getElementById('personalage');
    let user_hobby = document.getElementById('personalhobby');
    let user_movie = document.getElementById('personalmovie');
    let user_song = document.getElementById('personalsong');
    let user_img = document.getElementById('personalprofile');
    let btn_id = document.getElementById('button-addon2');
    let user_html1 = '';
    let user_html2 = '';
    let user_html3 = '';
    let user_html4 = '';
    let user_html5 = '';
    let user_html6 = '';
    let user_html7 = '';
    let user_html8 = '';
    let btn_html = '';
    const q = query(collection(db, "teamMate"), where("user_id", "==", id));
    const teamMateSnapshot = await getDocs(q);
    console.log("[teamMate데이터 출력]");
    teamMateSnapshot.forEach((doc) => {
        const data = doc.data();
        user_html1 += '' + data.user_name;
        user_html2 += '' + data.user_mbti;
        user_html3 += '' + data.user_text;
        user_html4 += '' + data.user_image_src;
        user_html5 += '' + data.user_age;
        user_html6 += '' + data.user_movie;
        user_html7 += '' + data.user_song;
        user_html8 += '' + data.user_hobby;
        btn_html += '<img class="' + id + '" src="img/uploadbtn.png" alt="등록">';
        user_name.innerHTML = user_html1;
        user_mbti.innerHTML = user_html2;
        user_text.innerHTML = user_html3;
        btn_id.innerHTML = btn_html;
        user_img.innerHTML = `<img src="${data.user_image_src}" alt="사용자 이미지">`;
        user_age.innerHTML = user_html5;
        user_movie.innerHTML = user_html6;
        user_song.innerHTML = user_html7;
        user_hobby.innerHTML = user_html8;

        console.log(`이름: ${data.user_name}, MBTI: ${data.user_mbti}`);
        console.log(`내용: ${data.user_text}`);
        console.log(`이미지 소스: ${data.user_image_src}`);
    });
}
function setPageSize() {
    let html = '';
    let id = document.getElementById('pagenav');
    console.log('gcmcnt' + gcmcnt);
    if (gcmcnt != 0) {
        html += '<ul class="pagination"><li id="pgNum" class="page-item"> <a class="page-link"  aria-label="Previous"><<</a></li>';
        for (var i = 1; i < pagesize + 1; i++) {
            html += '<li id="pgNum" class="page-item"><a class="page-link" >' + i + '</a></li>';
        }
        html += '<li id="pgNum" class="page-item"><a class="page-link"  aria-label="Next">>></a></li>';
        html += '</ul>';
    }
    id.innerHTML = html;
}

// 개수만큼 데이터 보여줌
function setComment(pagenum) {
    if (pagenum == '<<') {
        setComment(1);
    } else if (pagenum == '>>') {
        setComment(pagesize);
    } else {
        let id = document.getElementById('commentlist');
        let html = '';
        let startnum = (pagecount * (pagenum - 1));
        let endnum = pagecount * (pagenum);
        html += '<div class="cmt-list">';
        for (var i = startnum; i < endnum; i++) {
            console.log(i);
            if (gclist[i] != null) {
                let data = gclist[i];
                let name = data.guest_name;
                let text = data.guest_text;
                let guestbooknum = data.comment_number;
                html += '<div class="cmt-col"><span>' + guestbooknum + '</span> <span>' + name + '</span><span>' + text + '</span></div>';
            }
        }
        id.innerHTML = html;
    }
}

// 파이어베이스에 데이터 넣어줌
async function insertComment(id) {
    let nameInput = document.getElementById('nameInput').value.trim();
    let commentInput = document.getElementById('commentInput').value.trim();
    console.log(id);
    if (nameInput === "" || commentInput === "") {
        alert("이름과 내용을 입력해주세요!");
        return;
    }
    if (nameInput.length > 5) {
        alert("이름은 최대 5자까지 입력 가능합니다.")
        return;
    }

    if (commentInput.length > 50) {
        alert("방명록은 최대 50자까지 입력 가능합니다.")
        return;
    }

    try {
        await addDoc(collection(db, "guestBook"), {
            guest_name: nameInput,
            guest_text: commentInput,
            comment_number: gcmcnt + 1,
            user_id: id
        });
        document.getElementById('nameInput').value = '';
        document.getElementById('commentInput').value = '';
        // window.location.reload();
        getBook(id);
    } catch (error) {
        console.error("방명록 추가 중 오류 발생:", error);
        alert("방명록을 추가하는 중 오류가 발생했습니다.")
    }
}





document.getElementById("pagenav").addEventListener("click", function (event) {
    if (event.target.classList.contains("page-link")) {
        setComment(event.target.text);
    }
});
document.getElementById("col-wj").addEventListener("click", function (event) {
    getPersonal(event.currentTarget.id);
});
document.getElementById("col-sw").addEventListener("click", function (event) {
    getPersonal(event.currentTarget.id);
});
document.getElementById("col-es").addEventListener("click", function (event) {
    getPersonal(event.currentTarget.id);
});
// 데이터 등록 버튼
document.getElementById("button-addon2").addEventListener("click", function (event) {
    console.log('col-wj id :' + event.target);
    insertComment(event.target.classList[0]);
});
$(document).ready(function () {
    $(".togglebtn").click(function () {
        var target = $(this).data("target");


        $(".collapse").not(target).collapse("hide");


        $(target).collapse("toggle");
    });


    $(".closebtn").click(function () {
        $(this).closest(".collapse").collapse("hide");
    });
});
// 모든 네비게이션 링크 가져오기
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        // 모든 링크에서 active 클래스 제거
        navLinks.forEach(nav => nav.classList.remove("active"));
        // 클릭한 링크에만 active 클래스 추가
        this.classList.add("active");
    });
});
