# project-group-lavender-llamas
CS732/SE750 group repository for the Lavender Llamas

# Welcome to LLAMAFY

Have you ever looked in your wardrobe and decided you have nothing to wear? Have you warn the same outfit two weeks in a row?

Well worry no more!

Introducting LLAMAFY!

## What we are

Are we human? Dancer? No! We're LLAMAFY! Powered by AI and run by a team of indecisive lavender llamas (that moonlight as insomniacs), we decided to make our lives easier and your lives cooler by simplifying one of the hardest parts of the day; getting dressed!

LLAMAFY aims to make your life at least 10x* easier and save you up to 16** hours a week by allowing you to forgo making one more decision a day. Based on the items that you already have in your wardrobe, we will generate three potential outfits for you to choose from at a time and make your life that much simpler. 

*Gross overestimation for dramatic effect.
**Another guestimate. Some of the llamas are not great at maths but are full of enthusiasm.

## How to use

You can use LLAMAFY with these simple steps:

1. Register with LLAMAFY and submit some of the basics that you have in your wardrobe
2. Go to your wardrobe and generate your outfit for the day
3. That's it!

From here you can select the outfits that you like and the ones you don't. You can keep an eye on past outfits that you have warn and you can simplify your morning (or afternoon, we don't judge) decision making process by not having to choose what to wear.

# Setting up the server

## Front end

To get the site up and running you simply need to type 

```
npm run start
```
in the terminal within the front end folder to get the application up and running.

# Pages you can visit:

## Landing Page

The landing page is the first of the pages that you will see when you open our application. From here you are able to navigate to different pages depending on whether you are logged in or not, and are introduced to a bit about the purpose of the application.

## Registration Page

The registration page allows users to sign up and register some information about themselves. They are able to specify their:
- Name
- Email (used for login purposes)
- Password (which also checks that the passwords match and allow users to view the entered password by clicking on the eye icon)
- Primary location (accounts for the city that the person is based in and helps in the generating an outfit based on the local weather)
- Style preference (generates outfits based on the traditional preferences of each gender although this can be changed based on what the user has in their wardrobe)

## Login Page

The login page allows the users to log in with their provided email address and password that they provided on registration. This login information and the authentication token generated from this is what sets the links that appear in the navbar and sidebar depending on logged in status. This key is stored in a users local storage.

## Wardrobe

## Outfit Generation 

The wardrobe generation page allows users to specify the type of outfit that they are looking to wear on the day and can be customised based on what they have registered as being in their closet. It then generates three possible outfit choices using Dalle to provide images based on the AI prompt created by the user.

They are able to specify:
- Colour (the primary colour that they would like the outfit to be)

## Settings 

### Wardrobe Edit

### Profile Edit

# Our Server

## Chat GPT

## Dalle

## Weather API

Disclaimer section:

We have decided that since New Zealand has been left off the map far too often it is time to leave everywhere else off the map to give the rest of the world a taste of their own medicine. This is subject to change based on the frequency that we begin to appear on maps in future as the functionality is there but the will is not.