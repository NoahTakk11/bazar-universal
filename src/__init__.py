from flask import Flask
from flask_cors import CORS

# Routes
from src.routes.items_routes import items

app =  Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

def init_app(config):
    # Configutartion
    app.config.from_object(config)

    # Blueprints
    app.register_blueprint(items)
    
    return app