var myModles = ["../AR-Project/models/Chair_3.glb", "../AR-Project/models/Chair_2.glb", '../AR-Project/models/Chair_4.glb']
var counter = 0
document.getElementById('change-color').addEventListener('click', function() {
  counter++;
  if (counter==3) {
    counter=0;
  }
  document.getElementById("model").scr = myModles[counter];
  document.getElementById("model-info").style.display="block";
})