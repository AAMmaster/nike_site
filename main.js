// @media (max-width : 2000px)

let lastScrollTop = 0;
const topMidle = document.getElementById('top_midle');

window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        topMidle.style.top = '-200px'; // Adjust this value as needed
    } else {
        // Scrolling up
        topMidle.style.top = '0';
    }
    lastScrollTop = scrollTop;
});

const four_picture = document.getElementById("four_picture")
let html = ``
axios.get('http://localhost:3000/four_picture')
    .then((res) => {
        console.log(res.data)
        let response = res.data
        html += response.map((elem) => {
            return `
        <div class="picture_${elem.id}" id="picure_${elem.id}_dad">

            <a href=""><img src="${elem[`picture`]}" id="picure_${elem.id}" alt=""></a>

            <div class="details_picture">
                <p>${elem['title']}</p>
                <h3>${elem['content']}</h3>
            </div>

            <div class="shop">
                <a href="">Shop</a>
            </div>
        </div>
        `
        }).join(''); // Use join to concatenate the array elements into a single string
        four_picture.innerHTML = html
    })
    .catch((error) => {
        console.error('Error:', error);
        four_picture.innerHTML = 'Error loading data. Please try again later.';
    });

const banner = document.getElementById("golfman")
const banner_des = document.getElementById("course")
let html_banner = ``
let html_banner_des = ``
axios.get('http://localhost:3000/banner')
    .then((res) => {
        console.log(res.data)
        let response = res.data
        html_banner += response.map((elem) => {
            return `
            <img src="${elem.picture}" alt="">
            `
        }).join('');

        html_banner_des += response.map((elem) => {
            return `
                <div class="master" id="master">
                    <h1>${elem.title}</h1>
                    <p>${elem.description}</p>
                </div>

                <div class="explore" id="explore">
                    <a href="#"><img src="./files/explore.png" alt=""></a>
                </div>
            `
        }).join('');
        banner_des.innerHTML = html_banner_des
        // Use join to concatenate the array elements into a single string
        banner.innerHTML = html_banner


    })
    .catch((error) => {
        console.error('Error:', error);
        banner.innerHTML = 'Error loading data. Please try again later.';
    });

let picure1 = document.getElementById("picure_1")
let picure2 = document.getElementById("picure_2")
let picure3 = document.getElementById("picure_3")
let picure4 = document.getElementById("picure_4")
let picure_1_dad = document.getElementById("picure_1_dad")
let picure_2_dad = document.getElementById("picure_2_dad")
let picure_3_dad = document.getElementById("picure_3_dad")
let picure_4_dad = document.getElementById("picure_4_dad")



let ali = setInterval(() => {
    picure1 = document.getElementById("picure_1")
    picure2 = document.getElementById("picure_2")
    picure3 = document.getElementById("picure_3")
    picure4 = document.getElementById("picure_4")
    picure_1_dad = document.getElementById("picure_1_dad")
    picure_2_dad = document.getElementById("picure_2_dad")
    picure_3_dad = document.getElementById("picure_3_dad")
    picure_4_dad = document.getElementById("picure_4_dad")

    if (window.innerWidth <= 599) {
        // picure1.style.minWidth = ("599px")
        // picure2.style.minWidth = ("599px")
        // picure3.style.minWidth = ("599px")
        // picure4.style.minWidth = ("599px")
        picure1.style.display = ("block")
        picure2.style.display = ("block")
        picure3.style.display = ("block")
        picure4.style.display = ("block")
        clearInterval(ali)
    } else {
        console.log("ali kore");

    }

}, 50);
// let picure = document.getElementById("picure")
// if (window.innerWidth <= 599) {
//     picure.style.minWidth = ("599px")
// } else {
//     console.log("ali kore");
// }
