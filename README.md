# project-group-lavender-llamas
CS732/SE750 group repository for the Lavender Llamas

# Welcome to LLAMAFY

Have you ever looked in your wardrobe and decided you have nothing to wear? Have you warn the same outfit two weeks in a row? Who are you? Steve Jobs*?

Well look in panic and worry no more! 

Introducting LLAMAFY!

*Even he did this whole wearing the same outfit everyday thing so that it would be one less decision for him to make. So realistically he should be the one making this not us just saying...

## What we are

Are we human? Dancer? No! We're LLAMAFY! Powered by AI and run by a team of indecisive lavender llamas (that moonlight as insomniacs), we decided to make our lives easier and your lives cooler by simplifying one of the hardest parts of the day; getting dressed!

LLAMAFY aims to make your life at least 10x** easier and save you up to 16*** hours a week by allowing you to forgo making one more decision a day. Based on the items that you already have in your wardrobe, we will generate three potential outfits for you to choose from at a time and make your life that much simpler. 

**Gross overestimation for dramatic effect.
***Another guestimate. Some of the llamas are not great at maths but are full of enthusiasm.

## How to use

You can use LLAMAFY with these simple steps:

1. Register with LLAMAFY and submit some of the basics that you have in your wardrobe
2. Go to your wardrobe and generate your outfit for the day
3. That's it!

From here you can select the outfits that you like and the ones you don't. You can keep an eye on past outfits that you have warn and you can simplify your morning (or afternoon, we don't judge) decision making process by not having to choose what to wear.

# Setting up the server and general site additions

## Software

For this project we had originally considered using the DERN stack (Dynamo, Express, React, Node.js) but later decided to move to a variation of the MERN stack where, instead of using MongoDB, we used MySQL due to the teams familiarity with the software already and the belief that this would be the best fit based on the way that we had planned to impliment the database.

Additionally, in order to make the project function, we we employed the use of ChatGPT and Dalle to help generate prompts and images based on the clothing items the users had indicated that their wardrobes contained. These are further explained in their own section below.

We also used a variety of packages to help ease the implementation of the front end of the project such as Material UI (MUI) to ensure responsiveness and with the additional HTML-like functionality of forms etc. We also tested a variety of packages that were designed for specific functions like react-colour which provides the functionality of a variety of colour pickers, along with many others, some of which were later removed from the project due to their lack of compatability with what we wanted the site to do. For example, we trialed useing react-pro-sidebar but due to the lack of understandability of the development notes and the developers seemingly giving up on the package themselves, we settled for using MUI Appbar.

## Front end

To get the site up and running you simply need to type this in the terminal within the front end folder to get the application up and running.

```
npm run start
```
Easy as that!

## Functional login credentials

If for whatever reason you do not wish to register but still want to have a look around the website, we have set up an account populated with dummy data that you are free to use.

Email:
Password:

# Pages you can visit:

Here you can find a brief overview of the pages that we have available to peruse at your leisure. Please note: some may only be navigatible to once logged in.

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

The wardrobe page is where users specify the items that they want to be included in their closet, that is the items that will be fed into the prompt so the algorithm can generate an outfit based on the clothing that they own.

We decided on the following categories to allow users to pick from:

- Tops: this includes the ability for users to select the sleeve style, the type of top etc all displayed in modals.
- Bottoms: Pants, skirts etc
- Shoes:
- Dresses:

## Outfit Generation 

The wardrobe generation page allows users to specify the type of outfit that they are looking to wear on the day and can be customised based on what they have registered as being in their closet. It then generates three possible outfit choices using Dalle to provide images based on the AI prompt created by the user.

They are able to specify:
- Colour (the primary colour that they would like the outfit to be)

That's about it. The whole reason that people are using this site is so they don't have to make decisions so we figured we'd keep it simple.

## Settings 

Settings consists of two sub-pages: wardrobe editing and profile editing, the functionality of which is explained below.

### Wardrobe Edit

### Profile Edit

## Disclaimers/FAQ

This section doubles as a bit of a gag page but also an explanation into why we made some of the choices in designing the application the way that we did. We have also used this page as a way to explain the future developments that we had planned for this project, but were not feasible to impliment at this point in time due to a varity of factors.

Many of the elements mentioned here are those that were included in the could have or nice to have section of our design proposal that unfortunately at this stage did not make it into the final product. However, we felt it was import to address them and consider them to be potential future developments that the 'company' may decide to impliment in future releases.

# Our Server

## Chat GPT

## Dalle

## Weather API

