(function () {
  var width = 320; // We will scale the photo width to this
  var height = 0; // This will be computed based on the input stream

  var streaming = false;

  var video = null;
  var canvas = null;
  var photo = null;
  var take_photo_btn = null;
  var submit_btn = null;

  
  
  function startup() {
    video = document.getElementById("video");
    canvas = document.getElementById("canvas");
    photo = document.getElementById("photo");
    take_photo_btn = document.getElementById("take_photo");
    submit_btn = document.getElementById("submit");
    document.getElementsByName("image_upload")[0].addEventListener('change', readURL);
    

    function readURL(input) {
      if (input.target.files) {
        var reader = new FileReader();
        
        reader.readAsDataURL(input.target.files[0]);
    
        reader.addEventListener(
          "load",
          function() {
            var data_upload = reader.result;
          
            
            
            clearPhoto();
            photo.setAttribute("src",data_upload);
            
       
          },
          false
        );
      }
    }
  
    

    
    
    
    
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(function (stream) {
        video.srcObject = stream;
        video.play();
      })
      .catch(function (err) {
        console.log("An error occurred: " + err);
      });

    video.addEventListener(
      "canplay",
      function (ev) {
        if (!streaming) {
          height = video.videoHeight / (video.videoWidth / width);

          video.setAttribute("width", width);
          video.setAttribute("height", height);
          canvas.setAttribute("width", width);
          canvas.setAttribute("height", height);
          streaming = true;
        }
      },
      false
    );

   

   
    
    take_photo_btn.addEventListener(
      "click",
      function (ev) {
        ev.preventDefault();
        takePicture();
      },
      false
    );

    submit_btn.addEventListener(
      "click",
      function (ev) {
        ev.preventDefault();
        getFaceSpoofingResult();
        

        
      },
      false
    );
    
    clearPhoto();
  }
  
 
  function getDataUrl(img) {
    // Create canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    // Set width and height
    canvas.width = img.width;
    canvas.height = img.height;
    // Draw the image
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL();
 }

  function clearPhoto() {
    var context = canvas.getContext("2d");
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var data = canvas.toDataURL();

    photo.setAttribute("src", data);
  }

  function takePicture() {
    var context = canvas.getContext("2d");
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);
      var data = canvas.toDataURL();


      photo.setAttribute("src", data);
    } else {
      clearPhoto();
    }
  }

  function getFaceSpoofingResult() {

   
    path = window.location.href
    url = path+'webcam'
    
    // var data = canvas.toDataURL();
    var data = document.getElementById("photo").src;
    
    $.ajax({
      type: "POST",
      url: url,
      data: {
        a: data,
      },
      success: function (data) {
        var response_data=data;
        console.log(response_data);
        clearPhoto();
        photo.setAttribute("src",response_data);
        if (data) {
          console.log(" Succesfully Upload ");
        } else {
          console.log("Error : While Uploading Image ");
          
          
          
        }
      },
    });
  }

 

  




  
  window.addEventListener("load", startup, false);
})();
