// ARRAYS AND VARIABLES



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
  "The Whimsical Wyvern"
];

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
  "the accursed atoll: 'where the sea devours all who approach'"
];
  
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
  "Silverwood"
];

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
  "The Exceptional Emporium"
];

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

// this list needs completing
var npcList = [ 
{
Race: 'Dwarf',
Name: ["Adrik", "Alberich", "Baern", "Barendd", "Beloril", "Brottor", "Dain", "Dalgal", "Darrak", "Delg", "Duergath", "Dworic", "Eberk", "Einkil", "Elaim", "Erias", "Fallond", "Fargrim", "Gardain", "Gilthur", "Gimgen", "Gimurt", "Harbek", "Kildrak", "Kilvar", "Morgran", "Morkral", "Nalral", "Nordak", "Nuraval", "Oloric", "Olunt", "Orsik", "Oskar", "Rangrim", "Reirak", "Rurik", "Taklinn", "Thoradin", "Thorin", "Thradal", "Tordek", "Traubon", "Travok", "Ulfgar", "Uraim", "Veit", "Vonbin", "Vondal", "Whurbin", "Anbera", "Artin", "Audhild", "Balifra", "Barbena", "Bardryn", "Bolhild", "Dagnal", "Dariff", "Delre", "Diesa", "Eldeth", "Eridred", "Falkrunn", "Fallthra", "Finellen", "Gillydd", "Gunnloda", "Gurdis", "Helgret", "Helja", "Hlin", "Ilde", "Jarana", "Kathra", "Kilia", "Kristryd", "Liftrasa", "Marastyr", "Mardred", "Morana", "Nalaed", "Nora", "Nurkara", "Oriff", "Ovina", "Riswynn", "Sannl", "Therlin", "Thodris", "Torbera", "Tordrid", "Torgga", "Urshar", "Valida", "Vistra", "Vonana", "Werydd", "Whurdred", "Yurgunn"],
Clan: ['Stonefist',
'Rocktip',
'Forgelighter',
'Ingotsoul', "Aranore", "Balderk", "Battlehammer", "Bigtoe", "Bloodkith", "Bofdann", "Brawnanvil", "Brazzik", "Broodfist", "Burrowfound", "Caebrek", "Daerdahk", "Dankil", "Daraln", "Deepdelver", "Durthane", "Eversharp", "Fallack", "Fireforge", "Foamtankard", "Frostbeard", "Glanhig", "Goblinbane", "Goldfinder", "Gorunn", "Graybeard", "Hammerstone", "Helcral", "Holderhek", "Ironfist", "Loderr", "Lutgehr", "Morigak", "Orcfoe", "Rakankrak", "Ruby-Eye", "Rumnaheim", "Silveraxe", "Silverstone", "Steelfist", "Stoutale", "Strakeln", "Strongheart", "Thrahak", "Torevir", "Torunn", "Trollbleeder", "Trueanvil", "Trueblood", "Ungart"]
},
{
Race: 'Human',
Name: ['Dylan',
'Rose',
'Simon',
'Deadre', "Adam", "Adelard", "Aldous", "Anselm", "Arnold", "Bernard", "Bertram", "Charles", "Clerebold", "Conrad", "Diggory", "Drogo", "Everard", "Frederick", "Geoffrey", "Gerald", "Gilbert", "Godfrey", "Gunter", "Guy", "Henry", "Heward", "Hubert", "Hugh", "Jocelyn", "John", "Lance", "Manfred", "Miles", "Nicholas", "Norman", "Odo", "Percival", "Peter", "Ralf", "Randal", "Raymond", "Reynard", "Richard", "Robert", "Roger", "Roland", "Rolf", "Simon", "Theobald", "Theodoric", "Thomas", "Timm", "William", "Wymar", "Adelaide", "Agatha", "Agnes", "Alice", "Aline", "Anne", "Avelina", "Avice", "Beatrice", "Cecily", "Egelina", "Eleanor", "Elizabeth", "Ella", "Eloise", "Elysande", "Emeny", "Emma", "Emmeline", "Ermina", "Eva", "Galiena", "Geva", "Giselle", "Griselda", "Hadwisa", "Helen", "Herleva", "Hugolina", "Ida", "Isabella", "Jacoba", "Jane", "Joan", "Juliana", "Katherine", "Margery", "Mary", "Matilda", "Maynild", "Millicent", "Oriel", "Rohesia", "Rosalind", "Rosamund", "Sarah", "Susannah", "Sybil", "Williamina", "Yvonne"],
Clan: ['Cotswold',
'Williams',
'Smith',
'Rogers', "Taylor", "Brown", "Davies", "Wilson", "Evans", "Thomas", "Johnson", "Roberts", "Robinson", "Thompson", "Walker", "White", "Harris", "Clark", "Lewis", "Young", "Hall", "Turner", "Martin", "Cooper", "Hill", "Ward", "Moore", "King", "Bennett", "Hughes", "Butler", "Morgan", "Davis", "Allen", "Wright", "Green", "Wood", "Mitchell", "Carter", "Edwards", "Richardson", "Bailey", "Parker", "Collins", "Morris", "Rogers", "Reed", "Cook", "Bell", "Phillips"]
},
{
  Race: 'Dragonborn',
  Name: [
    "Akra", "Aasathra", "Antrara", "Arava", "Biri", "Blendaeth", "Burana", "Chassath", "Daar", "Dentratha", "Doudra", "Driindar", "Eggren", "Farideh", "Findex", "Furrele", "Gesrethe", "Gilkass", "Harann", "Havilar", "Hethress", "Hillanot", "Jaxi", "Jezean", "Jheri", "Kadana", "Kava", "Korinn", "Megren", "Mijira", "Mishann", "Nala", "Nuthra", "Perra", "Pogranix", "Pyxrin", "Quespa", "Raiann", "Rezena", "Ruloth", "Saphara", "Savaran", "Sora", "Surina", "Synthrin", "Tatyan", "Thava", "Uadjit", "Vezera", "Zykroff", "Adrex", "Arjhan", "Azzakh", "Balasar", "Baradad", "Bharash", "Bidreked", "Dadalan", "Dazzazn", "Direcris", "Donaar", "Fax", "Gargax", "Ghesh", "Gorbundus", "Greethen", "Heskan", "Hirrathak", "Ildrex", "Kaladan", "Kerkad", "Kiirith", "Kriv", "Maagog", "Medrash", "Mehen", "Mozikth", "Mreksh", "Mugrunden", "Nadarr", "Nithther", "Norkruuth", "Nykkan", "Pandjed", "Patrin", "Pijjirik", "Quarethon", "Rathkran", "Rhogar", "Rivaan", "Sethrekar", "Shamash", "Shedinn", "Srorthen", "Tarhun", "Torinn", "Trynnicus", "Valorean", "Vrondiss", "Zedaar"
  ],
  Clan: [
    "Daardendrian", "Delmirev", "Dhyrktelonis", "Ebynichtomonis", "Esstyrlynn", "Fharngnarthnost", "Ghaallixirn", "Grrrmmballhyst", "Gygazzylyshrift", "Hashphronyxadyn", "Hshhsstoroth", "Imbixtellrhyst", "Jerynomonis", "Jharthraxyn", "Kerrhylon", "Kimbatuul", "Lhamboldennish", "Linxakasendalor", "Mohradyllion", "Mystan", "Nemmonis", "Norixius", "Ophinshtalajiir", "Orexijandilin", "Pfaphnyrennish", "Phrahdrandon", "Pyraxtallinost", "Qyxpahrgh", "Raghthroknaar", "Shestendeliath", "Skaarzborroosh", "Sumnarghthrysh", "Tiammanthyllish", "Turnuroth", "Umbyrphrael", "Vangdondalor", "Verthisathurgiesh", "Wivvyrholdalphiax", "Wystongjiir", "Xephyrbahnor", "Yarjerit", "Zzzxaaxthroth"
  ]
},
{
  Race: 'Elf',
  Name: [
    "Adrie", "Ahinar", "Althaea", "Anastrianna", "Andraste", "Antinua", "Arara", "Baelitae", "Bethrynna", "Birel", "Caelynn", "Chaedi", "Claira", "Dara", "Drusilia", "Elama", "Enna", "Faral", "Felosial", "Hatae", "Ielenia", "Ilanis", "Irann", "Jarsali", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Maiathah", "Malquis", "Meriele", "Mialee", "Myathethil", "Naivara", "Quelenna", "Quillathe", "Ridaro", "Sariel", "Shanairla", "Shava", "Silaqui", "Sumnes", "Theirastra", "Thiala", "Tiaathque", "Traulam", "Vadania", "Valanthe", "Valna", "Xanaphia", "Adran", "Aelar", "Aerdeth", "Ahvain", "Aramil", "Arannis", "Aust", "Azaki", "Beiro", "Berrian", "Caeldrim", "Carric", "Dayereth", "Dreali", "Efferil", "Eiravel", "Enialis", "Erdan", "Erevan", "Fivin", "Galinndan", "Gennal", "Hadarai", "Halimath", "Heian", "Himo", "Immeral", "Ivellios", "Korfel", "Lamlis", "Laucian", "Lucan", "Mindartis", "Naal", "Nutae", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Suhnae", "Thamior", "Tharivol", "Theren", "Theriatis", "Thervan", "Uthemar", "Vanuath", "Varis"
  ],
  Clan: [
    "Aloro", "Amakiir", "Amastacia", "Ariessus", "Arnuanna", "Berevan", "Caerdonel", "Caphaxath", "Casilltenirra", "Cithreth", "Dalanthan", "Eathalena", "Erenaeth", "Ethanasath", "Fasharash", "Firahel", "Floshem", "Galanodel", "Goltorah", "Hanali", "Holimion", "Horineth", "Iathrana", "Ilphelkiir", "Iranapha", "Koehlanna", "Lathalas", "Liadon", "Meliamne", "Mellerelel", "Mystralath", "Naïlo", "Netyoive", "Ofandrus", "Ostoroth", "Othronus", "Qualanthri", "Raethran", "Rothenel", "Selevarun", "Siannodel", "Suithrasas", "Sylvaranth", "Teinithra", "Tiltathana", "Wasanthi", "Withrethin", "Xiloscient", "Xistsrith", "Yaeldrin"
  ]
},
{
  Race: 'Half-Elf',
  Name: [
    'Deadre', "Adam", "Adelard", "Aldous", "Anselm", "Arnold", "Bernard", "Bertram", "Charles", "Clerebold", "Conrad", "Diggory", "Drogo", "Everard", "Frederick", "Geoffrey", "Gerald", "Gilbert", "Godfrey", "Gunter", "Guy", "Henry", "Heward", "Hubert", "Hugh", "Jocelyn", "John", "Lance", "Manfred", "Miles", "Nicholas", "Norman", "Odo", "Percival", "Peter", "Ralf", "Randal", "Raymond", "Reynard", "Richard", "Robert", "Roger", "Roland", "Rolf", "Simon", "Theobald", "Theodoric", "Thomas", "Timm", "William", "Wymar", "Adelaide", "Agatha", "Agnes", "Alice", "Aline", "Anne", "Avelina", "Avice", "Beatrice", "Cecily", "Egelina", "Eleanor", "Elizabeth", "Ella", "Eloise", "Elysande", "Emeny", "Emma", "Emmeline", "Ermina", "Eva", "Galiena", "Geva", "Giselle", "Griselda", "Hadwisa", "Helen", "Herleva", "Hugolina", "Ida", "Isabella", "Jacoba", "Jane", "Joan", "Juliana", "Katherine", "Margery", "Mary", "Matilda", "Maynild", "Millicent", "Oriel", "Rohesia", "Rosalind", "Rosamund", "Sarah", "Susannah", "Sybil", "Williamina", "Yvonne", "Adrie", "Ahinar", "Althaea", "Anastrianna", "Andraste", "Antinua", "Arara", "Baelitae", "Bethrynna", "Birel", "Caelynn", "Chaedi", "Claira", "Dara", "Drusilia", "Elama", "Enna", "Faral", "Felosial", "Hatae", "Ielenia", "Ilanis", "Irann", "Jarsali", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Maiathah", "Malquis", "Meriele", "Mialee", "Myathethil", "Naivara", "Quelenna", "Quillathe", "Ridaro", "Sariel", "Shanairla", "Shava", "Silaqui", "Sumnes", "Theirastra", "Thiala", "Tiaathque", "Traulam", "Vadania", "Valanthe", "Valna", "Xanaphia", "Adran", "Aelar", "Aerdeth", "Ahvain", "Aramil", "Arannis", "Aust", "Azaki", "Beiro", "Berrian", "Caeldrim", "Carric", "Dayereth", "Dreali", "Efferil", "Eiravel", "Enialis", "Erdan", "Erevan", "Fivin", "Galinndan", "Gennal", "Hadarai", "Halimath", "Heian", "Himo", "Immeral", "Ivellios", "Korfel", "Lamlis", "Laucian", "Lucan", "Mindartis", "Naal", "Nutae", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Suhnae", "Thamior", "Tharivol", "Theren", "Theriatis", "Thervan", "Uthemar", "Vanuath", "Varis"
  ],
  Clan: [
    'Rogers', "Taylor", "Brown", "Davies", "Wilson", "Evans", "Thomas", "Johnson", "Roberts", "Robinson", "Thompson", "Walker", "White", "Harris", "Clark", "Lewis", "Young", "Hall", "Turner", "Martin", "Cooper", "Hill", "Ward", "Moore", "King", "Bennett", "Hughes", "Butler", "Morgan", "Davis", "Allen", "Wright", "Green", "Wood", "Mitchell", "Carter", "Edwards", "Richardson", "Bailey", "Parker", "Collins", "Morris", "Rogers", "Reed", "Cook", "Bell", "Phillips", "Aloro", "Amakiir", "Amastacia", "Ariessus", "Arnuanna", "Berevan", "Caerdonel", "Caphaxath", "Casilltenirra", "Cithreth", "Dalanthan", "Eathalena", "Erenaeth", "Ethanasath", "Fasharash", "Firahel", "Floshem", "Galanodel", "Goltorah", "Hanali", "Holimion", "Horineth", "Iathrana", "Ilphelkiir", "Iranapha", "Koehlanna", "Lathalas", "Liadon", "Meliamne", "Mellerelel", "Mystralath", "Naïlo", "Netyoive", "Ofandrus", "Ostoroth", "Othronus", "Qualanthri", "Raethran", "Rothenel", "Selevarun", "Siannodel", "Suithrasas", "Sylvaranth", "Teinithra", "Tiltathana", "Wasanthi", "Withrethin", "Xiloscient", "Xistsrith", "Yaeldrin"
  ]
},
{
  Race: "Gnome",
  Name: [
    "Abalaba", "Bimpnottin", "Breena", "Buvvie", "Callybon", "Caramip", "Carlin", "Cumpen", "Dalaba", "Donella", "Duvamil", "Ella", "Ellyjoybell", "Ellywick", "Enidda", "Lilli", "Loopmottin", "Lorilla", "Luthra", "Mardnab", "Meena", "Menny", "Mumpena", "Nissa", "Numba", "Nyx", "Oda", "Oppah", "Orla", "Panana", "Pyntle", "Quilla", "Ranala", "Reddlepop", "Roywyn", "Salanop", "Shamil", "Siffress", "Symma", "Tana", "Tenena", "Tervaround", "Tippletoe", "Ulla", "Unvera", "Veloptima", "Virra", "Waywocket", "Yebe", "Zanna", "Alston", "Alvyn", "Anverth", "Arumawann", "Bilbron", "Boddynock", "Brocc", "Burgell", "Cockaby", "Crampernap", "Dabbledob", "Delebean", "Dimble", "Eberdeb", "Eldon", "Erky", "Fablen", "Fibblestib", "Fonkin", "Frouse", "Frug", "Gerbo", "Gimble", "Glim", "Igden", "Jabble", "Jebeddo", "Kellen", "Kipper", "Namfoodle", "Oppleby", "Orryn", "Paggen", "Pallabar", "Pog", "Qualen", "Ribbles", "Rimple", "Roondar", "Sapply", "Seebo", "Senteq", "Sindri", "Umpen", "Warryn", "Wiggens", "Wobbles", "Wrenn", "Zaffrab", "Zook"
  ],
  Clan: [
    "Albaratie", "Bafflestone", "Beren", "Boondiggles", "Cobblelob", "Daergel", "Dunben", "Fabblestabble", "Fapplestamp", "Fiddlefen", "Folkor", "Garrick", "Gimlen", "Glittergem", "Gobblefirn", "Gummen", "Horcusporcus", "Humplebumple", "Ironhide", "Leffery", "Lingenhall", "Loofollue", "Maekkelferce", "Miggledy", "Munggen", "Murnig", "Musgraben", "Nackle", "Ningel", "Nopenstallen", "Nucklestamp", "Offund", "Oomtrowl", "Pilwicken", "Pingun", "Quillsharpener", "Raulnor", "Reese", "Rofferton", "Scheppen", "Shadowcloak", "Silverthread", "Sympony", "Tarkelby", "Timbers", "Turen", "Umbodoben", "Waggletop", "Welber", "Wildwander"
  ]
},
{
  Race: 'Half-Orc',
  Name: [
    "Arha", "Baggi", "Bendoo", "Bilga", "Brakka", "Creega", "Drenna", "Ekk", "Emen", "Engong", "Fistula", "Gaaki", "Gorga", "Grai", "Greeba", "Grigi", "Gynk", "Hrathy", "Huru", "Ilga", "Kabbarg", "Kansif", "Lagazi", "Lezre", "Murgen", "Murook", "Myev", "Nagrette", "Neega", "Nella", "Nogu", "Oolah", "Ootah", "Ovak", "Ownka", "Puyet", "Reeza", "Shautha", "Silgre", "Sutha", "Tagga", "Tawar", "Tomph", "Ubada", "Vanchu", "Vola", "Volen", "Vorka", "Yevelda", "Zagga", "Argran", "Braak", "Brug", "Cagak", "Dench", "Dorn", "Dren", "Druuk", "Feng", "Gell", "Gnarsh", "Grumbar", "Gubrash", "Hagren", "Henk", "Hogar", "Holg", "Imsh", "Karash", "Karg", "Keth", "Korag", "Krusk", "Lubash", "Megged", "Mhurren", "Mord", "Morg", "Nil", "Nybarg", "Odorr", "Ohr", "Rendar", "Resh", "Ront", "Rrath", "Sark", "Scrag", "Sheggen", "Shump", "Tanglar", "Tarak", "Thar", "Thokk", "Trag", "Ugarth", "Varg", "Vilberg", "Yurk", "Zed"
  ],
  Clan: [
    '', ''
  ]
},
{
  Race: 'Halfling',
  Name: [
    "Alain", "Andry", "Anne", "Bella", "Blossom", "Bree", "Callie", "Chenna", "Cora", "Dee", "Dell", "Eida", "Eran", "Euphemia", "Georgina", "Gynnie", "Harriet", "Jasmine", "Jillian", "Jo", "Kithri", "Lavinia", "Lidda", "Maegan", "Marigold", "Merla", "Myria", "Nedda", "Nikki", "Nora", "Olivia", "Paela", "Pearl", "Pennie", "Philomena", "Portia", "Robbie", "Rose", "Saral", "Seraphina", "Shaena", "Stacee", "Tawna", "Thea", "Trym", "Tyna", "Vani", "Verna", "Wella", "Willow", "Alton", "Ander", "Bernie", "Bobbin", "Cade", "Callus", "Corrin", "Dannad", "Danniel", "Eddie", "Egart", "Eldon", "Errich", "Fildo", "Finnan", "Franklin", "Garret", "Garth", "Gilbert", "Gob", "Harol", "Igor", "Jasper", "Keith", "Kevin", "Lazam", "Lerry", "Lindal", "Lyle", "Merric", "Mican", "Milo", "Morrin", "Nebin", "Nevil", "Osborn", "Ostran", "Oswalt", "Perrin", "Poppy", "Reed", "Roscoe", "Sam", "Shardon", "Tye", "Ulmo", "Wellby", "Wendel", "Wenner", "Wes"
  ],
  Clan: [
    "Appleblossom", "Bigheart", "Brightmoon", "Brushgather", "Cherrycheeks", "Copperkettle", "Deephollow", "Elderberry", "Fastfoot", "Fatrabbit", "Glenfellow", "Goldfound", "Goodbarrel", "Goodearth", "Greenbottle", "Greenleaf", "High-hill", "Hilltopple", "Hogcollar", "Honeypot", "Jamjar", "Kettlewhistle", "Leagallow", "Littlefoot", "Nimblefingers", "Porridgepot", "Quickstep", "Reedfellow", "Shadowquick", "Silvereyes", "Smoothhands", "Stonebridge", "Stoutbridge", "Stoutman", "Strongbones", "Sunmeadow", "Swiftwhistle", "Tallfellow", "Tealeaf", "Tenpenny", "Thistletop", "Thorngage", "Tosscobble", "Underbough", "Underfoot", "Warmwater", "Whispermouse", "Wildcloak", "Wildheart", "Wiseacre"
  ]
},
{
  Race: 'Tiefling',
  Name: [
    "Akta", "Anakis", "Armara", "Astaro", "Aym", "Azza", "Beleth", "Bryseis", "Bune", "Criella", "Damaia", "Decarabia", "Ea", "Gadreel", "Gomory", "Hecat", "Ishte", "Jezebeth", "Kali", "Kallista", "Kasdeya", "Lerissa", "Lilith", "Makaria", "Manea", "Markosian", "Mastema", "Naamah", "Nemeia", "Nija", "Orianna", "Osah", "Phelaia", "Prosperine", "Purah", "Pyra", "Rieta", "Ronobe", "Ronwe", "Seddit", "Seere", "Sekhmet", "Semyaza", "Shava", "Shax", "Sorath", "Uzza", "Vapula", "Vepar", "Verin", "Abad", "Ahrim", "Akmen", "Amnon", "Andram", "Astar", "Balam", "Barakas", "Bathin", "Caim", "Chem", "Cimer", "Cressel", "Damakos", "Ekemon", "Euron", "Fenriz", "Forcas", "Habor", "Iados", "Kairon", "Leucis", "Mamnen", "Mantus", "Marbas", "Melech", "Merihim", "Modean", "Mordai", "Mormo", "Morthos", "Nicor", "Nirgel", "Oriax", "Paymon", "Pelaios", "Purson", "Qemuel", "Raam", "Rimmon", "Sammal", "Skamos", "Tethren", "Thamuz", "Therai", "Valafar", "Vassago", "Xappan", "Zepar", "Zephan"
  ],
  Clan: [
    "Ambition", "Art", "Carrion", "Chant", "Creed", "Death", "Debauchery", "Despair", "Doom", "Doubt", "Dread", "Ecstasy", "Ennui", "Entropy", "Excellence", "Fear", "Glory", "Gluttony", "Grief", "Hate", "Hope", "Horror", "Ideal", "Ignominy", "Laughter", "Love", "Lust", "Mayhem", "Mockery", "Murder", "Muse", "Music", "Mystery", "Nowhere", "Open", "Pain", "Passion", "Poetry", "Quest", "Random", "Reverence", "Revulsion", "Sorrow", "Temerity", "Torment", "Tragedy", "Vice", "Virtue", "Weary", "Wit"
  ]
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

var lootFive = [
  {
Platinum: [0,1,2],
Gold: [],
Silver: [],
Copper: [],
  },
  {
Gemstones: [
  'Azurite (opaque mottled deep blue) 10g',
  'Banded agate (translucent striped brown, blue, white, or red) 10g',
  'Blue quartz (transparent pale blue) 10g',
  'Eye agate (translucent circles of gray, white, brown, blue, or green) 10g',
  'Hematite (opaque gray-black) 10g',
  'Lapis lazuli (opaque light and dark blue with yellow flecks) 10g',
  'Malachite (opaque striated light and dark green) 10g',
  'Moss agate (translucent pink or yellow-white with mossy gray or green markings) 10g',
  'Obsidian (opaque black) 10g',
  'Rhodochrosite (opaque light pink) 10g',
  'Tiger eye (translucent brown with golden center) 10g',
  'Turquoise (opaque light blue-green) 10g',
]
  },
  {
Items: [
  "Alchemist's supplies", "Brewer's supplies", "Calligrapher's supplies", "Carpenter's tools", "Cartographer's tools", "Cobbler's tools", "Cook's utensils", "Glassblower's tools", "Jeweler's tools", "Leatherworker's tools", "Mason's tools", "Painter's supplies", "Potter's tools", "Smith's tools", "Tinker's tools", "Weaver's tools", "Woodcarver's tools", "Dice set", "Dragonchess set", "Playing card set", "Three-Dragon Ante set", "Herbalism kit", "Bagpipes", "Drum", "Dulcimer", "Flute", "Lute", "Lyre", "Horn", "Pan flute", "Shawm", "Viol", "Navigator's tools", "Poisoner's kit", "Thieves' tools", "Disguise kit", "Forgery kit", "Abacus", "Acid (vial)", "Alchemist's fire (flask)", "Arrows (20)", "Blowgun needles (50)", "Crossbow bolts (20)", "Sling bullets (20)", "Antitoxin (vial)", "Arcane focus: Crystal", "Arcane focus: Orb", "Arcane focus: Rod", "Arcane focus: Staff", "Arcane focus: Wand", "Backpack", "Ball bearings (bag of 1,000)", "Bedroll", "Bell", "Blanket", "Block and tackle", "Book", "Bottle, glass", "Bucket", "Caltrops (bag of 20)", "Candle", "Case, crossbow bolt", "Case, map or scroll", "Chain (10 feet)", "Chalk (10 piece)", "Climber's kit", "Clothes, common", "Clothes, costume", "Clothes, fine", "Clothes, traveler's", "Clothes, Cold Weather", "Component pouch", "Crowbar", "Sprig of mistletoe", "Little Wolf Totem", "Yew wand", "Fishing tackle", "Tankard", "Grappling hook", "Hammer", "Sledge Hammer", "Healer's kit", "Holy symbol", "Amulet", "Royal House Emblem", "Reliquary", "Holy water (flask)", "Hourglass", "Hunting trap", "Ink (1 ounce bottle) and Ink pen", "Ladder (10-foot)", "Lamp", "Lantern, bullseye", "Lantern, hooded", "Lockbox", "Magnifying glass", "Manacles", "Mess kit", "Mirror, steel", "Oil (flask)", "Perfume (vial)", "Pick, miner's", "Piton", "Poison, basic (vial)", "Pole (10-foot)", "Pot, iron", "Potion of healing", "Quiver", "Ram, portable", "Rations (1 day)", "Robes", "Rope, hempen (50 feet)", "Rope, silk (50 feet)", "Scale, merchant's", "Sealing wax", "Shovel", "Signal whistle", "Signet ring", "Spellbook", "Spikes, iron (10)", "Spyglass", "Tent, two-person", "Tinderbox", "Torch", "Vial", "Waterskin", "Whetstone"
]
  },
  {
MagicItem: [
  "Potion of healing", "Spell scroll (cantrip)", "Potion of climbing", "Spell scroll (1st level)", "Spell scroll (2nd level)", "Potion of greater healing", "Bag of holding", "Driftglobe", "Potion of greater healing", "Potion of fire breath", "Potion of resistance", "+1 ammunition", "Potion of animal friendship", "Potion of hill giant strength", "Potion of growth", "Potion of water breathing", "Spell scroll (2nd level)", "Spell scroll (3rd level)", "Bag of holding", "Keoghtom's ointment", "Oil of slipperiness", "Dust of disappearance", "Dust of dryness", "Dust of sneezing and choking", "Elemental gem", "Philter of love", "Alchemy jug", "Cap of water breathing", "Cloak of the manta ray", "Driftglobe", "Goggles of night", "Helm of comprehending languages", "Immovable rod", "Lantern of revealing", "Mariner's armor", "Mithral armor", "Potion of poison", "Ring of swimming", "Robe of useful items", "Rope of climbing", "Saddle of the cavalier", "Wand of magic detection", "Wand of secrets", "Potion of superior healing", "Spell scroll (4th level)", "+2 ammunition", "Potion of clairvoyance", "Potion of diminution", "Potion of gaseous form", "Potion of frost giant strength", "Potion of stone giant strength", "Potion of heroism", "Potion of invulnerability", "Potion of mind reading", "Spell scroll (5th level)", "Elixir of health", "Oil of etherealness", "Potion of fire giant strength", "Quaal's feather token", "Scroll of protection", "Bag of beans", "Bead of force", "Chime of opening", "Decanter of endless water", "Eyes of minute seeing", "Folding boat", "Heward's handy haversack", "Horseshoes of speed", "Necklace of fireballs", "Periapt of health", "Sending stones"
]
  },
]

var lootTen = [
  {
    Platinum: [],
    Gold: [],
    Silver: [],
    Copper: [],
  },
  {
    Gemstones: [
      'Alexandrite (transparent dark green) 500gp',
      'Aquamarine (transparent pale blue-green) 500gp',
      'Black pearl (opaque pure black) 500gp',
      'Blue spinel (transparent deep blue) 500gp',
      'Peridot (transparent rich olive green) 500gp',
      'Topaz (transparent golden yellow) 500gp',
      'Diamond 300gp'
    ]
  },
  {
    ArtObjets: [
      	'Gold ring set with bloodstones 250gp',
        'Carved ivory statuette 250gp',
        'Large gold bracelet 250gp',
        'Silver necklace with a gemstone pendant 250gp',
        'Bronze crown 250gp',
        'Silk robe with gold embroidery 250gp',
        'Large well-made tapestry 250gp',
        'Brass mug with jade inlay 250gp',
        'Box of turquoise animal figurines 250gp',
        'Gold bird cage with electrum filigree 250gp',
        'An ornate tapestry depicting a high-ranking family of giants 250gp',
        'The expertly stuffed and mounted remains of a Large Monstrosity native to the area 250gp',
        'An abstract spiral sculpture carved from a fulgurite 250gp',
        'A rowboat displayed inside a giant-sized green crystal bottle 250gp',
        'An iridescent conch shell that echoes with the sounds of a maelstrom 250gp',
        'A hefty ceramic funerary urn, intricately painted with scenes from its inhabitant"s lifetime 250gp',
        'A 10-foot-tall mirror set in a gem-encrusted frame 250gp',
        'A complex bronze armillary sphere, its rings engraved with various Giant runes and prophecies 250gp',
    ]
  },
  {
    MinorMagicItem: [
      "Bag of Beans", "Bead of Force", "Chime of Opening", "Elixir of Health", "Folding Boat", "Heward's Handy Haversack", "Horseshoes of Speed", "Necklace of Fireballs", "Oil of Etherealness", "Portable Hole", "Potion of Clairvoyance", "Potion of Diminution", "Potion of Fire Giant Strength", "Potion of Frost Giant Strength", "Potion of Gaseous Form", "Potion of Heroism", "Potion of Invulnerability", "Potion of Mind Reading", "Potion of Stone Giant Strength", "Potion of Superior Healing", "Quaal's Feather Token, Anchor", "Quaal's Feather Token, Bird", "Quaal's Feather Token, Fan", "Quaal's Feather Token, Swan Boat", "Quaal's Feather Token, Tree", "Quaal's Feather Token, Whip", "Scroll of Protection from Aberrations", "Scroll of Protection from Beasts", "Scroll of Protection from Celestials", "Scroll of Protection from Elementals", "Scroll of Protection from Fey", "Scroll of Protection from Fiends", "Scroll of Protection from Plants", "Scroll of Protection from Undead", "Spell Scroll (4th Level)", "Spell Scroll (5th Level)", "+2 Ammunition"
    ]
  },
  {
    MajorMagicItem: [
      '+2 Rod of the Pact Keeper',
      '+2 Wand of the War Mage',
    	'Amulet of Health',
    	'Armor of Vulnerability (Bludgeoning)',
    	'Armor of Vulnerability (Piercing)',
    	'Armor of Vulnerability (Slashing)',
    	'Arrow-Catching Shield',
    	'Belt of Dwarvenkind',
    	'Belt of Hill Giant Strength',
      'Boots of Levitation',
    	'Boots of Speed',
      'Bowl of Commanding Water Elementals',
      'Bracers of Defense',
      'Brazier of Commanding Fire Elementals',
      'Cape of the Mountebank',
      'Censer of Controlling Air Elementals',
      'Cloak of Displacement',
      'Cloak of the Bat',
      'Cube of Force',
      'Daern"s Instant Fortress',
      'Dagger of Venom',
      'Dimensional Shackles',
      'Elven Chain',
      'Figurine of Wondrous Power, Bronze Griffon',
      'Figurine of Wondrous Power, Ebony Fly',
	    'Figurine of Wondrous Power, Golden Lions',
      'Figurine of Wondrous Power, Ivory Goats',
      'Figurine of Wondrous Power, Marble Elephant',
      'Figurine of Wondrous Power, Onyx Dog',
      'Figurine of Wondrous Power, Serpentine Owl',
      'Gem of Seeing',
      'Glamoured Studded Leather',
      'Helm of Teleportation',
      'Horn of Blasting',
      'Horn of Valhalla, Brass',
      'Horn of Valhalla, Silver',
      'Instrument of the Bards, Canaith Mandolin',
      'Instrument of the Bards, Cli Lyre',
      'Ioun Stone, Awareness',
      'Ioun Stone, Protection',
      'Ioun Stone, Reserve',
      'Ioun Stone, Sustenance',
      'Iron Bands of Bilarro',
      'Mace of Disruption',
      'Mace of Smiting',
      'Mace of Terror',
      'Mantle of Spell Resistance',
      'Necklace of Prayer Beads',
      'Order of the Silver Dragon +2 Shield',
      'Periapt of Proof against Poison',
      'Ring of Animal Influence',
      'Ring of Evasion',
      'Ring of Feather Falling',
      'Ring of Free Action',
      'Ring of Protection',
      'Ring of Spell Storing',
      'Ring of the Ram',
      'Ring of X-ray Vision',
      'Robe of Eyes',
      'Rod of Rulership',
      'Rope of Entanglement',
      'Shield of Missile Attraction',
      'Staff of Charming',
      'Staff of Healing',
      'Staff of Swarming Insects',
      'Staff of the Woodlands',
      'Staff of Withering',
      'Stone of Controlling Earth Elementals',
      'Sun Blade',
      'Tentacle Rod',
      'Wand of Binding',
      'Wand of Enemy Detection',
      'Wand of Fear',
      'Wand of Fireballs',
      'Wand of Lightning Bolts',
      'Wand of Paralysis',
      'Wand of Wonder',
      'Wings of Flying',
      '+1 Armor',
      '+2 Shield',
      '+2 Weapon',
      '+2 Weapon',
      'Berserker Axe',
      'Dragon Slayer',
      'Flame Tongue',
      'Giant Slayer',
      'Sword of Life Stealing',
      'Sword of Wounding',
      'Vicious Weapon',
      'Ring of Acid Resistance',
      'Ring of Cold Resistance',
      'Ring of Fire Resistance',
      'Ring of Force Resistance',
      'Ring of Lightning Resistance',
      'Ring of Necrotic Resistance',
      'Ring of Poison Resistance',
      'Ring of Psychic Resistance',
      'Ring of Radiant Resistance',
      'Ring of Thunder Resistance',
      'Armor of Acid Resistance',
      'Armor of Cold Resistance',
      'Armor of Fire Resistance',
      'Armor of Force Resistance',
      'Armor of Lightning Resistance',
      'Armor of Necrotic Resistance',
      'Armor of Poison Resistance',
      'Armor of Psychic Resistance',
      'Armor of Radiant Resistance',
      'Armor of Thunder Resistance',
    ]
  }
]

var lootFifteen = [
  {
    Platinum: [],
    Gold: [],
    Silver: [],
    Copper: [],
  },
  {
    Gemstones: [
      'Black opal (translucent dark green with black mottling and golden flecks) 1000gp',
      'Blue sapphire (transparent blue-white to medium blue) 1000gp',
      'Emerald (transparent deep bright green) 1000gp',
       'Fire opal (translucent fiery red) 1000gp',
      'Opal (translucent pale blue with green and golden mottling) 1000gp',
      'Star ruby (translucent ruby with white star-shaped center) 1000gp',
      'Star sapphire (translucent blue sapphire with white star-shaped center) 1000gp',
      'Yellow sapphire (transparent fiery yellow or yellow-green) 1000gp'
    ]
  },
  {
    ArtObjets: [
      'Silver chalice set with moonstones 750gp',
      'Silver-plated steel longsword with jet set in hilt 750gp',
      'Carved harp of exotic wood with ivory inlay and zircon gems 750gp',
      'Small gold idol 750gp',
      'Gold dragon comb set with red garnets as eyes 750gp',
      'Bottle stopper cork embossed with gold leaf and set with amethysts 750gp',
      'Ceremonial electrum dagger with a black pearl in the pommel 750gp',
      'Silver and gold brooch 750gp',
      'Obsidian statuette with gold fittings and inlay 750gp',
      'Painted gold war mask 750gp',
    ]
  },
  {
    MinorMagicItem: [
      "Bag of Devouring", "Horseshoes of a Zephyr", "Nolzur's Marvelous Pigments", "Oil of Sharpness", "Potion of Cloud Giant Strength", "Potion of Flying", "Potion of Invisibility", "Potion of Longevity", "Potion of Speed", "Potion of Supreme Healing", "Potion of Vitality", "Spell Scroll (6th Level)", "Spell Scroll (7th Level)", "Spell Scroll (8th Level)", "+3 Ammunition", "Arrow of Slaying (*)"
    ]
  },
  {
    MajorMagicItem: [
    "+3 Rod of the Pact Keeper", "+3 Wand of the War Mage", "Amulet of the Planes", "Animated Shield", "Belt of Fire Giant Strength", "Belt of Frost Giant Strength", "Belt of Stone Giant Strength", "Black Dragon Scale Mail", "Blue Dragon Scale Mail", "Brass Dragon Scale Mail", "Bronze Dragon Scale Mail", "Candle of Invocation", "Carpet of Flying, 6 ft. by 9 ft.", "Cloak of Arachnida", "Copper Dragon Scale Mail", "Crystal Ball", "Demon Armor", "Dwarven Plate", "Dwarven Thrower", "Efreeti Bottle", "Figurine of Wondrous Power, Obsidian Steed", "Gold Dragon Scale Mail", "Green Dragon Scale Mail", "Helm of Brilliance", "Horn of Valhalla, Bronze", "Instrument of the Bards, Anstruth Harp", "Ioun Stone, Absorption", "Ioun Stone, Agility", "Ioun Stone, Fortitude", "Ioun Stone, Insight", "Ioun Stone, Intellect", "Ioun Stone, Leadership", "Ioun Stone, Strength", "Manual of Bodily Health", "Manual of Clay Golems", "Manual of Flesh Golems", "Manual of Gainful Exercise", "Manual of Iron Golems", "Manual of Quickness of Action", "Manual of Stone Golems", "Mirror of Life Trapping", "Oathbow", "Red Dragon Scale Mail", "Ring of Regeneration", "Ring of Shooting Stars", "Ring of Telekinesis", "Robe of Scintillating Colors", "Robe of Stars", "Rod of Absorption", "Rod of Alertness", "Rod of Security", "Scimitar of Speed", "Silver Dragon Scale Mail", "Spellguard Shield", "Staff of Fire", "Staff of Frost", "Staff of Power", "Staff of Striking", "Staff of Thunder and Lightning", "Tome of Clear Thought", "Tome of Leadership and Influence", "Tome of Understanding", "Wand of Polymorph", "White Dragon Scale Mail", "+2 Armor", "+3 Shield (*)", "+3 Weapon", "+3 Weapon (no damage)", "Dancing Sword", "Frost Brand", "Nine Lives Stealer", "Sword of Sharpness",
    ]
  }
]

var lootTwenty = [
  {
    Platinum: [],
    Gold: [],
    Silver: [],
    Copper: [],
  },
  {
    Gemstones: [
      'Black sapphire (translucent lustrous black with glowing highlights) 5000gp',
      'Diamond (transparent blue-white, canary, pink, brown, or blue) 5000gp',
      'Jacinth (transparent fiery orange) 5000gp',
      'Ruby (transparent clear red to deep crimson) 5000gp'
    ]
  },
  {
    ArtObjets: [
      'Fine gold chain set with a fire opal 2500gp',
      'Old masterpiece painting 2500gp',
      'Embroidered silk and velvet mantle set with numerous moonstones 2500gp',
      'Platinum bracelet set with a sapphire 2500gp',
      'Embroidered glove set with jewel chips 2500gp',
      'Jeweled anklet 2500gp',
      'Gold music box 2500gp',
      'Gold circlet set with four aquamarines 2500gp',
      'Eye patch with a mock eye set in blue sapphire and moonstone 2500gp',
      'A necklace string of small pink pearls 2500gp'
    ]
  },
  {
    MinorMagicItem: [
      'Potion of Storm Giant Strength',
      'Sovereign Glue',
      'Spell Scroll (9th Level)',
      'Universal Solvent',
    ]
  },
  {
    MajorMagicItem: [
      "Apparatus of Kwalish", "Armor of Invulnerability", "Belt of Cloud Giant Strength", "Belt of Storm Giant Strength", "Cloak of Invisibility", "Crystal Ball of Mind Reading", "Crystal Ball of Telepathy", "Crystal Ball of True Seeing", "Cubic Gate", "Deck of Many Things", "Efreeti Chain", "Hammer of Thunderbolts", "Horn of Valhalla, Iron", "Instrument of the Bards, Ollamh Harp", "Ioun Stone, Greater Absorption", "Ioun Stone, Mastery", "Ioun Stone, Regeneration", "Iron Flask", "Plate Armor of Etherealness", "Ring of Air Elemental Command", "Ring of Djinni Summoning", "Ring of Earth Elemental Command", "Ring of Fire Elemental Command", "Ring of Invisibility", "Ring of Spell Turning", "Ring of Three Wishes", "Ring of Water Elemental Command", "Robe of the Archmagi", "Rod of Lordly Might", "Rod of Resurrection", "Scarab of Protection", "Sphere of Annihilation", "Staff of the Magi", "Sword of Answering (Answerer)", "Sword of Answering (Back Talker)", "Sword of Answering (Concluder)", "Sword of Answering (Last Quip)", "Sword of Answering (Rebutter)", "Sword of Answering (Replier)", "Sword of Answering (Retorter)", "Sword of Answering (Scather)", "Sword of Answering (Squelcher)", "Talisman of Pure Good", "Talisman of the Sphere", "Talisman of Ultimate Evil", "Tome of the Stilled Tongue", "Well of Many Worlds", "+3 Armor", "Defender", "Holy Avenger", "Luck Blade", "Vorpal Sword"
    ]
  }
]

//FUNCTIONS BELOW

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
  responseDiv.style.position = 'relative';
  responseDiv.innerHTML = '"' + randomName + '"' + "<br>" + 'A ' + randomPhysicalTraits+ ' ' + selectedRace.Race + '.' + "<br>" + randomObject + '.' + "<br>" + 'They look ' + randomMood + '.' + "<br>"

      // Create the copy button
      var copyButton = document.createElement('button');
      copyButton.className = 'fa fa-clipboard';
      copyButton.style.position = 'absolute';
      copyButton.style.top = '8.5px'; // Adjust top position as needed
      copyButton.style.right = '40px'; // Adjust right position as needed
      // Add functionality to copy text to clipboard on click
      copyButton.onclick = function() {
        var textToCopy = responseDiv.textContent;
        navigator.clipboard.writeText(textToCopy).then(function() {
          console.log('Text copied to clipboard!');
        }, function(err) {
          console.error('Failed to copy text:', err);
        });
      };
    // Append the copy button to the response container
      responseDiv.appendChild(copyButton);

  // Create the close button for the response
  var closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'btn-close';
  closeButton.setAttribute('aria-label', 'Close');
  closeButton.style.position = 'absolute';
  closeButton.style.top = '5px'; // Adjust top position as needed
  closeButton.style.right = '5px'; // Adjust right position as needed
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
    responseDiv.style.position = 'relative';
    // Construct the content of the response
    responseDiv.innerHTML = "<ul style='list-style: none;'>" +
      "<li>Town: " + randomTownName + "</li>" +
      "<li>Inn: " + randomInnName + "</li>" +
      "<li>General Store: " + randomGeneralStoreName + "</li>" +
      "<li>Unique Location: " + randomUniqueLocation + "</li>" +
      "</ul>";
  
      // Create the copy button
      var copyButton = document.createElement('button');
      copyButton.className = 'fa fa-clipboard';
      copyButton.style.position = 'absolute';
      copyButton.style.top = '8.5px'; // Adjust top position as needed
      copyButton.style.right = '40px'; // Adjust right position as needed
      // Add functionality to copy text to clipboard on click
      copyButton.onclick = function() {
        var textToCopy = responseDiv.textContent;
        navigator.clipboard.writeText(textToCopy).then(function() {
          console.log('Text copied to clipboard!');
        }, function(err) {
          console.error('Failed to copy text:', err);
        });
      };
    // Append the copy button to the response container
      responseDiv.appendChild(copyButton);

    // Create the close button for the response
    var closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px'; // Adjust top position as needed
    closeButton.style.right = '5px'; // Adjust right position as needed
    closeButton.onclick = function() {
      responseDiv.remove(); // Remove the specific response container when the close button is clicked
    };
  
    // Append the close button to the response container
    responseDiv.appendChild(closeButton);
  
    // Add the response to the document body
    var secondChild = document.body.childNodes[2];
    document.body.insertBefore(responseDiv, secondChild);
}

function medium2() {
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
  var responseDiv = document.createElement('div');
  responseDiv.className = 'alert';
  responseDiv.id = 'response';
  responseDiv.style.position = 'relative';
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
                         "</ul>";

      // Create the copy button
      var copyButton = document.createElement('button');
      copyButton.className = 'fa fa-clipboard';
      copyButton.style.position = 'absolute';
      copyButton.style.top = '8.5px'; // Adjust top position as needed
      copyButton.style.right = '40px'; // Adjust right position as needed
      // Add functionality to copy text to clipboard on click
      copyButton.onclick = function() {
        var textToCopy = responseDiv.textContent;
        navigator.clipboard.writeText(textToCopy).then(function() {
          console.log('Text copied to clipboard!');
        }, function(err) {
          console.error('Failed to copy text:', err);
        });
      };
    // Append the copy button to the response container
      responseDiv.appendChild(copyButton);

// Create the close button for the response
    var closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px'; // Adjust top position as needed
    closeButton.style.right = '5px'; // Adjust right position as needed
    closeButton.onclick = function() {
      responseDiv.remove(); // Remove the specific response container when the close button is clicked
    };
  
    // Append the close button to the response container
    responseDiv.appendChild(closeButton);
  
    // Add the response to the document body
    var secondChild = document.body.childNodes[2];
    document.body.insertBefore(responseDiv, secondChild);
}

function large2() {
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
  var responseDiv = document.createElement('div');
  responseDiv.className = 'alert';
  responseDiv.id = 'response';
  responseDiv.style.position = 'relative';
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
                         "</ul>";

      // Create the copy button
      var copyButton = document.createElement('button');
      copyButton.className = 'fa fa-clipboard';
      copyButton.style.position = 'absolute';
      copyButton.style.top = '8.5px'; // Adjust top position as needed
      copyButton.style.right = '40px'; // Adjust right position as needed
      // Add functionality to copy text to clipboard on click
      copyButton.onclick = function() {
        var textToCopy = responseDiv.textContent;
        navigator.clipboard.writeText(textToCopy).then(function() {
          console.log('Text copied to clipboard!');
        }, function(err) {
          console.error('Failed to copy text:', err);
        });
      };
    // Append the copy button to the response container
      responseDiv.appendChild(copyButton);

// Create the close button for the response
    var closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px'; // Adjust top position as needed
    closeButton.style.right = '5px'; // Adjust right position as needed
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
    responseDiv.style.position = 'relative';
    responseDiv.innerHTML = weatherConditions[randomIndex] + "<br>"

      // Create the copy button
  var copyButton = document.createElement('button');
  copyButton.className = 'fa fa-clipboard';
  copyButton.style.position = 'absolute';
  copyButton.style.top = '8.5px'; // Adjust top position as needed
  copyButton.style.right = '40px'; // Adjust right position as needed
  // Add functionality to copy text to clipboard on click
  copyButton.onclick = function() {
    var textToCopy = responseDiv.textContent;
    navigator.clipboard.writeText(textToCopy).then(function() {
      console.log('Text copied to clipboard!');
    }, function(err) {
      console.error('Failed to copy text:', err);
    });
  };
// Append the copy button to the response container
  responseDiv.appendChild(copyButton);

    // Create the close button for the response
    var closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px'; // Adjust top position as needed
    closeButton.style.right = '5px'; // Adjust right position as needed
    closeButton.onclick = function() {
      responseDiv.remove(); // Remove the specific response container when the close button is clicked
    };
    // Append the close button to the response container
    responseDiv.appendChild(closeButton);
    // Add the response to the document body
    var secondChild = document.body.childNodes[2];
    document.body.insertBefore(responseDiv, secondChild);
}

// Dice rolls
function diceFour() {
  const fourResult = Math.floor(Math.random() * 4) + 1;

  // Check if the toast container already exists
  var toastContainer = document.getElementById('toast-container');

  // If it doesn't exist, create a new one
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(toastContainer);
  }

  // Create a new toast
  var toastDiv = document.createElement('div');
  toastDiv.className = 'toast';
  toastDiv.setAttribute('role', 'alert');
  toastDiv.setAttribute('aria-live', 'assertive');
  toastDiv.setAttribute('aria-atomic', 'true');
  toastDiv.innerHTML = `<div class="toast-header">
    <strong class="me-auto">D4 Result</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    ${fourResult}
  </div>`;

  // Append the new toast to the existing container
  toastContainer.appendChild(toastDiv);

  // Create and show the toast
  var newToastEl = toastContainer.lastChild;
  var newToast = new bootstrap.Toast(newToastEl);
  newToast.show();
}

