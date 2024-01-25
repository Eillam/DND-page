// to create my functions for the random generator

// Array of possible names for the Inn
var innNames = ["The Sleeping Dragon", "The Merry Maiden", "The Rusty Flagon", "The Golden Crown",
  "The Drunken Unicorn",
  "The Wandering Bard",
  "The Lucky Leprechaun",
  "The Cozy Chimera",
  "The Whispering Willow",
  "The Howling Wolf",
  "The Dancing Dervish",
  "The Silent Siren",
  "The Hidden Harp",
  "The Shattered Shield",
  "The Fierce Falcon",
  "The Soaring Serpent",
  "The Crimson Crest",
  "The Daring Dragonfly",
  "The Mystic Mermaid",
  "The Enchanted Elephant",
  "The Radiant Rose",
  "The Regal Rabbit",
  "The Sapphire Star",
  "The Emerald Enigma",
  "The Golden Griffin",
  "The Scarlet Sun",
  "The Silver Swan",
  "The Tranquil Turtle",
  "The Vibrant Vixen",
  "The Zephyr Zebra",
  "The Whimsical Wyvern"];

  // Array of possible unique locations
  var uniqueLocations = ["the old mill: 'it's is said to be home to a coven of hags'",
  "the abandoned church: 'rumored to be haunted by vengeful spirits'",
  "the mysterious grove: 'said to be a portal to another realm'",
  "the hidden cave: 'known as the lair of a fearsome dragon'",
  "the cursed graveyard: 'where restless souls wander at night'",
  "the forgotten tomb: 'guarded by an ancient curse'",
  "the spectral swamp: 'where lost souls are trapped for eternity'",
  "the forbidden forest: 'home to a pack of werewolves'",
  "the haunted mansion: 'where no one dares to spend the night'",
  "the cursed castle: 'rumored to be the seat of an evil sorcerer'",
  "the shadowy alley: 'where deals with dark entities are made'",
  "the eerie marsh: 'where mysterious lights lead travelers astray'",
  "the desolate moor: 'where the banshee's wail can be heard'",
  "the infernal rift: 'a tear in reality leading to the Abyss'",
  "the enigmatic ruins: 'where ancient powers lie dormant'",
  "the malevolent mountain: 'home to a maleficent spirit'",
  "the forbidden island: 'where ships vanish without a trace'",
  "the cursed spring: 'whose waters bring ill fortune to those who drink'",
  "the forsaken fortress: 'where the undead walk at night'",
  "the haunted hollow: 'where lost souls seek retribution'",
  "the blighted bog: 'where life withers and decays'",
  "the accursed grove: 'where the trees whisper of ancient evils'",
  "the sinister shrine: 'where dark rites are performed'",
  "the accursed chasm: 'a gateway to the Underdark'",
  "the forbidden plateau: 'where no mortal foot has tread for centuries'",
  "the cursed copse: 'where the fey hold their midnight revels'",
  "the malevolent mesa: 'rumored to be the site of an ancient curse'",
  "the profane pit: 'where unspeakable horrors lurk'",
  "the sinister spire: 'shrouded in dark enchantments'",
  "the accursed atoll: 'where the sea devours all who approach'"];
  
  // Array of possible names for a town
  var townNames = ["Oakwood", "Riverside", "Willowbrook", "Meadowvale", "Silvercrest", "Hearthstone", "Frostford", "Pinegrove", "Stonehaven", "Windsong",
  "Clearwater",
  "Greenfield",
  "Maplewood",
  "Brookside",
  "Swiftwater",
  "Goldenleaf",
  "Amberwood",
  "Fairview",
  "Ashbourne",
  "Summerfield",
  "Cedarbrook",
  "Whitestone",
  "Bluevale",
  "Sunridge",
  "Redwood",
  "Hillcrest",
  "Eastgate",
  "Westwood",
  "Fairhaven",
  "Moonlight",
  "Starfall",
  "Shadowbrook",
  "Pineview",
  "Springvale",
  "Lakeside",
  "Highmeadow",
  "Mistyvale",
  "Oakridge",
  "Riverbend",
  "Silverwood"];
  
  

  // Array of possible names for the General Store
  var generalStoreNames = ["Traders' Emporium", "The Market Basket", "Sundry Supplies", "The Trading Post", "The Bargain Bazaar",
  "The Treasure Trove",
  "The Reliable Rations",
  "The Lucky Looter",
  "The Friendly Faire",
  "The Honest Merchant",
  "The Rustic Retailer",
  "The Selective Supplier",
  "The Bargain Barn",
  "The Curious Cart",
  "The Prosperous Peddler",
  "The Well-Stocked Stall",
  "The Reliable Rations",
  "The Friendly Faire",
  "The Honest Merchant",
  "The Rustic Retailer",
  "The Selective Supplier",
  "The Bargain Barn",
  "The Curious Cart",
  "The Prosperous Peddler",
  "The Well-Stocked Stall",
  "The Trusty Traders",
  "The Opulent Outlet",
  "The Premier Purveyor",
  "The Sterling Storefront",
  "The Prime Provisioner",
  "The Exceptional Emporium"];

  // Blacksmith
  var blacksmith = ["The Iron Forger",
  "Smithy's Forge",
  "Forged Creations",
  "Anvil & Hammer",
  "Molten Metal Works",
  "Ember Forge",
  "Steel Sanctuary",
  "Blaze & Anvil",
  "Inferno Ironworks",
  "Quenching Quarters",
  "Hammer & Tongs",
  "Sword & Steel",
  "Firebrand Forge",
  "Ironclad Artistry",
  "Furnace Foundry",
  "Raging Anvil",
  "Tempered Tools",
  "Mighty Metalworks",
  "Flamecraft Forge",
  "Bold Ironworks",
  "Molten Mastery",
  "Steel Symphony",
  "Blazing Blades",
  "Forge of Legends",
  "Metal Maven",
  "Thunderous Tools",
  "Fierce Fire Forge",
  "Iron Impact",
  "Eternal Ember Forge",
  "Vulcan's Vault"];

  // Apothecary
  var apothecary = ["The Alchemical Essence",
  "Herb Haven",
  "Elixir Emporium",
  "Botanical Boutique",
  "Potion Palace",
  "Apothecary's Alcove",
  "Healing Herbs & Tinctures",
  "Essential Remedies",
  "Medicinal Marvels",
  "Nature's Pharmacy",
  "Remedy Repository",
  "Alchemy Aisle",
  "Herbal Harmony",
  "Mystic Mixtures",
  "Wellness Wares",
  "Aromatic Apothecary",
  "Soothing Solutions",
  "Botanic Blessings",
  "Curative Charms",
  "Enchanted Elixirs",
  "Harmony Herbalists",
  "Vitality Vials",
  "Potion Provisions",
  "Holistic Health Haven",
  "Miracle Mixtures",
  "Divine Draughts",
  "Secrets of Serenity",
  "Wholesome Remedies",
  "Zen Zephyr Apothecary",
  "Healer's Hideaway",
  "Sacred Salves"];

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

