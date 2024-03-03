const mainDiv=document.getElementById('main')
const latest=document.getElementById('latest')
const dataLoad= async ()=>{
    const response = await fetch(' https://openapi.programming-hero.com/api/retro-forum/posts')
    const data= await response.json()
   const mainData=data.posts
  dataShow(mainData)
   

}
const dataShow=(data)=>{
   
    data.forEach(item => {
        
        const newDiv=document.createElement('div')
       
        newDiv.innerHTML=`
        <div class="flex justify-around h-[270px]  space-y-6">
              <div class="mt-10">
                <div class="indicator">
                  <span class="indicator-item badge badge-secondary"></span> 
                  <div class="grid w-32 h-32 bg-base-300 place-items-center"><img src=${item.image} alt=""></div>
                </div>
              </div>
              <div class="mt-10 space-y-5">
                <div class="flex gap-4">
                  <h1># <span>${item.category}</span></h1>
                  <h2>Author : <span>${item.author.name}</span></h2>
                </div>
                <div><h1>${item.title}</h1></div>
                <div>
                  <p class="w-[569px]">
                   ${item.description}
                  </p>
                </div>
                <hr />
                <div class="flex space-x-9">
                  <div class="flex">
                    <img src="images/tabler-icon-message-2.svg" alt="" />
                    <p>${item.comment_count}</p>
                  </div>

                  <div class="flex justify-between space-x-9">
                    <div class="flex">
                      <img src="images/tabler-icon-eye.svg" alt="" />
                      <p>${item.view_count}</p>
                    </div>

                    <div class="flex">
                      <img src="images/tabler-icon-clock-hour-9.svg" alt="" />
                      <p>${item.posted_time}</p>
                    </div>
                  </div>
                  <div>
                    <img src="images/email 1.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
        
        `
        mainDiv.appendChild(newDiv)
    });
   
}

const latestData=async()=>{
    const response =await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data= await response.json()
   
   data.forEach(item=>{
    console.log(item)
    const newDiv=document.createElement('div')
    newDiv.innerHTML=`
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src=${item.cover_image} alt="Shoes" /></figure>
           
            <div class="card-body">
              <div class="flex">
                <img src="images/date.svg" alt="">
                <p>${item.author.posted_date}</p>
              </div>
              <h2 class="card-title">${item.title}</h2>
              <p>${item.description} </p>
              <div class="flex gap-10">
                <div>
                  <img class="w-[44px] h-[44px] rounded-full" src=${item.profile_image} alt="">
                </div>
                <div>
                  <h1 class="font-semibold text-black">${item.author.name}</h1>
                  <h2>${item.author.designation}</h2>
                </div>
              </div>
            </div>
          </div>
    
    `
latest.appendChild(newDiv)
   })

}


dataLoad()
latestData()