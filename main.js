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


        let picure_1_dad = document.getElementById("picure_1_dad")
        let picure_2_dad = document.getElementById("picure_2_dad")
        let picure_3_dad = document.getElementById("picure_3_dad")
        let picure_4_dad = document.getElementById("picure_4_dad")




        window.addEventListener("resize", () => {
            if (window.innerWidth <= 599) {
                four_picture.style.flexFlow = "column wrap";
                picure_1_dad.style.width = ("100%")
                picure_2_dad.style.width = ("100%")
                picure_3_dad.style.width = ("100%")
                picure_4_dad.style.width = ("100%")

            } else if (window.innerWidth >= 600) {
                four_picture.style.flexFlow = "row wrap";
                picure_1_dad.style.width = ("50%")
                picure_2_dad.style.width = ("50%")
                picure_3_dad.style.width = ("50%")
                picure_4_dad.style.width = ("50%")
                console.log("ali kore");

            }

        },)

    })
    .catch((error) => {
        console.error('Error:', error);
        banner.innerHTML = 'Error loading data. Please try again later.';
    });






    
$(document).ready(() => {
    $("#dropbtn_top_n").mouseenter(function () {
        $("#dropdown-content_n").slideDown("normal");
    });
    $("#dropdown_n").mouseleave(function () {
        $("#dropdown-content_n").slideUp("normal");
    });

    $("#dropbtn_top_m").mouseenter(function () {
        $("#dropdown-content_m").slideDown("fast");
    });
    $("#dropdown_m").mouseleave(function () {
        $("#dropdown-content_m").slideUp("fast");
    });

    $("#dropbtn_top_w").mouseenter(function () {
        $("#dropdown-content_w").slideDown("fast");
    });
    $("#dropdown_w").mouseleave(function () {
        $("#dropdown-content_w").slideUp("fast");
    });

    $("#dropbtn_top_k").mouseenter(function () {
        $("#dropdown-content_k").slideDown("fast");
    });
    $("#dropdown_k").mouseleave(function () {
        $("#dropdown-content_k").slideUp("fast");
    });

    $("#dropbtn_top_j").mouseenter(function () {
        $("#dropdown-content_j").slideDown("fast");
    });
    $("#dropdown_j").mouseleave(function () {
        $("#dropdown-content_j").slideUp("fast");
    });

    $("#dropbtn_top_s").mouseenter(function () {
        $("#dropdown-content_s").slideDown("fast");
    });
    $("#dropdown_s").mouseleave(function () {
        $("#dropdown-content_s").slideUp("fast");
    });
});