# How to host your Discord-Bot on your Phone
<img align="right" width="100" height="100" src="https://play-lh.googleusercontent.com/m3oqSZCwmitiZ-Im-CQu_rqT5eLHilOp5IudBynv3COJUumFzuQaP2dgTDxRL_03f4x2=s180-rw">
I will explain step by step how to set up your Discord Bot on your Phone!


1. First you have to download Termux. You can download it right on their website (https://termux.com) or if you want to, you can download it from the Google Play Store. But keep in mind, the version there is outdated!
2. Open it up and create a folder. This is easily done by typing: ```mkdir [FolderName]```. The name of the folder doesn't really matter.
3. Change your current directory with ```cd [FolderName]```.
4. Then type ```apt update```.
5. After that type ```apt upgrade -y```.
6. Now you will install the nodejs package with ```pkg install nodejs -y```.
7. When you are done with installing that, you should install the python package by typing: ```pkg install python -y```.
8. The next step will be to initialize. This is done by typing ```npm init -y```.
9. For this step just type ```npm install discord.js dotenv``` to install the discord.js and the dotenv packages. If you need more than these two packages you install these in the same way with ```npm install [Package Name]```.

<br>Now everything should be set up correctly. The last steps will be to create your js files.

1. Create your main js file with ```touch [Filename].js```. The .js file extencion is important! I like to call my file "index.js", but it doesn't really matter.
2. Open the file with the simple text editor named Nano. For that type ```nano [Filename].js```.
3. Here you can insert your script.
4. Save it with ```CTRL + X``` and confirm with ```Y```. Then just press "Enter".
5. To run the script, write ```node ./[Filename].js``` or ```node [Filename].js```.

<br>Thats it! Your bot should be running now.
<br>If you have some questions, feel free to ask me in the issues tab. A simple bot-script is also included in this repository.
