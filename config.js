var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5/draft',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#ff70ab',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: '#ff70ab'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Eminönü Meydanı Projesi Basına Yansıyan Görüşler / Press Coverage of the Eminönü Square Project ',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    chapters: [
        {
            id: '1',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/hFpc4hC5/1.png',
            description: 'Eminönü Square under construction in 1940 and planned transformations',
            location: {
               center: [28.97131817837604,41.018050376587205],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '2',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/nMCMpNjM/2.png',
            description: '',
            location: {
              center: [28.97131817837604,41.018050376587205],
                zoom: 15,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '3',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/vCXTNRCX/3.gif',
            description: 'Expropriations for the Public Square of Eminönü.',
            location: {
              center: [28.97131817837604,41.018050376587205],
                zoom: 15,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '4',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/sJpJzBnk/4.png',
            description: '',
            location: {
                 center: [28.97131817837604,41.018050376587205],
                zoom: 17,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '5',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/x8q35FPX/5.png',
            description: '"New Istanbul! When Eminönü Square opens…What losses will the shopkeepers face? What do the shopkeepers say?"',
            location: {
                 center: [28.97131817837604,41.018050376587205],
                zoom: 17,
                pitch: 40,
                bearing: 0,
        
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/C3qfjWx2/6.png',
            description: '',
            location: {
                center: [28.9724524270974,41.01725265168162],
                zoom: 19,
                pitch: 10,
                bearing: 0,
              
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'right',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '7',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/Xr32QD95/7.png',
            description: 'When the expansion of Eminönü Square was discussed, the local shopkeepers and especially the tenants expressed their dissatisfaction. They argued that the improvements they had made—such as adding shelves, cabinets, and display cases—had increased the value of their shops, benefiting the landlords without causing them any loss, and therefore they demanded compensation. It was also noted that they were holding meetings among themselves and planning to send a representative to Ankara to defend their rights.',
            location: {
                center: [28.9724524270974,41.01725265168162],
                zoom: 19,
                pitch: 10,
                bearing: 0,
              
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
          {
            id: '8',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/sJm4fn3Q/8.png',
            description: '',
            location: {
                center: [28.9706173193716,41.0175900298652],
                zoom: 19,
                pitch: 10,
                bearing: 0,
               
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
             mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '9',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/kV23YsXx/9.png',
            description: 'In the Akşam newspaper dated 7 September 1940, it was reported that recent rains had turned Eminönü Square into a pool, despite previous sewer works. The problem was caused by the newly built concrete paving, which was 6 centimeters higher than the drains, preventing water from flowing away. With asphalt now being laid, it was assured that such flooding would no longer occur.',
            location: {
               center: [28.9706173193716,41.0175900298652],
                zoom: 17,
                pitch: 10,
                bearing: 0,
              
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '10',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/gZRNLdCs/10.png',
            description: '',
            location: {
               center: [28.9706173193716,41.0175900298652],
                zoom: 17,
                pitch: 10,
                bearing: 0,
               
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '11',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/JwDsB0cD/11.png',
            description: '',
            location: {
                center: [28.974963057992756,41.01690271971029],
                zoom: 15.7,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
