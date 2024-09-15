import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from googletrans import Translator

translator = Translator()
app = Flask(__name__)
CORS(app)

faqs = [
    {"id": 1, "question": "What is Apple?", "answer": "Apple is a healthy fruit.", "imageUrl": "https://i.imgur.com/RH0FmDk.jpeg"},
    {"id": 2, "question": "What is Banana?", "answer": "Banana is rich in potassium.", "imageUrl": "https://i.imgur.com/RH0FmDk.jpeg"}
]

@app.route('/faqs', methods=['GET'])
def get_faqs():
    return jsonify(faqs)

@app.route('/faqs/<int:id>', methods=['GET'])
def get_faq_by_id(id):
    faq = next((faq for faq in faqs if faq["id"] == id), None)
    if faq:
        return jsonify(faq)
    else:
        return jsonify({"error": "FAQ not found"}), 404

@app.route('/faqs', methods=['POST'])
def create_faq():
    faq = request.json
    new_id = max(faq['id'] for faq in faqs) + 1 if faqs else 1
    faq['id'] = new_id
    
    if 'imageUrl' not in faq or not faq['imageUrl']:
        faq['imageUrl'] = 'https://i.imgur.com/RH0FmDk.jpeg'
    
    faqs.append(faq)
    return jsonify(faq), 201

@app.route('/faqs/<int:id>', methods=['PUT'])
def update_faq(id):
    faq_data = request.json
    faq = next((faq for faq in faqs if faq["id"] == id), None)
    
    if faq:
        faq.update(faq_data)
        return jsonify(faq)
    else:
        return jsonify({"error": "FAQ not found"}), 404

@app.route('/faqs/<int:id>', methods=['DELETE'])
def delete_faq(id):
    global faqs
    faqs = [faq for faq in faqs if faq["id"] != id]
    return '', 204

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    bot_response = process_message(user_message)
    return jsonify({"response": bot_response})

def process_message(message):
    message = message.lower()
    example_questions = [
        "What is the nutritional value of an apple?",
        "Can I freeze mangoes?",
        "What are the health benefits of oranges?",
        "How should I store avocados?",
        "What types of bananas are there?",
        "How do I ripen a peach quickly?",
        "What are the best fruits for a smoothie?",
        "Are there any fruits high in protein?",
        "Can I eat fruits on a low-carb diet?",
        "What is the difference between a plum and a prune?",
        "How can I tell if a watermelon is ripe?",
        "What fruits are best for hydration?",
        "How should I store strawberries to keep them fresh?",
        "What are the benefits of eating kiwi?",
        "Can I use fruits in savory dishes?",
        "What fruits are high in antioxidants?",
        "Are there any fruits that help with digestion?",
        "How do I choose a ripe avocado?",
        "What fruits are good for boosting immunity?",
        "Can you recommend a fruit for a low-calorie snack?"
    ]

    if "hello" in message:
        return "Hello! How can I assist you today?"
    
    elif "bye" in message:
        return "Goodbye! Have a great day!"
    
    elif "apple" in message and "nutritional value" in message:
        return "An apple is a good source of fiber and vitamin C. It contains about 52 calories per 100 grams and provides various antioxidants."
    
    elif "bananas" in message and "types" in message:
        return "There are over 1,000 types of bananas, but the most common ones are the Cavendish, Red, and Plantain varieties."
    
    elif "oranges" in message and "health benefits" in message:
        return "Oranges are high in vitamin C, which boosts the immune system. They also contain antioxidants and fiber, which promote heart health and digestion."
    
    elif "blueberries" in message and "weight loss" in message:
        return "Yes, blueberries are low in calories and high in antioxidants. They can be a great addition to a weight loss diet due to their high fiber content."
    
    elif "pineapples" in message and "cooking" in message:
        return "Pineapples can be used in a variety of dishes, including fruit salads, grilled desserts, and as a topping for pizza. They add a sweet and tangy flavor."
    
    elif "strawberries" in message and "recipe" in message:
        return "You can make a strawberry smoothie by blending strawberries with yogurt, honey, and a splash of milk. It’s a delicious and refreshing treat."
    
    elif "avocados" in message and "store" in message:
        return "To keep avocados fresh, store them in the refrigerator if they are ripe. If they are not yet ripe, keep them at room temperature until they ripen, then refrigerate."
    
    elif "mangoes" in message and "freeze" in message:
        return "Yes, mangoes can be frozen. Peel and chop them into chunks, then place them in a freezer bag or container. They can be used later in smoothies or desserts."
    
    elif "lemon" in message and "lime" in message:
        return "Lemons are generally yellow and have a tart, slightly sweet flavor, while limes are green and have a more intense tartness. Both are used to add flavor to dishes and drinks."
    
    elif "potassium" in message and "fruits" in message:
        return "Bananas, oranges, and cantaloupes are all high in potassium. Potassium is essential for maintaining healthy blood pressure and overall cellular function."
    
    elif "grapes" in message and "skin health" in message:
        return "Yes, grapes contain antioxidants like resveratrol, which can help protect the skin from damage and improve overall skin health."
    
    elif "fruits" in message and "workout" in message:
        return "Fruits like bananas, apples, and berries are great to eat before a workout. They provide natural sugars for energy and are easy to digest."
    
    elif "keto diet" in message and "fruit" in message:
        return "On a keto diet, it’s best to choose fruits that are low in carbs, such as berries. Most fruits are high in sugars, so portion control is important."
    
    else:
        example_text = (
            "I'm sorry, I don't understand. I can only answer questions related to fruits. Here are some examples of what you can ask me:\n"
            "1. What is the nutritional value of an apple?\n"
            "2. Can I freeze mangoes?\n"
            "3. What are the health benefits of oranges?\n"
            "4. How should I store avocados?\n"
            "5. What types of bananas are there?\n"
            "6. How do I ripen a peach quickly?\n"
            "7. What are the best fruits for a smoothie?\n"
            "8. Are there any fruits high in protein?\n"
            "9. Can I eat fruits on a low-carb diet?\n"
            "10. What is the difference between a plum and a prune?\n"
            "11. How can I tell if a watermelon is ripe?\n"
            "12. What fruits are best for hydration?\n"
            "13. How should I store strawberries to keep them fresh?\n"
            "14. What are the benefits of eating kiwi?\n"
            "15. Can you recommend a fruit for a low-calorie snack?\n"
        )
        return example_text

@app.route('/translate', methods=['POST'])
def translate():
    data = request.json
    text = data.get('text')
    source_lang = data.get('source_lang', 'en')
    target_lang = data.get('target_lang', 'es')
    
    if not text:
        return jsonify({"error": "Text is required"}), 400

    try:
        translated = translator.translate(text, src=source_lang, dest=target_lang)
        return jsonify({"translated_text": translated.text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    import os
    port = int(os.environ.get('PORT', 5000))  
    app.run(debug=True, port=port)
