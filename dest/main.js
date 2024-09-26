// ----------------------CHON NGÔN NGỮ--------------------------//
handLang = () => {
    // Lấy tham chiếu đến các phần tử HTML
    const lang = document.querySelector('.lang'); // container chứa các ngôn ngữ
    const langItem = document.querySelectorAll('.lang .lang__option .lang__option-item'); // danh sách các ngôn ngữ
    const langCurrent = document.querySelector('.lang .lang__current span'); // ngôn ngữ hiện tại
    
    // Bắt sự kiện click vào container chứa các ngôn ngữ
    lang.addEventListener('click', (e) => {
        e.stopPropagation(); // ngăn chặn sự kiện click lan ra bên ngoài container
        lang.classList.toggle('active'); // thêm hoặc xóa lớp --active để hiển thị hoặc ẩn danh sách ngôn ngữ
    });

    // Bắt sự kiện click vào từng mục trong danh sách ngôn ngữ
    langItem.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // ngăn chặn trình duyệt chuyển đến trang mới khi người dùng bấm vào một mục
            let langtext = item.textContent; // lấy văn bản của mục đã chọn
            let langCurrentPrev = langCurrent.textContent; // lưu trữ ngôn ngữ trước đó
            langCurrent.innerHTML = langtext; // thay đổi ngôn ngữ hiện tại bằng văn bản của mục đã chọn
            item.innerHTML = langCurrentPrev; // thay đổi văn bản của mục đã chọn bằng ngôn ngữ trước đó
        });
    });

    // Bắt sự kiện click bất kỳ nơi nào trên trang để ẩn danh sách ngôn ngữ
    document.addEventListener('click', () => {
        lang.classList.remove('active'); // xóa lớp --active để ẩn danh sách ngôn ngữ
    });
};
// Gọi hàm để bắt đầu điều khiển chọn ngôn ngữ trên trang web
handLang();
// ----------------------CHON NGÔN NGỮ--------------------------//

function loadingPage() {
    const loading = document.querySelector(".loading");
    const progressBar = document.querySelector(".loading-spinner");
    const progressText = document.querySelector(".loading-progress");

    function loadingDone() {
        loading.classList.add("--success");
    }

    window.addEventListener("load", loadingDone);
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress++;
        progressBar.style.width = progress + "%";
        progressText.textContent = progress + "";

        if (progress === 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
                loadingDone();
            }, 500);
        }
    }, 30);
} loadingPage();


// ----------------------MENU MOBILE--------------------------//
// ----------------------MENU MOBILE--------------------------//
function handMobile() {
    // Lấy tham chiếu đến các phần tử HTML
    const menuBtn = document.querySelector(".btnmenu"); // nút để hiển thị menu
    const menuShow = document.querySelector(".menu-mobile"); // menu hiển thị
    const navBtnMobile = document.querySelectorAll(".menu-mobile a"); // các nút trong menu hiển thị
    // Hàm để mở/đóng menu
    function togMenu() {
        menuBtn.classList.toggle("--active"); // thêm hoặc xóa lớp --active cho nút menu
        menuShow.classList.toggle("--hide"); // thêm hoặc xóa lớp --hide cho menu hiển thị
    }
    // Hàm để đóng menu
    function closeMenu() {
        menuBtn.classList.remove("--active"); // xóa lớp --active cho nút menu
        menuShow.classList.add("--hide"); // thêm lớp --hide cho menu hiển thị
    }

    // Bắt sự kiện click vào nút menu
    menuBtn.addEventListener("click", togMenu);
    // Bắt sự kiện click vào các nút trong menu
    navBtnMobile.forEach((a) => {
        a.addEventListener("click", () => {
            togMenu(); // gọi hàm để đóng menu
        });
    });

    // Bắt sự kiện resize của cửa sổ trình duyệt để đóng menu khi độ rộng của màn hình lớn hơn hoặc bằng 991px
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 991) {
            closeMenu(); // gọi hàm để đóng menu
        }
    });
}
// Gọi hàm để bắt đầu điều khiển menu trên các thiết bị di động
handMobile();

