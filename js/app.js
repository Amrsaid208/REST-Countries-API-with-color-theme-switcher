
async function gets(){
    const response=await fetch('https://restcountries.com/v3.1/all')
    
    const data =await response.json(); 
    
    // console.log(data);
    data.forEach(e=>{
        
        container.innerHTML+=`  <div class="card" id="${e.name.common}">
        <div class="top">
            <img src="${e.flags.svg}" alt="">
            </div>
            <div class="bot">
            <h3>${e.name.common}</h3>
            
            <p>Region:<span>${e.region}</span></p>
            <p>area:<span>${e.area}</span></p>
            <p>Capital:<span>${e.capital}</span></p>
            </div>
            </div>
            `
            
            
        });
        const names = data.map(dat => dat.name)
        const das=data
        // console.log(das);
        
        const search  = document.querySelector(".search");
        var flag=0
        search.addEventListener("search",function(){
            
            container.innerHTML = ``;
            // const names=data.map(na=>na.name)
            
                for(let i=0;i<data.length;i++){
                if(search.value==data[i].name.common){
                    
                    container.innerHTML=`  <div class="card"  id="${data[i].name.common}">
                    <div class="top">
                        <img src="${data[i].flags.svg}" alt="">
                        </div>
                        <div class="bot">
                        <h3>${data[i].name.common}</h3>
                        
                        <p>Region:<span>${data[i].region}</span></p>
                        <p>area:<span>${data[i].area}</span></p>
                        <p>Capital:<span>${data[i].capital}</span></p>
                        </div>
                        </div>
                        `;
                        flag=1;
                }
                filter.value = "none";
                
            }
            if(flag==0) window.alert("Not Found") ;
            else flag=0
        
        
        
        });
        
        const filter = document.querySelector("#filter");
        filter.addEventListener("click",function(){
            if(filter.value !="none"){
                container.innerHTML =``;

                    data.forEach(e=>{
                        if(e.region == filter.value){
                            container.innerHTML+=`  <div class="card"  id="${e.name.common}">
                            <div class="top">
                                <img src="${e.flags.svg}" alt="">
                                </div>
                                <div class="bot">
                                <h3>${e.name.common}</h3>
                                
                                <p>Region:<span>${e.region}</span></p>
                                <p>area:<span>${e.area}</span></p>
                                <p>Capital:<span>${e.capital}</span></p>
                                </div>
                                </div>
                                `;
                                search.value='';
                        }
                    })

            }


        })
        const spec =   document.querySelector(".spec");
        const mcard = document.querySelectorAll(".card");
        
                
        
            document.body.addEventListener("click",function(e){

                // console.log(e.target.id)
                if(e.target.id=='btn'){
                    container.classList.remove('hide')
                    spec.classList.add('hide')
                }
                if(e.target.className=='card'){
                    for(var i=0;i<das.length;i++){
                        if(e.target.id==das[i].name.common){
                            container.classList.add("hide")
                            spec.classList.remove("hide");
                            spec.innerHTML =` <button id='btn' class="back">back</button>
                            <div class="main">
                            <div class="ph"><img src='${data[i].flags.svg}' alt=""></div>
                            <div class="info">
                            <div class="l">
                            <h3>${data[i].name.common}</h3>
                            <p>Native name : ${data[i].name.common}</p>
                            <p>Region : ${data[i].region} </p>
                            <p>Sub regoin : ${data[i].subregion}</p>
                            <p>Capital : ${data[i].capital}</p>
                            </div>
                            <div class="r">
                            </div>
                            
                            </div>
                            </div>`
                        }
                    }

                }
            })
        const reload=document.querySelector('.where');
        
            reload.addEventListener('click', () => {
                    
                    container.innerHTML=' ';
                data.forEach(e=>{

        
                    container.innerHTML+=`  <div class="card" id="${e.name.common}">
                    <div class="top">
                        <img src="${e.flags.svg}" alt="">
                        </div>
                        <div class="bot">
                        <h3>${e.name.common}</h3>
                        
                        <p>Region:<span>${e.region}</span></p>
                        <p>area:<span>${e.area}</span></p>
                        <p>Capital:<span>${e.capital}</span></p>
                        </div>
                        </div>
                        `
                        
                        filter.value = "none";
                        search.value='';

                    });
              });
    
}
const aft=document.querySelector(".after");

gets();

const container=document.querySelector(".container");
const card=document.querySelector(".card");
const bott=document.querySelector(".bot");





