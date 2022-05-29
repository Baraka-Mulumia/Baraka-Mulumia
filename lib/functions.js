export const randInt = (min = 1000, max = 100000, places = 2) => {
    // If both the minimum and maximum values are integers, return a random integer. Don't let the user specify any decimal places.
    if (Number.isInteger(min) && Number.isInteger(max)) {
        if (places !== undefined) {
            new Error("Cannot specify decimal places with integers.");
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Otherwise, return a random floating point number with specified decimal places.
    else {
        // Make sure the minimum value is a number.
        if (Number.isNaN(Number.parseFloat(min))) {
            new Error("Minimum value is not a number.");
        }

        // Make sure the maximum value is a number.
        if (Number.isNaN(Number.parseFloat(max))) {
            new Error("Maximum value is not a number.");
        }

        // Make sure the decimal places value is a non-negative number greater than 0.
        if (Number.isInteger(places) === false) {
            new Error("Number of decimal places is not a number.");
        }

        if (places <= 0) {
            new Error("Number of decimal places must be at least 1.");
        }

        // Generate the floating point number.
        let value = Math.random() * (max - min + 1) + min;
        return Number.parseFloat(value).toFixed(places);
    }
};