document.getElementById('NPC-Submit').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the selected values for race, class, alignment, and level
  var selectedRace = document.querySelector('input[name="race-radio"]:checked').id;
  var selectedClass = document.querySelector('input[name="class-radio"]:checked').id;
  var selectedAlignment = document.querySelector('input[name="alignment-radio"]:checked').id;
  var selectedLevel = document.querySelector('input[name="level-radio"]:checked').id;

  // Map the radio button IDs to their respective responses
  var raceResponses = {
      "NPC-race-radio-random": "Random race selected",
      "NPC-race-radio-human": "Human race selected",
      "NPC-race-radio-elf": "Elf race selected"
      // Add more radio button IDs and their corresponding responses as needed
  };

  // Map the radio button IDs for class to their respective responses
  var classResponses = {
      "npc-class-radio-random": "Random class selected",
      "npc-class-radio-artificer": "Artificer class selected",
      "npc-class-radio-barbarian": "Barbarian class selected"
      // Add more radio button IDs and their corresponding responses as needed
  };

  // Map the radio button IDs for alignment to their respective responses
  var alignmentResponses = {
      "npc-alignment-radio-random": "Random alignment selected",
      "npc-alignment-radio-good": "Good alignment selected",
      "npc-alignment-radio-evil": "Evil alignment selected"
      // Add more radio button IDs and their corresponding responses as needed
  };

  // Map the radio button IDs for level to their respective responses
  var levelResponses = {
      "npc-level-radio-random": "Random level selected",
      "npc-level-radio-1-5": "Level 1-5 selected",
      // Add more radio button IDs and their corresponding responses as needed
  };

  // Get the response div and update its content based on the selected radio buttons
  var responseDiv = document.getElementById('response');
  responseDiv.textContent = raceResponses[selectedRace] + "\n" +
                           classResponses[selectedClass] + "\n" +
                           alignmentResponses[selectedAlignment] + "\n" +
                           levelResponses[selectedLevel];
                           responseDiv.style.display = "block";
}

);

