import traceback
from flask import jsonify

# Database
from src.database.db_connect import DatabaseManager, route_db

# Logger
from src.common.Logger import Logger

db_connect = DatabaseManager(route_db)


class ItemsServices():

    @classmethod
    def get_items(cls,category):
        """
        Retrieves items from the database based on the provided category.

        Parameters:
            request (str): The category of items to retrieve.

        Returns:
            list of tuples: A list of tuples containing the retrieved items from the database.

        Raises:
            Exception: If an error occurs during the retrieval process.
        """

        try:
            connection = db_connect.get_connection()
            curr = connection.cursor()
            curr.execute(f'SELECT * FROM items WHERE category = "{category}" limit 5')
            result = curr.fetchall()

            columns = [column[0] for column in curr.description]

            items = []
            for row in result:
                item = dict(zip(columns, row))
                items.append(item)


            connection.close()

            return items
            
        except Exception as e:
            Logger.add_to_log('error', str(e))
            Logger.add_to_log('error', traceback.format_exc())
    
    @classmethod
    def get_items_by_id(cls, id):
        try:
            connection = db_connect.get_connection()
            curr = connection.cursor()
            curr.execute(f'SELECT * FROM items WHERE id = "{id}"')
            result = curr.fetchall()

            return result
        except Exception as e:
            Logger.add_to_log('error', str(e))
            Logger.add_to_log('error', traceback.format_exc())

