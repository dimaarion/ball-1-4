class Loading {
    load = 0;



    render(){

        document.addEventListener("DOMContentLoaded",(e)=>{


            let divD =  document.createElement("div");
            let progressBar = document.createElement("div");
            let progressActive = document.createElement("div");
            let loadTxt = document.createElement("div");
            let img = document.createElement("img");
            let timeS = 0
            document.body.appendChild(divD);
            document.body.appendChild(progressBar);
            progressBar.className = "progress";
            progressBar.setAttribute("role","progressbar");
            progressBar.setAttribute("aria-label","Basic example");
            progressBar.setAttribute("aria-valuenow","0");
            progressBar.setAttribute("aria-valuemin","0");
            progressBar.setAttribute("aria-valuemax","100");
            progressBar.appendChild(progressActive);
            progressBar.appendChild(loadTxt);
            progressActive.className = "progress-bar";
            progressActive.style.width = 0 + "%";
            divD.appendChild(img);
            img.src = "./asset/load.png";
            img.width = window.innerWidth;
            img.height = window.innerHeight;
            divD.className = "preload";
            timeS =  e.timeStamp;
            let loadCount = 0;


            let interval = setInterval(()=>{
                loadCount = loadCount + 1
                progressActive.innerHTML = Math.round(loadCount / timeS * 100)  + "%"
                progressActive.style.width =  Math.round(loadCount / timeS * 100) + "%"
                if(loadCount >  timeS && this.load === 1) {
                    document.querySelector("main").style.display = "block"
                    progressBar.remove();
                    progressActive.remove();
                    divD.remove();
                    img.remove();
                    clearInterval(interval);
                }else {

                }
            },1)


        })
    }
}