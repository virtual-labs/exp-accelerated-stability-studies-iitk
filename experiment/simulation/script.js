let on = document.querySelector("#on")
let tare = document.querySelector("#tare")
let reading = document.querySelector("#reading")
let spatula = document.querySelector("#spatula")
let cap = document.querySelector("#boxcap")

let petri = document.querySelector("#petri")
let powder = document.querySelector("#powder")
let flask = document.querySelector("#volumetricflasks")
let bottel = document.querySelector("#waterbottel1")
let next = document.querySelector("#nextBtn")
let start = document.querySelector("#startBtn")



let petriselector = petri;
let sample = powder
let powderleft = "48.8%"

let f = 1;



function movepetri(){
  if(petriselector == petri){
    petriplace()
    
  }
}

stp2.style.display = "none"
stp3.style.display = "none"
stp4.style.display = "none"

function startExperiment(){
    if(f==1){
        f=2
        // console.log("hello");
        
        
        machineName.style.opacity="100"
        petriName.style.opacity="100"
        spatulaName.style.opacity="100"
        salicylicacidName.style.opacity="100"
        volumetricflaskName.style.opacity="100"
        DistilledwaterName1.style.opacity="100"
        startBtn.style.visibility="hidden"
        text.innerText="Turn on the button of the weighing machine."
            // setTimeout(function(){
            //     machineName.style.opacity="0"
            // },1000)
    } 
}


function on1(){
    if(f==2){
        f=3
        
        reading.style.opacity="100%"
            machineName.style.opacity="0"
            petriName.style.opacity="0"
            spatulaName.style.opacity="0"
            salicylicacidName.style.opacity="0"
            volumetricflaskName.style.opacity="0"
            DistilledwaterName1.style.opacity="0"
            startBtn.style.visibility="hidden"
            text.innerText="Click on the petri dish."
        
    }

}



function tare1(){
    if(f==5){
      f=6
        reading.innerText="00.00"
        text.innerText="Click on the Tare button."
        text.innerText="Click on the cap of the salicylic acid box."
    }
    // else if(f==34){
    //     f=35
    //     reading.innerText="00.00"
        
    // }
}



function moveBoxCap(){
    if(f==6){
        
        boxcap.style.top="55%"
        setTimeout(function(){
            boxcap.style.left="40%"
            setTimeout(function(){
                boxcap.style.top="75%"
                text.innerText="Click on the spatula."
                f=7
                
            },1000)
        },1000)
    }
    else if(f==8){
        f=9
        boxcap.style.top="55%"
        setTimeout(function(){
            boxcap.style.left=""
            setTimeout(function(){
                boxcap.style.top=""
                f=10
                text.innerText="Click on the petri dish and pour the salicylic acid into the volumetric flask."
                // ins.innerText="Press NEXT button."
                // startbutton.innerText="NEXT"
                // startbutton.style.visibility="visible"
            },1000)
        },1000)
    }
}


