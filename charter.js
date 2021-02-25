 
     function toggleMenu() {
    //information som vises i inspector.
    console.log("toggleMenu");
    document.querySelector("#menu1").classList.toggle("hidden");
    //der henvises her til en anden function.
    myFunctionBurger(this);
} 
 
        
    function myFunctionBurger(x) {
    console.log("myFunctionBurger");
    x.classList.toggle("change");
}

document.querySelector("#menuknap").addEventListener("click", toggleMenu);



const url = "https://rejser-927d.restdb.io/rest/rejsertema7";
        
    const medieurl = "https://rejser-927d.restdb.io/media/";
    
    const options = {
        headers: {
            'x-apikey': "6033c5145ad3610fb5bb6500"
        }
    };
    
    async function hentData() {
        const resspons = await fetch(url, options);
        const json = await resspons.json();
        vis(json);
    }
        
    const main = document.querySelector("section");
    const template = document.querySelector("template").content;
        
    function vis(json) {
        console.log(json);
        json.forEach(place => {
            const klon = template.cloneNode(true);
            klon.querySelector(".billede").src = medieurl + place.billede;
            klon.querySelector(".navn").textContent = place.navn;
            klon.querySelector(".lok").textContent = place.lokation;
            klon.querySelector(".bes").textContent = place.beskrivelse;
            klon.querySelector(".att").textContent = place.attraktioner;
            main.appendChild(klon);
        })
        
    }
        
    hentData();