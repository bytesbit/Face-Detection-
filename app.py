import os.path
import cv2
from face_spoofing import spoof
from base64_to_image import base64_to_file_obj, convert_to_png, encode_to_base64_image
import os
from flask import Flask, request, render_template, send_from_directory, redirect,url_for,jsonify

app = Flask(__name__)

APP_ROOT = os.path.dirname(os.path.abspath(__file__))
target = os.path.join(APP_ROOT, 'images/')
# image from javascript through ajax
# image_path = os.path.join(os.getcwd(), 'image.png')
SERVER_NAME=os.environ.get("SERVER_NAME")

#Change app root in .env for different Domain
app.config["APPLICATION_ROOT"]=SERVER_NAME
# with app.app_context():
#     print(url_for('static',filename='css/main.css',_external=True))

@app.route("/")
def capture():
    return render_template('camcap.html')
    # return url_for('webcam',_external=True)
    

@app.route("/webcam", methods=['POST'])
def webcam():
    data = request.values['a']
    image_obj = base64_to_file_obj(data)
    res_image_obj = spoof(image_obj)
    png_img_obj = convert_to_png(res_image_obj)
    img_encoded_bytes = encode_to_base64_image(png_img_obj)
    return img_encoded_bytes
    



if __name__ == "__main__":
    app.run(debug=True,port=5555)
