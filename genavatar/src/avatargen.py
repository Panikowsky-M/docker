from flask import Flask, Response
import requests

app = Flask(__name__)
DEFAULTNAME = 'Dmitry'

@app.route('/')
def indexHTML():
	name = DEFAULTNAME
	
	head = '<html><head><meta charset=utf-8><title>Генератор аватаров</title></head><body>'
	body = '''<form method=POST>
		  Hello <input type=text name=name value={}>
		  <input type=submit value=submit>
		 </form>
		 <p>Ваш аватар:</p>
		<img src="/monster/monster.png"/>
		'''.format(name)
	tail = '</body></html>'
	return head + body + tail

@app.route('/monster/<name>')
def get_icon(name):
	r = requests.get('http://monsterpic:8080/monster/' + name + '?size=80')
	pic = r.content
	return Response( pic,mimetype='image/png' )

if __name__ == '__main__':
	app.run(debug=True,host='0.0.0.0')
