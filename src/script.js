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
  "Vulcan's Vault"
];

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
  "Sacred Salves"
];

// Array of possible names for random stores
var mixedStoresAndNames = [
    {
      Type: "Butcher",
      Name: ["Cleaver's Friend",
      "Meat's End",
      "Dog's Buddy",
      "Prime Cuts Emporium",
      "Sizzling Steaks Market",
      "The Carving Block",
      "Mighty Meat Masters",
      "Tenderloin Tavern",
      "The Butcher's Block",
      "Savage Sausage Shop"]
    },
    {
      Type: "Fletcher",
      Name: [
        "Hitting Your Mark",
  "Unbroken String",
  "Recurve",
  "Arrow's Edge",
  "Flight Feather Fletchings",
  "Sharpshooter's Supplies",
  "Quick Quiver",
  "The Bowyer's Bench",
  "True Aim Archery",
  "The Longshot Loft"
      ]
    },
    {
      Type: "Tailor",
      Name: ["Stitch & Sew",
      "Threadbare Tailor",
      "Silk & Satin",
      "Finery & Fabric",
      "Needle & Thread",
      "Fashion Forge",
      "Textile Treasures",
      "Couture Corner",
      "Embroidery Emporium",
      "Haberdashery Haven"]
    },
    {
      Type: "Tavern",
      Name: ["The Tipsy Tankard",
      "The Merry Mug",
      "The Jovial Jester",
      "The Frothy Flagon",
      "The Rusty Goblet",
      "The Boisterous Bard",
      "The Wandering Wench",
      "The Roasted Boar",
      "The Laughing Lute",
      "The Drunken Dragon"]
    },
    {
      Type: "Armorsmith",
      Name: ["Ironclad Forge",
      "Steel Sentinel Armory",
      "Guardian Plate Smithy",
      "Battlemaster's Foundry",
      "Defender's Den Armorsmith",
      "Warrior's Wardrobe",
      "Knight's Forge",
      "Bulwark Blacksmith",
      "Sentinel Armorsmithing",
      "Plate and Mail Workshop"]
    },
    {
      Type: "Enchanter's Emporium",
      Name: [
        "Arcane Aegis Enchantments",
  "Mystic Runes Emporium",
  "Enchanter's Elysium",
  "Sorcerer's Sigils",
  "Ethereal Enchantments",
  "Enchantment Oasis",
  "Spellbound Charms Boutique",
  "Glimmering Glyphs Atelier",
  "Enchanter's Haven",
  "Whispering Wardrobe Enchantments"
      ]
    },
    {
      Type: "Alchemist's Lab",
      Name: [
        "Elixir Emporium",
  "Mystic Brews Laboratory",
  "Alchemy Alcove",
  "Potion Palace",
  "Essence Enigma Labs",
  "Apothecary's Arsenal",
  "Transmutation Tavern",
  "Magnum Opus Mixtures",
  "Philosopher's Phials",
  "Miracle Elixirs Workshop"
      ]
    },
    {
      Type: "Bookstore",
      Name: [
        "Chapter & Verse Booksellers",
        "Bibliophile's Haven",
        "Enchanted Pages Bookstore",
        "Storyteller's Emporium",
        "Novel Nook",
        "Literary Labyrinth",
        "Tome Treasures",
        "Page Turner's Paradise",
        "Prose & Poetry Bookshop",
        "Boundless Books"
      ]
    },
    {
      Type: "Jeweler",
      Name: [
        "Gemstone Gallery",
        "Radiant Jewels Emporium",
        "Sparkle & Shine Jewelers",
        "Opulent Ornaments Boutique",
        "Diamond Delight Jewelers",
        "Elegant Gems Atelier",
        "Precious Metals Pavilion",
        "Jewelcraft Creations",
        "Luxury Baubles Bazaar",
        "Exquisite Adornments Studio"
      ]
    },
    {
      Type: "Herbalist's Hut",
      Name: [
        "Nature's Remedies Apothecary",
        "Botanical Bliss Herbalists",
        "Healing Harvest Herbs",
        "Elixir Emporium",
        "Green Earth Herbalists",
        "Herbal Haven Apothecary",
        "Wise Roots Herbalists",
        "Essential Herb Co.",
        "Serenity Herbals",
        "Holistic Herb Shop"
      ]
    },
    {
      Type: "Artisan's Guild",
      Name: [
        "Mastercraft Guild",
        "Artisan Alliance",
        "Craftsmen Consortium",
        "Guild of Creators",
        "Artistic Endeavors Guild",
        "Handcrafted Creations Union",
        "Artisanal Guild Collective",
        "Craftsman's League",
        "Guild of Artistry"
      ]
    },
    {
      Type: "Scribe",
      Name: [
        "Inkwell Emporium",
        "Quill and Parchment Repository",
        "Scribe's Scriptorium",
        "Scrollcrafters' Haven",
        "The Writing Desk",
        "Scripted Secrets Scribe Shop",
        "Papyrus Palace",
        "Eloquent Expressions Scribe Store",
        "Calligraphy Corner",
        "The Illuminated Manuscript"
      ]
    },
    {
      Type: "Curio Shop",
      Name: [
        "Enigmatic Elixirs",
        "Oddities Obscura",
        "Mystic Trinkets Treasures",
        "Curious Curiosities",
        "Eccentric Emporium",
        "Antique Arcanum",
        "Enchanted Artifacts Attic",
        "Bizarre Baubles Bazaar",
        "Wonderous Wares Warehouse",
        "Peculiar Paraphernalia Place"
      ]
    },
    {
      Type: "Perfumery",
      Name: [
        "Scented Splendors",
        "Aroma Alchemy",
        "Fragrance Boutique",
        "Perfume Panache",
        "Essence Emporium",
        "Scent Sensations",
        "The Perfume Parlour",
        "Aromatic Oasis",
        "Divine Dioramas",
        "Bouquet Bazaar"
      ]
    },
    {
      Type: "Mapmaker's Cartography",
      Name: [
        "ChartCrafters",
        "Cartographic Cartel",
        "Atlas Artistry",
        "Navigational Nirvana",
        "Expedition Express",
        "Topography Treasures",
        "Geographic Galleria",
        "Cartography Creations",
        "Wayfinder's Workshop",
        "Landmark Legends"
      ]
    },
    {
      Type: "Tinker Shop",
      Name: [
        "Gadget Grove",
        "Ingenious Inventions",
        "Mechanical Marvels",
        "Tinker's Treasures",
        "Whimsical Widgets",
        "Contraption Corner",
        "Gear Galleria",
        "Wonderous Workshop",
        "Tinkerer's Trove",
        "The Gadgeteer's Guild"
      ]
    },
    {
      Type: "Music Store",
      Name: [
        "Melody Manor",
        "Harmony Haven",
        "Sonic Sanctuary",
        "Rhythmic Rhapsody",
        "Tune Trove",
        "Muse Music",
        "Symphony Square",
        "Aria Attic",
        "Note Nirvana",
        "Chord Corner"
      ]
    },
    {
      Type: "Candlemaker's",
      Name: [
        "Luminous Lights",
        "Wax Wonders",
        "Candle Crest",
        "Glowing Grotto",
        "Radiant Revelry",
        "Flame Finesse",
        "Enchanted Ember",
        "Twilight Treasures",
        "Scented Sparks",
        "Eternal Flames"
      ]
    },
    {
      Type: "Sculptor's Studio",
      Name: [
        "Marble Marvels",
        "Form and Figure",
        "Artisan's Atelier",
        "Sculptor's Sanctuary",
        "Chisel & Charm",
        "Elegant Effigies",
        "Stone Symphony",
        "Creative Carvings",
        "Statue Studio",
        "Aesthetic Assemblage"
      ]
    },
    {
      Type: "Locksmith",
      Name: [
        "Secure Solutions",
        "Key Masters",
        "Locksmith Legends",
        "Guardian Locks",
        "Safe & Sound",
        "Fortress Locks",
        "Keyed Up",
        "Ironclad Security",
        "Lock & Key Experts",
        "Bolt Breakers"
      ]
    },
    {
      Type: "Brewer",
      Name: [
        "Hop Haven Brewery",
        "Crafted Elixirs",
        "Brewmaster's Blend",
        "Barrel & Brews",
        "Malt Magic Brewery",
        "Ales & Lagers Co.",
        "Fermenter's Fantasy",
        "Brewers' Bounty",
        "The Brewsmiths",
        "Hops & Barley Brewing"
      ]
    },
    {
      Type: "Vintner",
      Name: [
        "Grapevine Glory",
        "Vintage Vineyard",
        "Cellar Select",
        "Winecrafters",
        "Vine & Vessel",
        "Vintner's Vision",
        "Harvest Haven",
        "Noble Nectar",
        "Estate Elixirs",
        "Oak & Grapes"
      ]
    },
    {
      Type: "Calligrapher",
      Name: [
        "Ink & Elegance",
        "Scripted Splendor",
        "Artful Penmanship",
        "QuillCraft Studio",
        "Graceful Letters Co.",
        "Elegant Scripts Atelier",
        "Divine Inkwork",
        "Golden Quill Calligraphy",
        "Majestic Scrolls Studio",
        "Masterful Script Artistry"
      ]
    },
    {
      Type: "Carpenter",
      Name: [
        "Woodcraft Wizards",
        "Timber Artisans",
        "Crafted Creations Co.",
        "The Woodwork Masters",
        "Custom Carvings Collective",
        "Precision Planes Studio",
        "Artisanal Carpentry Works",
        "Mighty Oak Carpentry",
        "Rustic Revival Carpentry",
        "Elegant Edges Carpentry"
      ]
    },
    {
      Type: "Cobblers",
      Name: [
        "Sole Savers Workshop",
        "Heel Hero Cobblers",
        "The Leathercrafters",
        "Cobbler's Corner",
        "Footwear Fixers Co.",
        "Shoe Restorers Collective",
        "Sole Revive Artisans",
        "Cobbler's Care Studio",
        "The Shoe Smiths",
        "Leather Works Lab"
      ]
    },
    {
      Type: "Bakers",
      Name: [
        "Sweet Sensations Bakery",
        "Golden Crust Bakeshop",
        "Rise & Bake Co.",
        "Flourish & Frost Bakery",
        "Dough Delights Cafe",
        "Heavenly Oven Bakery",
        "Bake Bliss Boutique",
        "Artisanal Bites Bakery",
        "Whisk & Roll Bakehouse",
        "Divine Desserts & Bakes"
      ]
    },
    {
      Type: "Glassblowers",
      Name: [
        "Crystal Crafters Studio",
        "Glowing Glassworks",
        "Artisanal Glass Gallery",
        "Ethereal Glass Creations",
        "Radiant Flames Studio",
        "Molten Magic Glassworks",
        "Celestial Glass Atelier",
        "Inferno Art Glass Studio",
        "Sculpted Sands Glassworks",
        "Luminous Legacy Glass"
      ]
    },
    {
      Type: "Leatherworkers",
      Name: [
        "Crafted Hide Co.",
        "Embossed Elegance Leatherworks",
        "Artisanal Leather Studio",
        "Sculpted Hide Creations",
        "Tanned & Tooled Atelier",
        "Stitched Legacy Leatherworks",
        "Hide & Chic Boutique",
        "Luxury Leather Loft",
        "Custom Cut Leather Co.",
        "Refined Rawhide Gallery"
      ]
    },
    {
      Type: "Mason",
      Name: [
        "Solid Stone Creations",
        "Artisanal Masonry Gallery",
        "Heritage Stone Works",
        "Crafted Rock Boutique",
        "Pillars & Pedestals Studio",
        "Granite Guild Emporium",
        "Marble Masterworks",
        "Sculpted Stone Atelier",
        "Limestone Legacy Co.",
        "Stately Slate Artisans"
      ]
    },
    {
      Type: "Painters",
      Name: [
        "Vivid Hue Depot",
        "Brush and Palette Emporium",
        "Chroma Craft Studio",
        "Artistic Strokes Gallery",
        "Pigment Oasis",
        "Canvas and Color Co.",
        "Mural Magic Atelier",
        "Easel Elegance Boutique",
        "Palette Perfection Emporium",
        "Aquarelle Artistry"
      ]
    },
    {
      Type: "Sign-maker",
      Name: [
        "Signature Signs Studio",
        "Custom Carvings & Signs",
        "Creative Signworks",
        "Artisanal Lettering Co.",
        "Distinctive Displays Depot",
        "Visual Visions Workshop",
        "Imprint Innovations",
        "Iconic Impressions Atelier",
        "Bespoke Signs Boutique",
        "Prime Prints & Signs"
      ]
    },
    {
      Type: "Potter",
      Name: [
        "Clay Creations Corner",
        "Earthenware Emporium",
        "Pottery Paradise",
        "Mold & Wheel Workshop",
        "Artisanal Vessels Vault",
        "Ceramic Charms Co.",
        "Kiln Craft Studio",
        "Form & Fire Boutique",
        "Artful Artifacts Atelier",
        "Earth Essence Gallery"
      ]
    },
    {
      Type: "Shipwright",
      Name: [
        "Maritime Masterpieces",
        "Nautical Craftsmanship Co.",
        "Ship Shape Shipyards",
        "Seafaring Solutions Studio",
        "Voyage Vessels Workshop",
        "Oceanic Outfitters",
        "Naval Niche Nook",
        "Sailors' Sanctuary",
        "Anchors & Aft Atelier",
        "Masts & More Marketplace"
      ]
    },
    {
      Type: "Caster",
      Name: [
        "Iron Forge Foundry",
        "Bronze Craftworks Studio",
        "Steel Fusion Creations",
        "Copper Alloy Atelier",
        "Molten Metal Marvels",
        "Aluminum Artistry Depot",
        "Silver Castings Corner",
        "Brass Blazing Workshop",
        "Titanium Tempering Hub",
        "Metallic Molds Masterclass"
      ]
    },
    {
      Type: "Wheelwright",
      Name: [
        "Cart Craftsmanship Co.",
        "Wheel Wonders Workshop",
        "Axle Artistry Atelier",
        "Rolling Renovations Studio",
        "Hubcap Haven",
        "Spoke Splendor Store",
        "Carriage Crafters Collective",
        "Wagon Wheel Workshop",
        "Rim Revival Retail",
        "Chariot Champions Center"
      ]
    },
    {
      Type: "Weaver",
      Name: [
        "Textile Tales Studio",
        "ThreadCraft Creations Co.",
        "Fabric Fantasia Emporium",
        "Looming Wonders Workshop",
        "Silken Strands Sanctuary",
        "WeaveWhiz Atelier",
        "Artful Fibers Boutique",
        "Crafted Canvas Collective",
        "Spindle & Shuttle Studio",
        "Woven Dreams Marketplace"
      ]
    },
    {
      Type: "Cooper",
      Name: [
        "BarrelCraft Creations",
        "Cask Masters Co.",
        "Wooden Barrel Emporium",
        "Cooper's Craftsmanship Corner",
        "Barrel Artisans Collective",
        "Oak & Hoop Workshop",
        "CaskCraft Creations",
        "Wooden Vessel Ventures",
        "Cooper's Cask Haven",
        "Barrel Boutique"
      ]
    },
    {
      Type: "Woodcarver",
      Name: [
        "Timber Artistry Studio",
        "Whittling Wonders Workshop",
        "Carved Creations Co.",
        "ForestCraft Carvings",
        "Wooden Whimsy Atelier",
        "Nature's Niche Carvings",
        "Sculpted Timber Treasures",
        "Rustic Roots Carving Corner",
        "Whittle & Craft Woodworks",
        "Bark to Beauty Carvers"
      ]
    },
    {
      Type: "Printing Press",
      Name: [
        "Inkwell Impressions",
        "Press Perfection Studio",
        "PrintCraft Creations",
        "Typeface Treasures Hub",
        "Paper Symphony Press",
        "Imprint Innovations Co.",
        "Precision Printing Parlor",
        "Artisanal Prints Atelier",
        "Quill & Press Gallery",
        "Epic Impressions Workshop"
      ]
    },
    // Add more types and names as needed
];

