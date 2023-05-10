const request = require("supertest");
const express = require("express");
const mockAxios = require('axios');
const bodyParser = require("body-parser");
const router = require("../routes/SettingsProfilePage");
const SettingsProflePageController = require("../controllers/SettingsProfilePage");

// Mock the updateProfile function
jest.mock("../controllers/SettingsProfilePage", () => ({
    updateProfile: jest.fn().mockResolvedValue(),
}));

// Mock the getProfile function
jest.mock("../controllers/SettingsProfilePage", () => ({
    getProfile: jest.fn().mockResolvedValue({
        firstName: 'Cass',
        lastName: 'P',
        email: 'cass@sth.com',
        gender: 'female',
        skinTone: 'warm',
        location: 'Auckland',
        password: 'hi',
        inputPassword: 'hi',
    }),
}));

// Create an Express app and use the router
const app = express();
app.use(bodyParser.json());
app.use("/", router);

it("should return a 201 status code", async () => {
    const sampleData = {
        firstName: 'Cass',
        lastName: 'P',
        email: 'cass@sth.com',
        gender: 'female',
        skinTone: 'warm',
        location: 'Auckland',
        password: 'hi',
        inputPassword: 'hi',
    };
    const response = await request(app)
        .post("/updateProfile/test@example.com")
        .send(sampleData)
        .expect(201);
    // expect(response.body).toBe({ validPass: true });
    expect(SettingsProflePageController.updateProfile).toHaveBeenCalledWith(sampleData);
});


// it("should return a 500 status code if an error occurs", async () => {
//     const sampleData = {
//         firstName: 'Test',
//         lastName: 'User',
//         email: 'test@example.com',
//         gender: 'female',
//         skinTone: 'warm',
//         location: 'Auckland',
//         password: 'password',
//         inputPassword: 'password',
//     };
//     // Mock the addWardrobeItem function to throw an error
//     SettingsProflePageController.updateProfile.mockRejectedValue(new Error("Database error"));
//     const response = await request(app)
//         .post("/profile/updateProfile/test@example.com")
//         .send(sampleData)
//         .expect(500);
//     expect(response.body).toEqual({ error: "Internal server error" });
//     expect(SettingsProflePageController.updateProfile).toHaveBeenCalledWith(sampleData);
// });


