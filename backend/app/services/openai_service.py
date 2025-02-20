import openai
import config

openai.api_key = config.OPENAI_API_KEY

def correct_grammar(text: str):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "system", "content": "Correct grammar in this text."},
                  {"role": "user", "content": text}]
    )
    return response['choices'][0]['message']['content']
