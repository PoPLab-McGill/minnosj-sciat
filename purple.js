define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat10.js'], function(APIConstructor, stiatExtension) {

    var API = new APIConstructor();
    return stiatExtension({
        category: {
            name: 'Purple people', // Will appear in the data.
            title: {
                media: { word: 'Purple people' }, // Name of the category presented in the task.
                css: { color: '#31b404', 'font-size': '2em' }, // Style of the category title.
                height: 7 // Used to position the "Or" in the combined block.
            },
            media: [ // Stimuli content as words
                { word: 'Group' },
                { word: 'Community' },
                { word: 'People' },
                { word: 'Friends' },
                { word: 'Neighbors' },
                { word: 'Team' }
            ],
            // Stimulus css (style)
            css: { color: '#31b404', 'font-size': '3em' }
        },

        attribute1: {
            name: 'Unpleasant', // Attribute label
            title: {
                media: { word: 'Negative' }, // Name of the category presented in the task.
                css: { color: '#31b404', 'font-size': '2em' }, // Style of the category title.
                height: 7 // Used to position the "Or" in the combined block.
            },
            media: [ // Stimuli
                { word: 'Bomb' },
                { word: 'Abuse' },
                { word: 'Sadness' },
                { word: 'Pain' },
                { word: 'Poison' },
                { word: 'Grief' }
            ],
            // Can change color and size of the targets here.
            css: { color: '#31b404', 'font-size': '3em' }
        },

        attribute2: {
            name: 'Pleasant', // Attribute label
            title: {
                media: { word: 'Positive' }, // Name of the category presented in the task.
                css: { color: '#31b404', 'font-size': '2em' }, // Style of the category title.
                height: 7 // Used to position the "Or" in the combined block.
            },
            media: [ // Stimuli
                { word: 'Paradise' },
                { word: 'Pleasure' },
                { word: 'Cheer' },
                { word: 'Wonderful' },
                { word: 'Splendid' },
                { word: 'Love' }
            ],
            // Can change color and size of the targets here.
            css: { color: '#31b404', 'font-size': '3em' }
        },

        base_url: { // Removed as no images are used
        }
    });
});