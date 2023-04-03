import os
import openai
import json
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

openai.api_key = os.environ.get('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')

@app.route('/summarize', methods=['POST'])
def summarize():
    text = request.json.get('text')
    model_engine = "text-davinci-002"

    response = openai.Completion.create(
        engine=model_engine,
        prompt=f"Please summarize the following text: {text}",
        max_tokens=50,
        n=1,
        stop=None,
        temperature=0.5,
    )

    summary = response.choices[0].text.strip()
    return jsonify(summary=summary)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
