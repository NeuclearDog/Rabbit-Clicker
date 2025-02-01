<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rabbit Clicker Incremental Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 20px;
            background-color: #f4f4f4;
            color: #333;
        }

        #game {
            border: 2px solid #ccc;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            display: inline-block;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        button {
            margin: 5px;
            padding: 10px;
            border: none;
            border-radius: 5px;
            background-color: #28a745;
            color: #fff;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #218838;
        }

        #modSection {
            margin-top: 20px;
        }

        .inputField {
            margin: 5px;
            padding: 10px;
        }

        #fileInput {
            margin-top: 10px;
        }

        h1 {
            font-size: 24px;
            margin-bottom: 20px;
        }

        h2 {
            font-size: 20px;
            margin-top: 30px;
            margin-bottom: 10px;
        }
    </style>
</head>

<body>
    <div id="game">
        <h1>Rabbit Clicker</h1>
        <p id="rabbitCount">Rabbits: 0</p>
        <p id="foodCount">Food: 0</p>
        <button id="clickButton">Catch Rabbit!</button>
        <button id="upgradeButton">Upgrade Bunny Trap ($10)</button>

        <!-- New file input for importing mods -->
        <input type="file" id="fileInput" accept=".js" class="inputField" />
        
        <h2>Mod Section</h2>
        <div id="modSection">
            <p>No mods loaded.</p>
        </div>
    </div>

    <script>
        // Game State
        let rabbitCount = 0;
        let foodCount = 0;
        let upgradeCost = 10;
        let upgradeMultiplier = 1;

        // Update the display
        const updateDisplay = () => {
            document.getElementById('rabbitCount').innerText = `Rabbits: ${rabbitCount}`;
            document.getElementById('foodCount').innerText = `Food: ${foodCount}`;
        };

        // Catch rabbit function
        const catchRabbit = () => {
            rabbitCount += upgradeMultiplier;
            updateDisplay();
        };

        // Upgrade bunny trap function
        const upgradeBunnyTrap = () => {
            if (rabbitCount >= upgradeCost) {
                rabbitCount -= upgradeCost;
                upgradeMultiplier *= 2; // Double the value
                upgradeCost *= 2; // Increase upgrade cost
                updateDisplay();
            } else {
                alert("Not enough rabbits!");
            }
        };

        // Modding API
        const moddingAPI = {
            variables: {}, // Store custom variables

            addButton: function (name, callback) {
                const button = document.createElement('button');
                button.innerText = name;
                button.onclick = callback;
                document.getElementById('modSection').appendChild(button);
            },

            setRabbitCount: function (newCount) {
                rabbitCount = newCount;
                updateDisplay();
            },

            getRabbitCount: function () {
                return rabbitCount;
            },

            setFoodCount: function (newCount) {
                foodCount = newCount;
                updateDisplay();
            },

            getFoodCount: function () {
                return foodCount;
            },

            setUpgradeMultiplier: function (multiplier) {
                upgradeMultiplier = multiplier;
            },

            getUpgradeMultiplier: function () {
                return upgradeMultiplier;
            },

            addVariable: function (name, defaultValue) {
                this.variables[name] = defaultValue;
            },

            getVariable: function (name) {
                return this.variables[name];
            },

            setVariable: function (name, value) {
                if (this.variables.hasOwnProperty(name)) {
                    this.variables[name] = value;
                } else {
                    console.warn(`Variable '${name}' does not exist!`);
                }
            },

            addImage: function (src, alt) {
                const img = document.createElement('img');
                img.src = src;
                img.alt = alt;
                img.style.maxWidth = "100px"; // Set max width
                img.style.margin = "10px";
                document.getElementById('modSection').appendChild(img);
            },

            playSound: function (src) {
                const audio = new Audio(src);
                audio.play().catch(err => console.log("Error playing sound: ", err));
            },

            log: function (message) {
                console.log("[Mod]:", message);
            },

            alert: function (message) {
                window.alert(message);
            },

            clearModSection: function () {
                const section = document.getElementById('modSection');
                section.innerHTML = ''; // Clear existing buttons or messages
            },

            addModMessage: function (message) {
                const messageElement = document.createElement('p');
                messageElement.innerText = message;
                document.getElementById('modSection').appendChild(messageElement);
            }
        };

        // Import mod function from a file
        const importModFromFile = (fileContent) => {
            try {
                const modFunction = new Function('moddingAPI', `
                    "use strict";
                    return function() {
                        ${fileContent}
                    };
                `)(moddingAPI);
                // Execute the mod function
                modFunction();
            } catch (err) {
                moddingAPI.alert("Error in mod code: " + err.message);
            }
        };

        // Handle file input change event
        document.getElementById('fileInput').addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    moddingAPI.clearModSection(); // Clear previous mod messages
                    importModFromFile(e.target.result);
                    moddingAPI.addModMessage("Mod Loaded Successfully!");
                };
                reader.readAsText(file);
            }
        });

        // Event listeners for main buttons
        document.getElementById('clickButton').onclick = catchRabbit;
        document.getElementById('upgradeButton').onclick = upgradeBunnyTrap;

        // Initialize display
        updateDisplay();
    </script>
</body>

</html>
