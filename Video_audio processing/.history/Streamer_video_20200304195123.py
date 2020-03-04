from Flask import flask
import base64
import cv2
import zmq
import socket

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    return '''<h1>Team Automa </h1>'''

@app.route('/stream', methods=['GET'])
def stream():
    context = zmq.Context()
    footage_socket = context.socket(zmq.PUB)
    hostname = socket.gethostname()    
    IPAddr = socket.gethostbyname(hostname)    
    print("Your Computer Name is:" + hostname)    
    print("Your Computer IP Address is:" + IPAddr)
    footage_socket.connect('tcp://172.20.10.4:12044')

    camera = cv2.VideoCapture(0)  # init the camera

    while True:
        try:
            grabbed, frame = camera.read()  # grab the current frame
            frame = cv2.resize(frame, (640, 480))  # resize the frame
            encoded, buffer = cv2.imencode('.jpg', frame)
            jpg_as_text = base64.b64encode(buffer)
            footage_socket.send(jpg_as_text)

        except KeyboardInterrupt:
            camera.release()
            cv2.destroyAllWindows()
            break

if '__name__' == '__main__':
    app.run(debug = True, port = 4000)


# from flask import Flask, render_template, Response
# from streamer import Streamer
#
# app = Flask(__name__)
#
# def gen():
#   streamer = Streamer('localhost', 8089)
#   streamer.start()
#
#   while True:
#     if streamer.client_connected():
#       yield (b'--frame\r\n'b'Content-Type: image/jpeg\r\n\r\n' + streamer.get_jpeg() + b'\r\n\r\n')
#
# @app.route('/')
# def index():
#   return render_template('index.html')
#
# @app.route('/video_feed')
# def video_feed():
#   return Response(gen(), mimetype='multipart/x-mixed-replace; boundary=frame')
#
# if __name__ == '__main__':
#   app.run(host='localhost', threaded=True)