// ----------------------MENU MOBILE--------------------------//
// ----------------------MENU MOBILE--------------------------//

function handVideo() {
    let videos = document.querySelectorAll('.video__item .video__item-play');
    let modalVideo = document.querySelector('.popupvideo');
    let iframeModalVideo = document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe');
    let btnClose = document.querySelector('.popupvideo .popupvideo__inner-close');
    videos.forEach(function (video) {
        video.addEventListener('click', function () {
            modalVideo.classList.add('active');
            let dataID = video.getAttribute('data-video-src');
            iframeModalVideo.setAttribute("src", `https://www.youtube.com/embed/${dataID}?autoplay=1`);
        })
    })
    function closeModal() {
        modalVideo.classList.remove('active')
        iframeModalVideo.setAttribute("src", '');
    }
    btnClose.addEventListener('click', function () {
        closeModal()
    })
    modalVideo.addEventListener('click', function () {
        closeModal()
    })
}
handVideo();




// Lấy phần tử tiến trình và gán cho hằng số 'progressBar'
const progressBar = document.querySelector(".scroolheader");
// Định nghĩa hàm 'updateProgressBar', được gọi khi người dùng cuộn trang
function updateProgressBar() {
    // Lấy vị trí cuộn dọc hiện tại của trang
    const scrollY = window.scrollY;
    // Lấy tổng chiều cao của trang
    const bodyHeight = document.body.clientHeight;
    // Lấy chiều cao của phần hiển thị của trang
    const screenHeight = window.innerHeight;
    // Tính toán phần trăm cuộn dọc dựa trên vị trí cuộn và chiều cao trang
    const scrollPercent = (scrollY / (bodyHeight - screenHeight)) * 100;
    // Cập nhật chiều rộng của thanh tiến trình dựa trên phần trăm cuộn dọc
    progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
}
// Thêm lắng nghe sự kiện cuộn vào cửa sổ mà gọi hàm 'updateProgressBar'
window.addEventListener("scroll", updateProgressBar);



changecolor = () => {
    const header = document.querySelector(".header"),
        scrollY = window.scrollY
    if (scrollY > 600) {
        header.classList.add("--bg-black")
    } else {
        header.classList.remove("--bg-black")
    }
}
changecolor()
window.addEventListener("scroll", changecolor)



function handleArticle() {
    const newsBtn = document.querySelectorAll(".news__btns .news__btn");
    const articleList = document.querySelectorAll(".news__lists .news__list");
    function removeActiveNewsList() {
        const activeBtn = document.querySelector(".news__btns .news__btn.--active");
        const activeList = document.querySelector(".news__lists .news__list.--active");
        if (activeBtn) {
            activeBtn.classList.remove("--active");
        }
        if (activeList) {
            activeList.classList.remove("--active");
        }
    }
    for (let i = 0; i < newsBtn.length; i++) {
        newsBtn[i].addEventListener("click", function () {
            removeActiveNewsList();
            this.classList.add("--active");
            articleList[i].classList.add("--active");
        });
    }
}
handleArticle();






// scroll to section
const menus = document.querySelectorAll("header .header__menu a");
// Lấy chiều cao của phần tử header
const heightHeader = document.querySelector("header").offsetHeight;
// Mảng để lưu trữ các phần tử tương ứng với các liên kết trong menu
const sections = [];

