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
    },

    CircleGeometry:{
        radius: {
            value: 10,
            min: 1,
            max: 20
        },
        segments: {
            value: 8,
            min: 3,
            max: 128
        },
        thetaStart: {
            value: 0,
            min: 0,
            max: 2 * Math.PI
        },
        thetaLength: {
            value: 0,
            min: 0,
            max: 2 * Math.PI
        }
    },

    ConeGeometry:{
        radius: {
            value: 10,
            min: 0,
            max: 30
        },
        height: {
            value: 10,
            min: 1,
            max: 50
        },
        radialSegments: {
            value: 32,
            min: 0,
            max: 64
        },
        heightSegments: {
            value: 10,
            min: 0,
            max: 64
        },
        thetaStart: {
            value: 0,
            min: 0,
            max: 2 * Math.PI
        },
        thetaLength: {
            value: 0,
            min: 0,
            max: 2 * Math.PI
        }
    },

    CylinderGeometry:{
        radiusTop: {
            value: 5,
            min: 0,
            max: 30
        },
        radiusBottom: {
            value: 5,
            min: 0,
            max: 50
        },
        height: {
            value: 32,
            min: 1,
            max: 50
        },
        radialSegments: {
            value: 10,
            min: 3,
            max: 64
        },
        heightSegments: {
            value: 3,
            min: 1,
            max: 64
        },
        thetaStart: {
            value: 3,
            min: 0,
            max: 2 * Math.PI
        },
        thetaLength: {
            value: 0,
            min: 0,
            max: 2 * Math.PI
        }
    },

    DodecahedronGeometry:{
        radius: {
            value: 10,
            min: 0,
            max: 20
        },
        detail: {
            value: 0,
            min: 0,
            max: 5,
            step: 1
        }
    },
    TorusGeometry:{
        radius: {
            value: 10,
            min: 0,
            max: 20,
            step: 1
        },
        tube: {
            value:0.4,
            min: 0,
            max: 10
        },
        radialSegments: {
            value: 8,
            min: 0,
            max: 30,
            step: 1
        },
        tubularSegments: {
            value: 6,
            min: 0,
            max: 200,
            step: 1
        },
        arc: {
            value: 2 * Math.PI,
            min: 0,
            max: 2 * Math.PI
        }
    },

    TorusKnotGeometry:{
        radius: {
            value: 10,
            min: 0,
            max: 20,
            step: 1
        },
        tube: {

            value: 0.4,
            min: 0,
            max: 10
        },
        tubularSegments: {
            value: 64,
            min: 0,
            max: 200,
            step: 1
        },
        radialSegments: {
            value: 8,
            min: 0,
            max: 30,
            step: 1
        },
        p: {
            value: 2,
            min: 0,
            max: 10,
            step: 1
        },
        q: {
            value: 3,
            min: 0,
            max: 10,
            step: 1
        }
    }

}