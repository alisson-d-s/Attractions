import { Request, Response } from "express";
import fetch from "node-fetch";

export class CreateAttractionController {
    async handle(request: Request, response: Response) {
        const { name, countryCode } = request.body;

        if (!name) {
            return response.status(400).send("Name is empty!");
        }

        if (!countryCode) {
            return response.status(400).send("CountryCode is empty!");
        }

        const countryFetchResponse = await fetch(`https://restcountries.com/v2/alpha/${countryCode}`)

        if (!countryFetchResponse.ok) {
            return response.status(404).json("Country not found!");
        }

        //const { name: n } = await countryFetchResponse.json();

        return response.json();
    };
};
