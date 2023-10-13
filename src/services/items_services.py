from src.database.db_connection import connection

class ItemsServices():

    @classmethod
    def get_items(request):
        try:
            curr = connection.cursor()
            curr.execute(f'SELECT * FROM items WHERE category = {request} limit 5')
            result = curr.fetchall()

            connection.close()

            return result
        except Exception as e:
            print(e)

