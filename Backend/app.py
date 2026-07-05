from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

# Load the trained model
model = joblib.load("linear_regression_salary_model.pkl")


# Home Route
@app.route("/")
def home():
    return "Salary Prediction API Running Successfully!"


# Prediction Route
@app.route("/predict", methods=["POST"])
def predict():

    try:
        # Get JSON data from React
        data = request.get_json()

        # Convert to DataFrame
        input_df = pd.DataFrame([data])

        # Predict
        prediction = model.predict(input_df)[0]

        # Return prediction
        return jsonify({
            "predicted_salary": round(float(prediction), 2)
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 400


if __name__ == "__main__":
    app.run(debug=True)