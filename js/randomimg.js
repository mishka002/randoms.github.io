var randomimages = new Array("./images/img_1.jpg", "./images/img_2.jpg", "./images/img_3.jpg", "./images/img_4.jpg",
    "./images/img_5.jpg", "./images/img_6.jpg", "./images/img_7.jpg", "./images/img_8.jpg", "./images/img_9.jpg", "./images/img_10.jpg")

var randomName = new Array("ნინი", "მარიამი", "ნინა", "ნანი", "ეკატერინე", "კესო", "გიორგი", "ნიკოლოზი", "ირაკლი", "მიხეილი", "ცოტნე")

var name = Math.floor(Math.random()*randomName.length);

document.getElementById('randomnames').innerHTML = '<p>' + randomName[name] + '</p>';






var number = Math.floor(Math.random()*randomimages.length);
document.getElementById('randomimg').innerHTML = '<img src="'+randomimages[number]+'" class="imgran fade">';
document.getElementById('randomimg_2').innerHTML = '<img src="'+randomimages[number + 1]+'" class="imgran fade">';




var h = window.innerHeight;
console.log(h)