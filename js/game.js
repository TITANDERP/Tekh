var Data = {

    //// Miscellaneous icons referred to by the game directly.

    icons : { // You can change these, but don't get rid of any of them.
        "party" : "party.png",
        "ship" : "ship.png",
        "gold" : "gold.png",
        "death" : "skull.png",
        "animation" : "animThrowingBone.png", // This is just for testing, it isn't really used anywhere.
        "banner" : "banner.png",
        "bannerLeft" : "bannerLeft.png",
        "bannerRight" : "bannerRight.png",
        "noWeapon" : "noWeapon.png",
        "noShield" : "noShield.png",
        "noHat" : "noHat.png",
        "noArmor" : "noArmor.png",
        "noBoots" : "noBoots.png",
        "noAmulet" : "noAmulet.png",
        "treasure" : "chest.png",
        "blank" : "blank.png",
        "combat" : "longSword.png",
        "selectActive" : {"center" : "selectActive.png", "left" : "selectActiveLeft.png", "top" : "selectActiveTop.png", "right" : "selectActiveRight.png", "bottom" : "selectActiveBottom.png"},
        "selectTarget" : {"center" : "selectTarget.png", "left" : "selectTargetLeft.png", "top" : "selectTargetTop.png", "right" : "selectTargetRight.png", "bottom" : "selectTargetBottom.png"},
        "selectView" : {"center" : "selectView.png", "left" : "selectViewLeft.png", "top" : "selectViewTop.png", "right" : "selectViewRight.png", "bottom" : "selectViewBottom.png"},
        "animHit" : "animHit.png",
        "animPoison" : "animPoison.png",
        "animHitSpell" : "animHitSpell.png",
        "animMiss" : "animMiss.png",
        "animHeal" : "animSmoke.png",
        "animSpellCast" : "animSpellCast.png",
        "animResist" : "animResist.png",
        "spell" : "wand.png"
    },

    //// Experience Levels, the amount of experience required to be at a certain level.

    levels : [
        0,      // 1
        60,     // 2
        200,    // 3
        500,    // 4
        1000,    // 5
        2000,    // 6
        3600,   // 7
        6000,   // 8
        10000,   // 9
        20000,  // 10
        100000000// END
    ],

    splashMusic : "gurkdemo7", // Music played during splash screen and character creation
    combatMusic : "gurkdemo8", // Music played when in combat
    boatMusic : "gurkdemo7", // Music played while on a ship

    //// Level transformations, each row adds to 10,000, maps level -> level for encounters, treasure, etc.

    levelTransformations : [
        [9300, 500, 199, 1, 0, 0, 0, 0, 0, 0, 0, 0],           // 1
        [4650, 4650, 500, 199, 1, 0, 0, 0, 0, 0, 0, 0],        // 2
        [3100, 3100, 3100, 500, 199, 1, 0, 0, 0, 0, 0, 0],     // 3
        [600, 2900, 2900, 2900, 500, 199, 1, 0, 0, 0, 0, 0],   // 4 (For example, this means that if the map is level 4, then there is a 1 in 10k chance that a level 7 creature will appear!)
        [100, 600, 2850, 2850, 2900, 500, 199, 1, 0, 0, 0, 0], // 5 (But the good news is, if you kill a creature that is level 5, there is a 1 in 10k chance that a level 8 item will appear as treasure!)
        [20, 80, 600, 2850, 2850, 2900, 500, 199, 1, 0, 0, 0], // 6
        [0, 20, 80, 600, 2850, 2850, 2900, 500, 199, 1, 0, 0], // 7
        [0, 0, 20, 80, 600, 2850, 2850, 2900, 500, 199, 1, 0], // 8
        [0, 0, 0, 20, 81, 600, 2850, 2850, 2900, 499, 199, 1], // 9
        [0, 0, 0, 0, 20, 82, 600, 2850, 2850, 2900, 499, 199], // 10
        [0, 0, 0, 0, 0, 40, 162, 699, 2850, 2850, 2900, 499],  // 11
        [0, 0, 0, 0, 0, 0, 80, 364, 956, 2850, 2850, 2900]     // 12
    ],

    //// Chance out of 1000 of a creature having treasure, by level. Anything over level 10 is the same as level 10.

    treasureChance : [
        150,
        160,
        180,
        210,
        250,
        300,
        350,
        400,
        450,
        500
    ],

    //// Descriptions of afflictions/enhancements

    effects : {
        "Berserk" : "While berserk, combatant will get an extra attack (or spell cast) each turn.",
        "Blessed" : "A blessed combatant suffers less damage from physical and magical attacks.",
        "Blinded" : "When blinded, combatant's chance to hit when attack will be reduced considerably.",
        "Eagle-eyed" : "An eagle-eyed combatant is more likely to hit with physical attacks.",
        "Paralyzed" : "When paralyzed, a combatant cannot do anything and its turn is skipped.",
        "Poisoned" : "A poisoned combatant suffers poison damage each turn, although it will not die from it.",
        "Protected" : "A protected combatant is harder to hit with physical attacks.",
        "Quick" : "A quick combatant can take additional steps when moving each turn.",
        "Resistant" : "A resistant combatant is less affected by magical attacks.",
        "Rooted" : "A rooted combatant cannot move, although it may still attack and cast spells.",
        "Sluggish" : "A sluggish combatant is easier to hit with phsyical attacks.",
        "Strong" : "A strong combatant inflicts more damage with physical attacks.",
        "Weakened" : "A weakened combatant inflicts less damage with physical attacks."
    },

    //// Character Classes

    characters : [
        {
            "name" : "Sir Rugnar",
            "job" : "Knight",
            "type" : "warrior",
            "icon" : "knight.png",
            "bestAttribute" : "strength",
            "description" : "Strong, proud and resolute, Sir Rugnar will always faithfully defend his companions valiantly.",
            "strength" : 3,
            "hitPoints" : 4
        },
        {
            "name" : "Lady Alwyn",
            "job" : "Amazon",
            "type" : "warrior",
            "icon" : "girlKnight.png",
            "bestAttribute" : "strength",
            "description" : "Lady Alwyn was trained in an elite and secretive female fighting force called the 'Amazons'.",
            "strength" : 3,
            "accuracy" : 5,
            "awareness" : -5,
            "hitPoints" : 4
        },
        {
            "name" : "Oloman",
            "after" : "won", // Only appears after the game is won
            "job" : "Mercenary",
            "type" : "warrior",
            "icon" : "mercenary.png",
            "bestAttribute" : "strength",
            "description" : "Oloman is an unscrupulous warrior-for-hire. His only two motivations are self-preservation and profit.",
            "strength" : 3,
            "awareness" : 5,
            "constitution" : -5,
            "hitPoints" : 4
        },
        {
            "name" : "Feraldan",
            "job" : "Marksman",
            "type" : "archer",
            "icon" : "ranger.png",
            "bestAttribute" : "accuracy",
            "description" : "Incredibly dedicated, Feraldan began learning the skill of archery as soon as he was old enough to hold a bow.",
            "accuracy" : 3,
            "hitPoints" : 2
        },
        {
            "name" : "Silvana",
            "job" : "Ranger",
            "type" : "archer",
            "icon" : "girlArcher.png",
            "bestAttribute" : "accuracy",
            "description" : "Raised in the deep Shavanoth forest, Silvana is extraordinarily tough while also very talented with a bow.",
            "accuracy" : 3,
            "constitution" : 5,
            "awareness" : -5,
            "hitPoints" : 2
        },
        {
            "name" : "Grath",
            "after" : "won",
            "job" : "Assassin",
            "type" : "archer",
            "icon" : "assassin.png",
            "bestAttribute" : "accuracy",
            "description" : "Grath belongs to the shadowy League of Assassins. He is deadly in combat, but where his loyalties lie are uncertain.",
            "accuracy" : 3,
            "strength" : 5,
            "constitution" : -5,
            "hitPoints" : 2
        },
        {
            "name" : "Gorlok",
            "job" : "Wizard",
            "type" : "mage",
            "icon" : "wizard.png",
            "bestAttribute" : "awareness",
            "description" : "Gorlok's diverse magical abilities are the result of a keen mind and assiduous studies.",
            "awareness" : 3,
            "hitPoints" : 1
        },
        {
            "name" : "Gaelabeth",
            "job" : "Druid",
            "type" : "mage",
            "icon" : "girlWizard.png",
            "bestAttribute" : "awareness",
            "description" : "Gaelabeth was trained in the non-violent Druidic arts, but left the Order to pursue a wider study of the occult.",
            "awareness" : 3,
            "constitution" : 5,
            "strength" : -5,
            "hitPoints" : 1
        },
        {
            "name" : "B'Az Aptar",
            "after" : "won",
            "job" : "Necromancer",
            "type" : "mage",
            "icon" : "necromancer.png",
            "bestAttribute" : "awareness",
            "description" : "B'Az Aptar has broken the Oath of the Benevolent Magi and begun tinkering with the Dark Arts. But does he control the powerful undead forces, or do they control him?",
            "awareness" : 3,
            "accuracy" : 5,
            "constitution" : -5,
            "hitPoints" : 1
        },
        {
            "name" : "Bag of Holding", // A 'hack' placeholder party member that just holds items.
            "job" : "Bag",
            "type" : "bag",
            "icon" : "bag.png",
            "bestAttribute" : "awareness",
            "description" : "The Bag of Holding can hold as much weight as a large person can carry, yet always remains as light to carry as it is when empty.",
            "awareness" : 1,
            "strength" : 1,
            "accuracy" : -1,
            "hitPoints" : 1
        }

    ],

    spells : [

    ],

    items : [

    ],

    creatures : [

    ],

    //// Map tile definitions
    // Color is what shows up on the map overlay when the user presses 'MAP'
    tiles : {
        "X" : {icon : "wall.png", passable : false, shipPassable : false, opaque : true, color : "#585858"}, 
        "." : {icon : "floor.png", passable : true, shipPassable : false, opaque : false, color : "#8e8e8e"},
        "*" : {icon : "lava.png", passable : false, shipPassable : false, opaque : false, color : "#c62700"},
        "&" : {icon : "volcano.png", passable : false, shipPassable : false, opaque : true, color : "#500000"},
        "=" : {icon : "grass.png", passable : true, shipPassable : false, opaque : false, color : "#28f028"},
        "P" : {icon : "rubble.png", passable : true, shipPassable : false, opaque : false, color : "#282828"},
        "!" : {icon : "treeAlt.png", passable : true, shipPassable : false, opaque : true, color : "#008c00"},
        "F" : {icon : "treeAlt.png", passable : false, shipPassable : false, opaque : true, color : "#008c00"},
        "(" : {icon : "deadTree.png", passable : true, shipPassable : false, opaque : true, color : "#544d19"},
        ")" : {icon : "stump.png", passable : true, shipPassable : false, opaque : false, color : "#544d19"},
        "M" : {icon : "mountain.png", passable : false, shipPassable : false, opaque : true, color : "#a01414"},
        "'" : {icon : "caveFloor.png", passable : true, shipPassable : false, opaque : false, color : "#925e1a"},
        "C" : {icon : "caveWall.png", passable : false, shipPassable : false, opaque : true, color : "#5c3708"},
        "d" : {icon : "deck.png", passable : true, shipPassable : false, opaque : false, color : "#925e1a"},
        ":" : {icon : "desert.png", passable : true, shipPassable : false, opaque : false, color : "#cd964e"},
        "-" : {icon : "bridgeHorizontal.png", passable : true, shipPassable : false, opaque : false, color : "#63390e"},
        "|" : {icon : "bridgeVertical.png", passable : true, shipPassable : false, opaque : false, color : "#63390e"},
        "D" : {icon : "doorInWall.png", passable : true, shipPassable : false, opaque : true, color : "#631c0e"},
        "G" : {icon : "dungeonGate.png", passable : true, shipPassable : false, opaque : true, color : "#202020"},
        "K" : {icon : "lockedDoor.png", passable : true, shipPassable : false, opaque : true, color : "#631c0e"},
        "T" : {icon : "palmTree.png", passable : true, shipPassable : false, opaque : false, color : "#a0ab40"},
        "/" : {icon : "waterMountain.png", passable : false, shipPassable : false, opaque : true, color : "#a01414"},
        "A" : {icon : "desertMountain.png", passable : false, shipPassable : false, opaque : true, color : "#a01414"},
        "?" : {icon : "darkWall.png", passable : false, shipPassable : false, opaque : true, color : "#585858"},
        "`" : {icon : "darkFloor.png", passable : true, shipPassable : false, opaque : false, color : "#8e8e8e"},
        "@" : {icon : "lava.png", passable : false, shipPassable : false, opaque : false, color : "#e13e29"},
        "[" : {icon : "darkDoor.png", passable : true, shipPassable : false, opaque : true, color : "#000000"},
        "_" : {icon : "darkBridgeHorizontal.png", passable : true, shipPassable : false, opaque : false, color : "#8e6464"},
        "]" : {icon : "darkBridgeVertical.png", passable : true, shipPassable : false, opaque : false, color : "#8e6464"},
        "R" : {icon : "river.png", passable : false, shipPassable : true, opaque : false, color : "#06796d"},
        "p" : {icon : "pool.png", passable : false, shipPassable : false, opaque : false, color : "#0808D0"},
        "L" : {icon : "columnTile.png", passable : false, shipPassable : false, opaque : true, color : "#222222"}
    },

    //// Quests

    quests : { // This populates the QUESTS view. Quests are triggered by variables been set based on the map features below
        
    },

    //// Keys

    keys : { // Keys appear on the right side of the PARTY view, are also based on variables being set in the map features.
        
    },

    //// Maps

    maps : {
        "wilderness" : {
            name: "The Wildernesse",
			map : "\
............\
............\
............\
............\
............\
............\
............\
............\
............\
............\
............\
............\
",
			width : 12,
			height : 12,
            dark: false,
            level: 1, // This level is a guide as to what levels of creatures should be randomly encountered.
            encounterChance : 25, // Chance of a random encounter each step the party takes
            combatMap: "outdoorCombat", // The map used for combat
            groups: ["outdoor", "default"], // The groups for creatures and items (see the creature and item 'groups' attributes)
            terrain : { // The following overrides the above map-wide defaults for specific terrain
                
            },
            features : [

            ]
        },
        "town" : {
            name : "Bryerlake",
			map : "\
===========================\
===========!=!=============\
===========================\
==========!!=!!============\
===XXXXXXXXXDXXXXXXXXXX====\
===X=!=!===X.X===!!!!!!====\
===X=====!=...=====!!!!====\
===X=!=!====.=======!!=====\
===X=======...===!==!!=====\
===X===.....p.....===!=====\
===X=======...===!=========\
===X=!=!======!!===========\
===X=====!==!!!!!==========\
===X=!=!===!!==!====!!=====\
===X=====!==!=======!======\
===X=======================\
===X!==!======!=!!=========\
===X==============!========\
===========================\
===========================\
===========================\
===========================\
",
			width : 27,
			height : 22,
            dark : true,
            level : 1,
            groups : ["default"],
            encounterChance: 0,
            combatMap: "outdoorCombat",
            features : [
            ]
        },

        "outdoorCombat" : { // These are the combat maps. Note that map data can be specified inline instead of referring to a file.
            name: "Outdoor Combat",
            width: 9,
            height: 8,
            map: "\
!=======!\
!=======!\
!=======!\
!=======!\
!=======!\
!=======!\
!=======!\
!=======!\
"
        },

        "splashScreen" : { // This special map appears when the player first starts the game
            name: "Splash Screen",
            width: 9,
            height: 9,
			map : "\
MMMMM==!!\
MMMM=====\
M!!=====!\
!===!==!!\
=!=!==!!!\
==|===!MM\
======!!M\
========M\
====!!!MM\
",
			width : 9,
			height : 9,
            features : [

            ]
        }
    },

    //// Game Start Data

    start : [ // This is where you start after making a new game
        {
            map : "town",
            x : 12,
            y : 10,
            gold : 20
        }
    ]
};
