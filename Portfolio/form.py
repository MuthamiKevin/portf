from flask import Flask, render_template, request, redirect, url_for
from flask_mail import Mail, Message

app = Flask(__name__)

# Configuration for Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'muthamikevin80@gmail.com'
app.config['MAIL_PASSWORD'] = '39899677#Kn'
app.config['MAIL_DEFAULT_SENDER'] = 'muthamikevin80@gmail.com'

mail = Mail(app)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Get form data
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        email = request.form['email']
        contact_number = request.form['contact_number']
        message = request.form['message']

        # Send email with form data
        msg = Message('New Form Submission', recipients=['muthamikevin80@gmail.com'])
        msg.body = f"First Name: {first_name}\nLast Name: {last_name}\nEmail: {email}\nContact Number: {contact_number}\nMessage: {message}"
        mail.send(msg)

        return redirect(url_for('success'))

    return render_template('index.html')

@app.route('/success')
def success():
    return 'Form submitted successfully!'

if __name__ == '__main__':
    app.run(debug=True)