// List of possible weather conditions
var weatherConditions = [
      "Cloudy & Humid: The sun beams brightly behind the clouds, that are sealing in the warm wet air.",
      "Sunny & Breezy: The warm rays dance through the swaying leaves, creating a gentle, refreshing breeze.",
      "Misty & Serene: The mist envelops the landscape in a tranquil, ethereal embrace, softening all sounds.",
      "Frosty & Crisp: The air crackles with the chill of early morning frost, painting the world in a pristine, icy sheen.",
      "Rainy & Refreshing: The gentle raindrops cleanse the earth, infusing the air with a rejuvenating, earthy scent.",
      "Snowy & Peaceful: Each snowflake falls silently, blanketing the world in a hushed, serene stillness.",
      "Foggy & Mysterious: The fog weaves a veil of mystery, obscuring the familiar and shrouding the world in intrigue.",
      "Stormy & Electrifying: The sky rumbles with power as lightning streaks across the horizon, electrifying the atmosphere",
      "Hazy & Languid: The hazy air envelops everything in a dreamy, relaxed aura, slowing the passage of time",
      "Windy & Invigorating: The gusts of wind breathe energy into the world, stirring up vitality and movement.",
      "Clear & Tranquil: The crystal-clear skies bring a sense of calm, as if the world has paused for a moment of serenity.",
      "Sweltering & Sizzling: The heat shimmers in waves, creating a sizzling, sauna-like atmosphere under the blazing sun.",
      "Chilly & Crisp: The air carries a sharp, invigorating chill, awakening the senses with its brisk touch.",
      "Gloomy & Melancholic: The overcast sky casts a somber hue over the world, evoking a sense of quiet introspection.",
      "Breezy & Balmy: The gentle breeze carries a warm, balmy embrace, soothing all it touches with a gentle caress.",
      "Overcast & Still: The heavy clouds hang motionless, casting a blanket of quiet stillness over the landscape.",
      "Drizzly & Damp: The fine mist settles on everything, coating the world in a soft, damp veil of moisture.",
      "Boiling & Sultry: The oppressive heat weighs heavily, enveloping the surroundings in a sultry, stifling embrace.",
      "Blustery & Wild: The untamed wind whips through the air, stirring up a frenzy of movement and energy.",
      "Muggy & Stifling: The air hangs heavy and thick, suffocating the world in a muggy, stifling embrace.",
      "Smoggy & Oppressive: The smog obscures the skyline, casting a pall of oppressive heaviness over the city.",
      "Clammy & Close: The air feels clammy and dense, wrapping the surroundings in a close, humid embrace.",
      "Tempestuous & Untamed: The tempest rages, unleashing its untamed fury upon the world with unbridled force.",
      "Brisk & Invigorating: The brisk air carries a sense of invigoration, infusing the surroundings with a lively energy.",
      "Mellow & Mild: The gentle breeze and warm sun create a mellow, mild atmosphere perfect for relaxation.",
      "Soggy & Sodden: The relentless rain saturates the earth, leaving everything sodden and drenched.",
      "Calm & Serene: The tranquil atmosphere exudes a sense of peace and calm, as if time itself has paused.",
      "Scorching & Blazing: The searing heat blazes down, enveloping the world in a relentless, scorching embrace.",
      "Muggy & Heavy: The air hangs heavy and moist, clinging to the skin with a muggy, oppressive weight.",
      "Damp & Dreary: The dampness seeps into everything, casting a dreary, despondent pall over the landscape.",
      "Clear & Starry: The cloudless night sky sparkles with a myriad of stars, casting a clear, celestial glow over the world.",
];

