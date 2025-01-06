define(['pipAPI', 'https://cdn.jsdelivr.net/gh/minnojs/minno-tasks@v1.0.0/stiat/qualtrics/qstiat.js'], function(APIConstructor, stiatExtension) {

    var API = new APIConstructor();

    return stiatExtension({
        // Category 1: Purple people
        category1: {
            name: 'Purple people', // Category name for the data
            title: {
                media: { word: 'Purple people' }, // Name shown in the task
                css: { color: '#31b404', 'font-size': '2em' }, // Styling for category title
                height: 7 // Used to position the "Or" in the combined block
            },
            media: [ // Stimuli words for this category
                { word: 'Group' },
                { word: 'Community' },
                { word: 'People' },
                { word: 'Friends' },
                { word: 'Neighbors' },
                { word: 'Team' }
            ],
            css: { color: '#31b404', 'font-size': '3em' } // Styling for stimuli
        },

        // Attribute 1: Unpleasant (Negative)
        attribute1: {
            name: 'Unpleasant', // Attribute label for the data
            title: {
                media: { word: 'Negative' }, // Label shown for this attribute
                css: { color: '#31b404', 'font-size': '2em' }, // Styling for attribute title
                height: 7 // Used to position the "Or" in the combined block
            },
            media: [ // Stimuli words for this attribute
                { word: 'Bomb' },
                { word: 'Abuse' },
                { word: 'Sadness' },
                { word: 'Pain' },
                { word: 'Poison' },
                { word: 'Grief' }
            ],
            css: { color: '#31b404', 'font-size': '3em' } // Styling for stimuli
        },

        // Attribute 2: Pleasant (Positive)
        attribute2: {
            name: 'Pleasant', // Attribute label for the data
            title: {
                media: { word: 'Positive' }, // Label shown for this attribute
                css: { color: '#31b404', 'font-size': '2em' }, // Styling for attribute title
                height: 7 // Used to position the "Or" in the combined block
            },
            media: [ // Stimuli words for this attribute
                { word: 'Paradise' },
                { word: 'Pleasure' },
                { word: 'Cheer' },
                { word: 'Wonderful' },
                { word: 'Splendid' },
                { word: 'Love' }
            ],
            css: { color: '#31b404', 'font-size': '3em' } // Styling for stimuli
        },

    });

});