function diceSix() {
  const fourResult = Math.floor(Math.random() * 6) + 1;

  // Check if the toast container already exists
  var toastContainer = document.getElementById('toast-container');

  // If it doesn't exist, create a new one
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(toastContainer);
  }

  // Create a new toast
  var toastDiv = document.createElement('div');
  toastDiv.className = 'toast';
  toastDiv.setAttribute('role', 'alert');
  toastDiv.setAttribute('aria-live', 'assertive');
  toastDiv.setAttribute('aria-atomic', 'true');
  toastDiv.innerHTML = `<div class="toast-header">
    <strong class="me-auto">D6 Result</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    ${fourResult}
  </div>`;

  // Append the new toast to the existing container
  toastContainer.appendChild(toastDiv);

  // Create and show the toast
  var newToastEl = toastContainer.lastChild;
  var newToast = new bootstrap.Toast(newToastEl);
  newToast.show();
}

function diceTen() {
  const fourResult = Math.floor(Math.random() * 10) + 1;

  // Check if the toast container already exists
  var toastContainer = document.getElementById('toast-container');

  // If it doesn't exist, create a new one
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(toastContainer);
  }

  // Create a new toast
  var toastDiv = document.createElement('div');
  toastDiv.className = 'toast';
  toastDiv.setAttribute('role', 'alert');
  toastDiv.setAttribute('aria-live', 'assertive');
  toastDiv.setAttribute('aria-atomic', 'true');
  toastDiv.innerHTML = `<div class="toast-header">
    <strong class="me-auto">D10 Result</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    ${fourResult}
  </div>`;

  // Append the new toast to the existing container
  toastContainer.appendChild(toastDiv);

  // Create and show the toast
  var newToastEl = toastContainer.lastChild;
  var newToast = new bootstrap.Toast(newToastEl);
  newToast.show();
}

