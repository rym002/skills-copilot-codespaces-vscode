function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    if (memberValue == "member") {
        document.getElementById("skills").style.display = "none";
    } else if (memberValue == "leader") {
        document.getElementById("skills").style.display = "block";
    }
}