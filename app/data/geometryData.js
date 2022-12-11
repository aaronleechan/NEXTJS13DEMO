export const Geometry_data = {
    BoxGeometry:{
        width: {
            value: 5,
            min: 1,
            max: 30
        },  
        height: {
            value: 5,
            min: 1,
            max: 30
        },
        depth: {
            value: 5,
            min: 1,
            max: 30
        },
        widthSegments: {
            value: 1,
            min: 1,
            max: 10
        },
        heightSegments: {
            value: 1,
            min: 1,
            max: 10
        },
        depthSegments: {
            value: 1,
            min: 1,
            max: 10
        }
    },

    CapsuleGeometry:{
        radius: {
            value: 1,
            min: 1,
            max: 30
        },  
        length: {
            value: 1,
            min: 1,
            max: 30
        },
        capSegments: {
            value: 10,
            min: 1,
            max: 32
        },
        radialSegments: {
            value: 20,
            min: 1,
            max: 64
        }
    }
}