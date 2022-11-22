# How to use this

## Step 1
Go to https://discord.com/developers/applications and create an application from there.

Name it anything you want, then go to bot and create a new bot.

Below the Privileged Gateway Intents, enable these three settings

![image](https://user-images.githubusercontent.com/96776358/203195694-aec319d0-f6eb-4e0e-bdec-515937886687.png)

## Step 2
Go to the OAuth2 and select `URL Generator`

Select `bot`

Then give it any permissions. I suggest to do `Administrator` ig

![image](https://user-images.githubusercontent.com/96776358/203195846-21f8fbbc-3e2e-47c1-9a27-c22a98fec638.png)

## Step 3
Invite your bot to any discord server, or just make a new one.

## Step 4
Have NodeJS installed. If not go here: https://nodejs.org/en/

Unzip that folder, and place it in a normal folder somewhere in your desktop

## Step 5
Go into the folder with the files and right click, then click `open in terminal`

![image](https://user-images.githubusercontent.com/96776358/203196097-2fbb0b94-4f88-49a8-afbd-30632cd349cd.png)

## Step 6
Run the command, `node index.js`

## Step 7
__For Bot Token__
![image](https://user-images.githubusercontent.com/96776358/203196224-01b1d510-721c-4ca1-84fc-4debc467f6e7.png)

(Click reset token)

Copy it and paste into the terminal by `right clicking` into it, OR just do `ctrl + v`

__For Client id__
Go to your settings in discord, and select advanced!
[image](https://user-images.githubusercontent.com/96776358/203196492-56409947-01ec-4a21-a586-f71b14d70cc5.png)

Enable developer mode.

Right click your bot which is in your server and click copy id

![image](https://user-images.githubusercontent.com/96776358/203196573-f0c82395-b298-406b-a279-2538648c8dc8.png)

paste it into the console, and press enter

__In JSON__
You can also input the information into the data.json file too. just open it and pate it into the repective slots

AS A STRING, remember that now

Example:
![image](https://user-images.githubusercontent.com/96776358/203196710-d0248361-b857-4d12-a885-1832428a4e6f.png)

## Step 8
(If you did it in json just close the console, and relaunch it and run the same command `node index.js`)

When it says `We are live! [Bot Tag]`

Go to your server and run `/helloworld`

You should get a message from the bot which contains part of the bee movie script, but also the link for the active-developer badge

Click on the link to go to the page to claim your active dev badge, if it doesn't show then wait around 24 hours for discord to update the bot's active status.

## Step 9
Congratulations! you got your badge. 

Remember that you need to run this command every 30 days. Just run the `node index.js` in console again, and this time it will just load the bot since it stores the data you last put in into the data.json file

If you wish to reset the data, just run resetdata.bat and it will reset the data.json file
