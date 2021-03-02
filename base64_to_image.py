import base64
from PIL import Image
from io import BytesIO

def base64_to_png(data):
    data= data.replace("data:image/png;base64,","")  
    encoded_image_data = base64.b64decode(data)
    file_obj = BytesIO(encoded_image_data)

    im = Image.open(file_obj)
    im.save('image.png', 'PNG')

def base64_to_file_obj(data):
    data= data.replace("data:image/png;base64,","")
    encoded_image_data = base64.b64decode(data)
    file_obj = BytesIO(encoded_image_data)
    return file_obj

def convert_to_png(file_obj):
    buf = BytesIO()
    im = Image.open(file_obj)
    im.save(buf, format='PNG')
    return buf

def encode_to_base64_image(file_obj):
    data = file_obj.getvalue()
    data_encoded = base64.b64encode(data)
    return b"data:image/png;base64," + data_encoded
