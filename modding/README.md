
ModdingAPI Functions

    addButton(name, callback)
        Description: Adds a new button to the mod section.
        Parameters:
            name (String): The text displayed on the button.
            callback (Function): The callback function that will be executed when the button is clicked.

    setRabbitCount(newCount)
        Description: Updates the current rabbit count and refreshes the display.
        Parameters:
            newCount (Number): The new number of rabbits to set.

    getRabbitCount()
        Description: Retrieves the current rabbit count.
        Returns: (Number) The current rabbit count.

    setFoodCount(newCount)
        Description: Updates the food count and refreshes the display.
        Parameters:
            newCount (Number): The new number of food items to set.

    getFoodCount()
        Description: Retrieves the current amount of food.
        Returns: (Number) The current food count.

    setUpgradeMultiplier(multiplier)
        Description: Sets the multiplier for how many rabbits are caught per click.
        Parameters:
            multiplier (Number): The new upgrade multiplier value.

    getUpgradeMultiplier()
        Description: Retrieves the current upgrade multiplier.
        Returns: (Number) The current upgrade multiplier.

    addVariable(name, defaultValue)
        Description: Adds a custom variable to the modding API.
        Parameters:
            name (String): The name of the variable.
            defaultValue (Any): The initial value of the variable.

    getVariable(name)
        Description: Retrieves the value of a custom variable.
        Parameters:
            name (String): The name of the variable.
        Returns: (Any) The current value of the variable.

    setVariable(name, value)
        Description: Sets the value of a custom variable.
        Parameters:
            name (String): The name of the variable to set.
            value (Any): The new value to assign.

    addImage(src, alt)
        Description: Adds an image to the mod section.
        Parameters:
            src (String): The source URL of the image.
            alt (String): The alternate text for the image.

    playSound(src)
        Description: Plays a sound from the provided URL.
        Parameters:
            src (String): The source URL of the audio file.

    log(message)
        Description: Logs a message to the browser's console.
        Parameters:
            message (String): The message to log.

    alert(message)
        Description: Displays an alert message to the user.
        Parameters:
            message (String): The message to display in the alert.

    clearModSection()
        Description: Clears the mod section of all existing content (buttons and messages).

    addModMessage(message)
        Description: Adds a message to the mod section for user feedback.
        Parameters:
            message (String): The message to be added to the mod section.
