<template>
    <div>
        <slot v-if="ready"></slot>
    </div>
</template>

<script>
    import Options from '../../../mixins/Options.js';
    // import { extend ,latLng} from 'leaflet';
    import { ImageOverlayRotated } from '../../../mapPlugin/Leaflet.ImageOverlay.Rotated.js';
    // import * as L from 'leaflet';
	import L from 'leaflet';
    const latLng = L.latLng;
    const extend = L.extend;


    export default {
        name: 'LImageOverlayRotated',
        inject: ['lMap'],
        mixins: [Options],
        inheritAttrs: false,
        props: {
            url: {
                type: String,
                default: null,
            },
            bounds: {
                type: [Object, Array]
            },
			defaultZIndex:{
				type: Number
			},
			topLayer: {
				custom: true,
				type: Boolean
			}
        },
        data() {
            return {
                originOptions: {}
            };
        },
        methods: {
			setTopLayer(){
				this.$nextTick(()=>{
					let defaultZIndex = this.defaultZIndex || 9999;
					this.topLayer && this.self.setZIndex(defaultZIndex);
				});
			},
            initLeafletObject() {
                this.selfOptions = extend(this.originOptions, this.options, this.$attrs);
                let bounds = this.bounds;
                let topleft,topright,bottomleft;
                if(Array.isArray(bounds)){
                    topleft = latLng(bounds[0]);
                    topright = latLng(bounds[1]);
                    bottomleft = latLng(bounds[2]);
                }else{
                    topleft = latLng(bounds.topleft);
                    topright = latLng(bounds.topright);
                    bottomleft = latLng(bounds.bottomleft);
                }

                this.self = ImageOverlayRotated(this.url, topleft, topright, bottomleft, this.selfOptions)
                this.initFunction();
				this.setTopLayer();
            },
        },
        mounted() {
            this.initLeafletObject();
        }
    }
</script>
