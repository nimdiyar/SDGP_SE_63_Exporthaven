from fastapi import FastAPI, Query, HTTPException 
from fastapi.middleware.cors import CORSMiddleware 
import joblib 
import pandas as pd 
import numpy as np 
import os 
from typing import Dict 
from statsmodels.tsa.statespace.sarimax import SARIMAX 
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:3000"]) # frontend origin allow_credentials=True, allow_methods=[""], allow_headers=[""], )

MONTHS_MAP = { "january": 1, "february": 2, "march": 3, "april": 4, "may": 5, "june": 6, "july": 7, "august": 8, "september": 9, "october": 10, "november": 11, "december": 12 }

def get_last_training_date(sarima_result): 
    try: 
        index = sarima_result.model.data.row_labels 
        return pd.to_datetime(index[-1]) 
    except Exception: 
        return None

@app.get("/api/predict") 
def predict(month: str = Query(..., description="Month name (e.g., January)"), country: str = Query(..., description="Country name (e.g., Australia)")): 
    month = month.lower() 
    if month not in MONTHS_MAP: 
        raise HTTPException(status_code=400, detail=f"Invalid month: {month}")

    months_ahead = MONTHS_MAP[month]
    months_ahead = max(1, min(12, months_ahead))

    file_name = f"models_{country}.pkl"

    if not os.path.exists(file_name):
        raise HTTPException(status_code=404, detail=f"No model file found for country={country}")

    try:
        country_dict = joblib.load(file_name)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to load model file for {country}: {e}")

    predictions = {}
    for product, sarima_result in country_dict.items():
        last_date = get_last_training_date(sarima_result)
        if not last_date:
            continue
        try:
            forecast_obj = sarima_result.get_forecast(steps=months_ahead)
            predicted_value = forecast_obj.predicted_mean.iloc[-1]
            predictions[product] = float(predicted_value)
        except Exception as e:
            print(f"Forecast failed for {country}-{product}: {e}")

    if not predictions:
        raise HTTPException(status_code=404, detail=f"No predictions for {country} in {month}")

    top_4 = dict(sorted(predictions.items(), key=lambda x: x[1], reverse=True)[:4])
    return top_4 
  
