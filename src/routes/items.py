from flask import Blueprint, request, jsonify


items = Blueprint('items', __name__)

@items.route('/api/items', methods=['GET'])
def get_items():
    return jsonify({'items': ['foo', 'bar']})