var npcList = [ 
{
Race: 'Dwarf',
Name: ['Dug',
'Rupert',
'Mary',
'Sarah'],
Clan: ['Stonefist',
'Rocktip',
'Forgelighter',
'Ingotsoul']
},
{
Race: 'Human',
Name: ['Dylan',
'Rose',
'Simon',
'Deadre'],
Clan: ['Cotswold',
'williams',
'smith',
'Rogers']
}
]

var mood = [
  "Happy", "Sad", "Excited", "Angry", "Anxious", "Calm", "Confused", "Content",
  "Depressed", "Energetic", "Enthusiastic", "Frustrated", "Grateful", "Guilty", "Hopeful", "Insecure", "Irritated",
  "Lonely", "Loved", "Mellow", "Nervous", "Optimistic", "Overwhelmed", "Peaceful", "Proud", "Relaxed", "Restless",
  "Satisfied", "Shocked", "Stressed", "Surprised", "Thankful", "Tired", "Unsettled", "Upset", "Worried", "Amused", "Bored", "Cheerful", "Comfortable",
  "Defensive", "Disappointed", "Embarrassed", "Enraged", "Gloomy", "Giddy", "Hopeless", "Indifferent", "Inspired", "Jealous", "Lethargic"
]

var object = [
  "A battle-axe strapped to their back",
  "A small lamp hooked on their belt",
  "A leather-bound grimoire poking out of their satchel",
  "A vial of shimmering potion hanging from a necklace",
  "A crystal orb nestled in their palm",
  "A quiver of enchanted arrows slung over their shoulder",
  "A carefully woven cloak draped over their shoulders",
  "An amulet pulsating with energy around their neck",
  "A pouch of herbs fastened to their belt",
  "A shimmering sword sheathed at their side",
  "A pair of ancient runes etched onto their gauntlets",
  "A staff held in their hand",
  "They wear a set of lockpicks concealed as boot straps",
  "A dragon scale shield strapped to their back",
  "Compasses hang from their belt",
  "Wings crafted from iridescent feathers strapped to their back",
  "They toy with a pocket watch, then tuck it into their vest",
  "A fairy fliters around their head",
  "A set of throwing knives nestled in their belt",
  "They wear a broach adorned with a glowing phoenix feather",
  "A heavily inscribed map peaks out from inside their cloak",
  "Smiths forging gloves hang from their belt",
  "A small dragon perched on their shoulder",
  "A flute tucked into their belt",
  "Bottles of elixirs strung about their body",
  "A pair of goggles fastened to their head",
  "A large ring adorning their left hand",
  "They carry a satchel containing spell components and alchemical ingredients bursting at the seams",
  "Diamond Earrings glisten from their purchase in their ears",
  "A horn tied to their belt",
  "A buckler strapped to their forearm",
  "A crystal pendant containing a miniature storm cloud swirling with lightning, hangs around their neck",
  "A pair of bracers strapped tightly to their forearms",
  "A harp case strapped to their back",
  "Boots that seam to shimmer adorn their feet",
  "They wear a mask hiding most of their face",
  "A jeweled crown hangs from their belt, like a trophy",
  "A flask of liquid white light glows gently from within their satchel",
  "A multitude of rings adorn their hands",
  "A bag of marbles clinking softly in their hand",
  "Velvet gloves fit snuggly on their hands",
  "A scarf wraps clumsily around their neck",
  "A crystal ball floats a foot in front of their chest",
  "They wear a belt adorned with vials of elemental essences",
  "Flowers seeming to blossom from around their boots",
  "A think tome hangs against their hip on a heavy metal chain"
]