function diceEight() {
  const fourResult = Math.floor(Math.random() * 8) + 1;

  // Check if the toast container already exists
  var toastContainer = document.getElementById('toast-container');

  // If it doesn't exist, create a new one
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(toastContainer);
  }

  // Create a new toast
  var toastDiv = document.createElement('div');
  toastDiv.className = 'toast';
  toastDiv.setAttribute('role', 'alert');
  toastDiv.setAttribute('aria-live', 'assertive');
  toastDiv.setAttribute('aria-atomic', 'true');
  toastDiv.innerHTML = `<div class="toast-header">
    <strong class="me-auto">D8 Result</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    ${fourResult}
  </div>`;

  // Append the new toast to the existing container
  toastContainer.appendChild(toastDiv);

  // Create and show the toast
  var newToastEl = toastContainer.lastChild;
  var newToast = new bootstrap.Toast(newToastEl);
  newToast.show();
}

function diceTwelve() {
  const fourResult = Math.floor(Math.random() * 12) + 1;

  // Check if the toast container already exists
  var toastContainer = document.getElementById('toast-container');

  // If it doesn't exist, create a new one
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(toastContainer);
  }

  // Create a new toast
  var toastDiv = document.createElement('div');
  toastDiv.className = 'toast';
  toastDiv.setAttribute('role', 'alert');
  toastDiv.setAttribute('aria-live', 'assertive');
  toastDiv.setAttribute('aria-atomic', 'true');
  toastDiv.innerHTML = `<div class="toast-header">
    <strong class="me-auto">D12 Result</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    ${fourResult}
  </div>`;

  // Append the new toast to the existing container
  toastContainer.appendChild(toastDiv);

  // Create and show the toast
  var newToastEl = toastContainer.lastChild;
  var newToast = new bootstrap.Toast(newToastEl);
  newToast.show();
}

