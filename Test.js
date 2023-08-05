//--Temp Code
let MemberSelection = {
    nohaxjusthype1 :{
        Name: "nohaxjusthype1",
        Rank: "Junior Agent",
        ID: "617652510168973313"
    },
    rottonpop2 :{
        Name: "rottonpop2",
        Rank: "Junior Agent",
        ID: "686875367729790996"
    },
    csicskagyerek2 :{
        Name: "csicska-gyerek2",
        Rank: "Agent",
        ID: "831486904405852182"
    },
    o_sqaud31 :{
        Name: "o_sqaud31",
        Rank: "Agent",
        ID: "1009654064872693870"
    },
    smitty_0311 :{
        Name: "smitty_0311",
        Rank: "Agent",
        ID: "730258183058096189"
    },
    spyfan090909 :{
        Name: "spyfan090909",
        Rank:  "Senior Agent",
        ID: "856287942191087677"
    },
    Universe265 :{
        Name: "Universe265",
        Rank: "Lead Agent",
        ID: "497222844921675778"
    },
    Vlbekingg :{
        Name: "Vlbekingg",
        Rank: "Lead Agent",
        ID: "774967485916250123"
    },
    TheDarkDevLord:{
        Name: "TheDarkDevLord",
        Rank: "Bureau Sergeant",
        ID: "618991840976306177"
    },
    BriefMeter123:{
        Name: "BriefMeter123",
        Rank: "Bureau Lieutenant",
        ID: "437746500752113694"
    },
    A_Dumbledore:{
        Name: "A_Dumbledore",
        Rank: "Bureau Captain",
        ID: "936411927473713223"
    }



}
//--End of Temp Code

let CurentSelected = null
var Host = null
var CoHostA = null
var CoHostB = null
var Supervisor = null
var GameName = null
var gameLink = null
var Notesinput = null

var CopyType = null

const selectHost = document.querySelector('.HostSelectButton')
const selectCoHost = document.querySelector('.CoHostSelectButton')
const selectSupervisor = document.querySelector(".SupSelectButton")
const modal = document.querySelector('#modal')
selectSupervisor.addEventListener('click', () => {
    modal.showModal();
    CurentSelected ="Supervisor"
})

selectCoHost.addEventListener('click', () => {
    if (selectCoHost.id != "disabaled"){
        modal.showModal();
        CurentSelected = "CoHost"
    }
})

selectHost.addEventListener('click', () => {
    modal.showModal();
    CurentSelected = "Host"
})


function populate(){
    const Intern = document.querySelector('.Intern');
    const JuniorAgent = document.querySelector('.JuniorAgent');
    const Agent = document.querySelector('.Agent');
    const SeniorAgent = document.querySelector('.SeniorAgent');
    const LeadAgent = document.querySelector('.LeadAgent');
    const Officers = document.querySelector('.Officers');
    

    for (User in MemberSelection){
        const newbutton = document.createElement("button");
        const userName = document.createTextNode(MemberSelection[User].Name);
        newbutton.appendChild(userName);
        User = MemberSelection[User];
        newbutton.data = User
        newbutton.onclick = function(X){
            CloseModal(this.data)
        }
       
        if (User.Rank == "Intern"){
            Intern.appendChild(newbutton);
        }else if(User.Rank == "Junior Agent"){
            JuniorAgent.appendChild(newbutton);
        }else if(User.Rank == "Agent"){
            Agent.appendChild(newbutton);
        }else if(User.Rank == "Senior Agent"){
            SeniorAgent.appendChild(newbutton);
        }else if(User.Rank == "Lead Agent"){
            LeadAgent.appendChild(newbutton);
        }else if(User.Rank == "Bureau Sergeant" || User.Rank == "Bureau Lieutenant" || User.Rank == "Bureau Captain"){
            Officers.appendChild(newbutton)
        };

    }
}
function CloseModal(X){
    if (CurentSelected == "Host"){
        selectHost.innerHTML = "Change Host";
        let Y = document.getElementById("HostUser");
        Y.style.display = "inline";
        document.querySelector('.hosttext').innerHTML = "@"+ X.Name;
        Host = X;
    }else if(CurentSelected == "CoHost"){
        if (CoHostA){
            CoHostB = X;
            let Y = document.getElementById("CoHostUserB");
            Y.style.display = "inline";
            document.querySelector('.Cohosttext2').innerHTML = "@"+ X.Name;
            selectCoHost.innerHTML = "Max";
            selectCoHost.id = "disabaled";
        }else{
            CoHostA = X;
            let Y = document.getElementById("CoHostUserA");
            Y.style.display = "inline";
            document.querySelector('.Cohosttext1').innerHTML = "@"+ X.Name;
            selectCoHost.innerHTML = "Add 2nd Co-Host";
        };
    }else if(CurentSelected == "Supervisor"){
        selectSupervisor.innerHTML = "Change Supervisor"
        let Y = document.getElementById("SupUser");
        Y.style.display = "inline";
        document.querySelector('#SupUser').innerHTML = "@"+ X.Name;
        Supervisor = X;
    };
    modal.close();
    document.getElementById("opt1").style.display = "flex";
    document.getElementById("opt2").style.display = "flex";
    document.getElementById("P4").style.display = "flex";
    UpdateCopyPaste()
}

