# Flask_Face_liveness_Detectioin_Webapp 
Simple Facial Recognition Web app based on flask framework and OpenCV.


### Prerequisites:
- Python3.6

- OpenCV

- Flask

### Installation

* Open Terminal Using ctrl+alt+t  Then Type ` $ git clone https://github.com/data-peace/datapeace-junkyard.git ` .

* Get Into Web App Directory  
```sh
$ cd  datapeace-junkyard/projects/face_spoofing_demo/
```

* Make Virtual Envirment
```sh
$ python3.6 -m venv .venv
```
*  Activate Virtual Enviroment
```sh 
$ source .venv/bin/activate 
```

* Install requirements 
```sh
$ pip install -r requirements.txt
```

# Heroku Deployment 
`Using Heroku CLI`
`Aptfile`
`Procfile`
`supervisor.conf`
```sh 
$ git init 
$ git add .
$ git commit -m "commit changes"
$ heroku login    
$ heroku apps  <choose Your app >
$ heroku git:remote -a <appname>
$ heroku create face-spoofing-demo <appname>
$ git push heroku master
```

# Using Supervisor Utility
- ` gunicorn and supervisor is succesfulle installed in virtual enviroment`
- ` add app root in .env ` 
```sh 
$ supervisord -c supervisor.conf 
```
- ` Use supervisorctl to control server `
```sh 
$ supervisorctl -c supervisor.conf
$ supervisor > status 
`It Shows Cureent running app status`
$ supervisor > stop app 
`to stop running app by name`
$ supervisor > exit
```

# Manual Run 
- `All Requirements Are Succesfully Installed  in Virtual Eniviromnet `

* Running Server 
```sh 
$python3.6 app.py 
```

- ` Now Flask Server start on Localhost With Url [http://localhost:5555/] `


# Feature 

* For Webcam Capturing Visit 

- `http://localhost:5555/` 

* For Image Uplod Visit 

- `http://localhost:5555/image/`


# click 

[Face Detection]https://face-spoofing-demo.herokuapp.com/