function small() {
  // Randomly select names for the Inn and General Store
  var randomTownName = townNames[Math.floor(Math.random() * townNames.length)];
  var randomInnName = innNames[Math.floor(Math.random() * innNames.length)];
  var randomGeneralStoreName = generalStoreNames[Math.floor(Math.random() * generalStoreNames.length)];

  // Randomly select a unique location
  var randomUniqueLocation = uniqueLocations[Math.floor(Math.random() * uniqueLocations.length)];

  // Return the list of small town locations
  var responseDiv = document.getElementById('response');
  responseDiv.innerHTML = "<ul style='list-style: none;'>" +
  "<li>Town: " + randomTownName + "</li>" +
                         "<li>Inn: " + randomInnName + "</li>" +
                         "<li>General Store: " + randomGeneralStoreName + "</li>" +
                         "<li>Unique Location: " + randomUniqueLocation + "</li>" +
                         "</ul>";
  responseDiv.style.display = "block";
}

function medium() {
  // Array of possible names for random stores
  var randomStores = ["The Arcane Emporium", "The Tinker's Workshop", "The Herbal Haven"];

  // Randomly select names for the Inn and General Store
  var randomInns = [];
  while (randomInns.length < 3) {
  var randomIndex = Math.floor(Math.random() * innNames.length);
  if (!randomInns.includes(randomIndex)) {
    randomInns.push(randomIndex);
  } 
  }
  
  var randomGeneralStoreName = [];
  while (randomGeneralStoreName.length < 3) {
  var randomIndexStore = Math.floor(Math.random() * generalStoreNames.length);
  if (!randomGeneralStoreName.includes(randomIndexStore)) {
    randomGeneralStoreName.push(randomIndexStore);
  } 
  }
  

  // Randomly select a unique location
  var randomUniqueLocation = uniqueLocations[Math.floor(Math.random() * uniqueLocations.length)];

  // Randomly select a random store
  var randomStore1 = randomStores[Math.floor(Math.random() * randomStores.length)];
  var randomStore2 = randomStores[Math.floor(Math.random() * randomStores.length)];
  var randomStore3 = randomStores[Math.floor(Math.random() * randomStores.length)];

  var randomBlacksmith = blacksmith[Math.floor(Math.random() * blacksmith.length)];
  var randomApothecary = apothecary[Math.floor(Math.random() * apothecary.length)];

  // Return the list of medium city locations
  var responseDiv = document.getElementById('response');
  responseDiv.innerHTML = "<ul style='list-style: none;'>" +
  "<li>Inn: " + innNames[randomInns[0]] + "</li>" +
  "<li>Inn: " + innNames[randomInns[1]] + "</li>" +
  "<li>Inn: " + innNames[randomInns[2]] + "</li>" +
                         "<li>General Store: " + generalStoreNames[randomGeneralStoreName[0]] + "</li>" +
                         "<li>General Store: " + generalStoreNames[randomGeneralStoreName[1]] + "</li>" +
                         "<li>General Store: " + generalStoreNames[randomGeneralStoreName[2]] + "</li>" +
                         "<li>Blacksmith: " + randomBlacksmith + "</li>" +
                         "<li>Apothecary: " + randomApothecary + "</li>" +
                         "<li>Random Store 1: " + randomStore1 + "</li>" +
                         "<li>Random Store 2: " + randomStore2 + "</li>" +
                         "<li>Random Store 3: " + randomStore3 + "</li>" +
                         "<li>Unique Location: " + randomUniqueLocation + "</li>" +
                         "</ul>";
  responseDiv.style.display = "block";
}