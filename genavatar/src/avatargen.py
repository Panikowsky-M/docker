from flask import Flask, Response,request
import requests,hashlib

app = Flask(__name__)
SALT = "67a89dfee123b729"
DEFAULTNAME = 'Dmitry'

@app.route('/',methods=['GET','POST'])
def indexHTML():
	name = DEFAULTNAME
	if request.method == 'POST':
		name = request.form['name']

	salted_name = name + SALT
	name_hash = hashlib.sha256( salted_name.encode() ).hexdigest()
	
	head = '<html><head><meta charset=utf-8><title>Генератор аватаров</title></head><body>'
	body = '''<form method=POST>
		  Hello <input type=text name=name value={0}>
		  <input type=submit value=submit>
		 </form>
		 <p>Ваш аватар:</p>
		<img src="/monster/{1}"/>
		'''.format(name,name_hash)
	tail = '</body></html>'
	return head + body + tail

@app.route('/monster/<name>')
def get_icon(name):
	r = requests.get('http://monsterpic:8080/monster/' + name + '?size=80')
	pic = r.content
	return Response( pic,mimetype='image/png' )

if __name__ == '__main__':
	app.run(debug=True,host='0.0.0.0')