var physicalTraits = [
  'Heavily scarred', 'Ruddy cheeked', 'One-armed', 'Piercing eyed', 'Broad-shouldered',
  'Tattooed', 'Bald', 'Curly-haired', 'strong chinned', 'Stubble-bearded', 'Freckled', 'noseless', 'Cross-eyed',
  'Long-limbed', 'Double-jointed', 'Hunchbacked', 'Hook-nosed', 'Bow-legged', 'Albino', 'Pockmarked',
  'Hairy', 'toothless', 'pegged legged', 'Stooped', 'Dimpled', 'Bushy eyebrowed', 'Long-fingered',
  'Sallow-skinned', 'Stocky', 'Broken nosed', 'Cleft chined', 'Earringed', 'Wiry', 'under dressed', 'Scarred face',
  'Glass-eyed', 'earing ladened', 'hook handed', 'Snaggle-toothed', 'Bandaged', 'Limping', 'Portly',
  'Mismatched eyed', 'perfectly manicured', 'Broad-nosed', 'Thick-lipped', 'chime wearing', 'Harelipped', 'Lanky'
]

function npcsimple() {
  var randomPhysicalTraits = physicalTraits[Math.floor(Math.random() * physicalTraits.length)];
  var randomMood = mood[Math.floor(Math.random() * mood.length)];
  var randomObject = object[Math.floor(Math.random() * object.length)];

  var randomRaceIndex = Math.floor(Math.random() * npcList.length);
  var selectedRace = npcList[randomRaceIndex];

  // Get a random name based on the selected race
  var randomNameIndex = Math.floor(Math.random() * selectedRace.Name.length);
  var randomClanIndex = Math.floor(Math.random() * selectedRace.Clan.length);
  var randomName = selectedRace.Name[randomNameIndex] + ' ' + selectedRace.Clan[randomClanIndex];

  var responseDiv = document.createElement('div');
  responseDiv.id = 'response';
  responseDiv.className = 'alert';
  responseDiv.innerHTML = '"' + randomName + '"' + "<br>" + 'A ' + randomPhysicalTraits+ ' ' + selectedRace.Race + '.' + "<br>" + randomObject + '.' + "<br>" + 'They look ' + randomMood + '.' + "<br>"

  // Create the close button for the response
  var closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'btn-close';
  closeButton.setAttribute('aria-label', 'Close');
  closeButton.onclick = function() {
    responseDiv.remove(); // Remove the specific response container when the close button is clicked
  };
  // Append the close button to the response container
  responseDiv.appendChild(closeButton);
  // Add the response to the document body
  var secondChild = document.body.childNodes[2];
  document.body.insertBefore(responseDiv, secondChild);
}


  function small2() {
    // Randomly select names for the Inn and General Store
    var randomTownName = townNames[Math.floor(Math.random() * townNames.length)];
    var randomInnName = innNames[Math.floor(Math.random() * innNames.length)];
    var randomGeneralStoreName = generalStoreNames[Math.floor(Math.random() * generalStoreNames.length)];
  
    // Randomly select a unique location
    var randomUniqueLocation = uniqueLocations[Math.floor(Math.random() * uniqueLocations.length)];
  
    // Return the list of small town locations
    var responseDiv = document.createElement('div');
    responseDiv.className = 'alert';
    responseDiv.id = 'response';
    // Construct the content of the response
    responseDiv.innerHTML = "<ul style='list-style: none;'>" +
      "<li>Town: " + randomTownName + "</li>" +
      "<li>Inn: " + randomInnName + "</li>" +
      "<li>General Store: " + randomGeneralStoreName + "</li>" +
      "<li>Unique Location: " + randomUniqueLocation + "</li>" +
      "</ul>";
  
    // Create the close button for the response
    var closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.onclick = function() {
      responseDiv.remove(); // Remove the specific response container when the close button is clicked
    };
  
    // Append the close button to the response container
    responseDiv.appendChild(closeButton);
  
    // Add the response to the document body
    var secondChild = document.body.childNodes[2];
    document.body.insertBefore(responseDiv, secondChild);
  }

  function weather2() {
    // Generate a random index to select a weather condition from the list
    var randomIndex = Math.floor(Math.random() * weatherConditions.length);

    // Get the response div and update its content with the randomly selected weather condition
    var responseDiv = document.createElement('div');
    responseDiv.id = 'response';
    responseDiv.className = 'alert';
    responseDiv.innerHTML = weatherConditions[randomIndex] + "<br>"
    // Create the close button for the response
    var closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.onclick = function() {
      responseDiv.remove(); // Remove the specific response container when the close button is clicked
    };
    // Append the close button to the response container
    responseDiv.appendChild(closeButton);
    // Add the response to the document body
    var secondChild = document.body.childNodes[2];
    document.body.insertBefore(responseDiv, secondChild);
  }



  // old weather functions, that maybe used again later
  function coast() {
    // List of possible weather conditions
    var weatherConditions = [
        "Sunny and Serene: The coastal region basks in the warmth of the sun, casting a golden glow across the glistening waters. Gentle sea breezes carry the fresh scent of salt and seaweed, inviting locals and tourists alike to embrace the day. Seabirds soar gracefully overhead, their calls blending harmoniously with the rhythm of the rolling waves.", "Misty and Mysterious: A veil of mist envelops the coastal landscape, shrouding cliffs and coves in an ethereal embrace. The distant cry of foghorns echoes through the air, mingling with the haunting lullaby of the sea. Silhouettes of ships emerge from the fog, their presence an enigmatic dance between visibility and obscurity.", "Windy and Wild: The coastal winds howl with untamed fervor, sculpting the waves into frothy peaks that crash against rugged shores. Sailors navigate the tempestuous waters with skill and determination, embracing the exhilarating challenge of the open sea. Seabirds perform daring aerial acrobatics, riding the gusts with effortless grace.", "Stormy and Spectacular: Nature unleashes its fury upon the coast, painting the sky in tumultuous shades of gray. Thunder reverberates across the horizon, punctuating the relentless drumming of rain against the shoreline. Waves rise and fall with unrestrained power, showcasing the awe-inspiring might of the ocean.", "Calming and Tranquil: A sense of tranquility envelops the coastal haven, offering respite from the chaos of urban life. The sun dips beneath the waves, casting a tapestry of warm hues across the evening sky. Seashells adorn the sandy shores, whispering tales of the timeless bond between land and sea."
    ];

    // Generate a random index to select a weather condition from the list
    var randomIndex = Math.floor(Math.random() * weatherConditions.length);

    // Get the response div and update its content with the randomly selected weather condition
    var responseDiv = document.getElementById('response');
    responseDiv.innerHTML = weatherConditions[randomIndex] + "<br>" +
    "<button type='button' class='btn-close' aria-label='Close' onclick='hide()'></button>";
    responseDiv.style.display = "block";
}