function diceTwenty() {
  const fourResult = Math.floor(Math.random() * 20) + 1;

  // Check if the toast container already exists
  var toastContainer = document.getElementById('toast-container');

  // If it doesn't exist, create a new one
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(toastContainer);
  }

  // Create a new toast
  var toastDiv = document.createElement('div');
  toastDiv.className = 'toast';
  toastDiv.setAttribute('role', 'alert');
  toastDiv.setAttribute('aria-live', 'assertive');
  toastDiv.setAttribute('aria-atomic', 'true');
  toastDiv.innerHTML = `<div class="toast-header">
    <strong class="me-auto">D20 Result</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    ${fourResult}
  </div>`;

  // Append the new toast to the existing container
  toastContainer.appendChild(toastDiv);

  // Create and show the toast
  var newToastEl = toastContainer.lastChild;
  var newToast = new bootstrap.Toast(newToastEl);
  newToast.show();
}

function diceHundred() {
  const fourResult = Math.floor(Math.random() * 100) + 1;

  // Check if the toast container already exists
  var toastContainer = document.getElementById('toast-container');

  // If it doesn't exist, create a new one
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(toastContainer);
  }

  // Create a new toast
  var toastDiv = document.createElement('div');
  toastDiv.className = 'toast';
  toastDiv.setAttribute('role', 'alert');
  toastDiv.setAttribute('aria-live', 'assertive');
  toastDiv.setAttribute('aria-atomic', 'true');
  toastDiv.innerHTML = `<div class="toast-header">
    <strong class="me-auto">D100 Result</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    ${fourResult}
  </div>`;

  // Append the new toast to the existing container
  toastContainer.appendChild(toastDiv);

  // Create and show the toast
  var newToastEl = toastContainer.lastChild;
  var newToast = new bootstrap.Toast(newToastEl);
  newToast.show();
}

