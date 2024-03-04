const mainDiv = document.getElementById("main");
const latest = document.getElementById("latest");
const maincontainner = document.getElementById("maincontainner");
let isActive = true;
const dataLoad = async () => {
  const response = await fetch(
    " https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  
  const data = await response.json();
  const mainData = data.posts;
  dataShow(mainData);
};

const dataShow = (data) => {
  data.forEach((item) => {
    // mainDiv.textContent=''
    const newDiv = document.createElement("div");
    
    newDiv.innerHTML = `
        <div class=" lg:flex justify-around h-[full] lg:h-[270px] mb-5 shadow rounded-3xl bg-[#F3F3F5]">
              <div class="mt-10">
                <div class="indicator">
                  <span id='color' class="indicator-item badge badge-secondary "></span> 
                  <div class="grid w-32 h-32 bg-base-300 place-items-center "><img  src=${item.image} alt=""></div>
                </div>
              </div>
              <div class="mt-10 space-y-5">
                <div class="flex gap-4">
                  <h1 class='font-semibold'># <span>${item.category}</span></h1>
                  <h2 class='font-semibold'>Author : <span>${item.author.name}</span></h2>
                </div>
                <div><h1 id='title' class='text-3xl font-semibold text-black'>${item.title}</h1></div>
                <div>
                  <p class="w-[300px] lg:w-[569px] font-medium">
                   ${item.description}
                  </p>
                </div>
                <div class="divider"></div>
                <div class="lg:divider"></div>
                <div class="flex space-x-9">
                  <div class="flex">
                    <img src="images/tabler-icon-message-2.svg" alt="" />
                    <p>${item.comment_count}</p>
                  </div>

                  <div class="flex justify-between space-x-9">
                    <div  class="flex">
                      <img src="images/tabler-icon-eye.svg" alt="" />
                      <p id='videw'>${item.view_count}</p>
                    </div>

                    <div class="flex">
                      <img src="images/tabler-icon-clock-hour-9.svg" alt="" />
                      <p>${item.posted_time}</p>
                    </div>
                  </div>
                  <div   >
                    <img class='lg:ml-72' onclick="msg('${item.title}',${item.view_count})" src="images/email 1.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
        
        `;
    //  document.getElementById('color').classList.add(`${post?.isActive ? "bg-[#10B981]" : "bg-[#FF3434]"}`)
    mainDiv.appendChild(newDiv);
    document.getElementById('spinner').classList.add('hidden')
    // document.getElementById('spinner').classList.add('hidden')
   
    // if (item.isActive === true) {
    //   const color = document.getElementById("color")
    //     .classList.add("bg-green-600");
    // } 
    
  //  console.log(item.isActive)
  });
};
let sum = 0;
const msg = (tit, viw) => {
  
  sum++;
  const update = (document.getElementById("update").innerText = sum);

  const newDiv = document.createElement("div");
  // const aph1=document.getElementById('aph1')
  // aph1.innerText=title
  newDiv.innerHTML = `
  <div class="w-[full] lg:w-[326px] h-[82px] bg-[#F3F3F4] flex items-center mx-auto rounded-2xl justify-around shadow-lg mb-4">
  <div>
  <h1 id="h1" class='font-semibold'>${tit}</h1>
</div>
<div class="flex">
  <img src="images/tabler-icon-eye.svg" alt="">
  <p id="v" class='font-semibold'>${viw}</p>
</div>
</div>
 `;
 maincontainner.appendChild(newDiv);
};

const latestData = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await response.json();

  data.forEach((item) => {
    const newDiv = document.createElement("div");

    newDiv.innerHTML = `
    <div class="card card-compact w-full lg:w-96 bg-base-100 shadow-xl">
            <figure><img src=${item.cover_image} alt="Shoes" /></figure>
           
            <div class="card-body">
              <div class="flex">
                <img src="images/date.svg" alt="">
                <p>${item.author?.posted_date || "No publish date"}</p>
              </div>
              <h2 class="card-title">${item.title}</h2>
              <p>${item.description} </p>
              <div class="flex gap-10">
                <div>
                  <img class="w-[44px] h-[44px] rounded-full" src=${
                    item.profile_image
                  } alt="">
                </div>
                <div>
                  <h1 class="font-semibold text-black">${item.author.name}</h1>
                  <h2>${item.author?.designation || "unknown"}</h2>
                </div>
              </div>
            </div>
          </div>
    
    `
    
    latest.appendChild(newDiv);
    // document.getElementById('spinner').classList.add('hidden')
  });
};
const searchHandle =async () => {
  const src = document.getElementById("src-fild").value;
  console.log(src)
    const response = await fetch(
      ` https://openapi.programming-hero.com/api/retro-forum/posts?category=${src}`
    );
    const data = await response.json();
    const srcData=data.posts
    dataShow (srcData)
  };

  

latestData();
dataLoad();