activeMenu = (a) => {
    // Hàm để xóa lớp "active" khỏi tất cả các phần tử liên kết
    removeActiveMenu = (a) => {
        a.forEach(function (menu_element, menu_index) {
            menu_element.classList.remove("--active");
        });
    }
    a.forEach(function (element, index) {
        // Lấy tên lớp từ thuộc tính href của liên kết, loại bỏ ký tự "#" và cho khoảng trắng 
        const className = element.getAttribute("href").replace("#", "");
        // Lấy phần tử tương ứng với liên kết
        const section = document.querySelector("." + className);
        sections.push(section);
        element.addEventListener("click", function (e) {
            e.preventDefault();
            // Cuộn trang đến vị trí của phần tử, điều chỉnh bằng chiều cao của header
            window.scrollTo({
                top: section.offsetTop - heightHeader + 1,
                behavior: "smooth",
            });
            // Xóa lớp "active" khỏi tất cả các liên kết
            removeActiveMenu(a);
            element.classList.add("active");
        });
    });
    window.addEventListener("scroll", function () {
        const positionScroll = window.pageYOffset;
        sections.forEach(function (section, index) {
            // Kiểm tra vị trí cuộn và thêm/xóa lớp "active" cho các liên kết
            if (
                positionScroll > section.offsetTop - heightHeader &&
                positionScroll < section.offsetTop + section.offsetHeight
            ) {
                removeActiveMenu(a);
                a[index].classList.add("active")
            } else {
                a[index].classList.remove("active")
            }
        });
    });
}
activeMenu(menus);




// Nav scroll to scetion //
const menusNav = document.querySelectorAll("header .right .menu-mobile a");
const heightHeaderNav = document.querySelector("header").offsetHeight;
const sectionsNav = [];

function activeMenuNav(menus) {
    function removeActiveMenu(a) {
        a.forEach(function (menu_element) {
            menu_element.classList.remove("--active");
        });
    }

    menus.forEach(function (element) {
        const className = element.getAttribute("href").replace("#", "");
        const section = document.querySelector("." + className);
        if (section) {
            sectionsNav.push(section);
            element.addEventListener("click", function (e) {
                e.preventDefault();
                window.scrollTo({
                    top: section.offsetTop - heightHeaderNav + 1,
                    behavior: "smooth",
                });
                removeActiveMenu(menus);
                element.classList.add("--active");
            });
        }
    });
}

activeMenuNav(menusNav);











// function handleSlider() {
//     const sliderBtnPrev = document.querySelector('.slider__bottom-control .btnctrl.prev');
//     const sliderBtnNext = document.querySelector('.slider__bottom-control .btnctrl.next');
//     const sliderItem = document.querySelectorAll('.slider__item-wrap .slider__item');
//     const sliderPageDot = document.querySelectorAll('.slider__bottom-paging .dotted li');
//     const sliderPageCur = document.querySelector('.slider__bottom-paging--current');
//     let slideStart = 0;

//     function removeActiveClasses() {
//         document.querySelector('.slider__item-wrap .slider__item.--active').classList.remove('--active');
//         document.querySelector('.slider__bottom-paging .dotted li.--active').classList.remove('--active');
//     }

//     function updateSlider() {
//         sliderItem[slideStart].classList.add('--active');
//         sliderPageDot[slideStart].classList.add('--active');
//         sliderPageCur.innerHTML = `0${slideStart + 1}`;
//     }

//     function goToNextSlide() {
//         if (slideStart < sliderItem.length - 1) {
//             slideStart++;
//             removeActiveClasses();
//             updateSlider();
//         }
//     }

//     function goToPrevSlide() {
//         if (slideStart > 0) {
//             slideStart--;
//             removeActiveClasses();
//             updateSlider();
//         }
//     }

//     function goToSlide(index) {
//         slideStart = index;
//         removeActiveClasses();
//         updateSlider();
//     }

//     sliderBtnNext.addEventListener('click', goToNextSlide);
//     sliderBtnPrev.addEventListener('click', goToPrevSlide);
//     sliderPageDot.forEach((dot, index) => {
//         dot.addEventListener('click', () => {
//             goToSlide(index);
//         });
//     });

//     updateSlider();
// }

// handleSlider();








