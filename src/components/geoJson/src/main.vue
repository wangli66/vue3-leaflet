<template>
	<div style="display: none">
		<slot v-if="ready" />
	</div>
</template>

<script>
import Options from "../../../mixins/Options.js";
// import { geoJSON, extend } from 'leaflet';
// import * as L from 'leaflet';
import L from "leaflet";
const geoJSON = L.geoJSON;
const extend = L.extend;

export default {
	name: "LGeoJson",
	inject: ["lMap"],
	mixins: [Options],
	inheritAttrs: false,
	props: {
		geojson: {
			custom: true,
			type: [Array, Object],
			default: () => ({}),
		},
		isFitBounds: {
			custom: true,
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			originOptions: {},
		};
	},
	methods: {
		setGeojson() {
			this.self.clearLayers && this.self.clearLayers();
			this.addData(this.geojson);
			this.$nextTick(() => {
				this.isFitBounds &&
					this.lMap.self.fitBounds(this.self.getBounds());
			});
		},
		setIsFitBounds() {
			this.$nextTick(() => {
				this.isFitBounds &&
					this.lMap.self.fitBounds(this.self.getBounds());
			});
		},
		addData(data) {
			this.self.addData(data);
		},
		resetStyle(layer) {
			this.self.resetStyle(layer);
		},
		setStyle(style) {
			this.self.setStyle(style);
		},
		initLeafletObject() {
			this.selfOptions = extend(
				this.originOptions,
				this.options,
				this.$attrs
			);
			this.self = geoJSON(this.geojson, this.selfOptions);

			this.initFunction();

			this.$nextTick(() => {
				this.isFitBounds &&
					this.lMap.self.fitBounds(this.self.getBounds());
			});
		},
	},
	mounted() {
		this.initLeafletObject();
	},
};
</script>
