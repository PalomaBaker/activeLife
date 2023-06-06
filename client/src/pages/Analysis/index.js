// Analysis HTML
import React, { useEffect, useState } from "react";
import './analysis.css';
import NutrientForm from "../../components/NutrientForm";

const Analysis = () => {
    const [formData, setFormData] = useState([]);
    const [nutrientData, setNutrientData] = useState({});

    const handleForm = (values) => {
        const url = 'https:api.edamam.com/api/nutrition-data';
        const query = `app_id=${process.env.REACT_APP_ID_ANALYSIS}&app_key=${process.env.REACT_APP_APIKEY_ANALYSIS}&ingr=${values.ingredient}`;
        const req = `${url}?${query}`;
        console.log(values);
        fetchNutrients(req);
    }

    const fetchNutrients = async (data) => {
        await fetch(data)
            .then( response => response.json()
            .then( data => setFormData(data.totalNutrients)));
    }

    useEffect(() => {
        const nutrientValues = {};
        const nutrientsToDisplay = ['ENERC_KCAL', 'FAT', 'FASAT', 'FATRN', 'CHOLE', 'NA', 'CHOCDF', 'FIBTG', 'SUGAR', 'PROCNT', 'VITA_RAE', 'VITC', 'CA', 'FE'];
        nutrientsToDisplay.forEach(nutrient => {
            if (formData[nutrient]) {
                nutrientValues[nutrient] = Math.round(formData[nutrient].quantity);
            } else {
                nutrientValues[nutrient] = 0;
            }
        });
        setNutrientData(nutrientValues);
        console.log(nutrientData);
    }, [formData])

    return (
        <React.Fragment>
            <div id="content-wrapper">
                <header className="analysis-header">
                    <h2 class="intro"> Search Through Our Nutritonal Analysis Database!</h2>
                </header>
                <div class="w-full max-w-xs">
                    <NutrientForm onSave={handleForm}/>
                </div>
                <div id="output" class="card">
                    <ul>
                        {Object.keys(nutrientData).map((key, index) => {
                            return (
                                <li>{key}: {nutrientData[key]}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Analysis;