// DC check results
function dcEasy() {
  const fourResult = Math.floor(Math.random() * (12 - 8 + 1)) + 8;

  // Check if the toast container already exists
  var toastContainer = document.getElementById('toast-container');

  // If it doesn't exist, create a new one
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(toastContainer);
  }

  // Create a new toast
  var toastDiv = document.createElement('div');
  toastDiv.className = 'toast';
  toastDiv.setAttribute('role', 'alert');
  toastDiv.setAttribute('aria-live', 'assertive');
  toastDiv.setAttribute('aria-atomic', 'true');
  toastDiv.innerHTML = `<div class="toast-header">
    <strong class="me-auto">DC Easy result</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    ${fourResult}
  </div>`;

  // Append the new toast to the existing container
  toastContainer.appendChild(toastDiv);

  // Create and show the toast
  var newToastEl = toastContainer.lastChild;
  var newToast = new bootstrap.Toast(newToastEl);
  newToast.show();
}

function dcMedium() {
  const fourResult = Math.floor(Math.random() * (17 - 13 + 1)) + 13;

  // Check if the toast container already exists
  var toastContainer = document.getElementById('toast-container');

  // If it doesn't exist, create a new one
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(toastContainer);
  }

  // Create a new toast
  var toastDiv = document.createElement('div');
  toastDiv.className = 'toast';
  toastDiv.setAttribute('role', 'alert');
  toastDiv.setAttribute('aria-live', 'assertive');
  toastDiv.setAttribute('aria-atomic', 'true');
  toastDiv.innerHTML = `<div class="toast-header">
    <strong class="me-auto">DC Medium result</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    ${fourResult}
  </div>`;

  // Append the new toast to the existing container
  toastContainer.appendChild(toastDiv);

  // Create and show the toast
  var newToastEl = toastContainer.lastChild;
  var newToast = new bootstrap.Toast(newToastEl);
  newToast.show();
}

