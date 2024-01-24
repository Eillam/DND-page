// to create my functions for the random generator

function toggleCollapse(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none") {
      content.style.display = "block"; // Show the content
    } else {
      content.style.display = "none"; // Hide the content
    }
  }

  function coast() {
    // List of possible weather conditions
    var weatherConditions = [
        "Sunny and Serene: The coastal region basks in the warmth of the sun, casting a golden glow across the glistening waters. Gentle sea breezes carry the fresh scent of salt and seaweed, inviting locals and tourists alike to embrace the day. Seabirds soar gracefully overhead, their calls blending harmoniously with the rhythm of the rolling waves.", "Misty and Mysterious: A veil of mist envelops the coastal landscape, shrouding cliffs and coves in an ethereal embrace. The distant cry of foghorns echoes through the air, mingling with the haunting lullaby of the sea. Silhouettes of ships emerge from the fog, their presence an enigmatic dance between visibility and obscurity.", "Windy and Wild: The coastal winds howl with untamed fervor, sculpting the waves into frothy peaks that crash against rugged shores. Sailors navigate the tempestuous waters with skill and determination, embracing the exhilarating challenge of the open sea. Seabirds perform daring aerial acrobatics, riding the gusts with effortless grace.", "Stormy and Spectacular: Nature unleashes its fury upon the coast, painting the sky in tumultuous shades of gray. Thunder reverberates across the horizon, punctuating the relentless drumming of rain against the shoreline. Waves rise and fall with unrestrained power, showcasing the awe-inspiring might of the ocean.", "Calming and Tranquil: A sense of tranquility envelops the coastal haven, offering respite from the chaos of urban life. The sun dips beneath the waves, casting a tapestry of warm hues across the evening sky. Seashells adorn the sandy shores, whispering tales of the timeless bond between land and sea."
    ];

    // Generate a random index to select a weather condition from the list
    var randomIndex = Math.floor(Math.random() * weatherConditions.length);

    // Get the response div and update its content with the randomly selected weather condition
    var responseDiv = document.getElementById('response');
    responseDiv.textContent = weatherConditions[randomIndex];
    responseDiv.style.display = "block";
}

function plains() {
  // List of possible weather conditions
  var weatherConditions = [
      "Sunny and Serene: The vast expanse of the plains is bathed in the warm embrace of the sun, casting a golden radiance upon the undulating landscape. A gentle zephyr dances through the grass, carrying the sweet scent of wildflowers and the distant melody of chirping crickets. The horizon stretches endlessly, merging seamlessly with the azure canvas of the sky, inviting wanderers to revel in the tranquility of the open plain.",
      "Windy and Whistling: The plains come alive with the spirited exuberance of the wind, weaving through the swaying blades of grass like a symphony conductor's baton. Dust devils whirl and pirouette across the earth, leaving ephemeral trails in their wake, while the rustling leaves of solitary trees provide a soothing accompaniment to the playful gusts. The open skies above seem to echo the untamed joy of the plains, carrying the promise of endless adventures.",
      "Stormy and Spectacular: Nature unleashes its tempestuous fury upon the open expanse, painting the heavens in dramatic hues of gray and indigo. Thunder reverberates through the wide plains, punctuating the relentless cadence of rain as it descends upon the earth. The once gentle streams swell into powerful rivulets, carving ephemeral patterns into the soil, while the resilient flora of the plains stands as a testament to nature's enduring strength.",
      "Misty and Mystical: A delicate veil of mist envelops the undulating terrain, lending an ethereal quality to the expansive plain. The distant silhouettes of grazing wildlife appear as if from a dream, their forms obscured by the enchanting haze. The soft murmur of hidden streams weaves through the mist, adding to the otherworldly ambiance that pervades the landscape, evoking a sense of timeless wonder.",
      "Bountiful and Blossoming: The plains burst forth with a vibrant tapestry of life, as far as the eye can see. The golden sun nourishes the fertile soil, coaxing forth a kaleidoscope of wildflowers that sway in harmony with the gentle breeze. The air is alive with the hum of industrious insects, while the native fauna wanders freely, each adding their own unique note to the symphony of the plains."
  ];

  // Generate a random index to select a weather condition from the list
  var randomIndex = Math.floor(Math.random() * weatherConditions.length);

  // Get the response div and update its content with the randomly selected weather condition
  var responseDiv = document.getElementById('response');
  responseDiv.textContent = weatherConditions[randomIndex];
  responseDiv.style.display = "block";
}

function mountains() {
  // List of possible weather conditions
  var weatherConditions = [
      "Majestic and Misty: The mountains stand cloaked in an ethereal shroud of mist, their peaks piercing through the nebulous veil like ancient sentinels guarding the heavens. The haunting melody of unseen streams drifts through the fog, adding a sense of mystery to the towering cliffs. As the mist ebbs and flows, it unveils fleeting glimpses of the rugged terrain, infusing the atmosphere with an enchanting aura of otherworldly beauty.",
      "Frosty and Foreboding: The wintry embrace of the mountains paints the landscape in a serene yet formidable hue, as frost-laden branches glisten under the pale, silvery light. The crisp air crackles with an invigorating chill, carrying with it the promise of quiet solitude amidst the snow-covered peaks. Nature's grandeur is showcased in the delicate tracery of ice crystals and the hushed whispers of the mountain winds, creating an atmosphere of austere beauty.",
      "Roaring and Resilient: The mountains echo with the tempestuous symphony of a gathering storm, as thunder reverberates through the craggy peaks and lightning dances across the darkened skies. Torrents of rain cascade down the rugged slopes, carving ephemeral channels through the ancient rock, while the resilient flora and fauna of the mountains stand steadfast against the elemental onslaught, embodying the indomitable spirit of the wilderness.",
      "Sunny and Serene: The sun graces the mountain realm with its golden touch, casting a warm radiance upon the verdant valleys and snow-capped peaks. The tranquil melody of cascading waterfalls mingles with the gentle rustle of alpine foliage, creating a harmonious symphony of nature. As the daylight bathes the mountains in a luminous glow, it enlivens the landscape with a sense of timeless tranquility and awe-inspiring grandeur.",
      "Breathtaking and Brilliant: The mountains are aglow with the resplendent hues of dawn, as the first rays of sunlight illuminate the rugged terrain, casting long shadows that stretch across the rugged contours. The crisp, clear air carries the promise of adventure and discovery, while the distant calls of alpine wildlife add an evocative layer to the symphony of the high peaks. As the day unfolds, the mountains reveal their breathtaking vistas, inviting all who behold them to revel in their timeless splendor."
  ];

  // Generate a random index to select a weather condition from the list
  var randomIndex = Math.floor(Math.random() * weatherConditions.length);

  // Get the response div and update its content with the randomly selected weather condition
  var responseDiv = document.getElementById('response');
  responseDiv.textContent = weatherConditions[randomIndex];
  responseDiv.style.display = "block";
}