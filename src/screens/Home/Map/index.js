import MapView from "react-native-maps";
import PropTypes from "prop-types";

const Map = ({ style, children, region, onRegionChange, ...props }) => {
  return (
    <MapView
      {...props}
      // mapType="hybrid"
      style={style}
      initialRegion={region}
      region={region}
      animateToRegion={{ region: region, duration: 5 }}
      onRegionChange={onRegionChange}
    >
      {children}
    </MapView>
  );
};

Map.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node,
  region: PropTypes.object,
  onRegionChange: PropTypes.func,
};

export default Map;