function dcHard() {
  const fourResult = Math.floor(Math.random() * (22 - 18 + 1)) + 18;

  // Check if the toast container already exists
  var toastContainer = document.getElementById('toast-container');

  // If it doesn't exist, create a new one
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(toastContainer);
  }

  // Create a new toast
  var toastDiv = document.createElement('div');
  toastDiv.className = 'toast';
  toastDiv.setAttribute('role', 'alert');
  toastDiv.setAttribute('aria-live', 'assertive');
  toastDiv.setAttribute('aria-atomic', 'true');
  toastDiv.innerHTML = `<div class="toast-header">
    <strong class="me-auto">DC Hard result</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    ${fourResult}
  </div>`;

  // Append the new toast to the existing container
  toastContainer.appendChild(toastDiv);

  // Create and show the toast
  var newToastEl = toastContainer.lastChild;
  var newToast = new bootstrap.Toast(newToastEl);
  newToast.show();
}

function dcVeryHard() {
  const fourResult = Math.floor(Math.random() * (27 - 23 + 1)) + 23;

  // Check if the toast container already exists
  var toastContainer = document.getElementById('toast-container');

  // If it doesn't exist, create a new one
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(toastContainer);
  }

  // Create a new toast
  var toastDiv = document.createElement('div');
  toastDiv.className = 'toast';
  toastDiv.setAttribute('role', 'alert');
  toastDiv.setAttribute('aria-live', 'assertive');
  toastDiv.setAttribute('aria-atomic', 'true');
  toastDiv.innerHTML = `<div class="toast-header">
    <strong class="me-auto">DC Very Hard result</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    ${fourResult}
  </div>`;

  // Append the new toast to the existing container
  toastContainer.appendChild(toastDiv);

  // Create and show the toast
  var newToastEl = toastContainer.lastChild;
  var newToast = new bootstrap.Toast(newToastEl);
  newToast.show();
}