// old weather plains geo location idea
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
  responseDiv.innerHTML = weatherConditions[randomIndex] + "<br>" +
  "<button type='button' class='btn-close' aria-label='Close' onclick='hide()'></button>";
  responseDiv.style.display = "block";
}

// old weather mountain geo location idea
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
responseDiv.innerHTML = weatherConditions[randomIndex] + "<br>" +
"<button type='button' class='btn-close' aria-label='Close' onclick='hide()'></button>";
responseDiv.style.display = "block";
}

// old radio npc idea
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

// old Small town generator
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
                         "</ul>" +
                         "<button type='button' class='btn-close' aria-label='Close' onclick='hide()'></button>";
  responseDiv.style.display = "block";
}

// old Medium town generator
function medium() {
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
  
  var randomStoreAndName = [];
while (randomStoreAndName.length < 3) {
  var randomTypeIndex = Math.floor(Math.random() * mixedStoresAndNames.length);
  var randomType = mixedStoresAndNames[randomTypeIndex].Type;
  var randomNameIndex = Math.floor(Math.random() * mixedStoresAndNames[randomTypeIndex].Name.length);
  var randomName = mixedStoresAndNames[randomTypeIndex].Name[randomNameIndex];

  // Check if the combination of randomType and randomName is not already in the array
  if (!randomStoreAndName.some(item => item.Type === randomType && item.Name === randomName)) {
    randomStoreAndName.push({ Type: randomType, Name: randomName });
  }
}

  // Randomly select a unique location
  var randomUniqueLocation = uniqueLocations[Math.floor(Math.random() * uniqueLocations.length)];
  var randomTownName = townNames[Math.floor(Math.random() * townNames.length)];
  var randomBlacksmith = blacksmith[Math.floor(Math.random() * blacksmith.length)];
  var randomApothecary = apothecary[Math.floor(Math.random() * apothecary.length)];

  // Return the list of medium city locations
  var responseDiv = document.getElementById('response');
  responseDiv.innerHTML = "<ul style='list-style: none;'>" +
  "<li>Town: " + randomTownName + "</li>" +
  "<li>Inn: " + innNames[randomInns[0]] + "</li>" +
  "<li>Inn: " + innNames[randomInns[1]] + "</li>" +
  "<li>Inn: " + innNames[randomInns[2]] + "</li>" +
                         "<li>General Store: " + generalStoreNames[randomGeneralStoreName[0]] + "</li>" +
                         "<li>General Store: " + generalStoreNames[randomGeneralStoreName[1]] + "</li>" +
                         "<li>General Store: " + generalStoreNames[randomGeneralStoreName[2]] + "</li>" +
                         "<li>Blacksmith: " + randomBlacksmith + "</li>" +
                         "<li>Apothecary: " + randomApothecary + "</li>" +
                         "<li>" + randomStoreAndName[0].Type + ": " + randomStoreAndName[0].Name + "</li>" +
                         "<li>" + randomStoreAndName[1].Type + ": " + randomStoreAndName[1].Name + "</li>" +
                         "<li>" + randomStoreAndName[2].Type + ": " + randomStoreAndName[2].Name +"</li>" +
                         "<li>Unique Location: " + randomUniqueLocation + "</li>" +
                         "</ul>" +
                         "<button type='button' class='btn-close' aria-label='Close' onclick='hide()'></button>";
  responseDiv.style.display = "block";
}

