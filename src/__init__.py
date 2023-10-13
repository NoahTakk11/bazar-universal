from flask import Flask

# Routes
from src.routes.items_routes import items

app =  Flask(__name__)

def init_app(config):
    # Configutartion
    app.config.from_object(config)

    # Blueprints
    app.register_blueprint(items)
    
    return app