function spatula1(){
    if(f==7){
        f=8
        spatula.style.top="50%"
        spatula.style.rotate="0deg"
        spatula.style.zIndex="100"
        setTimeout(function(){
            spatula.style.left="58%"
            // spatula.style.top="65%"
            spatula.style.zIndex="0"
            setTimeout(function(){
                spatula.style.top="57%"
                spatula.style.rotate="-20deg"
                // spatula.style.left="31%"
                setTimeout(function(){
                    spatula.style.top="37.5%"
                    spatula.style.rotate="0deg"
                    spatula.style.left="25%"
                    sample1.style.top="46.5%"
                    sample1.style.opacity="100%"
                    sample1.style.left="24.8%"
                    sample1.style.rotate="-25deg"
                    spatula.style.rotate="-30deg"
                    setTimeout(function(){
                        spatula.style.top="56%"
                        sample1.style.top="64.9%"
                        setTimeout(function(){
                            spatula.style.rotate="-20deg"
                            // spatula.style.left="9.5%"
                            // spatula.style.top="26%"
                            sample1.style.top="70%"
                            sample1.style.rotate="0deg"
                            // powder.style.left="9.8%"
                            setTimeout(function(){
                                sample1.style.width="2.5%"
                                
                            },1000)
                            setTimeout(function(){
                                reading.innerText="45.80"
                                
                                setTimeout(function(){
                                    spatula.style.top="50%"
                                    spatula.style.rotate=""
                                    
                    // 2 time spatula move.................
                                     setTimeout(function(){
                                         spatula.style.top="50%"
                                         spatula.style.rotate="0deg"
                                           setTimeout(function(){
                                             spatula.style.left="58%"
                                             //spatula.style.top="65%"   
                                                setTimeout(function(){
                                                     spatula.style.top="57%"
                                                     spatula.style.rotate="-20deg"
                                                     //spatula.style.left="31%"
                                                        setTimeout(function(){
                                                            spatula.style.rotate="0deg"
                                                            spatula.style.top="37.5%"
                                                            spatula.style.left="25%"
                                                            sample2.style.top="46.5%"
                                                            sample2.style.opacity="100%"
                                                            sample2.style.left="24.8%"
                                                            sample2.style.rotate="-25deg"
                                                            spatula.style.rotate="-30deg"
                                                              setTimeout(function(){
                                                                spatula.style.top="56%"
                                                                sample2.style.top="64.9%"
                                                                 setTimeout(function(){
                                                                    spatula.style.rotate="-20deg"
                                                                    // spatula.style.left="9.5%"
                                                                    // spatula.style.top="26%"
                                                                    sample2.style.top="70%"
                                                                    sample2.style.rotate="0deg"
                                                                        // powder.style.left="9.8%"
                                                                       setTimeout(function(){
                                                                         sample1.style.width="4%"
                                
                                                                        },1000)
                                                                        setTimeout(function(){
                                                                            reading.innerText="80.09"
                                           // 3 time spatula move.................
                                                                             setTimeout(function(){
                                                                                spatula.style.top="50%"
                                                                                spatula.style.rotate="0deg"
                                                                                setTimeout(function(){
                                                                                    spatula.style.left="58%"
                                                                                    //spatula.style.top="65%"   
                                                                                        setTimeout(function(){
                                                                                            spatula.style.top="57%"
                                                                                            spatula.style.rotate="-20deg"
                                                                                            //spatula.style.left="31%"
                                                                                                setTimeout(function(){
                                                                                                    spatula.style.rotate="0deg"
                                                                                                    spatula.style.top="37.5%"
                                                                                                    spatula.style.left="25%"
                                                                                                    sample3.style.top="46.5%"
                                                                                                    sample3.style.opacity="100%"
                                                                                                    sample3.style.left="24.8%"
                                                                                                    sample3.style.rotate="-25deg"
                                                                                                    spatula.style.rotate="-30deg"
                                                                                                    setTimeout(function(){
                                                                                                        spatula.style.top="56%"
                                                                                                        sample3.style.top="64.9%"
                                                                                                        setTimeout(function(){
                                                                                                            spatula.style.rotate="-20deg"
                                                                                                            // spatula.style.left="9.5%"
                                                                                                            // spatula.style.top="26%"
                                                                                                            sample3.style.top="70%"
                                                                                                            sample3.style.rotate="0deg"
                                                                                                             // powder.style.left="9.8%"
                                                                                                            setTimeout(function(){
                                                                                                                sample3.style.width="5%"
                                                                                                                sample3.style.left="24%"
                                                                                                                spatula.style.rotate=""
                                                                                                                spatula.style.top="83%"
                                                                                                                spatula.style.left="41%"
                                                                                                                },1000)
                                                                                                                setTimeout(function(){
                                                                                                                    reading.innerText="100.00"
                                                                                                                    setTimeout(function(){
                                                                                                                    text.innerText="Click on the cap of the salicylic acid box and close the box."
                                                                                                                    },500)
                                                                                                                    },500)
                                                                                                        },1000)
                                                                                                    },1000)
                                                                                                },1000)
                                                                                        },1000)
                                                                                },1000)
                                                                            },1000)
                                                                        },1000)
                                                                },1000)
                                                            },1000)
                                                        },1000)
                                                },1000)
                                         },1000)
                                     },1000)
                                    setTimeout(function(){
                                        f=8
                                        
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },2000)
            },1000)
        },1000)
    }
}



function petriplace(){
    if(f==3){
        f=4
         
        petriselector.style.top="40%"
        setTimeout(function(){
            petriselector.style.left="17%"
            setTimeout(function(){
                petriselector.style.top="59.5%"
                petriselector.style.zIndex="100"
                
                setTimeout(function(){
                    if(petriselector==petri){
                        
                        reading.innerText="22.06"
                        text.innerText="Click on the Tare button."
                        f=5
                    }
                    else{
                        f=7
                        reading.innerText="00.00"
                       

                    }
                },1000)
            },1000)
        },1000)
    }

    else if(f==10){
        f=11
        petriselector.style.top="40.8%"
        sample1.style.top="52%"
        sample2.style.top="52%"
        sample3.style.top="52%"
        reading.innerText="-22.06"
        setTimeout(function(){
            petriselector.style.left="59%"
            sample1.style.left="65%"
            sample2.style.left="65%"
            sample3.style.left="65%"
          
            setTimeout(function(){
                sample1.style.opacity="0"
                sample2.style.opacity="0"
                sample3.style.opacity="0"
                petriselector.style.rotate="30deg"
                
                // sample2.style.top="50%"
              
                setTimeout(function(){
                    
                    sample1.style.rotate=""
                    sample2.style.rotate=""
                    sample3.style.rotate=""
                    
                    
                    sample1.style.left="70%"
                    sample2.style.left="70%"
                    sample3.style.left="70%"
                    sample1.style.top="85%"
                    sample2.style.top="85%"
                    sample3.style.top="85%"
                    sample1.style.width="4%"
                    sample2.style.width="3%"
                    sample3.style.width="3%"
                    setTimeout(function(){
                    sample1.style.opacity="100"
                    sample2.style.opacity="100"
                    sample3.style.opacity="100"
                    volumetricflasks.style.zIndex="100"
                    setTimeout(function(){
                        petriselector.style.rotate="0deg"
                        petriselector.style.left=""
                        petriselector.style.top=""
                        setTimeout(function(){
                            text.innerText="Click on the distilled water and add 100 ml of water into the volumetric flask."
                        },1000) 
                    f=12
        // petriverify()  
               },1000)   
                },1000)
                },1000)
            },1000)
        },1000)
    }

 }

 function movebottel(){
    if(f==12){
        f=13
        // 
        distilled_water1.style.left="70%"
        
        distilled_water1.style.rotate="-30deg"
        distilled_water1.style.top="40%"
        setTimeout(function(){
            waterfall1.style.opacity="100"
                setTimeout(function(){
                    standardAcid1.style.opacity="100"
                    standardAcid1.style.bottom=""
                    waterfall1.style.opacity="0"
                    sample1.style.opacity="0"
                    sample2.style.opacity="0"
                    sample3.style.opacity="0"
                        // incylinder.style.opacity="0"
                        setTimeout(function(){
                            distilled_water1.style.rotate="0deg"
                            distilled_water1.style.left=""
                            distilled_water1.style.bottom=""
                             nextBtn.style.visibility="visible"
                             text.innerText="Click on the Next button."
                        f = 14
                        
             },1000)
        },1000);
    },1000);
    }

    else if(f==19){
    f=20
        distilled_water2.style.top="30%"
        setTimeout(function(){
            distilled_water2.style.left="65%"
        },1000);
            setTimeout(function(){
                distilled_water2.style.rotate="-40deg"
            },1000);
            setTimeout(function(){
                distilled_water2.style.left="65%"
                distilled_water2.style.top="38%"
            },1000);
            setTimeout(function(){
                    waterfall2.style.opacity="100"
                        setTimeout(function(){
                        colourlesssolution2.style.opacity="100"
                        waterfall2.style.opacity="0"
                        colourlesssolution1.style.opacity="0"
                        // incylinder.style.opacity="0"
                            setTimeout(function(){
                            distilled_water2.style.rotate="0deg"
                            distilled_water2.style.left=""
                            distilled_water2.style.bottom=""
                            nextBtn.style.visibility="visible"
                            text.innerText="Click on the Next button."
                            f=21
                            },1000)
                        },1000)
                    },1000)
            
}
    else if(f==27){
    f=28
        distilled_water3.style.top="6%"
        setTimeout(function(){
            distilled_water3.style.left="35%"
        
        setTimeout(function(){
                distilled_water3.style.top="39%"
                distilled_water3.style.rotate="-40deg"
                setTimeout(function(){
                        waterfall3.style.opacity="100"
                        setTimeout(function(){
                        wtrincylinder.style.opacity="100"
                        wtrincylinder.style.height="63.7%"
                        waterfall3.style.opacity="0"
                          setTimeout(function(){
                            distilled_water3.style.rotate="0deg"
                            distilled_water3.style.left=""
                            distilled_water3.style.bottom=""
                            setTimeout(function(){
                            text.innerText="Now, click on the measuring cylinder and transfer the water to the first test tube for mixing."
                            },1000)
                    },1000);
                    },1000);
                    },1000);
            },1000);
            },1000);
    }
    else if(f==29){
    f=30
        distilled_water3.style.top="6%"
        setTimeout(function(){
            distilled_water3.style.left="35%"
        
        setTimeout(function(){
                distilled_water3.style.top="39%"
                distilled_water3.style.rotate="-40deg"
                setTimeout(function(){
                        waterfall3.style.opacity="100"
                        setTimeout(function(){
                        wtrincylinder.style.opacity="100"
                        wtrincylinder.style.height="62.5%"
                         waterfall3.style.opacity="0"
                          setTimeout(function(){
                            distilled_water3.style.rotate="0deg"
                            distilled_water3.style.left=""
                            distilled_water3.style.bottom=""
                            setTimeout(function(){
                            text.innerText="Again click on the measuring cylinder and transfer the water to the second test tube for mixing."
                            },1000)
                    },1000);
                    },1000);
                    },1000);
            },1000);
            },1000);
    }
    else if(f==31){
    f=32
        distilled_water3.style.top="6%"
        setTimeout(function(){
            distilled_water3.style.left="35%"
        
        setTimeout(function(){
                distilled_water3.style.top="39%"
                distilled_water3.style.rotate="-40deg"
                setTimeout(function(){
                        waterfall3.style.opacity="100"
                        setTimeout(function(){
                        wtrincylinder.style.opacity="100"
                        wtrincylinder.style.height="60.1%"
                         waterfall3.style.opacity="0"
                          setTimeout(function(){
                            distilled_water3.style.rotate="0deg"
                            distilled_water3.style.left=""
                            distilled_water3.style.bottom=""
                            setTimeout(function(){
                            text.innerText="Again click on the measuring cylinder and transfer the water to the third test tube for mixing."
                            },1000)
                    },1000);
                    },1000);
                    },1000);
            },1000);
            },1000);
    }
    else if(f==33){
    f=34
        distilled_water3.style.top="6%"
        setTimeout(function(){
            distilled_water3.style.left="35%"
        
        setTimeout(function(){
                distilled_water3.style.top="39%"
                distilled_water3.style.rotate="-40deg"
                setTimeout(function(){
                        waterfall3.style.opacity="100"
                        setTimeout(function(){
                        wtrincylinder.style.opacity="100"
                        wtrincylinder.style.height="59.3%"
                         waterfall3.style.opacity="0"
                          setTimeout(function(){
                            distilled_water3.style.rotate="0deg"
                            distilled_water3.style.left=""
                            distilled_water3.style.bottom=""
                            setTimeout(function(){
                            text.innerText="Again click on the measuring cylinder and transfer the water to the fourth test tube for mixing."
                            },1000)
                    },1000);
                    },1000);
                    },1000);
            },1000);
            },1000);
    }
    else if(f==35){
    f=36
        distilled_water3.style.top="6%"
        setTimeout(function(){
            distilled_water3.style.left="35%"
        
        setTimeout(function(){
                distilled_water3.style.top="39%"
                distilled_water3.style.rotate="-40deg"
                setTimeout(function(){
                        waterfall3.style.opacity="100"
                        setTimeout(function(){
                        wtrincylinder.style.opacity="100"
                        wtrincylinder.style.height="58%"
                         waterfall3.style.opacity="0"
                          setTimeout(function(){
                            distilled_water3.style.rotate="0deg"
                            distilled_water3.style.left=""
                            distilled_water3.style.bottom=""
                            setTimeout(function(){
                            text.innerText="Again click on the measuring cylinder and transfer the water to the last test tube for mixing."
                            
                            setTimeout(function(){
                            nextBtn.style.visibility="visible"
                            text.innerText="Click on Next button." 
                            },1000)
                            },1000)
                    },1000);
                    },1000);
                    },1000);
            },1000);
            },1000);
    }
}



function clickNext() {
//   first time click next
  if (f === 14) {
    f = 15;
    stp1.style.display = "none"
    nextBtn.style.visibility="hidden"
    stp2.style.display = "block"
    hclName.style.opacity="100"
    measuringcylinderName.style.opacity="100"
    conicalFlaskName.style.opacity="100"
    DistilledwaterName2.style.opacity="100"
    text.innerText="Click on the cap of the concentrated HCl bottle and open the bottle."
    f = 16
  }
// second time click next
 else if (f === 21) {
    f = 22;
    stp2.style.display = "none"
    nextBtn.style.visibility="hidden"
    stp3.style.display = "block"
    testtubeName.style.opacity="100"
    measuringcylinderName3.style.opacity="100"
    standartSol3.style.opacity="100"
    DistilledwaterName3.style.opacity="100"
    pipette3.style.opacity="100"
    text.innerText="Click on the pipette and add 0.02 mg/mL standard salicylic acid solution to the first test tube."
}
// third time click next
 else if (f === 37) {
    f = 38;
    stp3.style.display = "none"
    nextBtn.style.visibility="hidden"
    stp5.style.display = "block"
    text.innerText="This is the table and graph of the experiment. "
    table.style.opacity="100"
    graph.style.opactiy="100"
    // hclName.style.opacity="100"
    // measuringcylinderName.style.opacity="100"
    // conicalFlaskName.style.opacity="100"
    // DistilledwaterName2.style.opacity="100"
}
}
window.onload = function () {
  document.getElementById("nextBtn").addEventListener("click", clickNext);
};

//  --------------------------------- STEP 2 ---------------------------------------------------------------------------------


let container = document.querySelector("#hclContainer")
let cylinder = document.querySelector("#cylinder")
let containercap = document.querySelector("#hclCap")
let solution = document.querySelector("#hclsolution")

function movecap(){
    if(f==16){
        f=17
        hclName.style.opacity="0"
        measuringcylinderName.style.opacity="0"
        conicalFlaskName.style.opacity="0"
        DistilledwaterName2.style.opacity="0"
         hclCap.style.top="50%"
            setTimeout(function(){
           hclCap.style.left="40%"
            },1000)
            setTimeout(function(){
            hclCap.style.top="80%"
            },1000)
            setTimeout(function(){
            text.innerText="Click on the concentrated HCl and pour 9.8 ml of concentrated HCl into the measuring cylinder"
            },1000)
    }

}
function movecontainer(){
     if(f==17){
        f=18
    hclmaincontainer.style.bottom="30%"
        setTimeout(function(){
            hclmaincontainer.style.left="38%"
        },1000)
            setTimeout(function(){
            hclmaincontainer.style.rotate="60deg"
                setTimeout(function(){
                solfal1.style.opacity="100"
                    setTimeout(function(){
                    incylinder.style.opacity="100"
                    solfal1.style.opacity="0"
                    hclsolution.style.height="50%"
                        setTimeout(function(){
                        hclmaincontainer.style.rotate="0deg"
                        hclmaincontainer.style.left=""
                        hclmaincontainer.style.bottom=""
                            setTimeout(function(){
                            hclCap.style.top=""
                            hclCap.style.left=""
                            hclCap.style.top=""
                                setTimeout(function(){
                                text.innerText="Click on the measuring cylinder and pour 9.8 ml of concentrated HCl into the conical flask."
                        },1000)
                        },1000)
                        },1000)
                    },1000)
                
                },1000)
        },1000)
    }
}

function movecylinder(){
     if(f==18){
        f=19
        maincylinder.style.bottom="35%"
            setTimeout(function(){
            maincylinder.style.left="58%"
                setTimeout(function(){
                maincylinder.style.rotate="60deg"
                    setTimeout(function(){
                    solfal2.style.opacity="100"
                        setTimeout(function(){
                        colourlesssolution1.style.opacity="100"
                        solfal2.style.opacity="0"
                        incylinder.style.opacity="0"
                        
                            setTimeout(function(){
                            maincylinder.style.rotate="0deg"
                            maincylinder.style.left=""
                            maincylinder.style.bottom=""
                                setTimeout(function(){
                            text.innerText="Click on the distilled water and mix 100 ml of water with the concentrated HCl in the conical flask."
                            },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
        },1000)
    }
    else if (f==28) {
    f = 29;
     mainwtrcylinder.style.bottom="40%"
     setTimeout(function(){
        mainwtrcylinder.style.left="63%"
        setTimeout(function(){
                mainwtrcylinder.style.rotate="60deg"
                mainwtrcylinder.style.bottom="30%"
                setTimeout(function(){
                    wtrfalltube1.style.opacity="100"
                    setTimeout(function(){
                        soltube1.style.opacity="20"
                        wtrfalltube1.style.opacity="0"
                        wtrincylinder.style.opacity="0"
                        tubesol1.style.opacity="0"
                        setTimeout(function(){
                            mainwtrcylinder.style.rotate="0deg"
                            mainwtrcylinder.style.left=""
                            mainwtrcylinder.style.bottom=""
                            },1000)
                            setTimeout(function(){
                            text.innerText="Click on the again distilled water and add 96 mL of water to the measuring cylinder."
                            },1000)
        },1000)
        },1000)
        },1000)
        },1000)
}
    else if (f==30) {
    f = 31;
     mainwtrcylinder.style.bottom="40%"
     setTimeout(function(){
        mainwtrcylinder.style.left="66.6%"
        setTimeout(function(){
                mainwtrcylinder.style.rotate="60deg"
                mainwtrcylinder.style.bottom="30%"
                setTimeout(function(){
                    wtrfalltube2.style.opacity="100"
                    setTimeout(function(){
                        soltube2.style.opacity="40"
                        wtrfalltube2.style.opacity="0"
                        wtrincylinder.style.opacity="0"
                        tubesol2.style.opacity="0"
                        setTimeout(function(){
                            mainwtrcylinder.style.rotate="0deg"
                            mainwtrcylinder.style.left=""
                            mainwtrcylinder.style.bottom=""
                            setTimeout(function(){
                            text.innerText="Click on the again distilled water and add 94 mL of water to the measuring cylinder."
                            },1000)
                            },1000)
        },1000)
        },1000)
        },1000)
        },1000)
}
    else if (f === 32) {
    f = 33;
     mainwtrcylinder.style.bottom="40%"
     setTimeout(function(){
        mainwtrcylinder.style.left="70.1%"
        setTimeout(function(){
                mainwtrcylinder.style.rotate="60deg"
                mainwtrcylinder.style.bottom="30%"
                setTimeout(function(){
                    wtrfalltube3.style.opacity="100"
                    setTimeout(function(){
                        soltube3.style.opacity="60"
                        wtrfalltube3.style.opacity="0"
                        wtrincylinder.style.opacity="0"
                        tubesol3.style.opacity="0"
                        setTimeout(function(){
                            mainwtrcylinder.style.rotate="0deg"
                            mainwtrcylinder.style.left=""
                            mainwtrcylinder.style.bottom=""
                            setTimeout(function(){
                            text.innerText="Click on the again distilled water and add 92 mL of water to the measuring cylinder."
                            },1000)
                            },1000)
        },1000)
        },1000)
        },1000)
        },1000)
}
    else if (f === 34) {
    f = 35;
     mainwtrcylinder.style.bottom="40%"
     setTimeout(function(){
        mainwtrcylinder.style.left="73.6%"
        setTimeout(function(){
                mainwtrcylinder.style.rotate="60deg"
                mainwtrcylinder.style.bottom="30%"
                setTimeout(function(){
                    wtrfalltube4.style.opacity="100"
                    setTimeout(function(){
                        soltube4.style.opacity="80"
                        wtrfalltube4.style.opacity="0"
                        wtrincylinder.style.opacity="0"
                        tubesol4.style.opacity="0"
                        setTimeout(function(){
                            mainwtrcylinder.style.rotate="0deg"
                            mainwtrcylinder.style.left=""
                            mainwtrcylinder.style.bottom=""
                            setTimeout(function(){
                            text.innerText="Click on the again distilled water and add 90 mL of water to the measuring cylinder."
                            },1000)
                            },1000)
        },1000)
        },1000)
        },1000)
        },1000)
}
    else if (f === 36) {
    f = 37;
     mainwtrcylinder.style.bottom="40%"
     setTimeout(function(){
        mainwtrcylinder.style.left="77.1%"
        setTimeout(function(){
                mainwtrcylinder.style.rotate="60deg"
                mainwtrcylinder.style.bottom="30%"
                setTimeout(function(){
                    wtrfalltube5.style.opacity="100"
                    setTimeout(function(){
                        soltube5.style.opacity="100"
                        wtrfalltube5.style.opacity="0"
                        wtrincylinder.style.opacity="0"
                        tubesol5.style.opacity="0"
                        setTimeout(function(){
                            mainwtrcylinder.style.rotate="0deg"
                            mainwtrcylinder.style.left=""
                            mainwtrcylinder.style.bottom=""
                            },1000)
        },1000)
        },1000)
        },1000)
        },1000)
}

}

//  --------------------------------- STEP 3 ---------------------------------------------------------------------------------

function movepipette(){
     if(f==22){
        f=23
        testtubeName.style.opacity="0"
        measuringcylinderName3.style.opacity="0"
        standartSol3.style.opacity="0"
        DistilledwaterName3.style.opacity="0"
        pipette3.style.opacity="0"
            pipette.style.bottom="50%"
                setTimeout(function(){
                pipette.style.left="45%"
                },1000)
                    setTimeout(function(){
                    pipette.style.rotate="0deg"
                    pipette.style.bottom="17.5%"
                    pipette.style.height="40%"
                        setTimeout(function(){
                        pipsol1.style.opacity="100"
                        solution3.style.height="17%"
                            setTimeout(function(){
                            pipette.style.bottom="40%"
                            pipsol1.style.bottom="41.3%"
                            },1000)
                                setTimeout(function(){
                                pipette.style.left="67.2%"
                                pipsol1.style.left="69.4%"
                                    setTimeout(function(){
                                    pipette.style.bottom="17.9%"
                                    pipsol1.style.bottom="19.2%"
                                        setTimeout(function(){
                                        solfall1.style.opacity="100"
                                        pipsol1.style.opacity="0"
                                       
                                       
                                            setTimeout(function(){
                                            tubesol1.style.opacity="100"
                                            solfall1.style.opacity="0"
                                            pipette.style.bottom="40%"
                                            
                                                setTimeout(function(){
                                                pipette.style.left=""
                                                pipette.style.height="35%"
                                                pipette.style.bottom="0.5%"
                                                pipette.style.rotate=""
                                                setTimeout(function(){
                                                text.innerText="Click on the pipette again and add 0.04 mg/mL standard salicylic acid solution to the second test tube."
                                                },1000)
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                              
            
                        },1000)
                    },1000)
    }
   else if (f === 23) {
    f = 24;
             pipette.style.bottom="50%"
                setTimeout(function(){
                pipette.style.left="45%"
                },1000)
                    setTimeout(function(){
                    pipette.style.rotate="0deg"
                    pipette.style.bottom="17%"
                    pipette.style.height="40%"
                        setTimeout(function(){
                        pipsol2.style.opacity="100"
                        solution3.style.height="17%"
                            setTimeout(function(){
                            pipette.style.bottom="40%"
                            pipsol2.style.bottom="43%"
                            },1000)
                                setTimeout(function(){
                                pipette.style.left="70.9%"
                                pipsol2.style.left="73.2%"
                                    setTimeout(function(){
                                    pipette.style.bottom="17.9%"
                                    pipsol2.style.bottom="20%"
                                        setTimeout(function(){
                                        solfall2.style.opacity="100"
                                        pipsol2.style.opacity="0"
                                       
                                       
                                            setTimeout(function(){
                                            tubesol2.style.opacity="100"
                                            solfall2.style.opacity="0"
                                            pipette.style.bottom="40%"
                                            
                                                setTimeout(function(){
                                                pipette.style.left=""
                                                pipette.style.height="35%"
                                                pipette.style.bottom="0.5%"
                                                pipette.style.rotate=""
                                                setTimeout(function(){
                                                text.innerText="Click on the pipette again and add 0.06 mg/mL standard salicylic acid solution to the third test tube."
                                                },1000)
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                              
            
                        },1000)
                    },1000)
 }

   else if (f === 24) {
    f = 25;
            pipette.style.bottom="50%"
                setTimeout(function(){
                pipette.style.left="45%"
                },1000)
                    setTimeout(function(){
                    pipette.style.rotate="0deg"
                    pipette.style.bottom="17%"
                    pipette.style.height="40%"
                        setTimeout(function(){
                        pipsol3.style.opacity="100"
                        solution3.style.height="16.5%"
                            setTimeout(function(){
                            pipette.style.bottom="40%"
                            pipsol3.style.bottom="44%"
                            },1000)
                                setTimeout(function(){
                                pipette.style.left="74.5%"
                                pipsol3.style.left="76.75%"
                                    setTimeout(function(){
                                    pipette.style.bottom="17.9%"
                                    pipsol3.style.bottom="21.6%"
                                        setTimeout(function(){
                                        solfall3.style.opacity="100"
                                        pipsol3.style.opacity="0"
                                       
                                       
                                            setTimeout(function(){
                                            tubesol3.style.opacity="100"
                                            solfall3.style.opacity="0"
                                            pipette.style.bottom="40%"
                                            
                                                setTimeout(function(){
                                                pipette.style.left=""
                                                pipette.style.height="35%"
                                                pipette.style.bottom="0.5%"
                                                pipette.style.rotate=""
                                                setTimeout(function(){
                                                text.innerText="Click on the pipette again and add 0.08 mg/mL standard salicylic acid solution to the fourth test tube."
                                                },1000)
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                              
            
                        },1000)
                    },1000)
 }


   else if (f === 25) {
    f = 26;
            pipette.style.bottom="50%"
                setTimeout(function(){
                pipette.style.left="45%"
                },1000)
                    setTimeout(function(){
                    pipette.style.rotate="0deg"
                    pipette.style.bottom="17%"
                    pipette.style.height="40%"
                        setTimeout(function(){
                        pipsol4.style.opacity="100"
                        solution3.style.height="15.5%"
                            setTimeout(function(){
                            pipette.style.bottom="40%"
                            pipsol4.style.bottom="43%"
                            },1000)
                                setTimeout(function(){
                                pipette.style.left="78.1%"
                                pipsol4.style.left="80.5%"
                                    setTimeout(function(){
                                    pipette.style.bottom="17.9%"
                                    pipsol4.style.bottom="20%"
                                        setTimeout(function(){
                                        solfall4.style.opacity="100"
                                        pipsol4.style.opacity="0"
                                       
                                       
                                            setTimeout(function(){
                                            tubesol4.style.opacity="100"
                                            solfall4.style.opacity="0"
                                            pipette.style.bottom="40%"
                                            
                                                setTimeout(function(){
                                                pipette.style.left=""
                                                pipette.style.height="35%"
                                                pipette.style.bottom="0.5%"
                                                pipette.style.rotate=""
                                                setTimeout(function(){
                                                text.innerText="Click on the pipette again and add 0.10 mg/mL standard salicylic acid solution to the fifth test tube."
                                                },1000)
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                              
            
                        },1000)
                    },1000)
 }

   else if (f === 26) {
    f = 27;
            pipette.style.bottom="50%"
                setTimeout(function(){
                pipette.style.left="45%"
                },1000)
                    setTimeout(function(){
                    pipette.style.rotate="0deg"
                    pipette.style.bottom="15%"
                    pipette.style.height="40%"
                        setTimeout(function(){
                        pipsol5.style.opacity="100"
                        solution3.style.height="14.5%"
                            setTimeout(function(){
                            pipette.style.bottom="40.3%"
                            pipsol5.style.bottom="42.7%"
                            },1000)
                                setTimeout(function(){
                                pipette.style.left="81.6%"
                                pipsol5.style.left="83.9%"
                                    setTimeout(function(){
                                    pipette.style.bottom="17.9%"
                                    pipsol5.style.bottom="20%"
                                        setTimeout(function(){
                                        solfall5.style.opacity="100"
                                        pipsol5.style.opacity="0"
                                       
                                       
                                            setTimeout(function(){
                                            tubesol5.style.opacity="100"
                                            solfall5.style.opacity="0"
                                            pipette.style.bottom="40%"
                                            
                                                setTimeout(function(){
                                                pipette.style.left=""
                                                pipette.style.height="35%"
                                                pipette.style.bottom="0.5%"
                                                pipette.style.rotate=""
                                                setTimeout(function(){
                                                text.innerText="Click on the distilled water and add 98 mL of water to the measuring cylinder."
                                                },1000)
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                              
            
                        },1000)
                    },1000)
                }
            }

            
//  --------------------------------- STEP 4 ---------------------------------------------------------------------------------
//  f=38
// function movecuvette(){
//     if(f==1){
//         f=2;
         
//        stp4_tubeclick_1.style.top="30%"
//        setTimeout(function(){
//        stp4_tubeclick_1.style.left="44.2%"
//        stp4_tubeclick_1.style.top="43%"
//         setTimeout(function(){
//             stp4_tubeclick_1.style.rotate="60deg"
//             setTimeout(function(){
//             stp4_solfal.style.opacity="100"
//             setTimeout(function(){
//             cuve_sol.style.opacity="100"
//             stp4_soltube1.style.height="60%"
//             stp4_solfal.style.opacity="0"
//             stp4_tubeclick_1.style.rotate=""
//             stp4_tubeclick_1.style.left=""
//             setTimeout(function(){
//             stp4_tubeclick_1.style.top=""
//                 setTimeout(function(){
//                     text.innerText="click on pipette"
//                 },1000)

//         },1000)
//         },1000)
//         },1000)
//         },1000)
        
    
//        },1000)
       
//     }
// }

// }