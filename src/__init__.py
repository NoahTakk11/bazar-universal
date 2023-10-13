from flask import Flask

#Routes

app =  Flask(__name__)

def init_app(config):
    #Configutartion
    app.config.from_object(config)

    #Blueprints
    