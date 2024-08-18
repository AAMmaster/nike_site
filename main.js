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

// const products = document.getElementById("products")
// let html = ``
// axios.get('http://localhost:3000/banner')
// .then((res)=>{
//     console.log(res.data)
//     let response = res.data
//     html += response.map((elem)=>{
//         return `
//         <div class="product">
//             <img src="${elem['poster']}" alt="">
//             <div class="detail">
//                 <p>
//                 ${elem['description']}
//                 </p>
//                 <button type="button">shop</button>
//             </div>
//         </div>
//         `
//     })
//     products.innerHTML = html
// })