//---- SLIDER THU VIEN FLICKITY----- //
function handleSlider() {
    // KHOI TAO SLIDER //
    var slider = document.querySelector(".slider__item-wrap");
    var flktySlider = new Flickity(slider,
        {
           cellAlign: "left",
           contain: true,
           prevNextButtons: false,
           wrapAround: true,
            on: {
                ready: function () {
                    console.log('Flickity is ready');
                    handleDotslider()
                   
                },
                change: function(index){
                    console.log('Slide change to' + index);
                    handlePaGinglider(index)
                }
            }
        }
       
    );
    // CONTROLS
    let btnPrev = document.querySelector(".slider__bottom-control .prev")
    let btnNext = document.querySelector(".slider__bottom-control .next")
    btnPrev.addEventListener('click', function(){
        flktySlider.previous(true)
    })
    btnNext.addEventListener('click', function () {
        flktySlider.next(true)
    })
    // Dot //
    function handleDotslider()
    {
           let dotsSlider = document.querySelector(".flickity-page-dots")
        dotsSliderBottom = document.querySelector(".slider__bottom-paging")
        dotsSliderBottom.appendChild(dotsSlider)
    }

    function handlePaGinglider(index) {
        let number = document.querySelector(".slider__bottom-paging .number")
        number.innerHTML = (index + 1).toString().padStart(2,0)
    }
 
}


function handlesCarousel(){
    var carousel = document.querySelector(".carousel");           
    var progressBar = document.querySelector(".progress-bar span") 
    var flktycarousel = new Flickity(carousel,
        {
            cellAlign: "left",
            contain: true,
            prevNextButtons: false,
            wrapAround: true,
            pageDots: false,
            freeScrooll: true,
            /* doi voi truong hop mang cham hinh chua tai xong ma js  apply vao thi se dan den  tinh trnag vi tri hinh khong dung slider bi loi //
            /******huong giai quyet******* */
            // lazyLoad: true,
            on:{
                scroll:(poresbarCarousel)=>{
                    poresbarCarousel = Math.max(0, Math.min(1,poresbarCarousel));
                    progressBar.style.width = poresbarCarousel * 100 + '%';
                }
            }
            
        }

    );
}

window.addEventListener('load', function()
{
    handlesCarousel();
    handleSlider();
})
Fancybox.bind('[data-fancybox]', {
    infinite: true,
    keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "next",
        ArrowDown: "prev",
        ArrowRight: "next",
        ArrowLeft: "prev",
    },
    on: {
        ready: function (fancybox) {
            console.log(`fancybox #${fancybox.id} is ready`);
        },
    },
    caption: function (fancybox, carousel, slide) {

    },
});
Fancybox.bind('[data-fancybox="gallery"]', {
    caption: function (fancybox, carousel, slide) {
        return `${slide.index + 1} / ${carousel.slides.length}`;
    },
});

















// function backToTop() {
//     window.addEventListener('scroll', function () {
//         var scrollPosition = window.scrollY;
//         // Hiển thị nút scroll top nếu vị trí cuộn lên cao hơn 400px
//         if (scrollPosition > 500) {
//             document.getElementById('scroll-to-top').style.display = 'block';
//         } else {
//             document.getElementById('scroll-to-top').style.display = 'none';
//         }
//     });
//     // Lắng nghe sự kiện click vào nút scroll top
//     document.getElementById('scroll-to-top').addEventListener('click', function () {
//         // Di chuyển đến đầu trang web trong thời gian 500ms
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     });
//     const headers = document.querySelector('header');
//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 100) {
//             headers.classList.add('scrolled');
//         } else {
//             headers.classList.remove('scrolled');
//         }
//     });

//     const heroScroll = document.querySelector('.hero_scroll');

//     heroScroll.addEventListener('click', () => {
//         const section2 = document.querySelector('#section2');
//         section2.scrollIntoView({ behavior: 'smooth' });
//     });
// } backToTop()










