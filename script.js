let person = new XMLHttpRequest();
person.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let temp = JSON.parse(this.responseText);
    document.getElementById('name').innerHTML = temp.name;
    document.getElementById('pic').setAttribute('src', '' + temp.pic);
    document.getElementById('bday').innerHTML = temp.bday;
  }


}

person.open("GET","einstein.json", true);
person.send();

let bioDisplayer = function() {
  document.getElementById('bio').innerHTML = "A mish mash mash mish mish mash mush mish mush.";
}