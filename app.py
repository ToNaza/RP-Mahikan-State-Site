

from flask import Flask, render_template, request, redirect
import sqlite3

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('registration.html')

@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        name = request.form['Name']
        surname = request.form['Surname']
        telegram_username = request.form['Username']
        entry_date = request.form['entryDate']

        # Отримання дати створення паспорта (може бути поточна дата)
        passport_creation_date = '2024-04-20'  # Приклад дати

        # Збереження даних у базу даних
        conn = sqlite3.connect('database.db')
        cursor = conn.cursor()

        # Отримання поточного ID
        cursor.execute("SELECT MAX(id) FROM users")
        result = cursor.fetchone()
        current_id = result[0] if result[0] else 0
        new_id = current_id + 1

        # Додавання нового користувача у базу даних
        cursor.execute("INSERT INTO users (id, name, surname, telegram_username, entry_date, passport_creation_date) VALUES (?, ?, ?, ?, ?, ?)",
                       (new_id, name, surname, telegram_username, entry_date, passport_creation_date))

        conn.commit()
        conn.close()

        return redirect('/table')

@app.route('/table')
def table():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    # Отримання всіх користувачів з бази даних
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()

    conn.close()

    return render_template('table.html', users=users)

if __name__ == '__main__':
    app.run(debug=True)


    