function RemoveCO(X){
    
    if(X == "A"){
        if(CoHostB == null){
            CoHostA = null
            let Y = document.getElementById("CoHostUserA");
            Y.style.display = "none";
            selectCoHost.id = "";
            selectCoHost.innerHTML = "Select Co-Host";
        }else{
            let Y = document.getElementById("CoHostUserB");
            Y.style.display = "none";
            CoHostA = CoHostB;
            CoHostB = null
            selectCoHost.id = "";
            document.querySelector('.Cohosttext1').innerHTML = "@"+ CoHostA.Name;
            selectCoHost.innerHTML = "Add 2nd Co-Host";
        };
    }else if(X == "B"){
        let Y = document.getElementById("CoHostUserB");
        Y.style.display = "none";
        if(CoHostA == null){
            selectCoHost.id = "";
            selectCoHost.innerHTML = "Select Co-Host";
        }else{
            selectCoHost.id = "";
            selectCoHost.innerHTML = "Add 2nd Co-Host";
        };
        CoHostB = null;
    }else if(X =="C"){
        let Y = document.getElementById("SupUser");
        Y.style.display = "none";
        Supervisor = null
        selectSupervisor.innerHTML = "Select Supervisor"
    }
}

let GameNameFocus = false
let gameLinkFocus = false
let NotesinputFocus = false



document.getElementById("gameName").onfocus = function(){
    document.getElementById("P5").style.display = "flex";
    GameNameFocus = true
}
document.getElementById("gameName").onblur  = function(){
    GameNameFocus = false
}

document.getElementById("gameLink").onfocus = function(){
    document.getElementById("Note").style.display = "flex";
    gameLinkFocus = true
}
document.getElementById("gameLink").onblur  = function(){
    gameLinkFocus = false
}

document.getElementById("Notesinput").onfocus = function(){
    NotesinputFocus = true
    
}
document.getElementById("Notesinput").onblur  = function(){
    NotesinputFocus = false
}

onkeydown = function(e){
    if(GameNameFocus == true){
        this.setTimeout(() => {
            GameName = document.getElementById("gameName").value;
            UpdateCopyPaste()
        }, 100);
    }else if(gameLinkFocus == true){
        this.setTimeout(() => {
            gameLink = document.getElementById("gameLink").value;
            UpdateCopyPaste()
        }, 100);
    }else if(NotesinputFocus == true){
        this.setTimeout(() => {
            Notesinput = document.getElementById("Notesinput").value;
            if (Notesinput == ""){
                Notesinput = null
                document.getElementById('NewBreak').innerHTML = "";
            }else{
                document.getElementById('NewBreak').innerHTML = "<br>";
            };
            UpdateCopyPaste()
        }, 100); 
    };
};


function UpdateCopyPaste(){
    document.getElementById("CPGameN").innerHTML = GameName
    if (Host){
        document.getElementById("CPHostA").style.display ="inline";
    };
    if (Notesinput){
        document.getElementById('NoPre').style.display = "inline";
    }else{
        document.getElementById('NoPre').style.display = "none";
    };
    if (gameLink && Host && GameName){
        document.getElementById('CopyButton').style.display = "inline";
    }
    document.getElementById("CPHostA").innerHTML = "@"+ Host.Name;
    document.getElementById("GL").innerHTML = gameLink;
    document.getElementById("GL").href = gameLink;
    document.getElementById("CPNo").innerHTML = Notesinput;
}
//Display In order
function DisplayP2(){
    const shout = document.querySelector(".P1Shout");
    CopyType = "Shout"
    shout.id = "disabaled"
    const P2 = document.getElementById("P2")
    P2.style.display = "flex";
    document.getElementById('tmepType').innerHTML = "Template for: Shout"
    document.getElementById('TemplatePar').style.display = "inline";
    
}

function CopyToClip(){
    console.log(Host.ID.toString())
    if(CopyType == "Shout"){
        navigator.clipboard.writeText(`• Game: ${GameName}
• Host: <@${Host.ID}> 
• Co-Hosts: <@&1041632584427376650> 
• Link: ${gameLink}
<@&1105668148260253746>`)};

};

populate()