// Loot array based on levels 1-5
function loot5() {
  const randomIndex = Math.floor(Math.random() * lootFive.length);
  const selectedLoot = lootFive[randomIndex];

  if (randomIndex === 0) {
    const platinumAnswer = selectedLoot.Platinum[Math.floor(Math.random() * selectedLoot.Platinum.length)];
    const goldAnswer = Math.floor(Math.random() * 100) + 1;
    const silverAnswer = Math.floor(Math.random() * 100) + 1;
    const copperAnswer = Math.floor(Math.random() * 100) + 1;


  var responseDiv = document.createElement('div');
  responseDiv.id = 'response';
  responseDiv.className = 'alert';
  responseDiv.style.position = 'relative';
  responseDiv.innerHTML = "Platinum: " + platinumAnswer + "<br>" + "Gold: " + goldAnswer + "<br>" + "Silver: " + silverAnswer + "<br>" + "Copper: " + copperAnswer + "<br>"

  // Create the copy button for the response
  var copyButton = document.createElement('button');
  copyButton.className = 'fa fa-clipboard';
  copyButton.style.position = 'absolute';
  copyButton.style.top = '8.5px'; // Adjust top position as needed
  copyButton.style.right = '40px'; // Adjust right position as needed
  // Add functionality to copy text to clipboard on click
  copyButton.onclick = function() {
    var textToCopy = responseDiv.textContent;
    navigator.clipboard.writeText(textToCopy).then(function() {
      console.log('Text copied to clipboard!');
    }, function(err) {
      console.error('Failed to copy text:', err);
    });
  };
// Append the copy button to the response container
  responseDiv.appendChild(copyButton);

  // Create the close button for the response
  var closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'btn-close';
  closeButton.setAttribute('aria-label', 'Close');
  closeButton.style.position = 'absolute';
  closeButton.style.top = '5px'; // Adjust top position as needed
  closeButton.style.right = '5px'; // Adjust right position as needed
  closeButton.onclick = function() {
    responseDiv.remove(); // Remove the specific response container when the close button is clicked
  };
  // Append the close button to the response container
  responseDiv.appendChild(closeButton);
  // Add the response to the document body
  var secondChild = document.body.childNodes[2];
  document.body.insertBefore(responseDiv, secondChild); } else {
    for (const key in selectedLoot) {
      if (Array.isArray(selectedLoot[key])) {
        const randomItem = selectedLoot[key][Math.floor(Math.random() * selectedLoot[key].length)]; 
    var responseDiv = document.createElement('div');
    responseDiv.id = 'response';
    responseDiv.className = 'alert';
    responseDiv.style.position = 'relative';
    responseDiv.innerHTML = randomItem + "<br>"
  
    // Create the copy button for the response
    var copyButton = document.createElement('button');
    copyButton.className = 'fa fa-clipboard';
    copyButton.style.position = 'absolute';
    copyButton.style.top = '8.5px'; // Adjust top position as needed
    copyButton.style.right = '40px'; // Adjust right position as needed
    // Add functionality to copy text to clipboard on click
    copyButton.onclick = function() {
      var textToCopy = responseDiv.textContent;
      navigator.clipboard.writeText(textToCopy).then(function() {
        console.log('Text copied to clipboard!');
      }, function(err) {
        console.error('Failed to copy text:', err);
      });
    };
  // Append the copy button to the response container
    responseDiv.appendChild(copyButton);

    // Create the close button for the response
    var closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px'; // Adjust top position as needed
    closeButton.style.right = '5px'; // Adjust right position as needed
    closeButton.onclick = function() {
      responseDiv.remove(); // Remove the specific response container when the close button is clicked
    };
    // Append the close button to the response container
    responseDiv.appendChild(closeButton);
    // Add the response to the document body
    var secondChild = document.body.childNodes[2];
    document.body.insertBefore(responseDiv, secondChild);
  }
  }
}}

