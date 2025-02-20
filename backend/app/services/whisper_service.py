import openai
import config

openai.api_key = config.OPENAI_API_KEY

def analyze_speech(audio_file):
    with open(audio_file, "rb") as audio:
        response = openai.Audio.transcribe("whisper-1", audio)
    return response["text"]
