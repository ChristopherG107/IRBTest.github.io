//Test Code

let MembersTab = { 
    
    A_Dumbledore:{
        Name: "A_Dumbledore",
        ID: "936411927473713223",
        IRB: true,
        Rank: "Agent"
    },
    Vlbekingg:{
        Name: "Vlbekingg",
        ID: "774967485916250123",
        IRB: true,
        Rank: "Senior Agent"
    },
    icedragonXDX:{
        Name: "icedragonXDX",
        ID: "1015449238328590436",
        IRB: false,
        Rank: "Intern"
    },
    None:{
        Name: "N/A",
        ID: "N/A",
        IRB: false,
        Rank: "Senior Agent"
    }
}



let JSON_MembersTab = JSON.stringify(MembersTab);
localStorage.setItem("Members", JSON_MembersTab)
//End of Test

function LoadShout(){
    let lineOne = document.querySelector("#line1");
    let lineTwo = document.querySelector("#line2");
    let lineThree = document.querySelector("#line3");
    let lineFour = document.querySelector("#line4");
    let lineFive = document.querySelector("#line5");
    let lineSix = document.querySelector("#line6");

    lineOne.innerHTML = "Game: "
    lineTwo.innerHTML = "Host: "
    lineThree.innerHTML = "Ling: "
    lineFour.innerHTML = "Ping: @Gamenight Engagement Team"
    lineFive.innerHTML = "Post: @Commissioned Agent"
    lineSix.innerHTML = "Notes: I Require 2 Co-hosts"
}

function LoadPost(){
    let lineOne = document.querySelector("#line1");
    let lineTwo = document.querySelector("#line2");
    let lineThree = document.querySelector("#line3");
    let lineFour = document.querySelector("#line4");
    let lineFive = document.querySelector("#line5");
    let lineSix = document.querySelector("#line6");
    let lineSeven = document.querySelector("#line7");
    let lineEight = document.querySelector("#line8");
    let lineNine = document.querySelector("#line9");

    lineOne.innerHTML = "• Event type: IRB Gamenight | "
    lineTwo.innerHTML = "• Hosted by: "
    lineThree.innerHTML = "• Co-hosted by: "
    lineFour.innerHTML = "• Supervised by: "
    lineFive.innerHTML = "• Starts at: When enough people join"
    lineSix.innerHTML = ""
    lineSeven.innerHTML = "• Link to the game: "
    lineEight.innerHTML = "• Extra information: Have fun, make friends!"
    lineNine.innerHTML = "@Imperial Enlisted "
}

function LoadLog(){
    let lineOne = document.querySelector("#line1");
    let lineTwo = document.querySelector("#line2");
    let lineThree = document.querySelector("#line3");
    let lineFour = document.querySelector("#line4");
    let lineFive = document.querySelector("#line5");
    let lineSix = document.querySelector("#line6");
    let lineSeven = document.querySelector("#line7");

    lineOne.innerHTML = "Game: "
    lineTwo.innerHTML = "Host: "
    lineThree.innerHTML = "Co-host: "
    lineFour.innerHTML = "Supervisor: "
    lineFive.innerHTML = "Starting number of attendees: "
    lineSix.innerHTML = "Final number of attendees: "
    lineSeven.innerHTML = "Proof:"
}

function Test(x){
    console.log("Testing"+x)
}

let TestList = JSON.parse(localStorage.getItem("Members"))

let HostID = null
let CoHostID = null

function HostSelector(X){
    const HostDiv = document.querySelector("#host");
    HostDiv.innerHTML = "Host: "+X.Name
    HostID = X.ID
}

function CoHostSelector(X){
    const HostDiv = document.querySelector("#cohost");
    HostDiv.innerHTML = "Co-Host: "+X.Name
    CoHostID = X.ID
}

function CopyToClip(){
    if (HostID != "N/A"){
        if (CoHostID != "N/A"){
            navigator.clipboard.writeText(`• Event type: IRB Gamenight | 
• Hosted by: <@${HostID}>
• Co-hosted by: <@${CoHostID}>
• Supervised by:
• Starts at: When enough people join
        
• Link to the game: 
• Extra information: Have fun, make friends!
<@&865445689035325451>`)
        }else{
            navigator.clipboard.writeText(`• Event type: IRB Gamenight | 
• Hosted by: <@${HostID}>
• Co-hosted by: N/A
• Supervised by:
• Starts at: When enough people join
        
• Link to the game: 
• Extra information: Have fun, make friends!
<@&865445689035325451>`)
        }
    }
}

for (let player in TestList){
    const New = TestList[player]

    if(New.Rank != "None"){
        if(New.Rank != "Intern"){
            const NewMember = document.createElement("button");
            const newContent = document.createTextNode(New.Name);
            NewMember.appendChild(newContent);
            NewMember.onclick = function() {HostSelector(New)};
            const currentDiv = document.getElementById("a");
            currentDiv.appendChild(NewMember)

            const NewMemberb = document.createElement("button");
            const newContentb = document.createTextNode(New.Name);
            NewMemberb.appendChild(newContentb);
            NewMemberb.onclick = function() {CoHostSelector(New)};
            const currentDivb = document.getElementById("b");
            currentDivb.appendChild(NewMemberb)
        }else{
            const NewMember = document.createElement("button");
            const newContent = document.createTextNode(New.Name);
            NewMember.appendChild(newContent);
            NewMember.onclick = function() {CoHostSelector(New)};
            const currentDiv = document.getElementById("b");
            currentDiv.appendChild(NewMember)
        }
    }
} 


function UserB() {
    navigator.clipboard.writeText("<@1008788927060123648>");
}

function UserC() {
    navigator.clipboard.writeText("<@774967485916250123>");
}

