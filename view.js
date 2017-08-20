window.onload= init;
function init(){
    var main= document.getElementsByTagName('body')[0];
    //header
    var confl= document.createElement('div');
    confl.className='container-fluid';
    
    var con= document.createElement('div');
    con.className='container';
    
    var roww= document.createElement('div');
    roww.className='row';
    
    var logo= document.createElement('div');
    logo.className='logo';
    logo.innerHTML="<img src='images/" +logoimg+ "'>";
    
    var navi= document.createElement('div');
    navi.className='navigation';
    
    //headerappending process
    
    main.appendChild(confl);
    confl.appendChild(con);
    con.appendChild(roww);
    roww.appendChild(logo);
    roww.appendChild(navi);
    
    //navigation
    
     var nul = document.createElement('ul');
            for (var i = 0; i < navitem.length; i++) {
                var nli = document.createElement('li');
                var na = document.createElement('a');
                na.href = navitem[i] + ".html";
                na.innerText = navitem[i];
                nli.appendChild(na);
                nul.appendChild(nli);

            }

            navi.appendChild(nul);


    
    //banner
    
    var ban = document.createElement('div');
    ban.className= "ban";
    ban.innerHTML= "<img src='images/" +banimg+ "'>";
    
    //bannerappend
    main.appendChild(ban);
    
    
    //maincontent blocks
    var mccon= document.createElement("div");
    mccon.className='container';
    
    var mcroww= document.createElement("div");
    mcroww.className='row mcbl';
    
    main.appendChild(mccon);
    mccon.appendChild(mcroww);
    
    
    for(var i = 0; i < blocks.length; i++){
        var bl= document.createElement("div");
        bl.className='block';
        
        var blh3= document.createElement("h3");
        blh3.innerText = blocks[i][0];
        bl.appendChild(blh3);
        
        var blimg= document.createElement("img");
        blimg.src="images/" + blocks[i][1];
        bl.appendChild(blimg);
        
        var blp= document.createElement("p");
        blp.innerText= blocks[i][2];
        bl.appendChild(blp);
        mcroww.appendChild(bl);
        
        
    }
    
    //About block
    
    var abcon= document.createElement("div");
    abcon.className= "container";
    
    
    var abroww= document.createElement("div");
    abroww.className="row mcbl";
    
    main.appendChild(abcon);
    abcon.appendChild(abroww);
    
    var ab = document.createElement("div");
    ab.className="about";
    abroww.appendChild(ab);
    
    var abh2 = document.createElement("h2");
    ab.appendChild(abh2);
    
     var abp = document.createElement("p");
     ab.appendChild(abp);
    
    abh2.innerText= abitem[0];
    abp.innerText= abitem[1];

    
    
    //video
    
    var abvideo = document.createElement("div");
    abvideo.className="video";
    abroww.appendChild(abvideo);
    
    var video = document.createElement("iframe");
    video.className="vid";
    video.setAttribute("src", "https://www.youtube.com/embed/wJF5NXygL4k");
     
    video.setAttribute("width", "420");
    video.setAttribute("height", "215");
    video.setAttribute("frameborder", "0");
    abvideo.appendChild(video);

    
    //travelogue block
    
    var tconf= document.createElement("div");
    tconf.className="container-fluid travel";
    
    var tcon= document.createElement("div");
    tcon.className="container";
    
    var troww= document.createElement("div");
    troww.className="row";
    
    main.appendChild(tconf);
    tconf.appendChild(tcon);
    tcon.appendChild(troww);
    
    var th2= document.createElement("h2");
    th2.innerText="TRAVELOGUE";
    troww.appendChild(th2);
    
    for(var i = 0; i < travel.length; i++)
        {
           var tblock= document.createElement("div");
           tblock.className="tblock"; 
            
            var timg= document.createElement("img");
           timg.src= "images/" +travel[i][0];
            tblock.appendChild(timg);
            
            var tpara= document.createElement("p");
            tpara.innerText= travel[i][1] 
            tblock.appendChild(tpara);
            troww.appendChild(tblock);
        }
    
    
    
    
    
    
    
    
}