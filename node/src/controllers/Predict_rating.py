import pandas as pd
import numpy as np
import sklearn
from sklearn.preprocessing import StandardScaler, MinMaxScaler
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor

import sys
pd.options.mode.chained_assignment = None

std = sys.stdout

cost, book, delivery, prange = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4]

cost = int(cost)
book = int(book)
delivery = int(delivery)
prange = int(prange)


def cuisine_counter(inpStr):
    NumCuisines = len(str(inpStr).split(','))
    return(NumCuisines)


def Predict_rating():
    ZomatoData = pd.read_csv("zomato.csv", encoding='ISO-8859-1')
    ZomatoData = ZomatoData[ZomatoData['Country Code'] == 1]
    ZomatoData = ZomatoData.drop_duplicates()
    ZomatoData['CuisineCount'] = ZomatoData['Cuisines'].apply(cuisine_counter)
    UselessColumns = ['Restaurant ID', 'Restaurant Name', 'City', 'Address',
                      'Locality', 'Locality Verbose', 'Cuisines', 'Rating color', 'Rating text']
    ZomatoData = ZomatoData.drop(UselessColumns, axis=1)
    # Finding nearest values to 4000 mark
    ZomatoData['Votes'][ZomatoData['Votes']
                        < 4000].sort_values(ascending=False)
    # Replacing outliers with nearest possibe value
    ZomatoData['Votes'][ZomatoData['Votes'] > 4000] = 3986
    # Finding nearest values to 50000 mark
    ZomatoData['Average Cost for two'][ZomatoData['Average Cost for two']
                                       < 50000].sort_values(ascending=False)
    # Replacing outliers with nearest possibe value
    ZomatoData['Average Cost for two'][ZomatoData['Average Cost for two'] > 50000] = 8000
    ContinuousCols = ['Aggregate rating', 'Longitude',
                      'Latitude', 'Votes', 'Average Cost for two']
    # Creating the correlation matrix
    CorrelationData = ZomatoData[ContinuousCols].corr()
    CorrelationData['Aggregate rating'][abs(
        CorrelationData['Aggregate rating']) > 0.2]
    SelectedColumns = ['Votes', 'Average Cost for two', 'Has Table booking',
                       'Has Online delivery', 'Price range']
    # Selecting final columns
    DataForML = ZomatoData[SelectedColumns]
    # Converting the binary nominal variable sex to numeric
    DataForML['Has Table booking'].replace({'Yes': 1, 'No': 0}, inplace=True)
    DataForML['Has Online delivery'].replace({'Yes': 1, 'No': 0}, inplace=True)
    # Treating all the nominal variables at once using dummy variables
    DataForML_Numeric = pd.get_dummies(DataForML)
    # Adding Target Variable to the data
    DataForML_Numeric['Aggregate rating'] = ZomatoData['Aggregate rating']
    # Separate Target Variable and Predictor Variables
    TargetVariable = 'Aggregate rating'
    Predictors = ['Votes', 'Average Cost for two', 'Has Table booking',
                  'Has Online delivery', 'Price range']

    X = DataForML_Numeric[Predictors].values
    y = DataForML_Numeric[TargetVariable].values

    # Split the data into training and testing set
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.3, random_state=428)
    PredictorScaler = MinMaxScaler()
    PredictorScalerFit = PredictorScaler.fit(X)
    X = PredictorScalerFit.transform(X)
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.3, random_state=42)

    RegModel = RandomForestRegressor(
        max_depth=2, n_estimators=300, criterion='squared_error')
    # print(RegModel)
    # Creating the model on Training Data
    RF = RegModel.fit(X_train, y_train)
    # print(RF.score(X_test, y_test))
    y_pred2 = RF.predict([[100, cost, book, delivery, prange]])
    var = str(y_pred2[0])
    print(var)


Predict_rating()
