import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CategoryApi() {
    const [category, setCategory] = useState([
        {
            "id": "",
            "name": "",
            "object_ids": {}
        }
    ]);

    async function getCategory(){

            var config = {
            method: 'get',
            mode: 'no-cors',
            url: 'http://localhost:4000/allCat',
            headers: { }
            };

            axios(config)
            .then(function (response) {
                const result = JSON.parse(response.data)
                setCategory(result);
            })
            .catch(function (error) {
            console.log(error);
            });
    }
    console.log(category[0])
    /*for (let value of Object.value(category[0].object_ids)) {
        console.log(value);
    }*/

    useEffect(() => {
        getCategory();
    })


    return (
        <div>
            
        </div>
    )
}

export default CategoryApi