function loot10() {
  const randomIndex = Math.floor(Math.random() * lootTen.length);
  const selectedLoot = lootTen[randomIndex];

  if (randomIndex === 0) {
    const platinumAnswer = Math.floor(Math.random() * 20) + 1;
    const goldAnswer = Math.floor(Math.random() * 100) + 1;
    const silverAnswer = Math.floor(Math.random() * 10) + 1;
    const copperAnswer = Math.floor(Math.random() * 10) + 1;


  var responseDiv = document.createElement('div');
  responseDiv.id = 'response';
  responseDiv.className = 'alert';
  responseDiv.style.position = 'relative';
  responseDiv.innerHTML = "Platinum: " + platinumAnswer + "<br>" + "Gold: " + goldAnswer + "<br>" + "Silver: " + silverAnswer + "<br>" + "Copper: " + copperAnswer + "<br>"

  // Create the copy button for the response
  var copyButton = document.createElement('button');
  copyButton.className = 'fa fa-clipboard';
  copyButton.style.position = 'absolute';
  copyButton.style.top = '8.5px'; // Adjust top position as needed
  copyButton.style.right = '40px'; // Adjust right position as needed
  // Add functionality to copy text to clipboard on click
  copyButton.onclick = function() {
    var textToCopy = responseDiv.textContent;
    navigator.clipboard.writeText(textToCopy).then(function() {
      console.log('Text copied to clipboard!');
    }, function(err) {
      console.error('Failed to copy text:', err);
    });
  };
// Append the copy button to the response container
  responseDiv.appendChild(copyButton);

  // Create the close button for the response
  var closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'btn-close';
  closeButton.setAttribute('aria-label', 'Close');
  closeButton.style.position = 'absolute';
  closeButton.style.top = '5px'; // Adjust top position as needed
  closeButton.style.right = '5px'; // Adjust right position as needed
  closeButton.onclick = function() {
    responseDiv.remove(); // Remove the specific response container when the close button is clicked
  };
  // Append the close button to the response container
  responseDiv.appendChild(closeButton);
  // Add the response to the document body
  var secondChild = document.body.childNodes[2];
  document.body.insertBefore(responseDiv, secondChild); } else {
    for (const key in selectedLoot) {
      if (Array.isArray(selectedLoot[key])) {
        const randomItem = selectedLoot[key][Math.floor(Math.random() * selectedLoot[key].length)]; 
    var responseDiv = document.createElement('div');
    responseDiv.id = 'response';
    responseDiv.className = 'alert';
    responseDiv.style.position = 'relative';
    responseDiv.innerHTML = randomItem + "<br>"
  
    // Create the copy button for the response
    var copyButton = document.createElement('button');
    copyButton.className = 'fa fa-clipboard';
    copyButton.style.position = 'absolute';
    copyButton.style.top = '8.5px'; // Adjust top position as needed
    copyButton.style.right = '40px'; // Adjust right position as needed
    // Add functionality to copy text to clipboard on click
    copyButton.onclick = function() {
      var textToCopy = responseDiv.textContent;
      navigator.clipboard.writeText(textToCopy).then(function() {
        console.log('Text copied to clipboard!');
      }, function(err) {
        console.error('Failed to copy text:', err);
      });
    };
  // Append the copy button to the response container
    responseDiv.appendChild(copyButton);

    // Create the close button for the response
    var closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px'; // Adjust top position as needed
    closeButton.style.right = '5px'; // Adjust right position as needed
    closeButton.onclick = function() {
      responseDiv.remove(); // Remove the specific response container when the close button is clicked
    };
    // Append the close button to the response container
    responseDiv.appendChild(closeButton);
    // Add the response to the document body
    var secondChild = document.body.childNodes[2];
    document.body.insertBefore(responseDiv, secondChild);
  }
  }
}}

function loot15() {
  const randomIndex = Math.floor(Math.random() * lootFifteen.length);
  const selectedLoot = lootFifteen[randomIndex];

  if (randomIndex === 0) {
    const platinumAnswer = Math.floor(Math.random() * 50) + 1;
    const goldAnswer = Math.floor(Math.random() * 1000) + 1;
    const silverAnswer = Math.floor(Math.random() * 10) + 1;
    const copperAnswer = Math.floor(Math.random() * 10) + 1;


  var responseDiv = document.createElement('div');
  responseDiv.id = 'response';
  responseDiv.className = 'alert';
  responseDiv.style.position = 'relative';
  responseDiv.innerHTML = "Platinum: " + platinumAnswer + "<br>" + "Gold: " + goldAnswer + "<br>" + "Silver: " + silverAnswer + "<br>" + "Copper: " + copperAnswer + "<br>"

  // Create the copy button for the response
  var copyButton = document.createElement('button');
  copyButton.className = 'fa fa-clipboard';
  copyButton.style.position = 'absolute';
  copyButton.style.top = '8.5px'; // Adjust top position as needed
  copyButton.style.right = '40px'; // Adjust right position as needed
  // Add functionality to copy text to clipboard on click
  copyButton.onclick = function() {
    var textToCopy = responseDiv.textContent;
    navigator.clipboard.writeText(textToCopy).then(function() {
      console.log('Text copied to clipboard!');
    }, function(err) {
      console.error('Failed to copy text:', err);
    });
  };
// Append the copy button to the response container
  responseDiv.appendChild(copyButton);

  // Create the close button for the response
  var closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'btn-close';
  closeButton.setAttribute('aria-label', 'Close');
  closeButton.style.position = 'absolute';
  closeButton.style.top = '5px'; // Adjust top position as needed
  closeButton.style.right = '5px'; // Adjust right position as needed
  closeButton.onclick = function() {
    responseDiv.remove(); // Remove the specific response container when the close button is clicked
  };
  // Append the close button to the response container
  responseDiv.appendChild(closeButton);
  // Add the response to the document body
  var secondChild = document.body.childNodes[2];
  document.body.insertBefore(responseDiv, secondChild); } else {
    for (const key in selectedLoot) {
      if (Array.isArray(selectedLoot[key])) {
        const randomItem = selectedLoot[key][Math.floor(Math.random() * selectedLoot[key].length)]; 
    var responseDiv = document.createElement('div');
    responseDiv.id = 'response';
    responseDiv.className = 'alert';
    responseDiv.style.position = 'relative';
    responseDiv.innerHTML = randomItem + "<br>"
  
    // Create the copy button for the response
    var copyButton = document.createElement('button');
    copyButton.className = 'fa fa-clipboard';
    copyButton.style.position = 'absolute';
    copyButton.style.top = '8.5px'; // Adjust top position as needed
    copyButton.style.right = '40px'; // Adjust right position as needed
    // Add functionality to copy text to clipboard on click
    copyButton.onclick = function() {
      var textToCopy = responseDiv.textContent;
      navigator.clipboard.writeText(textToCopy).then(function() {
        console.log('Text copied to clipboard!');
      }, function(err) {
        console.error('Failed to copy text:', err);
      });
    };
  // Append the copy button to the response container
    responseDiv.appendChild(copyButton);

    // Create the close button for the response
    var closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px'; // Adjust top position as needed
    closeButton.style.right = '5px'; // Adjust right position as needed
    closeButton.onclick = function() {
      responseDiv.remove(); // Remove the specific response container when the close button is clicked
    };
    // Append the close button to the response container
    responseDiv.appendChild(closeButton);
    // Add the response to the document body
    var secondChild = document.body.childNodes[2];
    document.body.insertBefore(responseDiv, secondChild);
  }
  }
}}

function loot20() {
  const randomIndex = Math.floor(Math.random() * lootTwenty.length);
  const selectedLoot = lootTwenty[randomIndex];

  if (randomIndex === 0) {
    const platinumAnswer = Math.floor(Math.random() * 200) + 1;
    const goldAnswer = Math.floor(Math.random() * 5000) + 1;
    const silverAnswer = Math.floor(Math.random() * 10) + 1;
    const copperAnswer = Math.floor(Math.random() * 10) + 1;


  var responseDiv = document.createElement('div');
  responseDiv.id = 'response';
  responseDiv.className = 'alert';
  responseDiv.style.position = 'relative';
  responseDiv.innerHTML = "Platinum: " + platinumAnswer + "<br>" + "Gold: " + goldAnswer + "<br>" + "Silver: " + silverAnswer + "<br>" + "Copper: " + copperAnswer + "<br>"

  // Create the copy button for the response
  var copyButton = document.createElement('button');
  copyButton.className = 'fa fa-clipboard';
  copyButton.style.position = 'absolute';
  copyButton.style.top = '8.5px'; // Adjust top position as needed
  copyButton.style.right = '40px'; // Adjust right position as needed
  // Add functionality to copy text to clipboard on click
  copyButton.onclick = function() {
    var textToCopy = responseDiv.textContent;
    navigator.clipboard.writeText(textToCopy).then(function() {
      console.log('Text copied to clipboard!');
    }, function(err) {
      console.error('Failed to copy text:', err);
    });
  };
// Append the copy button to the response container
  responseDiv.appendChild(copyButton);

  // Create the close button for the response
  var closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'btn-close';
  closeButton.setAttribute('aria-label', 'Close');
  closeButton.style.position = 'absolute';
  closeButton.style.top = '5px'; // Adjust top position as needed
  closeButton.style.right = '5px'; // Adjust right position as needed
  closeButton.onclick = function() {
    responseDiv.remove(); // Remove the specific response container when the close button is clicked
  };
  // Append the close button to the response container
  responseDiv.appendChild(closeButton);
  // Add the response to the document body
  var secondChild = document.body.childNodes[2];
  document.body.insertBefore(responseDiv, secondChild); } else {
    for (const key in selectedLoot) {
      if (Array.isArray(selectedLoot[key])) {
        const randomItem = selectedLoot[key][Math.floor(Math.random() * selectedLoot[key].length)]; 
    var responseDiv = document.createElement('div');
    responseDiv.id = 'response';
    responseDiv.className = 'alert';
    responseDiv.style.position = 'relative';
    responseDiv.innerHTML = randomItem + "<br>"

    // Create the copy button for the response
    var copyButton = document.createElement('button');
    copyButton.className = 'fa fa-clipboard';
    copyButton.style.position = 'absolute';
    copyButton.style.top = '8.5px'; // Adjust top position as needed
    copyButton.style.right = '40px'; // Adjust right position as needed
    // Add functionality to copy text to clipboard on click
    copyButton.onclick = function() {
      var textToCopy = responseDiv.textContent;
      navigator.clipboard.writeText(textToCopy).then(function() {
        console.log('Text copied to clipboard!');
      }, function(err) {
        console.error('Failed to copy text:', err);
      });
    };
  // Append the copy button to the response container
    responseDiv.appendChild(copyButton);
  
    // Create the close button for the response
    var closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px'; // Adjust top position as needed
    closeButton.style.right = '5px'; // Adjust right position as needed
    closeButton.onclick = function() {
      responseDiv.remove(); // Remove the specific response container when the close button is clicked
    };
    // Append the close button to the response container
    responseDiv.appendChild(closeButton);
    // Add the response to the document body
    var secondChild = document.body.childNodes[2];
    document.body.insertBefore(responseDiv, secondChild);
  }
  }
}}




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