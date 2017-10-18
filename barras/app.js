function run () {

    const appWrapper = document.getElementById('app');
    const champions = [
        {
            name: 'Takuma',
            properties: {
                str: 3,
                agi: 3,
                def: 4,
                dex: 5,
                luk: 4
            }
        },
        {
            name: 'Cidwel',
            properties: {
                str: 3,
                agi: 3,
                def: 4,
                dex: 5,
                luk: 4
            }
        }
    ];

    const selectedChampion = champions.find(champ => champ.name === 'Takuma');

    Object.keys(selectedChampion.properties).forEach(property => {
        const propertyValue = selectedChampion.properties[property];
        const bar = new Bar(property,propertyValue, appWrapper);
        bar.render();
    });


}

run();