// old Large town generator
function large() {
  // Randomly select names for the Inn and General Store
  var randomInns = [];
  while (randomInns.length < 5) {
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
  
  var randomStoreAndName = [];
  while (randomStoreAndName.length < 8) {
  var randomTypeIndex = Math.floor(Math.random() * mixedStoresAndNames.length);
  var randomType = mixedStoresAndNames[randomTypeIndex].Type;
  var randomNameIndex = Math.floor(Math.random() * mixedStoresAndNames[randomTypeIndex].Name.length);
  var randomName = mixedStoresAndNames[randomTypeIndex].Name[randomNameIndex];

  // Check if the combination of randomType and randomName is not already in the array
  if (!randomStoreAndName.some(item => item.Type === randomType && item.Name === randomName)) {
    randomStoreAndName.push({ Type: randomType, Name: randomName });
  }
  }

  // Randomly select a unique location
  var randomUniqueLocation = uniqueLocations[Math.floor(Math.random() * uniqueLocations.length)];
  var randomTownName = townNames[Math.floor(Math.random() * townNames.length)];
  
  var randomBlacksmith = [];
  while (randomBlacksmith.length < 3) {
  var randomIndexSmith = Math.floor(Math.random() * blacksmith.length);
  if (!randomBlacksmith.includes(randomIndexSmith)) {
    randomBlacksmith.push(randomIndexSmith);
  } 
  }

  var randomApothecary = [];
  while (randomApothecary.length < 3) {
  var randomIndexApoth = Math.floor(Math.random() * apothecary.length);
  if (!randomApothecary.includes(randomIndexApoth)) {
    randomApothecary.push(randomIndexApoth);
  } 
  }

  // Return the list of medium city locations
  var responseDiv = document.getElementById('response');
  responseDiv.innerHTML = "<ul style='list-style: none;'>" +
  "<li>Town: " + randomTownName + "</li>" +
  "<li>Inn: " + innNames[randomInns[0]] + "</li>" +
  "<li>Inn: " + innNames[randomInns[1]] + "</li>" +
  "<li>Inn: " + innNames[randomInns[2]] + "</li>" +
  "<li>Inn: " + innNames[randomInns[3]] + "</li>" +
  "<li>Inn: " + innNames[randomInns[4]] + "</li>" +
                         "<li>General Store: " + generalStoreNames[randomGeneralStoreName[0]] + "</li>" +
                         "<li>General Store: " + generalStoreNames[randomGeneralStoreName[1]] + "</li>" +
                         "<li>General Store: " + generalStoreNames[randomGeneralStoreName[2]] + "</li>" +
                         "<li>Blacksmith: " + blacksmith[randomBlacksmith[0]] + "</li>" +
                         "<li>Blacksmith: " + blacksmith[randomBlacksmith[1]] + "</li>" +
                         "<li>Blacksmith: " + blacksmith[randomBlacksmith[2]] + "</li>" +
                         "<li>Apothecary: " + apothecary[randomApothecary[0]] + "</li>" +
                         "<li>Apothecary: " + apothecary[randomApothecary[1]] + "</li>" +
                         "<li>Apothecary: " + apothecary[randomApothecary[2]] + "</li>" +
                         "<li>" + randomStoreAndName[0].Type + ": " + randomStoreAndName[0].Name + "</li>" +
                         "<li>" + randomStoreAndName[1].Type + ": " + randomStoreAndName[1].Name + "</li>" +
                         "<li>" + randomStoreAndName[2].Type + ": " + randomStoreAndName[2].Name +"</li>" +
                         "<li>" + randomStoreAndName[3].Type + ": " + randomStoreAndName[3].Name +"</li>" +
                         "<li>" + randomStoreAndName[4].Type + ": " + randomStoreAndName[4].Name +"</li>" +
                         "<li>" + randomStoreAndName[5].Type + ": " + randomStoreAndName[5].Name +"</li>" +
                         "<li>" + randomStoreAndName[6].Type + ": " + randomStoreAndName[6].Name +"</li>" +
                         "<li>" + randomStoreAndName[7].Type + ": " + randomStoreAndName[7].Name +"</li>" +
                         "<li>Unique Location: " + randomUniqueLocation + "</li>" +
                         "</ul>" + 
                         "<button type='button' class='btn-close' aria-label='Close' onclick='hide()'></button>";
  responseDiv.style.display = "block";
}