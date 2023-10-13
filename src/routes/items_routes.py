import traceback

from flask import Blueprint, request, jsonify

# Logger
from src.common.Logger import Logger

# Service
from src.services.items_services import ItemsServices

# Blueprints
items = Blueprint('items', __name__)


@items.route('/api/items', methods=['GET'])
def get_items():
    """
    Retrieves items based on a query parameter.

    Returns a JSON response containing a list of items and a success message.

    Parameters:
        None

    Returns:
        JSON: A JSON response containing the following keys:
            - items: A list of items retrieved based on the query parameter.
            - message: A success message indicating the retrieval was successful.
            - success: A boolean value indicating the success status of the retrieval.

    Raises:
        Exception: If an error occurs during the retrieval process, an exception is raised.
    """
    try:
        query = request.args.get('q')
        items = ItemsServices.get_items(query)

        return jsonify({'items': items, 'message': 'SUCCESS' , 'success': True})

    except Exception as e:
        Logger.add_to_log('error', str(e))
        Logger.add_to_log('error', traceback.format_exc())

        return jsonify({'message': "ERROR", 'success': False})

@items.route('/api/items/<id>', methods=['GET'])
def get_items_by_id(id: str):
    try:
        item_id = id
        item = ItemsServices.get_items_by_id(item_id)

        return jsonify({'item': item, 'message': 'SUCCESS' , 'success': True})
    
    except Exception as e:
        Logger.add_to_log('error', str(e))
        Logger.add_to_log('error', traceback.format_exc())

        return jsonify({'message': "ERROR", 'success': False})